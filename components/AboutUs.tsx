'use client'

import { motion } from 'framer-motion'

type AboutSection = {
  title: string
  content: string
  type: 'story' | 'mission' | 'milestone'
  details?: string[]
  points?: Array<{
    title: string
    description: string
  }>
  milestones?: Array<{
    year: string
    event: string
    description: string
  }>
}

const aboutSections: AboutSection[] = [
  {
    type: 'story',
    title: "品牌故事",
    content: "棋趣世外源于一个简单的愿望：让孩子们在快乐中学习成长。我们深信，游戏是最好的老师，棋盘是最好的课堂。",
    details: [
      "创立于2023年",
      "专注儿童教育游戏开发",
      "致力于传统文化创新"
    ]
  },
  {
    title: "我们的使命",
    content: "通过创新的棋类游戏，激发孩子们的创造力和思维能力，让教育回归快乐本质。",
    type: 'mission',
    points: [
      {
        title: "创新教育",
        description: "将传统棋类与现代教育理念相结合"
      },
      {
        title: "快乐成长",
        description: "让孩子在游戏中自然习得知识和能力"
      },
      {
        title: "文化传承",
        description: "以现代方式传递传统文化的智慧"
      }
    ]
  },
  {
    title: "发展历程",
    content: "从2023年到2024年，我们经历了从品牌创立到产品发布，再到教育合作的历程。",
    type: 'milestone',
    milestones: [
      {
        year: "2023",
        event: "品牌创立",
        description: "团队组建，开始产品研发"
      },
      {
        year: "2024",
        event: "产品发布",
        description: "首款多功能棋盘游戏面世"
      },
      {
        year: "2024",
        event: "教育合作",
        description: "与多所学校建立合作关系"
      }
    ]
  }
]

function renderSection(section: AboutSection) {
  switch (section.type) {
    case 'story':
      return section.details && (
        <ul className="space-y-2 mb-6">
          {section.details.map((detail, i) => (
            <li key={i} className="flex items-center text-gray-600">
              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
              {detail}
            </li>
          ))}
        </ul>
      )

    case 'mission':
      return section.points && (
        <div className="grid md:grid-cols-3 gap-6">
          {section.points.map((point, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      )

    case 'milestone':
      return section.milestones && (
        <div className="space-y-6">
          {section.milestones.map((milestone, i) => (
            <div key={i} className="flex items-start">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg mr-4 font-semibold">
                {milestone.year}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{milestone.event}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      )
  }
}

export function AboutUs() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">关于我们</h1>
          <p className="text-xl text-gray-600">用创新点亮教育未来</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
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

              {renderSection(section)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 