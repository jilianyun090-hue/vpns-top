import { defineCollection, z } from 'astro:content';

// ─── Blog 文章 ──────────────────────────────────────────────
const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title:       z.string().max(70),
    description: z.string().max(160),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category:    z.string(),
    tags:        z.array(z.string()).default([]),
    author:      z.string().default('VPNs Top 评测团队'),
    featured:    z.boolean().default(false),
    draft:       z.boolean().default(false),
    heroImage:   z.string().optional(),
    referralId:  z.string().optional(), // 对应 redirects.ts 中的 id
  }),
});

// ─── Brands 品牌库 ──────────────────────────────────────────
const brands = defineCollection({
  type: 'content',
  schema: z.object({
    name:              z.string(),
    logo:              z.string().optional(),
    rating:            z.number().min(0).max(10),
    tagline:           z.string().max(80).optional(),
    nodeTypes:         z.array(z.string()).default([]),   // e.g. ['SS', 'VMess', 'VLESS']
    streamingSupport:  z.array(z.string()).default([]),   // e.g. ['Netflix', 'Disney+']
    protocols:         z.array(z.string()).default([]),
    minPrice:          z.number().optional(),             // 最低月价 (CNY)
    referralId:        z.string().optional(),
    tags:              z.array(z.string()).default([]),
    featured:          z.boolean().default(false),
    updatedDate:       z.coerce.date().optional(),
  }),
});

// ─── Topics 专题 ────────────────────────────────────────────
const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title:          z.string().max(60),
    description:    z.string().max(160),
    featuredImage:  z.string().optional(),
    articleCount:   z.number().default(0),
    relatedBrands:  z.array(z.string()).default([]),   // brand slugs
    tags:           z.array(z.string()).default([]),
    order:          z.number().default(99),
    draft:          z.boolean().default(false),
  }),
});

export const collections = { blog, brands, topics };
