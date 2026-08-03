# 在日华人宝妈母婴省钱信息站

一个面向在日华人宝妈/宝爸的静态信息站，用来整理日本母婴用品的促销节奏、购买渠道和省钱攻略。

## 产品入口

当前站点先做 3 个公开入口，帮助 0-3 岁宝宝家庭判断“今天买、等活动日，还是先跳过”：

- `/deals`：本周值得买。只展示有来源、更新时间和跳过条件的优惠或活动入口。
- `/calendar`：省钱日历。按当天确认、提前准备、先观察拆开楽天、Yahoo!、西松屋、赤ちゃん本舗、PayPay 等节点。
- `/guides`：新手攻略。解释纸尿裤单价、平台积分、药妆店券、保育园和童装尺码等长期判断。

首次分享或亲友试用时，每轮只发一个最匹配入口，并只追问一个关键问题；不要同时丢首页、优惠页、日历和多篇攻略。

## 首次分享流程

准备把站点发给亲友、小红书、朋友圈或群聊前，先按下面顺序走一遍：

1. 用 `docs/first-share-checklist.md` 选定目标用户、唯一入口和唯一追问。
2. 从 `docs/growth-copy-bank.md` 里挑 1 条匹配这个入口的文案，不临时混用多个场景。
3. 私聊或群聊试用时，用 `docs/friend-trial-message.md` 的模板，只发这 1 个入口。
4. 收到回复后，把原话记录到 `docs/friend-feedback-checklist.md`，先判断入口是否选对，再决定是否改页面。
5. 如果根据反馈做了产品优化，同步写入 `docs/optimization-history.md`。

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

## 每周更新节奏

每周维护时先保证用户信任，再补内容厚度，最后处理分享反馈：

1. 优惠：每周至少 3 次复查 `data/deals.json` 中 `dataStatus: "verified"` 的条目，先处理过期、下架、变价或活动结束，再考虑新增优惠。
2. 日历：每周复查 `data/shopping-calendar.json` 的近期活动，把已结束、当天确认、提前准备和先观察分清楚。
3. 攻略：每周至少优化 1-2 篇 `content/guides/*.mdx`，优先补“适合谁、怎么买、注意事项”和到 `/deals`、`/calendar`、相关攻略的内链。
4. 增长反馈：每轮分享后把原话记到 `docs/friend-feedback-checklist.md`，只在 3 条以上相似反馈出现时再改页面结构。
5. 记录：每次实际优化都写入 `docs/optimization-history.md`，说明本次只做了哪一项、如何验证、是否提交和是否推送。

## 月底复盘入口

每跑完一轮 30 天优化后，先复盘再进入下一轮计划，避免一边补内容一边随意改方向：

1. 回看 `docs/optimization-history.md`，按优惠数据、日历、攻略、移动端、SEO、增长准备归类本轮完成项。
2. 对照 `docs/30-day-optimization-plan.md`，标出已经完成、只做了一半和本轮不再适合继续做的任务。
3. 检查 `docs/latest-signals.md`，把仍未核实的优惠或活动线索留在观察区，不直接写进页面。
4. 汇总 `docs/friend-feedback-checklist.md` 中 3 条以上重复反馈，只把高频问题写入下一轮优先级。
5. 下一轮仍保持“每次只做一项”的节奏，先处理会影响用户信任的过期优惠、错误活动和入口误解。

## 内容维护原则

- 改优惠数据前，先复查已有 `dataStatus: "verified"` 的优惠是否仍有效。
- 没有具体商品页、价格、条件和来源的线索，只记录到 `docs/latest-signals.md`，不要写成确定优惠。
- 新增或更新攻略时，优先补“适合谁、怎么买、注意事项”和到相关优惠/日历/攻略的内链。
- 每次产品优化后更新 `docs/optimization-history.md`，说明目标、修改文件、验证方式和提交/推送结果。
- 合规边界以 `docs/compliance-rules.md` 为准：不模拟登录、不绕过反爬、不批量抓取、不夸大优惠。
