interface OrderableBrand {
  slug: string;
  data: {
    name: string;
    rating: number;
  };
}

export const brandPriority = [
  'jilian-yun',
  'guangnian-ti',
  'kunpeng-jiasu',
  'yuntu',
  'shun-yun',
  'dalao-yun',
  'kexinyun',
  'sujie',
  'kuaili',
  'bianyuan-jd',
  'huanqiu-ti',
  'liulian-yun',
  'shandianshu',
  'shenxing-jiasu',
  'yunjiexian',
] as const;

const priorityIndex = new Map<string, number>(
  brandPriority.map((slug, index) => [slug, index])
);

export function compareBrands(a: OrderableBrand, b: OrderableBrand): number {
  const aPriority = priorityIndex.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
  const bPriority = priorityIndex.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

  if (aPriority !== bPriority) return aPriority - bPriority;
  if (a.data.rating !== b.data.rating) return b.data.rating - a.data.rating;
  return a.data.name.localeCompare(b.data.name, 'zh-CN');
}
