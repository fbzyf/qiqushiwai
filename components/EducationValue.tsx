'use client'

import { motion } from 'framer-motion'

const educationValues = [
  {
    title: "思维培养",
    description: "通过游戏培养孩子的逻辑思维和决策能力",
    details: [
      {
        subtitle: "逻辑思维",
        content: "在游戏过程中，孩子需要思考每一步棋的影响，培养逻辑推理能力。",
        examples: ["分析局势", "预判对手", "制定策略"]
      },
      {
        subtitle: "决策能力",
        content: "面对多种选择时，需要权衡利弊，做出最优决策。",
        examples: ["资源分配", "风险评估", "战术选择"]
      }
    ]
  },
  {
    title: "社交互动",
    description: "增进亲子关系，培养社交能力",
    details: [
      {
        subtitle: "亲子互动",
        content: "通过游戏创造优质的亲子时光，增进感情。",
        examples: ["共同游戏", "互相学习", "分享快乐"]
      },
      {
        subtitle: "团队协作",
        content: "在多人游戏中学习与他人合作，培养团队精神。",
        examples: ["角色分工", "沟通协调", "共同目标"]
      }
    ]
  },
  {
    title: "文化传承",
    description: "了解传统文化，培养文化自信",
    details: [
      {
        subtitle: "文化认知",
        content: "通过游戏了解中国传统棋类文化的精髓。",
        examples: ["历史渊源", "文化内涵", "智慧传承"]
      },
      {
        subtitle: "创新发展",
        content: "在传统基础上融入现代元素，创新发展。",
        examples: ["现代诠释", "创意融合", "玩法创新"]
      }
    ]
  },
  {
    title: "公益属性",
    description: "寓教于乐，回馈社会",
    details: [
      {
        subtitle: "教育普及",
        content: "让更多孩子通过游戏获得教育机会。",
        examples: ["公益捐赠", "教育支持", "资源共享"]
      },
      {
        subtitle: "社会责任",
        content: "培养孩子的社会责任感和公益意识。",
        examples: ["环保材质", "公益项目", "社会关怀"]
      }
    ]
  }
]

export function EducationValue() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">教育价值</h1>
          <p className="text-xl text-gray-600">寓教于乐，智趣相伴</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{value.title}</h2>
              <p className="text-gray-600 mb-6">{value.description}</p>

              <div className="space-y-6">
                {value.details.map((detail) => (
                  <div key={detail.subtitle} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-3">{detail.subtitle}</h3>
                    <p className="text-gray-600 mb-4">{detail.content}</p>
                    <div className="flex flex-wrap gap-2">
                      {detail.examples.map((example, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 