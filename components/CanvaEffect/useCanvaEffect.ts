'use client'

import { useEffect, useRef } from 'react'

type Thing = {
  pos: [number, number]
  radius: number
}

export const useCanvasEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cellSize = 30
    const maxSize = 30
    const mousePos: [number, number] = [window.innerWidth * 0.25, window.innerHeight * 0.5]
    let numThingsX: number
    let numThingsY: number
    let things: Thing[] = []

    const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(value, max))
    const dist = (a: [number, number], b: [number, number]) =>
      Math.hypot(a[0] - b[0], a[1] - b[1])

    const drawThing = (thing: Thing) => {
      const { pos, radius } = thing
      ctx.fillStyle = '#000000'
      ctx.beginPath()
      ctx.arc(pos[0], pos[1], radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const loop = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      things.forEach((thing) => {
        const d = dist(mousePos, thing.pos)
        thing.radius = clamp(d * d * 0.0003 - 1, 0, maxSize)
        drawThing(thing)
      })
    }

    const makeThing = (x: number, y: number): Thing => ({
      pos: [x, y],
      radius: 2,
    })

    const makeThings = () => {
      things = []
      for (let i = 0; i < numThingsY; i++) {
        for (let j = 0; j < numThingsX; j++) {
          things.push(makeThing(j * cellSize + cellSize / 2, i * cellSize + cellSize / 2))
        }
      }
    }

    const sizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }

    const handleResize = () => {
      sizeCanvas()
      numThingsX = Math.ceil(window.innerWidth / cellSize)
      numThingsY = Math.ceil(window.innerHeight / cellSize)
      makeThings()
      loop()
    }

    const throttled = (fn: (...args: any[]) => void) => {
      let didRequest = false
      return (...args: any[]) => {
        if (!didRequest) {
          window.requestAnimationFrame(() => {
            fn(...args)
            didRequest = false
          })
          didRequest = true
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos[0] = e.clientX
      mousePos[1] = e.clientY
      loop()
    }

    window.addEventListener('resize', throttled(handleResize))
    window.addEventListener('mousemove', throttled(handleMouseMove))
    handleResize()

    return () => {
      window.removeEventListener('resize', throttled(handleResize))
      window.removeEventListener('mousemove', throttled(handleMouseMove))
    }
  }, [])

  return { canvasRef }
}
