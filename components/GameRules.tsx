'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type GameType = 'chess' | 'checkers' | 'go'

const games = {
  chess: {
    title: "中国象棋",
    description: "源于古代的战争棋类游戏，培养战略思维",
    rules: [
      "红黑双方各执32枚棋子",
      "车马炮象士将的走法各不相同",
      "吃掉对方的将（帅）获胜",
      "讲究布局、进攻与防守"
    ],
    tips: [
      "开局注意控制中路",
      "保护好自己的将帅",
      "合理布置进攻阵型",
      "注意子力的配合使用"
    ]
  },
  checkers: {
    title: "跳棋",
    description: "简单易学的战略游戏，适合全家互动",
    rules: [
      "双方各执一色棋子",
      "只能斜向前进",
      "可以跳吃对方棋子",
      "率先吃光对方或使对方无法移动获胜"
    ],
    tips: [
      "控制中心位置",
      "避免棋子分散",
      "注意防守后方",
      "善用连续跳吃"
    ]
  },
  go: {
    title: "围棋",
    description: "古老的策略游戏，提升空间思维",
    rules: [
      "黑白双方轮流落子",
      "围住空地形成领地",
      "吃掉对方的棋子",
      "以占领地多者为胜"
    ],
    tips: [
      "注意角地的重要性",
      "保持棋子的连接",
      "避免形成死棋",
      "灵活运用劫争"
    ]
  }
}

export function GameRules() {
  const [selectedGame, setSelectedGame] = useState<GameType>('chess')
  const game = games[selectedGame]

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* 主标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">游戏规则</h1>
          <p className="text-xl text-gray-600">轻松掌握，快乐游戏</p>
        </motion.div>

        {/* 游戏选择器 */}
        <div className="flex justify-center gap-4 mb-12">
          {(Object.keys(games) as GameType[]).map((type) => (
            <motion.button
              key={type}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedGame === type
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGame(type)}
            >
              {games[type].title}
            </motion.button>
          ))}
        </div>

        {/* 游戏规则内容 */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            key={selectedGame + "-rules"}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-4">{game.title}</h2>
              <p className="text-xl text-gray-600 mb-6">{game.description}</p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4">基本规则</h3>
              <ul className="space-y-3">
                {game.rules.map((rule, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-gray-600">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            key={selectedGame + "-tips"}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">游戏技巧</h3>
            <ul className="space-y-4">
              {game.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    {index + 1}
                  </span>
                  <span className="text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 