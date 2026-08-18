export interface Category {
  slug:        string;
  label:       string;
  description: string;
  icon:        string; // SVG path or emoji fallback
  color:       string; // Tailwind color class
}

export const categories: Category[] = [
  {
    slug:        'airport',
    label:       '机场评测',
    description: '专业机场服务商全面测评，涵盖速度、稳定性、节点覆盖与客服响应。',
    icon:        '✈️',
    color:       'bg-brand-900 text-brand-300',
  },
  {
    slug:        'vpn',
    label:       'VPN评测',
    description: '商业VPN软件深度测评，聚焦隐私协议、日志政策与企业背景审查。',
    icon:        '🔒',
    color:       'bg-purple-900/50 text-purple-300',
  },
  {
    slug:        'beginner',
    label:       '新手教程',
    description: '从零开始的科学上网入门指南，覆盖客户端配置、常见问题与风险规避。',
    icon:        '📖',
    color:       'bg-emerald-900/50 text-emerald-300',
  },
  {
    slug:        'security',
    label:       '安全指南',
    description: '翻墙安全、数字隐私保护与账号安全实践深度解析。',
    icon:        '🛡️',
    color:       'bg-amber-900/50 text-amber-300',
  },
  {
    slug:        'streaming',
    label:       '流媒体解锁',
    description: 'Netflix、Disney+、YouTube Premium 等解锁实测与技巧汇总。',
    icon:        '📺',
    color:       'bg-red-900/50 text-red-300',
  },
  {
    slug:        'tools',
    label:       '工具资讯',
    description: 'Clash、Sing-box、QuantumultX 等客户端配置技巧与最新资讯。',
    icon:        '⚙️',
    color:       'bg-slate-700/50 text-slate-300',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
