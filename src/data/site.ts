// 站点全局 SEO 配置
export const SITE = {
  domain:      'tuijichang.org',
  url:         'https://tuijichang.org',
  name:        '推机场',
  tagline:     '2026机场推荐与梯子推荐｜翻墙VPN、便宜机场、专线机场排行',
  keywords:    '机场推荐, 梯子推荐, 翻墙VPN, 便宜机场, 专线机场, 机场排行, 机场测评, 节点梯子, VPN推荐, VPN软件推荐, VPN机场推荐, VPN机场, 机场VPN, Clash节点, Clash机场, 小火箭节点, 小火箭机场, 性价比机场, 机场订阅, 机场节点, 稳定机场, 高速机场, IEPL机场, IPLC机场, Clash教程, Shadowrocket教程',
  description: '【2026年更新】提供机场推荐、梯子推荐与翻墙VPN指南，汇总便宜机场、专线机场和机场排行，按线路稳定性、价格、速度、节点质量与流媒体解锁进行对比。',
  lang:        'zh-CN',
  locale:      'zh_CN',
  author:      '推机场评测团队',
  twitterHandle: '',
  // 暂用现有站点图标避免 OG 资源 404；后续应替换为 1200×630 的 PNG/WebP 社交分享图。
  ogImage:     '/favicon.svg',
  themeColor:  '#f7f4ec',
} as const;

export type SiteConfig = typeof SITE;
