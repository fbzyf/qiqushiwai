'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="hero min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-4">
            棋趣世外
            <span className="block text-2xl md:text-3xl lg:text-4xl text-primary mt-4">
              创意无限的多功能棋盘游戏
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-center mb-8 text-gray-600 max-w-3xl mx-auto">
            一盒多玩，激发创意 | 寓教于乐，智趣相伴
          </p>
          <div className="flex justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-lg"
            >
              了解更多
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors text-lg"
            >
              预购产品
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 