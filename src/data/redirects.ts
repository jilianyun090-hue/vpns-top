// 外部链接中转映射表
// 路由：/go/[id] → 跳转至 destination
// 注意：destination 应为完整 URL；此文件不直接暴露于前端 HTML

export interface RedirectEntry {
  id:          string;
  destination: string;
  brand:       string;
  note?:       string;
}

export const redirects: RedirectEntry[] = [
  {
    id:          'example-brand',
    destination: 'https://example.com',   // 替换为真实推广链接
    brand:       '示例品牌',
    note:        '占位示例，请替换为真实链接',
  },
];

export function getRedirectById(id: string): RedirectEntry | undefined {
  return redirects.find((r) => r.id === id);
}
