'use client'

import { motion } from 'framer-motion'

const games = [
  {
    title: '环游世界飞行棋',
    description: '在游戏中探索世界各地的文化和地理知识',
    rules: [
      '玩家轮流掷骰子前进',
      '到达特殊格子时，需要回答相关国家的知识问题',
      '正确回答可以获得奖励，错误会受到惩罚',
      '首先到达终点的玩家获胜'
    ],
    benefits: ['地理知识', '文化认知', '策略思维']
  },
  {
    title: '创意迷宫棋',
    description: '通过迷宫探索培养战略思维能力',
    rules: [
      '玩家需要在有限步数内到达终点',
      '途中收集各种道具和资源',
      '避开陷阱和障碍',
      '可以使用道具改变迷宫布局'
    ],
    benefits: ['空间思维', '资源管理', '路径规划']
  },
  {
    title: '趣味跳棋',
    description: '经典玩法，提升逻辑思维',
    rules: [
      '传统跳棋规则为基础',
      '增加特殊棋子和能力',
      '可以进行多人对战',
      '支持团队合作模式'
    ],
    benefits: ['逻辑推理', '战术思维', '���队协作']
  },
  {
    title: '斗兽棋',
    description: '激发策略思考，培养决策能力',
    rules: [
      '不同动物有不同的能力和走法',
      '需要合理安排动物的位置',
      '通过战术配合吃掉对方的棋子',
      '抓住对方的狮子或老虎获胜'
    ],
    benefits: ['战略规划', '局势判断', '风险评估']
  }
]

export function GameRules() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">游戏玩法</h1>
          <p className="text-xl text-gray-600">四种玩法，激发无限创意</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{game.title}</h2>
                <p className="text-gray-600 mb-6">{game.description}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">游戏规则</h3>
                    <ul className="space-y-2">
                      {game.rules.map((rule, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></span>
                          <span className="text-gray-600">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">培养能力</h3>
                    <div className="flex flex-wrap gap-2">
                      {game.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 