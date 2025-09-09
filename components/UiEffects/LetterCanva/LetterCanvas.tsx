'use client'

import { useState } from 'react'
import { useLetterCanvasEffect } from './useLetterCanvasEffect'
import LetterCanvasView from './LetterCanvasView'

export default function LetterCanvas() {
  const { canvasRef } = useLetterCanvasEffect()
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return <LetterCanvasView canvasRef={canvasRef} onClose={() => setVisible(false)} />
}
