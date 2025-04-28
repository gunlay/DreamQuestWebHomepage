export interface Feature {
  title: string;
  description: string;
}

export interface FeatureSection {
  title: string;
  content: Feature[];
}

export const featureData = {
  intro: {
    title: '梦寻 - 解锁梦境的秘密',
    description: '梦境一直是人类探索未知自我的途径，而"梦寻"旨在通过创新的技术，帮助您解读每一个梦境背后的深层含义。'
  },
  sections: [
    {
      title: '核心功能',
      content: [
        {
          title: '1. 梦境可视化',
          description: '通过先进的AI绘画技术，将您描述的梦境场景转化为视觉艺术作品。我们的系统能够精准捕捉梦境中的细节和氛围，为您呈现出独特的梦境画面，帮助您更直观地回顾和理解梦境。'
        },
        {
          title: '2. 梦境记录与分析',
          description: '通过简洁的操作，记录您的梦境内容，"梦寻"将基于您的输入，结合心理学与梦境学的理论进行分析，帮助您理解梦境中的象征与含义。'
        },
        {
          title: '3. 个性化解梦建议',
          description: '每个人的梦境都是独一无二的。"梦寻"根据您的历史梦境、个人偏好以及心理状态，为您提供精准的解梦建议和深刻的心理洞察。'
        },
        {
          title: '4. 梦境图谱',
          description: '通过对多次梦境记录的统计与分析，生成专属的梦境图谱，揭示您潜在的心理活动、情感波动及内心世界的变化。'
        },
        {
          title: '5. 梦境预测与建议',
          description: '根据您的梦境趋势，结合数据智能，"梦寻"可以为您提供未来可能的心理发展方向和生活建议，帮助您更好地规划未来。'
        }
      ]
    },
    {
      title: '为什么选择梦寻',
      content: [
        {
          title: '智能化解梦',
          description: '结合现代心理学和AI技术，为您的每一个梦境提供科学、精准的解读。'
        },
        {
          title: '深度个性化',
          description: '根据您的情感变化与生活背景，定制独属于您的解梦方案。'
        },
        {
          title: '探索内心世界',
          description: '通过定期的梦境记录与分析，帮助您更好地理解自己的内心世界，发现隐藏的情感需求。'
        }
      ]
    }
  ],
  conclusion: '梦寻，不仅是解梦工具，更是您了解自己、探索未来的伙伴。'
}; 