// canvasData.ts
export type CanvasItem = {
  type: 'text' | 'image'
  value: string // text content or image URL
}

export const canvasData: CanvasItem[] = [
  { type: 'text', value: '🔥' },
  { type: 'text', value: 'Next.js' },
  { type: 'text', value: '💻' },
  { type: 'image', value: '/next.svg' },
  { type: 'image', value: '/vercel.svg' },
  { type: 'text', value: '🚀' },
]
