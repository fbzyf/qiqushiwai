import { Hero } from '@/components/Hero'
import { GameBoard } from '@/components/GameBoard'
import { Features } from '@/components/Features'
import { ProductPreview } from '@/components/ProductPreview'

export default function Home() {
  return (
    <main>
      <Hero />
      <GameBoard />
      <ProductPreview />
      <Features />
    </main>
  )
} 