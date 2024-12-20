'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type GameMode = 'chess' | 'checkers' | 'go'

export function GameBoard() {
  const [currentMode, setCurrentMode] = useState<GameMode>('chess')

  const gameModes = {
    chess: {
      title: '中国象棋',
      description: '传统国粹，培养战略思维'
    },
    checkers: {
      title: '跳棋',
      description: '简单有趣，适合全家互动'
    },
    go: {
      title: '围棋',
      description: '古老智慧，提升思维能力'
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* 游戏模式选择器 */}
      <div className="flex justify-center gap-4 mb-8">
        {(Object.keys(gameModes) as GameMode[]).map((mode) => (
          <motion.button
            key={mode}
            className={`px-6 py-3 rounded-full font-medium transition-colors ${
              currentMode === mode
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCurrentMode(mode)}
          >
            {gameModes[mode].title}
          </motion.button>
        ))}
      </div>

      {/* 游戏棋盘展示 */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="relative aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-4 bg-white rounded-xl shadow-lg overflow-hidden">
            {currentMode === 'chess' && (
              <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      (Math.floor(i / 8) + i % 8) % 2 === 0
                        ? 'bg-primary/10'
                        : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            )}
            {currentMode === 'checkers' && (
              <div className="w-full h-full grid grid-cols-8 grid-rows-8">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`${
                      (Math.floor(i / 8) + i % 8) % 2 === 0
                        ? 'bg-secondary/10'
                        : 'bg-white'
                    }`}
                  />
                ))}
              </div>
            )}
            {currentMode === 'go' && (
              <div className="w-full h-full grid grid-cols-19 grid-rows-19 bg-[#DEB887]">
                {[...Array(361)].map((_, i) => (
                  <div
                    key={i}
                    className="border border-black/30"
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold">{gameModes[currentMode].title}</h3>
          <p className="text-xl text-gray-600">{gameModes[currentMode].description}</p>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>多种游戏模式自由切换</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>高品质材质，经久耐用</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span>附带详细游戏规则说明</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
} 