'use client'

import CanvasView from "./CanvaView"
import { useCanvasEffect } from "./useCanvaEffect"


export default function CanvasEffect() {
  const { canvasRef } = useCanvasEffect()
  return <CanvasView canvasRef={canvasRef} />
}
