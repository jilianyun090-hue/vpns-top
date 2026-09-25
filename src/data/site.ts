// 站点全局 SEO 配置
export const SITE = {
  domain:      'vpns-top.com',
  url:         'https://vpns-top.com',
  name:        'VPNs Top',
  tagline:     '2026年翻墙机场推荐：便宜好用的VPN机场评测与科学上网指南',
  keywords:    '机场推荐, VPN推荐, 梯子, 梯子推荐, 魔法上网, 科学上网机场, 便宜机场, 稳定机场, IEPL专线, IPLC专线, Clash教程, 极连云, 光年梯, 鲲鹏加速',
  description: '【2026最新】专业翻墙机场推荐与VPN测评指南。收录极连云、光年梯、鲲鹏加速等高性价比IEPL/IPLC专线机场，提供梯子排行、魔法科学上网客户端配置与不限时流量包对比，每周动态更新。',
  lang:        'zh-CN',
  locale:      'zh_CN',
  author:      'VPNs Top 评测团队',
  twitterHandle: '',
  ogImage:     '/og-default.png',
  themeColor:  '#0f172a',
} as const;

export type SiteConfig = typeof SITE;
