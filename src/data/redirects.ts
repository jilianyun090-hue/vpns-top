/**
 * redirects.ts — 内部外链中转表
 * 规则：不要在任何 .astro / .md 文件中硬编码推广 URL，
 * 所有外链必须在此注册，页面中只使用 referralId。
 */

export interface RedirectEntry {
  id: string;
  brand: string;
  destination: string;
  description?: string;
}

export const redirects: RedirectEntry[] = [
  // ── 前 20 名推荐机场 ──────────────────────────────────────
  {
    id: 'jilian-yun',
    brand: '极连云',
    destination: 'https://haozevpn.jlyvipaff.com/#/?code=KUKfOY13',
    description: '高性价比 IEPL 专线，8元/月60G，全节点1倍率不限速，优惠码 JLY888',
  },
  {
    id: 'guangnian-ti',
    brand: '光年梯',
    destination: 'https://gnt001.gntvipaff.cc/#/?code=j1ufpE44',
    description: '全线 IPLC 专线，7.42元/月59G，高峰期满速不降速',
  },
  {
    id: 'kunpeng-jiasu',
    brand: '鲲鹏加速',
    destination: 'https://kunpengjiasu.com/#/register?code=QAo8sMhc',
    description: '全球多国原生节点与冷门线路，全站统一 1.0 倍率扣费无暗扣，完美解锁 ChatGPT/Netflix/YouTube',
  },
  {
    id: 'feimao-yun',
    brand: '飞猫云',
    destination: 'https://flycat.flycatvipaff.cc/#/?code=1arEKHqh',
    description: '全 IPLC 专线网络，7元/月50G，2.5Gbps 带宽不限设备',
  },
  {
    id: 'yuntu',
    brand: '云图机场',
    destination: 'https://vip.ytjcok.org/#/register?code=qPHQtI9a',
    description: '金融级专线传输，20元/月150G，原生 IP 无高倍率陷阱，优惠码 yt88',
  },
  {
    id: 'jisu-cloud',
    brand: '极速cloud',
    destination: 'https://bbkk.bktgymdlgw.com/#/register?code=4XOqFpZD',
    description: '三网优化精品线路，8.9元/月100G，高性价比专线机场',
  },
  {
    id: 'jiuyun',
    brand: '九云机场',
    destination: 'https://888.jiuyundl.com/#/register?code=50Qzzzh8',
    description: '海外中转高性价比线路，6元/月150G，VLESS 协议 4K 流畅',
  },
  {
    id: 'kexinyun',
    brand: '可信云',
    destination: 'https://haibing822.kosingaff.com/#/register?code=zcjBlIde',
    description: 'IEPL 专线机场，8元/月60G，不限速不限制设备数量',
  },
  {
    id: 'sujie',
    brand: '速界',
    destination: 'https://calvior.speed-world.cc/#/register?code=r7IOqoY7',
    description: '7.5元/月50G，高速 IPLC/IEPL 专线，提供自研一键客户端',
  },
  {
    id: 'kuaili',
    brand: '快狸',
    destination: 'https://yyo649929.kuailiaff.com/#/register?code=G56QwHto',
    description: '10元/月30G，专属自研客户端，敏感时期高连通率',
  },
  {
    id: 'bianyuan-jd',
    brand: '边缘节点',
    destination: 'https://zoio.edgenovaaff.cc/#/register?code=Oy1wZvzJ',
    description: '9元/月45G，中转加速架构，稳定不限速，支持自研客户端',
  },
  {
    id: 'dengta',
    brand: '灯塔机场',
    destination: 'https://www.dengta12.com/reg?ref=DlYrVig6',
    description: '16.6元/月120G，全平台可用，300Mbps 带宽，支持 24H 退款',
  },
  {
    id: 'guangsu-yun',
    brand: '光速云',
    destination: 'https://kjlq01.gsyvipaff.cc/#/?code=b1OTkTeL',
    description: 'IEPL 专线，8.25元/月59G，无限速无倍率，全流媒体及 AI 解锁',
  },
  {
    id: 'yingzi',
    brand: '影子',
    destination: 'https://www.yingzi01.com/register?code=X7XPN1cS',
    description: '18.8元/月150G，高端 IEPL 跨境专线，极低延迟与极低丢包',
  },
  {
    id: 'bianjie-yun',
    brand: '边界云',
    destination: 'https://www.lvpn.cc/r/6UQDZT',
    description: '12.33元/月50G，IEPL 优化线路，最高 1000Mbps 带宽，3天无理由退款',
  },
  {
    id: 'nice-jiasu',
    brand: 'Nice加速',
    destination: 'https://web.nicecc.cc/#/register?code=7nNS5xdG',
    description: '10元/月40G，IEPL 南北双通道专线，含家宽及纯净 AI 节点',
  },
  {
    id: 'lingmao',
    brand: '灵猫网络',
    destination: 'https://haozevpn.civetaff.com/#/?code=1pboeliL',
    description: '7.08元/月45G，企业级全 IPLC 物理专线，1000Mbps 带宽不限速',
  },
  {
    id: 'xingdao-meng',
    brand: '星岛梦',
    destination: 'https://wuyou202001.xdmvipaff.cc/#/?code=olWCiAhj',
    description: '16元/月100G，IEPL 专线晚高峰不降速，支持 TikTok 跨区',
  },
  {
    id: 'quanqiu-yun',
    brand: '全球云',
    destination: 'https://haozevpn.gcvipaff.cc/#/?code=WRQJc2v4',
    description: '20元/月120G，BGP 智能多线路，IEPL/IPLC 4K/8K 极速出海',
  },
  {
    id: 'shun-yun',
    brand: '瞬云机场',
    destination: 'https://ccc.jichang.best/#/register?code=o4I4kToe',
    description: '8.25元/月59G，ANYCAST 高速节点，直连+专线架构，全节点无倍率',
  },
  {
    id: 'huanyuyun',
    brand: '寰宇云',
    destination: 'https://vip3.huanyuyunbest.com/#/register?code=K6h5VWw2',
    description: '7.4元/月60G，全 IEPL 专线+直连双线路，2.5Gbps 超大带宽',
  },


];

/**
 * 根据 referralId 查找重定向条目
 */
export function getRedirectById(id: string): RedirectEntry | undefined {
  return redirects.find((r) => r.id === id);
}
