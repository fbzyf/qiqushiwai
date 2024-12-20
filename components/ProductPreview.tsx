'use client'

import { motion } from 'framer-motion'
import { ImageCarousel } from './ImageCarousel'

const productDetails = [
  {
    title: '游戏玩法',
    items: [
      '环游世界飞行棋 - 探索世界文化',
      '创意迷宫棋 - 培养战略思维',
      '趣味跳棋 - 锻炼逻辑能力',
      '斗兽棋 - 提升决策能力'
    ]
  },
  {
    title: '产品规格',
    items: [
      '材质：环保木材 + 优质亚克力',
      '尺寸：30cm × 30cm × 3cm',
      '重量：约500g',
      '适用年龄：6岁以上'
    ]
  }
]

export function ProductPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">产品预览</h2>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* 左侧：产品图片 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <ImageCarousel />
          </motion.div>

          {/* 右侧：产品信息 */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-semibold mb-6">创新设计</h3>
              <div className="grid gap-6">
                {productDetails.map((section, index) => (
                  <div key={section.title} className="space-y-4">
                    <h4 className="text-lg font-medium text-primary">{section.title}</h4>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 购买区域 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-primary/5 rounded-2xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-gray-500 mb-1">预售特惠价</p>
                  <p className="text-3xl font-bold text-primary">¥99</p>
                </div>
                <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  限时优惠
                </span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-4 rounded-xl text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                立即预订
              </motion.button>
              <p className="text-center text-gray-500 text-sm mt-4">
                预计发货时间：2024年1月
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
} 