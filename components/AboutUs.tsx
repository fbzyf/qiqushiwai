'use client'

import { motion } from 'framer-motion'

// 基础团队成员类型
type BaseTeamMember = {
  name: string
  role: string
  description: string
}

// 带专长的团队成员类型
type ExpertTeamMember = BaseTeamMember & {
  expertise: string
}

// 基础 Section 类型
type BaseSection = {
  title: string
  content: string
}

// 不同类型的 Section
type StorySection = BaseSection & {
  type: 'story'
  details: string[]
}

type MissionSection = BaseSection & {
  type: 'mission'
  points: Array<{
    title: string
    description: string
  }>
}

type TeamPhotoSection = BaseSection & {
  type: 'teamPhoto'
  teamPhoto: true
}

type ManagementSection = BaseSection & {
  type: 'management'
  members: ExpertTeamMember[]
}

type MarketingSection = BaseSection & {
  type: 'marketing'
  members: BaseTeamMember[]
}

type FinanceSection = BaseSection & {
  type: 'finance'
  members: ExpertTeamMember[]
}

type MilestoneSection = BaseSection & {
  type: 'milestone'
  milestones: Array<{
    year: string
    event: string
    description: string
  }>
}

// 联合类型
type AboutSection = {
  title: string
  content: string
  type: 'story' | 'mission' | 'team' | 'management' | 'marketing' | 'finance' | 'milestone'
  teamPhoto?: boolean
  details?: string[]
  points?: Array<{
    title: string
    description: string
  }>
  members?: BaseTeamMember[] | ExpertTeamMember[]
  milestones?: Array<{
    year: string
    event: string
    description: string
  }>
}

const teamMembers: ExpertTeamMember[] = [
  {
    name: "陈哲宇",
    role: "联合CEO",
    description: "负责项目统筹与协调",
    expertise: "项目执行与决策"
  },
  {
    name: "曹锦灏",
    role: "联合CEO",
    description: "负责各环节反馈与推进",
    expertise: "团队管理"
  },
  {
    name: "许家铭",
    role: "联合COO",
    description: "负责项目管理与监督",
    expertise: "资源调度"
  },
  {
    name: "沈泖",
    role: "联合COO",
    description: "负责制定计划与分配",
    expertise: "项目管理"
  },
  {
    name: "郭纾墨",
    role: "CPO",
    description: "负责产品设计和生产",
    expertise: "产品研发"
  },
  {
    name: "刘哲修",
    role: "CTO",
    description: "负责技术支撑",
    expertise: "技术开发"
  }
]

const marketingTeam: BaseTeamMember[] = [
  {
    name: "朱迦陵",
    role: "市场总监",
    description: "负责项目市场定位"
  },
  {
    name: "陈语熙",
    role: "营销经理",
    description: "负责营销战略"
  },
  {
    name: "袁梓峻",
    role: "运营总监",
    description: "负责运营实施"
  },
  {
    name: "汪子然",
    role: "销售经理",
    description: "负责销售推广"
  },
  {
    name: "任宸纬",
    role: "市场专员",
    description: "负责市场分析"
  }
]

const financeTeam: ExpertTeamMember[] = [
  {
    name: "李昊禹",
    role: "联合CFO",
    description: "负责投融资方案",
    expertise: "财务分析"
  },
  {
    name: "缪德馨",
    role: "联合CFO",
    description: "负责成本控制",
    expertise: "财务管理"
  }
]

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
    type: 'management',
    title: "核心管理团队",
    content: "我们的团队由来自不同领域的专业人才组成，致力于为孩子们创造优质的教育游戏产品。",
    members: teamMembers
  },
  {
    type: 'marketing',
    title: "市场运营团队",
    content: "专业的市场团队确保我们的产品能准确地触达目标用户，并为用户提供最佳的服务体验。",
    members: marketingTeam
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
    title: "我们的团队",
    content: "年轻而充满活力的团队，用创新思维推动教育游戏的发展。",
    type: 'teamPhoto',
    teamPhoto: true
  },
  {
    title: "财务管理团队",
    content: "严谨的财务团队为项目的可持续发展提供有力保障。",
    type: 'finance',
    members: financeTeam
  },
  {
    title: "发展历程",
    content: "从2023年到2024年，我们经历了从品牌创立到产品发布，再到教育合作的历程。",
    type: 'milestone',
    milestones: [
      {
        year: "2023",
        event: "品牌创立",
        description: "团队组建，始品研发"
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

// 完整的 renderSection 函数
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
      return (
        <div className="grid md:grid-cols-3 gap-6">
          {section.points.map((point, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      )

    case 'management':
    case 'finance':
      return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {section.members.map((member: ExpertTeamMember, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.description}</p>
              <p className="text-gray-600 text-sm italic">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      )
    
    case 'marketing':
      return (
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {section.members.map((member: BaseTeamMember, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-xl p-6 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
              <p className="text-primary mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.description}</p>
            </motion.div>
          ))}
        </div>
      )

    case 'milestone':
      return (
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
    
    default:
      return null
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

              {section.teamPhoto && (
                <motion.div 
                  className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                  <img
                    src="/images/team/team-photo.jpg"
                    alt="棋趣世外团队"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20">
                    <p className="text-lg font-medium">棋趣世外团队</p>
                    <p className="text-sm opacity-80">用创新思维，创造教育的无限可能</p>
                  </div>
                </motion.div>
              )}

              {renderSection(section)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 