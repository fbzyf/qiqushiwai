'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  {
    src: '/images/placeholder-1.png',
    alt: '棋盘设计图',
    title: '整体设计'
  },
  {
    src: '/images/placeholder-2.png',
    alt: '飞行棋区域',
    title: '环游世界飞行棋'
  },
  {
    src: '/images/placeholder-3.png',
    alt: '迷宫棋区域',
    title: '创意迷宫棋'
  },
  {
    src: '/images/placeholder-4.png',
    alt: '跳棋区域',
    title: '趣味跳棋'
  }
]

function PlaceholderImage({ title, index }: { title: string; index?: number }) {
  const bgColors = [
    'bg-primary/10 text-primary',
    'bg-secondary/10 text-secondary',
    'bg-accent1/10 text-accent1',
    'bg-accent2/10 text-accent2'
  ]

  const colorClass = index !== undefined ? bgColors[index % bgColors.length] : bgColors[0]

  return (
    <div className={`w-full h-full ${colorClass} flex flex-col items-center justify-center p-4 transition-colors`}>
      <div className="text-center">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm mt-2 opacity-75">示意图</p>
      </div>
    </div>
  )
}

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative w-full aspect-square">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          className="relative w-full h-full rounded-lg overflow-hidden shadow-xl"
        >
          <PlaceholderImage title={images[currentIndex].title} index={currentIndex} />
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
            <h4 className="text-lg font-semibold">{images[currentIndex].title}</h4>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* 导航按钮 */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* 缩略图导航 */}
      <div className="absolute -bottom-20 left-0 right-0 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
              index === currentIndex ? 'border-primary' : 'border-transparent'
            }`}
          >
            <PlaceholderImage title={image.title} index={index} />
          </button>
        ))}
      </div>
    </div>
  )
} 