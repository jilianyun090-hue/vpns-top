export interface NavItem {
  label: string;
  href:  string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: '机场评测',
    href:  '/blog/',
    children: [
      { label: '全部评测与文章', href: '/blog/' },
      { label: '🏆 2026 机场榜单', href: '/compare/' },
      { label: '🥇 极连云评测', href: '/brands/jilian-yun/' },
      { label: '🥈 光年梯评测', href: '/brands/guangnian-ti/' },
      { label: '🥉 鲲鹏加速评测', href: '/brands/kunpeng-jiasu/' },
    ],
  },
  {
    label: '指南与教程',
    href:  '/category/beginner/',
    children: [
      { label: '📖 新手入门指南', href: '/category/beginner/' },
      { label: '⚡ 实用技巧与配置', href: '/category/tips/' },
      { label: '🔧 常见故障排查', href: '/category/troubleshoot/' },
      { label: '⚙️ 客户端使用教程', href: '/category/tools/' },
    ],
  },
  {
    label: '选购与决策',
    href:  '/category/decision/',
    children: [
      { label: '💡 购买与续费决策', href: '/category/decision/' },
      { label: '💰 主备用预算分配', href: '/blog/airport-budget-allocation/' },
      { label: '⚠️ 终身包迷思剖析', href: '/blog/lifetime-airport-myth/' },
      { label: '📊 横向参数对比矩阵', href: '/compare/' },
    ],
  },
  {
    label: '品牌与专题',
    href:  '/brands/',
    children: [
      { label: '🏢 品牌总览库', href: '/brands/' },
      { label: '📚 专题集群大厅', href: '/topics/' },
      { label: '🛡️ 客观测评标准与软文识别', href: '/blog/spot-fake-airport-reviews/' },
      { label: '🚀 博客架构与GEO优化', href: '/blog/avoid-content-duplication/' },
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
    title: '核心栏目',
    links: [
      { label: '全部文章', href: '/blog/' },
      { label: '新手入门指南', href: '/category/beginner/' },
      { label: '实用技巧与设置', href: '/category/tips/' },
      { label: '常见异常排查', href: '/category/troubleshoot/' },
      { label: '购买与续费决策', href: '/category/decision/' },
    ],
  },
  {
    title: '推荐品牌与工具',
    links: [
      { label: '极连云 (IEPL专线)', href: '/brands/jilian-yun/' },
      { label: '光年梯 (IPLC专线)', href: '/brands/guangnian-ti/' },
      { label: '鲲鹏加速 (1.0倍率)', href: '/brands/kunpeng-jiasu/' },
      { label: '机场横向对比大表', href: '/compare/' },
      { label: '专题集群大厅', href: '/topics/' },
    ],
  },
  {
    title: '关于与标准',
    links: [
      { label: '12 维评测标准', href: '/about/' },
      { label: '识别软文广告', href: '/blog/spot-fake-airport-reviews/' },
      { label: 'GEO 与 SEO 规划', href: '/blog/avoid-content-duplication/' },
      { label: '免责与隐私声明', href: '/about/#disclaimer' },
    ],
  },
];
