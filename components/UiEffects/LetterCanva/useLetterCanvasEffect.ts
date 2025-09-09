'use client'

import { useEffect, useRef } from 'react'
import { canvasData } from './CanvaData'

type CanvasItem = {
  type: 'text' | 'image'
  value: string
}

type Character = {
  type: 'text' | 'image'
  value: string
  posX: number
  posY: number
  coef: number
  size: number
  color?: string
  font?: string
  image?: HTMLImageElement
}


const layers = {
  n: 3,
  count: [20, 12, 8],
  coef: [0.1, 0.3, 0.6],
  size: [24, 36, 48],
  color: ['#fff', '#ccc', '#aaa'],
  font: 'Courier'
}

export const useLetterCanvasEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const charactersRef = useRef<Character[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2

    const rnd = {
      btwn: (min: number, max: number) => Math.floor(Math.random() * (max - min) + min),
      choose: <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)]
    }

    const createCharacters = () => {
      const chars: Character[] = []

      for (let i = 0; i < layers.n; i++) {
        for (let j = 0; j < layers.count[i]; j++) {
          const item = rnd.choose(canvasData)

          const base: Character = {
            ...item,
            posX: rnd.btwn(0, canvas.width),
            posY: rnd.btwn(0, canvas.height),
            coef: layers.coef[i],
            size: layers.size[i]
          }

          // Text-specific
          if (item.type === 'text') {
            base.color = layers.color[i]
            base.font = layers.font
          }

          // Image-specific
          if (item.type === 'image') {
            const img = new Image()
            img.src = item.value
            base.image = img
          }

          chars.push(base)
        }
      }

      charactersRef.current = chars
    }

    const drawCharacter = (char: Character) => {
      const x = char.posX + (mouseX - canvas.width / 2) * char.coef
      const y = char.posY + (mouseY - canvas.height / 2) * char.coef

      if (char.type === 'text') {
        ctx.font = `${char.size}px ${char.font ?? 'sans-serif'}`
        ctx.fillStyle = char.color ?? '#fff'
        ctx.fillText(char.value, x, y)
      }

      if (char.type === 'image' && char.image?.complete) {
        ctx.drawImage(char.image, x, y, char.size, char.size)
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      charactersRef.current.forEach(drawCharacter)
    }

    const update = () => {
      render()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      requestAnimationFrame(update)
    }

    const handleResize = () => {
      location.reload()
    }

    createCharacters()
    update()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { canvasRef }
}
