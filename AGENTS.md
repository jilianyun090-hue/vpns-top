# AGENTS.md — 多 Agent 协作与权限隔离规范

## 项目结构概览

本项目采用分层架构，不同 Agent 应在各自职责边界内操作：

```
Layer 1: 数据层   → src/data/*.ts, src/content/**
Layer 2: 组件层   → src/components/*.astro
Layer 3: 页面层   → src/pages/**
Layer 4: 样式层   → src/styles/*, tailwind.config.mjs
Layer 5: 配置层   → astro.config.mjs, tsconfig.json, package.json
```

---

## Agent 角色定义

### 内容 Agent（Content Agent）
**职责**：创建/编辑 `src/content/` 下的 Markdown 文件

**允许操作**：
- 在 `src/content/blog/` 新增 `.md` 文章
- 在 `src/content/brands/` 新增 `.md` 品牌页
- 在 `src/content/topics/` 新增 `.md` 专题页
- 更新 `src/data/redirects.ts`（仅添加新条目）

**禁止操作**：
- 修改 `src/content/config.ts` Schema（需 Schema Agent 审批）
- 修改 Layout 或组件文件
- 直接写入原始推广 URL 到任何 `.astro` 或 `.ts` 文件

---

### UI Agent（UI / Component Agent）
**职责**：修改或新建 `src/components/*.astro` 和 `src/layouts/*.astro`

**允许操作**：
- 修改现有组件的视觉样式（Tailwind 类）
- 新建组件（须符合 TypeScript Props interface 规范）
- 修改 `src/styles/global.css`

**禁止操作**：
- 修改 `src/pages/` 路由逻辑
- 修改 Content Collection Schema
- 安装新 npm 依赖（需架构 Agent 审批）

---

### 架构 Agent（Architecture Agent）
**职责**：顶层架构决策与依赖管理

**允许操作**：
- 修改 `astro.config.mjs`、`tsconfig.json`、`package.json`
- 修改 `src/content/config.ts` Schema
- 修改 `src/data/site.ts`、`src/data/nav.ts` 等全局配置
- 安装/移除 npm 依赖

**禁止操作**：
- 直接写内容（应委托给内容 Agent）
- 添加任何数据库或服务端依赖

---

## 协作规则

1. **单一职责**：每次 Agent 调用只处理一个层次的变更
2. **Schema 优先**：任何内容字段变更，先更新 `config.ts`，再更新示例 Markdown，最后更新使用该字段的组件
3. **构建验证**：每次变更后必须运行 `npx astro check && npm run build` 确认 0 报错
4. **外链管控**：任何新推广链接必须经 `redirects.ts` 注册，Content Agent 只填写 `referralId`
5. **隐私边界**：Agent 不得访问 `.env`、`wrangler.toml` 中的 API 密钥字段

---

## 冲突解决

当两个 Agent 需修改同一文件时，按以下优先级处理：

```
架构 Agent > UI Agent > 内容 Agent
```

冲突发生时，低优先级 Agent 应暂停，等待高优先级 Agent 完成后再继续。
