'use client'

import { motion } from 'framer-motion'

const aboutSections = [
  {
    title: "我们的故事",
    content: "棋趣世外源于一群热爱教育的人们的共同愿景。我们希望通过创新的棋类游戏，让孩子们在快乐中学习成长。",
    type: "story"
  },
  {
    title: "我们的使命",
    content: "致力于通过寓教于乐的方式，培养孩子们的思维能力、社交技巧和创新精神。",
    type: "mission",
    points: [
      {
        title: "教育创新",
        description: "将传统棋类与现代教育理念相结合"
      },
      {
        title: "全面发展",
        description: "注重智力开发与品格培养并重"
      }
    ]
  },
  {
    title: "发展历程",
    type: "milestone",
    milestones: [
      {
        year: "2023",
        event: "品牌创立",
        description: "棋趣世外正式成立"
      },
      {
        year: "2024",
        event: "产品研发",
        description: "推出首款多功能教育棋盘"
      }
    ]
  }
]

export function AboutUs() {
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl text-gray-600">用创新思维点亮教育未来</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {aboutSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">{section.title}</h2>
              
              {section.content && (
                <p className="text-gray-600 mb-6 text-lg">{section.content}</p>
              )}

              {section.points && (
                <div className="grid md:grid-cols-2 gap-6">
                  {section.points.map((point) => (
                    <div key={point.title} className="bg-primary/5 rounded-xl p-6">
                      <h3 className="font-semibold mb-2">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.milestones && (
                <div className="space-y-6">
                  {section.milestones.map((milestone) => (
                    <div key={milestone.year} className="flex gap-4 items-start">
                      <div className="w-20 flex-shrink-0">
                        <span className="text-primary font-bold">{milestone.year}</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{milestone.event}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 