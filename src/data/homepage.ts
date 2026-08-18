// 首页各模块占位展示数据

export const stats = [
  { value: '30+', label: '收录品牌' },
  { value: '12',  label: '评测维度' },
  { value: '每周', label: '数据更新' },
  { value: '100%', label: '独立测速' },
] as const;

export const features = [
  {
    icon:        '📊',
    title:       '深度评测',
    description: '速度、稳定性、延迟、节点覆盖多维度实测，数据来自真实环境。',
    href:        '/blog/',
    cta:         '查看评测',
  },
  {
    icon:        '⚖️',
    title:       '横向对比',
    description: '多品牌参数并列对比矩阵，价格、流量、协议一目了然。',
    href:        '/compare/',
    cta:         '打开对比表',
  },
  {
    icon:        '📖',
    title:       '新手教程',
    description: '从购买到配置、从 Clash 到 Sing-box 的完整中文入门指南。',
    href:        '/topics/tutorial/',
    cta:         '开始阅读',
  },
  {
    icon:        '📺',
    title:       '流媒体实测',
    description: 'Netflix、Disney+、YouTube Premium 解锁状态每周同步更新。',
    href:        '/topics/streaming/',
    cta:         '查看实测',
  },
] as const;

export const heroHighlights = [
  { icon: '⚡', text: '实时测速数据' },
  { icon: '🔍', text: '独立安全审计' },
  { icon: '📺', text: '流媒体解锁实测' },
  { icon: '💬', text: '真实用户反馈' },
] as const;

export const faqs = [
  {
    question: '什么是机场？',
    answer:
      '「机场」是国内对代理服务商的俗称，通常基于 Shadowsocks、V2Ray、Hysteria 等协议，提供境外网络加速服务。与商业 VPN 相比，机场节点更新灵活、速度更快，但合规风险需自行评估。',
  },
  {
    question: '如何选择适合自己的机场？',
    answer:
      '建议优先关注：① 节点质量（延迟 < 100ms、丢包 < 5%）；② 流媒体解锁情况；③ 套餐性价比与月结/年付灵活性；④ 售后客服响应速度。本站评测报告覆盖以上全部维度。',
  },
  {
    question: '机场和 VPN 有什么区别？',
    answer:
      '传统商业 VPN（如 ExpressVPN）采用专有协议，注重隐私合规；机场使用开放协议（SS/VMess 等），速度更快但厂商信誉参差不齐。两者各有适用场景，本站均有详细评测。',
  },
  {
    question: '本站评测数据如何保证客观？',
    answer:
      '本站采用独立测速节点，不接受厂商赞助测评，所有数据来自真实使用环境。推广链接均通过 /go/ 内部路由解耦，不影响评分。',
  },
] as const;
