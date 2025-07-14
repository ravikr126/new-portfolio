'use client'

import dynamic from 'next/dynamic'

// Dynamically import your smart canvas effect component
 const CanvasEffect = dynamic(() => import('@/components/CanvaEffect/CanvaEffects'), {
   ssr: false, // 👈 disables server-side rendering
 })

export default function SecretPage() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <CanvasEffect />
      <h1 className="text-[20vw] leading-[100vh] text-[var(--bg)] m-0 z-10 pointer-events-none">
        Secret
      </h1>
    </div>
  )
}
