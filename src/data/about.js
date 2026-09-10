export const about = {
  title: '履历与节点',
  summary:
    '安佳琪，现就职于中兴通讯文档开发部，担任智能化交付及文档 AI 提效产品经理。',
  thesis: '把 AI 能力落到业务闭环，完成业务提效。',
  index: [
    { id: 'experience', number: '01', label: '职业时间线' },
    { id: 'education', number: '02', label: '学术基础' },
    { id: 'honors', number: '03', label: '关键指标与荣誉' },
  ],
  strengths: [
    {
      id: 'tech-biz',
      number: '01',
      title: '技术 × 业务结合',
      summary:
        '结合业务流程、数据条件与模型能力，判断 AI 的适用范围与落地节奏。',
      evidence:
        '在 AI 文档提效平台中，以 vibe coding 穿刺验证可行性，确定产品从人机协同到无人值守的分阶段演进。',
    },
    {
      id: 'complex-ai',
      number: '02',
      title: '复杂业务 AI 方案设计',
      summary:
        '把高复杂度业务链路拆解为可编排、可协同的 Agent 产品方案。',
      evidence:
        '梳理 47 类场景端到端生产流程并沉淀 SOP；构建父子协同的分层 Agent 架构与反馈驱动的自进化机制，实现复杂文档端到端智能化。',
    },
    {
      id: 'iteration',
      number: '03',
      title: 'AI 产品迭代与评测',
      summary:
        '用端到端评测与数据回流，持续验证并抬升 Agent 能力。',
      evidence:
        '针对不同项目搭建评测体系，结合规则评估、模型评估与 RAG 持续验证效果；建立数据回流机制，持续优化 Agent。',
    },
  ],
  experience: {
    period: '2022.6 — 至今',
    org: '中兴通讯 · 文档开发部',
    role: '智能化交付及文档 AI 提效产品经理',
    description:
      '负责智能化交付与文档 AI 提效相关产品；覆盖需求洞察、方案设计、Agent 架构落地、评测体系建设与数据飞轮迭代，推动复杂 ToB 场景业务提效。',
  },
  education: {
    city: '南京',
    country: '中国',
    school: '南京航空航天大学 · 自动化学院（保研）',
    lines: [
      '2019.9—2022.4 控制理论与控制工程 硕士',
      '2015.9—2019.6 自动化 本科',
    ],
  },
  metrics: [
    {
      id: 'award',
      label: '荣誉',
      value: '创新拼搏先锋',
      note: '2025 年公司级表彰',
      tone: 'secondary',
    },
    {
      id: 'performance',
      label: '绩效',
      value: '4× S 评级',
      note: '连续半年考评 · 部门前 5%',
      tone: 'primary',
    },
    {
      id: 'standing',
      label: '质量奖',
      value: '全国前 2%',
      note: '质量创新与质量改进示范级',
      tone: 'primary',
    },
  ],
}
