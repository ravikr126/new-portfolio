'use client'

import SneakerGrid from '@/components/UiEffects/GridBasedShowcase'
import LetterCanvas from '@/components/UiEffects/LetterCanva/LetterCanvas'
import dynamic from 'next/dynamic'

// Dynamically import your smart canvas effect component
 const CanvasEffect = dynamic(() => import('@/components/UiEffects/CanvaEffect/CanvaEffects'), {
   ssr: false,
 })

export default function SecretPage() {
  return (
    // <div className="relative flex items-center justify-center h-screen">
    //   <CanvasEffect />
    //   <h1 className="text-[20vw] leading-[100vh] text-[#000000] m-0 z-10 pointer-events-none">
    //     Secret
    //   </h1>
    //   <LetterCanvas/>
    // </div>
    <SneakerGrid/>
  )
}
