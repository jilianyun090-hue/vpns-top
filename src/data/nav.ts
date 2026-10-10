export interface NavItem {
  label: string;
  href: string;
  description?: string;
  mark?: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: '评测与排行',
    href: '/reviews/',
    description: '先看结论，再读证据',
    children: [
      {
        label: '2026 机场推荐榜',
        href: '/compare/',
        description: '评分、价格与能力横向比较',
        mark: '榜',
      },
      {
        label: '品牌评测总览',
        href: '/brands/',
        description: '集中浏览全部收录服务商',
        mark: '库',
      },
      {
        label: '机场深度评测',
        href: '/category/airport/',
        description: '线路、稳定性与解锁实测',
        mark: '测',
      },
      {
        label: '稳定机场推荐',
        href: '/blog/stable-airport-2026/',
        description: '按长期可用性筛选服务',
        mark: '荐',
      },
    ],
  },
  {
    label: '入门与使用',
    href: '/guides/',
    description: '从第一次连接到日常维护',
    children: [
      {
        label: '新手入门',
        href: '/category/beginner/',
        description: '概念、购买与首次连接',
        mark: '入',
      },
      {
        label: '配置教程',
        href: '/category/tutorial/',
        description: '订阅导入、分流与 TUN',
        mark: '配',
      },
      {
        label: '客户端工具',
        href: '/category/tools/',
        description: 'Clash、Shadowrocket 等',
        mark: '器',
      },
      {
        label: 'Clash 机场入门',
        href: '/blog/clash-airport-beginner-checklist-2026/',
        description: '订阅兼容与购买前核对',
        mark: '核',
      },
      {
        label: '故障排查',
        href: '/category/troubleshoot/',
        description: '连接、DNS 与应用异常',
        mark: '诊',
      },
    ],
  },
  {
    label: '选购与场景',
    href: '/decisions/',
    description: '按预算和用途做选择',
    children: [
      {
        label: '购买与续费',
        href: '/category/decision/',
        description: '套餐、周期与风险判断',
        mark: '择',
      },
      {
        label: '公益机场指南',
        href: '/blog/public-benefit-airport-guide-2026/',
        description: '免费节点的成本与风险',
        mark: '益',
      },
      {
        label: '主备预算分配',
        href: '/blog/airport-budget-allocation/',
        description: '降低单一服务中断风险',
        mark: '算',
      },
      {
        label: '流媒体与 AI',
        href: '/category/streaming/',
        description: 'Netflix、Disney+、ChatGPT',
        mark: '影',
      },
      {
        label: '安全与隐私',
        href: '/category/security/',
        description: '账号、日志与使用边界',
        mark: '安',
      },
    ],
  },
  {
    label: '专题与方法',
    href: '/knowledge/',
    description: '系统知识与评测方法',
    children: [
      {
        label: '专题集群',
        href: '/topics/',
        description: '按主题连续深入阅读',
        mark: '集',
      },
      {
        label: '常见问题',
        href: '/category/faq/',
        description: '高频疑问集中解答',
        mark: '问',
      },
      {
        label: '评测方法论',
        href: '/about/#criteria',
        description: '排序评分说明与复测建议',
        mark: '尺',
      },
      {
        label: '机场术语词典',
        href: '/blog/airport-terms-dictionary/',
        description: '线路、协议与节点概念速查',
        mark: '典',
      },
    ],
  },
  {
    label: 'AI 工具',
    href: '/ai-tools/',
    description: '第三方 AI 模型中转服务',
    children: [
      {
        label: 'AI 节点指南',
        href: '/category/ai/',
        description: 'ChatGPT、Claude 与 API 场景',
        mark: '智',
      },
      {
        label: '黑喵',
        href: '/go/heimao-ai/',
        description: '访问黑喵 AI 中转站',
        mark: '喵',
      },
      {
        label: '快AI',
        href: '/go/kuai-ai/',
        description: '访问快AI中转服务',
        mark: '快',
      },
      {
        label: '科技狐',
        href: '/go/keji-hu/',
        description: '访问科技狐 AI 中转站',
        mark: '狐',
      },
    ],
  },
  { label: '关于本站', href: '/about/' },
];

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: '开始探索',
    links: [
      { label: '评测与排行', href: '/reviews/' },
      { label: '入门与使用', href: '/guides/' },
      { label: '选购与场景', href: '/decisions/' },
      { label: '专题与方法', href: '/knowledge/' },
    ],
  },
  {
    title: '学习与使用',
    links: [
      { label: '新手入门', href: '/category/beginner/' },
      { label: '配置教程', href: '/category/tutorial/' },
      { label: '客户端工具', href: '/category/tools/' },
      { label: 'AI 工具导航', href: '/ai-tools/' },
    ],
  },
  {
    title: '决策与标准',
    links: [
      { label: '购买与续费决策', href: '/category/decision/' },
      { label: '流媒体与 AI', href: '/category/streaming/' },
      { label: '12 维评测标准', href: '/about/#criteria' },
      { label: '免责与隐私声明', href: '/about/#disclaimer' },
    ],
  },
];
