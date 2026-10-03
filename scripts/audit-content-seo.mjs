import fs from 'node:fs';
import path from 'node:path';

const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
const allowedCategories = new Set([
  'airport', 'beginner', 'tips', 'troubleshoot', 'decision', 'topics',
  'vpn', 'security', 'streaming', 'ai', 'tools', 'tutorial', 'faq',
]);

const focusKeywords = [
  '机场推荐', '梯子推荐', '节点梯子', 'Clash节点', 'Clash机场', '小火箭节点', '小火箭机场',
  '稳定机场', '高速机场', '便宜机场', 'IPLC机场', '专线机场', '机场订阅', '机场节点',
];

function parseFrontmatter(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return { data: {}, body: source };

  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const entry = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!entry) continue;
    const [, key, rawValue] = entry;
    const value = rawValue.trim();
    if (value.startsWith('[')) {
      data[key] = [...value.matchAll(/["']([^"']+)["']/g)].map((item) => item[1]);
    } else {
      data[key] = value.replace(/^['"]|['"]$/g, '');
    }
  }

  return { data, body: source.slice(match[0].length) };
}

function visibleLength(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/[#>*_`|\-]/g, '')
    .replace(/\s/g, '')
    .length;
}

const files = fs.readdirSync(contentDir).filter((file) => file.endsWith('.md')).sort();
const articles = files.map((file) => {
  const source = fs.readFileSync(path.join(contentDir, file), 'utf8');
  const { data, body } = parseFrontmatter(source);
  return {
    file,
    data,
    body,
    chars: visibleLength(body),
    h2: (body.match(/^##\s+/gm) ?? []).length,
    internalLinks: (body.match(/\]\(\/(?:blog|category|brands|topics)\//g) ?? []).length,
  };
});

const errors = [];
const warnings = [];
const titleOwners = new Map();
const descriptionOwners = new Map();

for (const article of articles) {
  const { file, data, chars, h2, internalLinks } = article;
  for (const field of ['title', 'description', 'pubDate', 'category']) {
    if (!data[field]) errors.push(`${file}: 缺少 frontmatter 字段 ${field}`);
  }

  const title = data.title ?? '';
  const description = data.description ?? '';
  const tags = Array.isArray(data.tags) ? data.tags : [];

  if (title.length > 70) errors.push(`${file}: title 超过 70 字符 (${title.length})`);
  if (description.length > 160) errors.push(`${file}: description 超过 160 字符 (${description.length})`);
  if (description.length > 0 && description.length < 45) warnings.push(`${file}: description 偏短 (${description.length})`);
  if (!allowedCategories.has(data.category)) errors.push(`${file}: 未注册分类 ${data.category}`);
  if (chars < 1800) errors.push(`${file}: 正文可见字符不足 1800 (${chars})`);
  if (h2 < 3) warnings.push(`${file}: 二级标题不足 3 个 (${h2})`);
  if (internalLinks < 2) warnings.push(`${file}: 站内链接不足 2 个 (${internalLinks})`);
  if (tags.length < 3) warnings.push(`${file}: tags 少于 3 个 (${tags.length})`);
  if (!data.updatedDate) warnings.push(`${file}: 缺少 updatedDate`);

  if (title) {
    if (titleOwners.has(title)) errors.push(`${file}: title 与 ${titleOwners.get(title)} 重复`);
    else titleOwners.set(title, file);
  }
  if (description) {
    if (descriptionOwners.has(description)) errors.push(`${file}: description 与 ${descriptionOwners.get(description)} 重复`);
    else descriptionOwners.set(description, file);
  }
}

const allText = articles.map((article) => `${article.data.title ?? ''}\n${(article.data.tags ?? []).join(' ')}\n${article.body}`).join('\n');
const keywordCoverage = focusKeywords.map((keyword) => ({
  keyword,
  articles: articles.filter((article) => `${article.data.title ?? ''} ${(article.data.tags ?? []).join(' ')} ${article.body}`.includes(keyword)).length,
  mentions: allText.split(keyword).length - 1,
}));

console.log(`内容 SEO 审核：${articles.length} 篇文章`);
console.log(`错误 ${errors.length} 项，提醒 ${warnings.length} 项`);
if (errors.length) console.log(`\n[错误]\n${errors.map((item) => `- ${item}`).join('\n')}`);
if (warnings.length) console.log(`\n[提醒]\n${warnings.map((item) => `- ${item}`).join('\n')}`);
console.log('\n[核心词覆盖]');
for (const item of keywordCoverage) {
  console.log(`- ${item.keyword}: ${item.articles} 篇文章 / ${item.mentions} 次自然出现`);
}

if (errors.length) process.exitCode = 1;
