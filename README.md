# 在日华人宝妈母婴省钱信息站

一个面向在日华人宝妈/宝爸的静态信息站，用来整理日本母婴用品的促销节奏、购买渠道和省钱攻略。

## 产品入口结构

当前站点先用首页首屏的 6 类状态入口帮用户选路，再用 3 个公开功能页承接判断。不要让新用户自己在首页、优惠页、日历和多篇攻略之间来回猜。

首页首屏入口负责回答“我现在属于哪一种情况”：

| 用户当下状态 | 首页入口 | 承接页面 |
| --- | --- | --- |
| 刚开始准备 | 先确定第一批用品 | `/guides/newborn-shopping-list` |
| 准备下单 | 先判断今天买不买 | `/deals` |
| 等活动日 | 先排最近活动节点 | `/calendar` |
| 看不懂规则 | 先补一个判断字段 | `/guides/diaper-price-line` |
| 准备入园 | 先按清单和场景买 | `/guides/nursery-entry-budget-items` |
| 只想了解本站 | 先看三块内容分工 | `/` |

进入具体页面后，再按下面 3 个公开功能页判断“今天买、等活动日，还是先跳过”：

- `/deals`：本周值得买。只展示有来源、更新时间和跳过条件的优惠或活动入口。
- `/calendar`：省钱日历。按当天确认、提前准备、先观察拆开楽天、Yahoo!、西松屋、赤ちゃん本舗、PayPay 等节点。
- `/guides`：新手攻略。解释纸尿裤单价、平台积分、药妆店券、保育园和童装尺码等长期判断。

首次分享或亲友试用时，每轮只发一个最匹配入口，并只追问一个关键问题；不要同时丢首页、优惠页、日历和多篇攻略。

## 入口选择顺序

如果不知道本轮该发哪个页面，先按用户当下状态选唯一入口，再去匹配文案和追问：

| 用户当下状态 | 优先入口 | 不优先发什么 | 本轮只验证 |
| --- | --- | --- | --- |
| 刚开始准备，不知道第一批买什么 | `/guides/newborn-shopping-list` | 不先发 `/deals` | 是否能收窄第一批清单 |
| 纸尿裤、湿巾或洗护快用完 | `/deals` | 不先发全站首页 | 是否能判断今天买、等下一场或跳过 |
| 不急着买，想等活动日 | `/calendar` | 不先发单篇优惠 | 是否能记住下次回来核对的日期 |
| 看不懂积分、单片价或支付返点 | `/guides/diaper-price-line` 或 `/guides/rakuten-5-0-mama-shopping` | 不先发活动标题 | 是否能看懂一个具体判断字段 |
| 准备保育园或童装换季 | `/guides/nursery-entry-budget-items` | 不先发泛促销入口 | 是否少买一种可能买早或买错的东西 |
| 只是介绍 Mama Save JP 是什么 | `/` | 不同时追加多个深链接 | 是否 30 秒内看懂适合谁、先点哪里 |

选完入口后，再到 `docs/growth-copy-bank.md` 选择同一场景的文案；反馈记录统一写进 `docs/friend-feedback-checklist.md`，不要因为单条反馈马上改导航或页面结构。

## 首次分享流程

准备把站点发给亲友、小红书、朋友圈或群聊前，先按下面顺序走一遍：

1. 用 `docs/first-share-checklist.md` 选定目标用户、唯一入口和唯一追问。
2. 从 `docs/growth-copy-bank.md` 里挑 1 条匹配这个入口的文案，不临时混用多个场景。
3. 私聊或群聊试用时，用 `docs/friend-trial-message.md` 的模板，只发这 1 个入口。
4. 收到回复后，把原话记录到 `docs/friend-feedback-checklist.md`，先判断入口是否选对，再决定是否改页面。
5. 如果根据反馈做了产品优化，同步写入 `docs/optimization-history.md`。

## 入口结构维护检查

只要调整首页首屏入口、README 的入口选择顺序或亲友试用话术，就同步检查下面 4 处是否仍使用同一套 6 类状态：

- `pages/index.tsx` 的第一次打开入口。
- `README.md` 的产品入口结构和入口选择顺序。
- `docs/first-share-checklist.md` 的单入口发布决策。
- `docs/friend-trial-message.md` 的先选一个入口和首页转接话术。

如果只是补某一篇攻略或某一条优惠，不要顺手改入口体系；等 `docs/friend-feedback-checklist.md` 里累计到 3 条以上相似入口反馈后，再回头调整结构。

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

## 日常自动化分工

每天的整点优化和消息整理分开处理，避免一次运行同时改结构、改优惠和改增长文案。

| 任务类型 | 主要时间 | 本次只做什么 | 不顺手做什么 |
| --- | --- | --- | --- |
| 产品优化 | 00:00-07:00 | 按当前小时选择内容结构、优惠数据、日历、攻略、SEO、代码质量、移动端或增长准备中的一项 | 不借机同时重写多页、扩充多篇攻略或批量改数据 |
| 消息整理 | 07:30、16:30 | 低频人工核验少量官方活动页、商品页或可靠来源，并把确定结果写到合适位置 | 不模拟登录、不批量抓取、不把线索写成确定优惠 |
| 优惠数据维护 | 触碰 `data/deals.json` 前 | 先复查所有 `dataStatus: "verified"` 优惠是否仍有效，再更新本次目标条目 | 不跳过旧优惠复查直接新增 active 优惠 |
| 分享反馈整理 | 收到亲友回复后 | 记录原话、判断入口是否选对、决定下一轮唯一入口 | 不因单条反馈马上改首页或导航 |

如果一次运行不是 07:30 或 16:30 消息整理任务，默认优先选择不依赖实时价格和库存的改进；除非本次明确要改 `data/deals.json`，否则不要为了顺手“看一眼优惠”触发数据复查。

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
