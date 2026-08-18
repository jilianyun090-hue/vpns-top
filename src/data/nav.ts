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
      { label: '全部评测', href: '/blog/' },
      { label: '热门机场', href: '/category/airport/' },
      { label: '新手推荐', href: '/category/beginner/' },
    ],
  },
  {
    label: '品牌库',
    href:  '/brands/',
    children: [
      { label: '品牌总览', href: '/brands/' },
      { label: '横向对比', href: '/compare/' },
    ],
  },
  {
    label: '专题',
    href:  '/topics/',
    children: [
      { label: '专题大厅', href: '/topics/' },
      { label: '流媒体解锁', href: '/topics/streaming/' },
      { label: '翻墙教程', href: '/topics/tutorial/' },
    ],
  },
  { label: '关于', href: '/about/' },
];

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: '评测内容',
    links: [
      { label: '全部文章', href: '/blog/' },
      { label: '机场评测', href: '/category/airport/' },
      { label: '新手教程', href: '/category/beginner/' },
      { label: '安全指南', href: '/category/security/' },
    ],
  },
  {
    title: '品牌与工具',
    links: [
      { label: '品牌库', href: '/brands/' },
      { label: '对比表格', href: '/compare/' },
      { label: '专题大厅', href: '/topics/' },
    ],
  },
  {
    title: '关于本站',
    links: [
      { label: '评测标准', href: '/about/' },
      { label: '免责声明', href: '/about/#disclaimer' },
      { label: '隐私政策', href: '/about/#privacy' },
    ],
  },
];
