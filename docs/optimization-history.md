# 优化记录

## 2026-06-19

- 时间：2026-06-19 02:03 JST
- 当前优化方向：02:00 省钱日历。
- 目标：为省钱日历补充统一的“下单前确认”检查项，让活动解释从“适合买什么”进一步落到用户下单前的判断动作。
- 修改文件：
  - `data/shopping-calendar.json`
  - `lib/types.ts`
  - `components/CalendarCard.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 解析 `data/shopping-calendar.json` 和 `data/deals.json`。
  - `node` 检查 8 个日历活动均包含至少 3 条 `checkBeforeBuying`，并检查日历活动 `id` 无重复。
  - 尝试执行 `npm run build`。
- 结果：8 个省钱日历活动均新增“下单前确认”清单，日历卡片会在“适合买什么”和“注意什么”之间展示具体检查动作，帮助新手宝妈确认价格、报名、积分上限、运费、库存和尺码风险。
- 构建结果：`npm run build` 未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充省钱日历下单检查项”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 03:00 攻略内容方向可把日历中的楽天买回、药妆店优惠券或西松屋活动拆成更详细攻略，并从日历卡片内部链接过去。

- 时间：2026-06-19 01:03 JST
- 当前优化方向：01:00 优惠数据。
- 目标：补齐优惠数据里的“不适合买”决策信息，让宝妈不只看到好处，也能判断哪些情况下应该跳过。
- 修改文件：
  - `data/deals.json`
  - `lib/types.ts`
  - `components/DealCard.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 解析 `data/deals.json` 和 `data/shopping-calendar.json`。
  - `node` 检查 8 条优惠均包含 `whyWorthBuying`、`skipWhen`、`condition`、`targetUser`，并检查优惠 `id` 无重复。
  - 尝试执行 `npm run build`。
- 结果：8 条优惠和攻略型推荐均新增 `skipWhen` 字段，优惠卡片新增“什么情况不适合买”区块，提升购买决策的谨慎度和可信度。
- 构建结果：`npm run build` 未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补齐优惠避坑决策信息”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续扩充优惠数据时，保持每条都同时写清“为什么值得买”和“什么情况不适合买”；下一个 02:00 方向可检查省钱日历活动解释是否同样包含避坑提醒。

- 时间：2026-06-19 00:03 JST
- 当前优化方向：00:00 内容结构。
- 目标：优化攻略入口的信息结构，让新手宝妈打开攻略列表后能按“先买什么、再怎么买、最后看平台规则”的顺序阅读。
- 修改文件：
  - `pages/guides/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 解析 `data/deals.json` 和 `data/shopping-calendar.json`。
  - `node` 检查新手路线中的 3 个攻略 slug 均有对应 MDX 文件，并已出现在 `pages/guides/index.tsx`。
  - 尝试执行 `npm run build`。
- 结果：攻略列表页新增“新手宝妈必读路线”，串联新生儿准备清单、尿不湿买法和楽天 5/0 日平台攻略，降低新用户不知道先读哪篇的理解成本。
- 构建结果：`npm run build` 未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“优化攻略新手阅读路线”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优化首页或攻略详情页的内部链接，把新手路线从首页和相关攻略中进一步串起来。

## 2026-06-18

- 目标：整理 2026-06-18 16:30 前后最新日本母婴省钱消息，优先官方来源，避免把未确认价格写成确定优惠。
- 信息来源：
  - 楽天市場 お買い物マラソン官方活动页：确认报名期 2026/6/18 10:00 起、积分期 2026/6/20 20:00 - 6/26 01:59、单店铺 1,000 日元（税込、送料別、券后）计入、最多 10 倍、特典积分上限 7,000 点、2026/7/15 左右付与、2026/8/31 23:59 期限。
  - 楽天 5 と 0 のつく日官方页：确认每次開催日需要エントリー、特典点数不反映在获予定ポイント、原则上可与ショップ買いまわり等其他活动分别计点。
  - 西松屋官方首页：确认チラシ / WEB限定ミミよりコレクション 2026/6/18 - 6/30、月間奉仕品 2026/6/18 - 7/14；未确认具体单品价格。
- 修改文件：
  - `lib/types.ts`
  - `components/CalendarCard.tsx`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：官方页面人工核对；`node` 校验 `data/shopping-calendar.json` 和 `data/deals.json` 可解析；尝试 `npm run build`。
- 结果：已把楽天 6 月下旬买回活动和西松屋 6/18 起活动更新到省钱日历；西松屋未确认单品价格仅记录为信号，未新增商品优惠。
- 构建结果：未通过环境验证，当前工作区没有 `node_modules` / `package-lock.json`，`npm run build` 报 `next: command not found`；未安装依赖，避免提交依赖目录或缓存。
- 是否提交：是，提交 `3e293b4`，说明为“整理6月下旬母婴省钱活动”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续观察 Amazon Japan、赤ちゃん本舗、Yahoo!ショッピング和药妆店官方活动页，只有价格、条件和适用人群明确时再更新 `data/deals.json`。

- 目标：建立产品短期/中期目标和未来 30 天优化方案。
- 修改文件：
  - `docs/product-goals.md`
  - `docs/30-day-optimization-plan.md`
  - `docs/optimization-history.md`
  - `docs/latest-signals.md`
- 验证方式：文档结构检查。
- 结果：为后续每日定点优化和每日两次消息整理建立执行依据。
- 是否提交：待提交。
- 是否推送：待推送。
- 下一步：创建定时自动化并开始按计划执行。
