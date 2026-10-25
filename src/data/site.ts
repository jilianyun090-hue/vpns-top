// 站点全局 SEO 配置
export const SITE = {
  domain:      'vpns-top.com',
  url:         'https://vpns-top.com',
  name:        'VPNs Top',
  tagline:     '机场推荐 2026年10月｜机场测评排行、梯子推荐与VPN机场对比',
  keywords:    '机场推荐, 机场测评, 机场排行, 梯子推荐, 节点梯子, VPN推荐, VPN软件推荐, VPN机场推荐, VPN机场, 机场VPN, Clash节点, Clash机场, 小火箭节点, 小火箭机场, 性价比机场, 机场订阅, 机场节点, 稳定机场, 高速机场, 便宜机场, IEPL机场, IPLC机场, 专线机场, Clash教程, Shadowrocket教程',
  description: '【2026年10月更新】提供机场推荐、机场测评排行、梯子推荐与VPN机场对比，整理稳定机场、机场节点、机场订阅、线路速度、价格、Clash/小火箭兼容与流媒体解锁信息。',
  lang:        'zh-CN',
  locale:      'zh_CN',
  author:      'VPNs Top 评测团队',
  twitterHandle: '',
  // 暂用现有站点图标避免 OG 资源 404；后续应替换为 1200×630 的 PNG/WebP 社交分享图。
  ogImage:     '/favicon.svg',
  themeColor:  '#f7f4ec',
} as const;

export type SiteConfig = typeof SITE;
