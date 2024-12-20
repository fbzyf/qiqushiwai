'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: "培养思维",
    description: "锻炼逻辑思维和决策能力",
    delay: 0
  },
  {
    title: "促进社交",
    description: "增进亲子互动和朋友交流",
    delay: 0.2
  },
  {
    title: "传承文化",
    description: "了解传统棋类文化精髓",
    delay: 0.4
  },
  {
    title: "公益属性",
    description: "收益将用于支持教育公益",
    delay: 0.6
  }
]

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">教育价值</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
            >
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 