// 首页各模块占位展示数据

export const stats = [
  { value: '30+', label: '收录品牌' },
  { value: '12',  label: '评测维度' },
  { value: '每周', label: '数据更新' },
  { value: '100%', label: '独立测速' },
] as const;

export const homeSections = [
  {
    icon:        '评',
    title:       '评测与排行',
    description: '查看年度榜单、品牌资料库、机场深度评测与稳定性推荐。',
    href:        '/reviews/',
    cta:         '进入评测栏目',
  },
  {
    icon:        '入',
    title:       '入门与使用',
    description: '从首次购买、订阅导入到客户端配置和故障排查。',
    href:        '/guides/',
    cta:         '进入使用指南',
  },
  {
    icon:        '择',
    title:       '选购与场景',
    description: '围绕预算、续费、流媒体、AI 与安全场景做理性选择。',
    href:        '/decisions/',
    cta:         '进入选购指南',
  },
  {
    icon:        '集',
    title:       '专题与方法',
    description: '阅读专题知识集群、常见问题与本站独立评测方法。',
    href:        '/knowledge/',
    cta:         '进入知识专题',
  },
  {
    icon:        '智',
    title:       'AI 工具',
    description: '集中查看本站整理的第三方 AI 模型中转服务入口。',
    href:        '/ai-tools/',
    cta:         '查看 AI 工具',
  },
] as const;

export const heroHighlights = [
  { text: '年度榜单与品牌资料' },
  { text: '新手配置与故障排查' },
  { text: '预算、流媒体与安全决策' },
  { text: '专题知识与评测方法' },
] as const;
