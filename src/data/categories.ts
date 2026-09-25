export interface Category {
  slug:        string;
  label:       string;
  description: string;
  icon:        string;
  color:       string;
}

export const categories: Category[] = [
  {
    slug:        'airport',
    label:       '机场评测',
    description: '专业机场服务商 12 维度全面测评，涵盖极连云、光年梯、鲲鹏加速等爆款机场。',
    icon:        '✈️',
    color:       'bg-brand-900 text-brand-300',
  },
  {
    slug:        'beginner',
    label:       '新手入门',
    description: '从零开始的科学上网入门指南，覆盖注册连接、试用项目与初学者避坑。',
    icon:        '📖',
    color:       'bg-emerald-900/50 text-emerald-300',
  },
  {
    slug:        'tips',
    label:       '实用技巧',
    description: '节点优选、局域网共享、DNS 配置与延迟优化等高阶进阶技巧。',
    icon:        '⚡',
    color:       'bg-sky-900/50 text-sky-300',
  },
  {
    slug:        'troubleshoot',
    label:       '常见异常',
    description: '订阅无效、节点超时、部分应用无法联网等疑难故障快速排查手册。',
    icon:        '🔧',
    color:       'bg-amber-900/50 text-amber-300',
  },
  {
    slug:        'decision',
    label:       '购买与续费',
    description: '主备用机场预算分配、终身包避坑、续费优惠与限量套餐决策指南。',
    icon:        '💡',
    color:       'bg-purple-900/50 text-purple-300',
  },
  {
    slug:        'topics',
    label:       '专题与观点',
    description: '行业方法论、GEO 与 SEO 策划、客观测评标准与软文识别指南。',
    icon:        '📊',
    color:       'bg-indigo-900/50 text-indigo-300',
  },
  {
    slug:        'vpn',
    label:       'VPN评测',
    description: '商业 VPN 软件与自建节点深度测评，聚焦隐私协议与日志审计。',
    icon:        '🔒',
    color:       'bg-slate-800 text-slate-300',
  },
  {
    slug:        'security',
    label:       '安全指南',
    description: '翻墙安全、数字隐私保护与账号安全实践深度解析。',
    icon:        '🛡️',
    color:       'bg-red-900/50 text-red-300',
  },
  {
    slug:        'streaming',
    label:       '流媒体解锁',
    description: 'Netflix、Disney+、YouTube Premium 及 ChatGPT AI 解锁实测。',
    icon:        '📺',
    color:       'bg-pink-900/50 text-pink-300',
  },
  {
    slug:        'tools',
    label:       '工具教程',
    description: 'Clash Verge、Sing-box、Shadowrocket 等客户端配置技巧。',
    icon:        '⚙️',
    color:       'bg-slate-700/50 text-slate-300',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
