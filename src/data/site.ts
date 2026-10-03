// 站点全局 SEO 配置
export const SITE = {
  domain:      'vpns-top.com',
  url:         'https://vpns-top.com',
  name:        'VPNs Top',
  tagline:     '2026年机场推荐：高性价比VPN机场、稳定梯子排行与节点评测',
  keywords:    '机场推荐, VPN机场, 机场VPN, 性价比机场, 梯子推荐, 梯子排行, 机场节点, 稳定机场, 翻墙机场, VPN软件推荐, IEPL专线, IPLC专线, Clash教程',
  description: '【2026更新】聚焦机场推荐、VPN机场与稳定梯子评测，对比高性价比机场的IEPL/IPLC线路、机场节点、速度、流媒体解锁与价格，并提供Clash等客户端使用教程。',
  lang:        'zh-CN',
  locale:      'zh_CN',
  author:      'VPNs Top 评测团队',
  twitterHandle: '',
  // 暂用现有站点图标避免 OG 资源 404；后续应替换为 1200×630 的 PNG/WebP 社交分享图。
  ogImage:     '/favicon.svg',
  themeColor:  '#0f172a',
} as const;

export type SiteConfig = typeof SITE;
