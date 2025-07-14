import { RefObject } from 'react'

type Props = {
  canvasRef: RefObject<HTMLCanvasElement | null>
  onClose?: () => void
}

export default function LetterCanvasView({ canvasRef, onClose }: Props) {
  return (
    <>
      <canvas ref={canvasRef} />

      <div className="absolute-center">
       

        <span id="close" onClick={onClose}>
          ×
        </span>
      </div>

      <style jsx>{`
        canvas {
          position: fixed;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: -1;
        }

        .absolute-center {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.5s;
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        h3, h5 {
          padding: 10px 30px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 0 5px 0 black;
          font-family: 'Open Sans', sans-serif;
          text-align: center;
          letter-spacing: 3px;
        }

        #close {
          position: absolute;
          top: -15px;
          left: -30px;
          color: white;
          font-size: 30px;
          text-shadow: 0 0 5px black;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
