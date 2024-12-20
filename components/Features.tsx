'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: "培养思维",
    description: "通过棋类游戏培养逻辑思维和战略决策能力",
    icon: "🧠",
    delay: 0
  },
  {
    title: "快乐学习",
    description: "寓教于乐，让孩子在游戏中自然习得知识",
    icon: "🌟",
    delay: 0.1
  },
  {
    title: "亲子互动",
    description: "增进家庭关系，创造优质亲子时光",
    icon: "👨‍👩‍👧‍👦",
    delay: 0.2
  },
  {
    title: "文化传承",
    description: "传统棋类文化与现代教育理念的创新结合",
    icon: "🏛️",
    delay: 0.3
  },
  {
    title: "社交能力",
    description: "培养团队协作和社交沟通能力",
    icon: "🤝",
    delay: 0.4
  },
  {
    title: "创新思维",
    description: "激发创造力，培养发散性思维",
    icon: "💡",
    delay: 0.5
  }
]

export function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <motion.div
          key={feature.title}
          className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: feature.delay }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
} 