# CLAUDE.md — Claude 维护边界与代码准则

## 项目概述

`vpns-top.com` 是一个基于 **Astro 4 (SSG) + TypeScript + Tailwind CSS** 构建的中文机场/VPN评测聚合站，
面向 Cloudflare Pages 部署。

---

## 技术栈

| 层级 | 技术 |
|------|------|
| 框架 | Astro 4.x (`output: 'static'`) |
| 样式 | Tailwind CSS v3 + `@tailwindcss/typography` |
| 语言 | TypeScript strict |
| 内容 | Astro Content Collections + Zod Schema |
| 部署 | Cloudflare Pages |

---

## 严禁操作（Hard Constraints）

1. **不安装**重型 UI 库（MUI、AntD、Chakra、shadcn 等）
2. **不安装**后端框架、数据库或状态管理插件（Redux、Zustand、Prisma 等）
3. **不修改** `node_modules/`、`dist/`、`.astro/`、`.git/`
4. **不读取**或扫描任何凭证文件（.env、secrets 等）
5. **不硬编码**真实推广链接至页面 HTML，必须经由 `src/data/redirects.ts` + `/go/[id]` 路由解耦

---

## 内容原则

- 第一阶段仅生成示例数据（`example-*`），不写大量文章或具体推广内容
- 所有外链均通过 `/go/[id]` 中转，与评分数据完全分离
- 免责声明必须出现在每篇文章和品牌页的明显位置

---

## 类型规范

- 所有 `.ts` / `.astro` 文件须通过 `npx astro check` 0 报错
- Props interface 必须显式声明，禁止使用 `any`
- Content Collections 字段变更须同步更新 `src/content/config.ts` 的 Zod Schema

---

## 文件职责边界

| 路径 | 职责 |
|------|------|
| `src/data/site.ts` | 站点全局元配置，改名/域名等在此修改 |
| `src/data/redirects.ts` | 所有外链映射，严禁在其他文件出现原始推广 URL |
| `src/content/config.ts` | Schema 定义，字段增减须同步示例 markdown |
| `src/styles/global.css` | 全局样式，组件级样式请用 Tailwind 类，禁止内联 style |

---

## 构建验证

```bash
npx astro check   # 类型检查，目标：0 error
npm run build     # 构建，目标：0 error
npm run preview   # 本地预览
```

---

## 变更日志

| 日期 | 版本 | 变更 |
|------|------|------|
| 2025-08-18 | v0.1.0 | 初始底座搭建完成 |
