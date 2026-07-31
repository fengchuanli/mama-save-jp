# 在日华人宝妈母婴省钱信息站

一个面向在日华人宝妈/宝爸的静态信息站，用来整理日本母婴用品的促销节奏、购买渠道和省钱攻略。

## 产品入口

当前站点先做 3 个公开入口，帮助 0-3 岁宝宝家庭判断“今天买、等活动日，还是先跳过”：

- `/deals`：本周值得买。只展示有来源、更新时间和跳过条件的优惠或活动入口。
- `/calendar`：省钱日历。按当天确认、提前准备、先观察拆开楽天、Yahoo!、西松屋、赤ちゃん本舗、PayPay 等节点。
- `/guides`：新手攻略。解释纸尿裤单价、平台积分、药妆店券、保育园和童装尺码等长期判断。

首次分享或亲友试用时，每轮只发一个最匹配入口，并只追问一个关键问题；不要同时丢首页、优惠页、日历和多篇攻略。

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

## 内容维护原则

- 改优惠数据前，先复查已有 `dataStatus: "verified"` 的优惠是否仍有效。
- 没有具体商品页、价格、条件和来源的线索，只记录到 `docs/latest-signals.md`，不要写成确定优惠。
- 新增或更新攻略时，优先补“适合谁、怎么买、注意事项”和到相关优惠/日历/攻略的内链。
- 每次产品优化后更新 `docs/optimization-history.md`，说明目标、修改文件、验证方式和提交/推送结果。
- 合规边界以 `docs/compliance-rules.md` 为准：不模拟登录、不绕过反爬、不批量抓取、不夸大优惠。
