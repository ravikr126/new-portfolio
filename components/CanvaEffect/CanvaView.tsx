import { RefObject } from 'react'

type Props = {
  canvasRef: RefObject<HTMLCanvasElement | null>  // <- allow null here
}

export default function CanvasView({ canvasRef }: Props) {
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    />
  )
}
