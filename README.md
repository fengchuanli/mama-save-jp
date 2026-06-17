# 在日华人宝妈母婴省钱信息站

一个面向在日华人宝妈/宝爸的静态 MVP 网站，用来整理日本母婴用品的促销节奏、购买渠道和省钱攻略。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- 静态 JSON 数据
- 本地 MDX 攻略内容

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## GitHub Pages

推送到 `main` 后会通过 GitHub Actions 导出静态站点并发布到：

```text
https://fengchuanli.github.io/mama-save-jp/
```

如果第一次发布未生效，请在 GitHub 仓库的 `Settings -> Pages` 中确认 Source 选择 `GitHub Actions`。

## 数据位置

- `data/deals.json`
- `data/shopping-calendar.json`
- `content/guides/*.mdx`
