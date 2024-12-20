import { Hero } from '@/components/Hero'
import { GameBoard } from '@/components/GameBoard'
import { Features } from '@/components/Features'
import { ProductPreview } from '@/components/ProductPreview'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 英雄区域 - 展示主要标语和号召性用语 */}
      <Hero />

      {/* 游戏棋盘展示区 */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            创意无限的棋盘游戏
          </h2>
          <GameBoard />
        </div>
      </section>

      {/* 产品特色展示 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            独特的游戏特色
          </h2>
          <Features />
        </div>
      </section>

      {/* 产品预览 */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            产品展示
          </h2>
          <ProductPreview />
        </div>
      </section>

      {/* 教育价值 */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            寓教于乐，智趣相伴
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们的棋盘游戏不仅能激发孩子们的创造力和思维能力，
            更能在游戏过程中培养专注力、逻辑思维和社交能力。
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">培养思维能力</h3>
              <p className="text-gray-600">通过游戏培养逻辑思维和策略规划能力</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">增进亲子互动</h3>
              <p className="text-gray-600">创造优质的亲子时光，增进家庭关系</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">传承文化智慧</h3>
              <p className="text-gray-600">在游戏中感受传统文化的魅力</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 