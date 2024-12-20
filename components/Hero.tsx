'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="relative min-h-[80vh] flex items-center bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左侧文本内容 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              棋趣世外
            </h1>
            <p className="text-2xl text-primary mb-4">
              创意无限的多功能棋盘游戏
            </p>
            <p className="text-xl text-gray-600 mb-8">
              一盒多玩，激发创意 | 寓教于乐，智趣相伴
            </p>
            <div className="flex gap-4">
              <Link 
                href="/games"
                className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                了解更多
              </Link>
              <Link
                href="/contact"
                className="border-2 border-primary text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/5 transition-colors"
              >
                预购产品
              </Link>
            </div>
          </motion.div>

          {/* 右侧图片 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform rotate-6" />
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl">
              <img
                src="/images/hero-product.jpg"
                alt="棋趣世外多功能棋盘"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </motion.div>
        </div>

        {/* 底部装饰 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  )
} 