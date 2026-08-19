// 站点全局配置
export const SITE = {
  domain:      'vpns-top.com',
  url:         'https://vpns-top.com',
  name:        'VPNs Top',
  tagline:     '机场 · VPN 评测聚合站',
  description: '专业中文机场与VPN评测平台。独立测速、安全审计、流媒体解锁实测，帮助用户做出最优选择。',
  lang:        'zh-CN',
  locale:      'zh_CN',
  author:      'VPNs Top 评测团队',
  twitterHandle: '',
  ogImage:     '/og-default.png',
  themeColor:  '#0f172a',
} as const;

export type SiteConfig = typeof SITE;
