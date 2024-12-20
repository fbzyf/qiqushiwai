'use client'

import { motion } from 'framer-motion'

const games = [
  {
    title: "环游世界飞行棋",
    description: "探索世界各地文化，在游戏中学习地理知识",
    delay: 0
  },
  {
    title: "创意迷宫棋",
    description: "结合迷宫探索，培养战略思维能力",
    delay: 0.2
  },
  {
    title: "趣味跳棋",
    description: "经典玩法，提升逻辑思维",
    delay: 0.4
  },
  {
    title: "斗兽棋",
    description: "激发策略思考，培养决策能力",
    delay: 0.6
  }
]

export function GameBoard() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">游戏玩法</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {games.map((game, index) => (
            <motion.div 
              key={game.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: game.delay }}
            >
              <h3 className="text-xl font-semibold mb-4">{game.title}</h3>
              <p className="text-gray-600">{game.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 