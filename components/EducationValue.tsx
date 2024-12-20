'use client'

import { motion } from 'framer-motion'

const educationValues = [
  {
    title: "思维发展",
    content: [
      "培养逻辑思维能力",
      "提升战略规划能力",
      "锻炼空间想象力",
      "增强记忆力和专注力"
    ],
    icon: "🧠",
    delay: 0
  },
  {
    title: "情商培养",
    content: [
      "学会面对胜负",
      "培养耐心和毅力",
      "提升抗挫折能力",
      "建立自信心"
    ],
    icon: "❤️",
    delay: 0.1
  },
  {
    title: "社交能力",
    content: [
      "促进亲子互动",
      "培养团队合作",
      "提升沟通能力",
      "学会尊重对手"
    ],
    icon: "🤝",
    delay: 0.2
  }
]

const researchData = [
  {
    percentage: 85,
    description: "的孩子在使用我们的产品后，逻辑思维能力有显著提升"
  },
  {
    percentage: 90,
    description: "的家长认为产品对孩子的学习和发展有积极影响"
  },
  {
    percentage: 95,
    description: "的教育工作者推荐将棋类游戏融入儿童教育"
  }
]

export function EducationValue() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">教育价值</h1>
          <p className="text-xl text-gray-600">让游戏成为成长的阶梯</p>
        </motion.div>

        {/* 教育价值卡片 */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {educationValues.map((value) => (
            <motion.div
              key={value.title}
              className="bg-white rounded-xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: value.delay }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-6">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <ul className="space-y-3">
                {value.content.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 研究数据 */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">研究数据支持</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {researchData.map((data, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-primary mb-4">
                  {data.percentage}%
                </div>
                <p className="text-gray-600">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 