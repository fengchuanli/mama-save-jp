# 优化记录

## 2026-07-05 省钱日历卡片移动端操作区优化

- 时间：2026-07-05 06:03 JST
- 当前优化方向：06:00 移动端体验。
- 目标：`/calendar` 日历卡片详情区的“展开详情”和“去官方页面”在手机端仍是较小胶囊按钮，和近期 `/deals` 优惠卡的手机端操作区不一致；本次只优化日历卡操作区，提升手机端点击面积和状态一致性，不触碰优惠数据。
- 修改文件：
  - `components/CalendarCard.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查 CalendarCard 移动端操作区的最小点击高度、详情按钮整宽和官方链接整宽样式。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：日历卡片的详情展开按钮和官方页面链接共用更稳定的操作样式，新增 `min-h-10`、居中对齐和手机端 `w-full`，桌面端仍保持自适应宽度；官方页面链接在详情展开后与更新时间保持间距。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；CalendarCard 移动端操作区静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化省钱日历移动端操作区”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可用真实浏览器检查 `/calendar` 在 320-390px 宽度下详情展开后的按钮位置、来源区间距和长活动标题换行。

## 2026-07-05 楽天积分入门攻略完善

- 时间：2026-07-05 03:02 JST
- 当前优化方向：03:00 攻略内容。
- 目标：`content/guides/rakuten-points-basics.mdx` 仍是 6 分钟基础说明，适合解释“别只看积分倍率”，但缺少新手在楽天買いまわり期间可直接照抄的 3-5 店刚需清单、实付/积分记录模板和活动当天复核顺序；本次只补强这篇攻略，不触碰优惠数据。
- 修改文件：
  - `content/guides/rakuten-points-basics.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查楽天积分攻略阅读时长、更新时间、3-5 店清单、货架前记录模板、活动当天复核顺序和新增检查项。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：楽天积分入门攻略从 6 分钟扩展为 7 分钟阅读，`updatedAt` 更新为 `2026-07-05`；新增 3-5 店刚需清单、货架前实付/积分记录模板、反面例子和活动当天复核顺序，并在下单前检查清单中加入“是否能说清必须本轮购买”的判断。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；楽天积分攻略静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善楽天积分入门攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可检查楽天积分入门与 `rakuten-5-0-mama-shopping.mdx`、`diaper-price-line.mdx` 的内链承接；网络恢复后优先推送本地领先提交。

## 2026-07-05 首页攻略问题入口优化

- 时间：2026-07-05 00:02 JST
- 当前优化方向：00:00 内容结构。
- 目标：首页已有“新手攻略”横向卡组，但用户如果从首页带着具体问题进入，仍需要点到 `/guides` 后再寻找“第一批买什么、快要补货、活动看不懂、准备入园换季”等入口；本次只把这些问题入口前置到首页攻略区，连接到攻略列表已有锚点。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查首页四个攻略问题锚点和新版区块标题。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：首页“新手攻略”区块新增“先按今天的问题找”，提供“第一批买什么 / 快要补货 / 活动看不懂 / 准备入园换季”四个入口，分别直达 `/guides` 已有问题分组；原三篇新手文章卡组保留并改为“新手必读路线”。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；首页攻略问题入口静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化首页攻略问题入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可继续检查首页首屏三个状态入口是否需要同样直达攻略问题锚点；网络恢复后优先推送本地领先提交。

## 2026-07-04 07:33 最新母婴省钱消息整理

- 时间：2026-07-04 07:33 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：按自动化要求先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠，再只同步官方或可靠来源能支撑的信息；重点确认 7/4 当天楽天买回是否仍可作为准备/开始提醒，以及 Yahoo! 5のつく日是否仍未到エントリー期。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍显示エントリー期間 2026/7/2 10:00 - 7/11 01:59、ポイントアップ期間 2026/7/4 20:00 - 7/11 01:59、1ショップ1,000円(税込、券后、送料别)以上和7,000ポイント上限；`rakuten-marathon-diaper-wipes` 保持 `active`，但明确 7/4 20:00 前只做エントリー和清单，20:00 后再核对商品页。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，下一场为 2026/7/5 00:00-23:59，当前仍在エントリー期間外；页面继续说明 2026/7/1 起ヤフーショッピング商品券利用分不再作为付与対象。`yahoo-5day-diaper-box` 保持 `expired`/等 7/5 当天确认。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，活动时间、Online Shop 限定、対象カテゴリ和 31 日月份 30 日规则仍可读；`akachan-3-8-baby-category` 保持 `active`。
  - 西松屋チラシ・セール入口：官方チラシ・セール页、ミミコレ页和月間奉仕品入口均可访问；チラシ/ミミコレ 2026/7/2-7/14、月間奉仕品到 7/14 仍可确认。`nishimatsuya-monthly-nursery-items` 保持 `active`，继续标注需到官方线上商品页或门店确认具体价格、库存和送料。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19-7/31、200 日元以上支付、本人确认、抽选返还、対象店舗入口和上限规则仍可读；`paypay-scratch-drugstore-baby-care` 保持 `active`，继续标注不是确定折扣。
  - 楽天姓名贴搜索页：搜索结果仍可访问并显示保育园姓名贴相关商品、价格、送料無料和発送目安；`rakuten-name-sticker-marathon` 保持 `active`，但提示 7/4 20:00 后再计算返点和配送周期。
- 新增/更新信息：
  - Yahoo!ショッピング お得ガイド仍能确认 7/10-7/12 超PayPay祭预告，包括対象ストア合计 5,000-19,999 日元 +4%、20,000 日元以上 +7%、抽选、期间限定セール和対象者限定クーポン等说明；继续只放日历，不写入商品级优惠。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、Yahoo!お得ガイド、アカチャンホンポ、西松屋チラシ・セール/ミミコレ/月間奉仕品、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `node` 静态检查 6 条 verified 优惠状态、更新时间和重点日历字段。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 优惠均已复查；5 条保持 `active`，1 条 Yahoo! 5のつく日保持 `expired` 等 7/5，当天前不写成可参加。未发现页面失效、商品集合入口失效或需要改为 `unavailable` 的情况；未新增商品级优惠，因为本轮没有确认到同时具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；`node` 静态检查确认 6 条 verified 均更新至 2026-07-04，5 条 active、Yahoo 5 日 1 条 expired，重点日历更新时间已同步；`git diff --check` 通过；`npm run sitemap` 生成 14 个 URL；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查7月4日母婴优惠状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：7/4 20:00 后复查楽天买回具体纸尿裤/湿巾 SKU；7/5 当天复查 Yahoo! 5のつく日エントリー；7/10 前继续等待 Yahoo! 超PayPay祭正式対象ストア/商品确认。

## 2026-07-04 首页省钱节点移动端优化

- 时间：2026-07-04 06:02 JST
- 当前优化方向：06:00 移动端体验。
- 目标：首页“最近要关注的省钱节点”已经按当天确认、提前准备、先观察三类解释下一步，但手机端会把三组行动说明和日历卡纵向堆叠，占用较长首屏；本次只优化该区块的手机端浏览方式，让用户能横向扫读三类节点，桌面端仍保持三列。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查首页省钱节点区手机横向滑动、卡片宽度和桌面三列结构。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：首页省钱节点区标题行在手机端改为上下排列，避免“查看全部”挤压标题；节点卡组在手机端改为横向滑动卡片，加入 `no-scrollbar`、`snap-x`、`w-[82vw]` 和 `max-w-[22rem]`，桌面端继续使用三列网格。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；首页省钱节点移动端静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化首页省钱节点移动端”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可用真实浏览器检查首页各横向卡组在 320-390px 宽度下的滑动露出、卡片高度和“查看全部”入口位置；网络恢复后优先推送本地领先提交。

## 2026-07-04 支付返点攻略完善

- 时间：2026-07-04 03:03 JST
- 当前优化方向：03:00 攻略内容。
- 目标：`content/guides/payment-rebates-mama-shopping.mdx` 仍是 5 分钟基础说明，只提醒支付返点不是直接降价，但缺少“当场折扣、确定积分、抽选/后日券”三类返还的保守估值方法，也缺少药妆店货架前快速计算和不同购物场景判断；本次把它扩展成更适合新手宝妈在 PayPay、楽天ペイ等活动前快速判断的攻略。
- 修改文件：
  - `content/guides/payment-rebates-mama-shopping.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查支付返点攻略阅读时长、更新时间、返点类型分层、货架前算法、按场景判断和检查清单扩展。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：支付返点攻略从 5 分钟扩展为 7 分钟阅读，`updatedAt` 更新为 `2026-07-04`；新增常见返点类型的保守估值、货架前三行算法、临时补货/周末集中补货/线上箱购/大型活动等场景判断，并补充结账页当场折扣和现金预算检查项。`public/sitemap.xml` 同步更新首页、攻略列表和该攻略详情页的 `lastmod`。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；支付返点攻略静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善支付返点攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可继续补强 `rakuten-points-basics.mdx` 的买回清单模板，或检查支付返点攻略与省钱日历 PayPay 活动入口的内链锚文本；网络恢复后优先推送本地领先提交。

## 2026-07-04 攻略列表问题直达入口优化

- 时间：2026-07-04 00:03 JST
- 当前优化方向：00:00 内容结构。
- 目标：`/guides` 已经有新手路线和按问题分组，但用户如果只想解决“第一批买什么、快要补货、活动看不懂、准备入园换季”等具体场景，仍需要向下扫读多个分组标题；本次只在攻略列表顶部新增按当前问题直达的锚点入口，减少首次找攻略成本。
- 修改文件：
  - `pages/guides/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略列表问题直达入口、4 个锚点和已有分组锚点结构。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：攻略列表在“新手宝妈必读路线”和详细分组之间新增“按今天的问题直达”区域，覆盖“第一批买什么 / 快要补货 / 活动看不懂 / 准备入园换季”四种入口，点击后直达已有问题分组；没有新增状态或复杂交互。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；攻略列表问题直达入口静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化攻略列表问题直达入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可继续检查首页“新手攻略”货架是否也需要更明确地指向这四类问题；网络恢复后优先推送本地领先提交。

## 2026-07-03 07:32 最新母婴省钱消息整理

- 时间：2026-07-03 07:32 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：按自动化要求先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠，再只同步官方或可靠来源能支撑的信息；重点确认楽天买回是否仍是上一轮结束状态。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页已切换到新一轮，显示エントリー期間 2026/7/2 10:00 - 7/11 01:59、ポイントアップ期間 2026/7/4 20:00 - 7/11 01:59、1ショップ1,000円(税込)以上和7,000ポイント上限；`rakuten-marathon-diaper-wipes` 从上一轮 `expired` 改为 `active`，但明确 7/4 20:00 前只做エントリー和清单。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，下一场为 2026/7/5 00:00-23:59，当前仍在エントリー期間外；`yahoo-5day-diaper-box` 保持 `expired`/等 7/5 当天确认，避免写成现在可参加。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，活动时间、Online Shop 限定、対象カテゴリ和 31 日月份 30 日规则仍可读；`akachan-3-8-baby-category` 保持 `active`。
  - 西松屋チラシ・セール入口：官方首页、ミミコレ页和月間奉仕品入口均可访问；ミミコレ 2026/7/2-7/14、月間奉仕品到 7/14 仍可确认。`nishimatsuya-monthly-nursery-items` 保持 `active`，继续标注需到官方线上商品页或门店确认具体价格、库存和送料。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19-7/31、200 日元以上支付、本人确认、抽选返还、対象店舗入口和上限规则仍可读；`paypay-scratch-drugstore-baby-care` 保持 `active`，继续标注不是确定折扣。
  - 楽天姓名贴搜索页：搜索结果仍可访问并显示保育园姓名贴相关商品、价格、送料無料和発送目安；因楽天新一轮买回已可事前エントリー，`rakuten-name-sticker-marathon` 从上一轮 `expired` 改为 `active`，但提示 7/4 20:00 后再计算返点和配送周期。
- 新增/更新信息：
  - Yahoo!ショッピング 5のつく日页继续告知 7/10 起超PayPay祭；お得ガイド仍提醒日程和内容可能变更。本站继续只放日历提醒，不新增商品级优惠。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、Yahoo!お得ガイド、アカチャンホンポ、西松屋首页/ミミコレ/月間奉仕品、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `node` 静态检查 6 条 verified 优惠状态、更新时间、楽天/Yahoo 日历字段。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 优惠均已复查；楽天两条从上一轮结束状态改为新一轮买回准备状态，2 条保持 `expired`/等待活动日，3 条保持 `active`。未发现页面失效或商品下架；未新增商品级优惠，因为本轮没有确认到同时具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；`node` 静态检查确认 6 条 verified 均更新至 2026-07-03，楽天两条 active、Yahoo 5 日 expired、其余 3 条 active，重点日历更新时间已同步；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查7月3日母婴优惠状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：7/4 20:00 后复查楽天买回具体纸尿裤/湿巾 SKU；7/5 当天复查 Yahoo! 5のつく日エントリー；7/10 前继续等待 Yahoo! 超PayPay祭正式対象ストア/商品确认。

## 2026-07-03 值得买卡片移动端操作区优化

- 时间：2026-07-03 06:04 JST
- 当前优化方向：06:00 移动端体验。
- 目标：`/deals` 优惠详情卡在手机端的“查看详情”和“去官方页面”仍是较小的胶囊按钮，详情展开后也没有状态反馈；本次只优化优惠卡片操作区，让手机端更容易点击和判断当前状态。
- 修改文件：
  - `components/DealCard.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查 DealCard 移动端操作区的最小点击高度、整宽按钮、详情展开/收起文案和官方链接整宽样式。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：优惠详情卡的 CTA 基础样式新增 `min-h-10`、居中对齐和手机端整宽支持；详情操作区在手机端改为纵向网格，`展开详情 / 收起详情` 会随 `<details>` 状态切换；官方页面链接在手机端占满宽度，桌面端仍保持自适应宽度。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；DealCard 移动端操作区静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化值得买移动端操作区”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可用真实浏览器检查 `/deals` 320-390px 宽度下卡片详情展开后的高度、官方链接位置和筛选区回退体验；网络恢复后优先推送本地领先提交。

## 2026-07-03 药妆店优惠券攻略完善

- 时间：2026-07-03 03:02 JST
- 当前优化方向：03:00 攻略内容。
- 目标：`content/guides/drugstore-coupon.mdx` 仍是 5 分钟基础说明，缺少不同券型、货架前快速计算和按购物场景判断的可执行示例；本次把它扩展成更适合新手宝妈临时补货前阅读的药妆店优惠券攻略。
- 修改文件：
  - `content/guides/drugstore-coupon.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查药妆店优惠券攻略阅读时长、更新时间、常见券型、货架前算法、按场景购买和新增检查项。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：药妆店优惠券攻略从 5 分钟扩展为 7 分钟阅读，`updatedAt` 更新为 `2026-07-03`；新增常见券型表、货架前快速算法、临时缺货/周末顺路补货/支付抽选/首次试用等场景判断，并补充满额券和抽选返点检查项。`public/sitemap.xml` 同步更新首页、攻略列表和该攻略详情页的 `lastmod`。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；药妆店优惠券攻略静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善药妆店优惠券攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：网络恢复后先执行 `git push origin main`；后续攻略内容方向可继续补强支付返点攻略，加入确定返还、抽选返还、期间限定积分的对比模板。

## 2026-07-03 首页省钱节点行动分层优化

- 时间：2026-07-03 00:04 JST
- 当前优化方向：00:00 内容结构。
- 目标：首页“最近要关注的省钱节点”原本直接平铺活动卡，用户需要自己判断今天该买、提前准备还是先观察；本次承接 `/calendar` 的 `buyingTiming` 字段，把首页日历入口改成按当前动作分层，帮助新手先判断下一步。
- 修改文件：
  - `pages/index.tsx`
  - `lib/calendar-highlights.ts`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查首页日历行动分层、三类文案和精选节点覆盖 `same-day / prepare / watch`。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：首页省钱节点区新增“当天确认 / 提前准备 / 先观察”三类行动提示，每类下方仍展示对应日历卡；首页精选节点从原来的楽天已结束、Amazon、Yahoo 5 日改为 Amazon 当天确认、Yahoo 超PayPay祭提前准备、楽天已结束先观察，覆盖三种真实决策状态。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；首页日历行动分层静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化首页省钱节点行动分层”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可继续检查首页“出门前先看支付返点”和“本周值得买”是否也需要用同样的行动判断语气统一；网络恢复后继续确认远端是否已收到本地提交。

## 2026-07-02 07:32 最新母婴省钱消息整理

- 时间：2026-07-02 07:32 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：按自动化要求先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠，再只同步官方或可靠来源能支撑的信息，重点确认 7/2 后西松屋新チラシ/ミミコレ是否已经开始。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，并继续显示お買い物マラソン已结束；`rakuten-marathon-diaper-wipes` 保持 `expired`，更新时间改为 2026-07-02。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，下一场仍为 2026/7/5 00:00-23:59，当前仍在エントリー期间外；页面继续说明 2026/7/1 起ヤフーショッピング商品券利用分不再作为付与対象。`yahoo-5day-diaper-box` 保持 `expired`，继续作为 7/5 前准备提醒。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，活动时间、Online Shop 限定、対象カテゴリ和 31 日月份 30 日规则仍可读；`akachan-3-8-baby-category` 保持 `active`。
  - 西松屋チラシ・セール入口：官方首页、ミミコレ页和月間奉仕品入口均可访问；新チラシ「夏休み直前セール」和ミミコレ「子育て応援SALE!!」已显示 2026/7/2-7/14，月間奉仕品到 7/14。`nishimatsuya-monthly-nursery-items` 保持 `active`，但继续标注需到官方线上商品页或门店确认具体价格、库存和送料。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19-7/31、200 日元以上支付、本人确认、抽选返还和対象外条件仍可读；`paypay-scratch-drugstore-baby-care` 保持 `active`，继续标注不是确定折扣。
  - 楽天姓名贴搜索页：搜索结果仍可访问并显示保育园姓名贴相关商品、价格、送料無料和発送目安；因楽天买回仍已结束，`rakuten-name-sticker-marathon` 保持 `expired`。
- 新增/更新信息：
  - Yahoo!ショッピング お得ガイド仍能确认 7/10-7/12 超PayPay祭预告，対象ストア合计 5,000-19,999 日元 +4%、20,000 日元以上 +7%，并有 7/1 起抽选、期間限定セール和対象者限定クーポン等说明；继续只放日历，不写入商品级优惠。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、Yahoo!お得ガイド、アカチャンホンポ、西松屋首页/ミミコレ/月間奉仕品、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `node` 静态检查 6 条优惠状态、更新时间和西松屋/Yahoo 日历字段。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 优惠均已复查；3 条保持 `expired`，3 条保持 `active`，没有发现需要改为 `unavailable` 的商品页。西松屋已从“7/2 新チラシ待确认”改为 7/2-7/14 新チラシ/ミミコレ进行中；未新增商品级优惠，因为本轮没有确认到同时具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；`node` 静态检查确认 3 条 expired、3 条 active，6 条 verified 均更新至 2026-07-02，西松屋/Yahoo 日历字段已更新；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查7月2日母婴优惠状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：7/5 当天复查 Yahoo! 5のつく日エントリー；7/10 前继续等待 Yahoo! 超PayPay祭正式商品/対象ストア确认；后续若西松屋具体商品页可读到价格、库存和送料，再考虑新增 verified 单品优惠。

## 2026-07-02 省钱日历卡片移动端优化

- 时间：2026-07-02 06:02 JST
- 当前优化方向：06:00 移动端体验。
- 目标：`/calendar` 的活动详情卡在手机端信息密度较高，长时间说明和目标标签容易影响扫读；详情按钮也只有“查看详情”，展开后没有状态反馈。本次只优化日历卡片的移动端阅读和展开反馈，不改数据和筛选逻辑。
- 修改文件：
  - `components/CalendarCard.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查日历卡详情展开/收起文案、手机端时间提示块和目标标签换行保护。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：日历详情卡的活动时间在手机端显示为独立浅红提示块，桌面端仍保持右侧对齐；“查看详情”改为可随展开状态切换的“展开详情 / 收起详情”；目标品类标签允许在极窄屏或长词情况下换行，避免撑开卡片。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；日历卡移动端静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化省钱日历移动端卡片”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可用真实浏览器检查 `/calendar` 320-390px 宽度下展开详情后的高度、来源链接和平台筛选露出情况；网络恢复后优先推送本地领先提交。

## 2026-07-02 楽天 5/0 日攻略完善

- 时间：2026-07-02 03:04 JST
- 当前优化方向：03:00 攻略内容。
- 目标：`content/guides/rakuten-5-0-mama-shopping.mdx` 仍是 5 分钟基础说明，缺少适合买什么、金额记录模板和下单当天流程；本次把它扩展成更可执行的楽天 5/0 日母婴用品购买判断攻略，帮助新手先看实付、库存和宝宝适配性，再看积分。
- 修改文件：
  - `content/guides/rakuten-5-0-mama-shopping.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查楽天 5/0 日攻略阅读时长、更新时间、适合买什么、金额记录模板、下单当天流程和买前检查清单。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：楽天 5/0 日攻略从 5 分钟扩展为 7 分钟阅读，`updatedAt` 更新为 `2026-07-02`；新增适合买的母婴品类、不适合买的冲动品类、两段金额记录模板、下单当天 5 步流程和买前检查清单。`public/sitemap.xml` 同步更新首页、攻略列表和该攻略详情页的 `lastmod`。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；楽天 5/0 日攻略静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善楽天5和0日攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可继续补强药妆店优惠券攻略里的不同券型判断示例；网络恢复后优先推送本地领先提交。

## 2026-07-02 省钱日历行动入口优化

- 时间：2026-07-02 00:04 JST
- 当前优化方向：00:00 内容结构。
- 目标：`/calendar` 顶部已经有“提前准备 / 当天确认 / 先观察”的解释，但用户仍需要先按平台浏览所有活动；本次把已有 `buyingTiming` 字段变成首屏行动入口，让新手先按“今天能不能买、要不要提前准备、是否只观察”筛选日历节点。
- 修改文件：
  - `pages/calendar.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查 `/calendar` 行动入口、`selectedTiming` 筛选、移动端横向滑动和桌面端四列布局。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`/calendar` 新增“先按当前动作进入”筛选区，覆盖全部节点、当天确认、提前准备、先观察四类；点击后会同步重置平台筛选，平台列表只显示当前行动分类下仍有节点的平台，避免用户进入空分组。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；日历行动入口静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化省钱日历行动入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可继续检查首页“最近要关注的省钱节点”是否也要按当天确认、提前准备、先观察分层；网络恢复后优先推送本地领先提交。

## 2026-07-01 07:31 最新母婴省钱消息整理

- 时间：2026-07-01 07:31 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：按自动化要求先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠，再只同步官方或可靠来源能支撑的信息，特别处理 7/1 后西松屋 6/30 截止入口和 Yahoo! 5のつく日下一场变化。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，并继续显示お買い物マラソン已结束；`rakuten-marathon-diaper-wipes` 保持 `expired`，更新时间改为 2026-07-01。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，已更新下一场为 2026/7/5 00:00-23:59，但当前仍在エントリー期间外；页面还说明 2026/7/1 起ヤフーショッピング商品券利用分不再作为付与対象。`yahoo-5day-diaper-box` 保持 `expired`，改成 7/5 前准备提醒。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，规则仍成立；`akachan-3-8-baby-category` 保持 `active`。
  - 西松屋チラシ・セール入口：官方首页仍可访问，次回デジタルチラシ和次回ミミコレ显示 7/2 起，月間奉仕品仍到 7/14；`nishimatsuya-monthly-nursery-items` 保持 `active`，但已去掉 6/18-6/30 チラシ/ミミよりコレクション作为当前活动的表述。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19-7/31、200 日元以上、本人确认、抽选返还和 10 万点上限规则仍可读；`paypay-scratch-drugstore-baby-care` 保持 `active`。
  - 楽天姓名贴搜索页：搜索结果仍可访问并显示保育园姓名贴相关商品、价格、送料無料和発送目安；因楽天买回仍已结束，`rakuten-name-sticker-marathon` 保持 `expired`。
- 新增/更新信息：
  - Yahoo!ショッピング お得ガイド仍能确认 7/10-7/12 超PayPay祭预告，対象ストア合计 5,000-19,999 日元 +4%、20,000 日元以上 +7%，7/1 起抽选、期間限定セール和対象者限定クーポン等仍只是活动预告；继续只放日历，不写入商品级优惠。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、Yahoo!お得ガイド、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `node` 静态检查 6 条优惠状态、更新时间和西松屋/Yahoo 日历字段。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 优惠均已复查；3 条保持 `expired`，3 条保持 `active`，没有发现需要改为 `unavailable` 的商品页。西松屋已从 6/30 结束的チラシ/ミミコレ收窄到 7/14 月間奉仕品和 7/2 新チラシ待确认；Yahoo! 5のつく日更新为 7/5 下一场准备提醒；未新增商品级优惠，因为本轮没有确认到同时具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；`node` 静态检查确认 3 条 expired、3 条 active，西松屋/Yahoo 日历字段已更新；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查7月1日母婴优惠状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：7/2 后复查西松屋新チラシ/ミミコレ具体单品；7/5 当天复查 Yahoo! 5のつく日エントリー；7/10 前继续等待 Yahoo! 超PayPay祭正式商品/対象ストア确认。

## 2026-07-01 值得买任务入口移动端优化

- 时间：2026-07-01 06:02 JST
- 当前优化方向：06:00 移动端体验。
- 目标：减少 `/deals` 顶部“先按当前任务进入”三张任务卡在手机端的纵向占用，让用户更快看到分类/平台筛选和优惠列表，同时保留桌面端三列任务入口。
- 修改文件：
  - `pages/deals.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查 `/deals` 任务入口包含横向滚动、snap、移动端固定卡宽和桌面端三列布局。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`/deals` 任务入口在手机端从三张纵向卡片改为横向滑动卡片，使用 `w-[78vw]`、`min-w-[17rem]` 和 `snap-start` 保持可读宽度；桌面端仍通过 `md:grid md:grid-cols-3` 保持三列展示。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；`/deals` 任务入口移动端静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化值得买移动端任务入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可在真实浏览器检查 `/deals` 320-390px 宽度下任务入口滑动、筛选区露出和优惠卡片展开后的阅读高度。

## 2026-07-01 尿不湿购买攻略完善

- 时间：2026-07-01 03:03 JST
- 当前优化方向：03:00 攻略内容。
- 目标：补强核心品类攻略《在日本买尿不湿怎么买最划算》，让新手不仅知道要算单片价，也能按宝宝阶段、尺码风险、购买渠道和买前检查清单判断是否值得囤货。
- 修改文件：
  - `content/guides/buy-diapers-japan.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查尿不湿攻略阅读时长、更新时间、记录模板、按阶段判断、渠道分工和买前检查清单。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：尿不湿攻略从 5 分钟扩展为 7 分钟阅读，`updatedAt` 更新为 `2026-07-01`；新增常用品价格记录模板、按新生儿/3-8 个月/9 个月后/换码期的判断、Amazon/楽天/线下渠道分工，以及下单前检查清单，帮助用户避免只看低价而囤错尺码或品牌。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；尿不湿攻略静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善尿不湿购买攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可继续补强楽天 5/0 日或药妆店优惠券攻略里的实际付款金额与积分判断示例；网络恢复后优先推送本地领先提交。

## 2026-07-01 首页高频消耗品入口优化

- 时间：2026-07-01 00:04 JST
- 当前优化方向：00:00 内容结构。
- 目标：首页右侧“本周提醒”里的纸尿裤、湿巾、洗护三条提示只有说明，没有明确下一步；本次把它们改成可点击任务入口，让新手从高频消耗品直接进入对应攻略或优惠判断页。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查首页高频消耗品入口链接、动作文案和 hover 样式。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：首页“本周提醒”三张高频消耗品卡片从静态说明改为链接入口：纸尿裤指向纸尿裤好价线攻略，湿巾指向本周值得买，洗护指向药妆店优惠券攻略；每张卡补充明确动作文案，帮助用户继续完成判断。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；首页入口静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化首页高频消耗品入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：网络恢复后先推送本地领先提交；后续内容结构方向可继续检查首页“最近要关注的省钱节点”是否需要按今天可用、即将开始和仅作准备分层。

## 2026-06-30 07:35 最新母婴省钱消息整理

- 时间：2026-06-30 07:35 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：按自动化要求先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠，再只同步官方或可靠来源能支撑的信息，避免把已结束活动或预告活动写成确定商品优惠。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，并继续显示お買い物マラソン已结束；`rakuten-marathon-diaper-wipes` 保持 `expired`。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，2026/6/25 场次仍显示エントリー期间外；`yahoo-5day-diaper-box` 保持 `expired`。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，规则仍成立；本轮修正站内“30 日”措辞为“有 31 日的月份为 30 日 10:00 至次月 1 日 09:59”，避免 6/30 误读。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18-6/30 チラシ/ミミよりコレクション和 6/18-7/14 月間奉仕品入口仍可读；保留 `active`，但仍未确认具体单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19-7/31、200 日元以上、本人确认、抽选返还和上限规则仍可读；保留 `active`，继续标注不是确定折扣。
  - 楽天姓名贴搜索页：搜索结果仍可访问并显示保育园姓名贴相关商品、价格、送料無料和発送目安；因楽天买回已结束，继续保持 `expired`，只作为下次买回前准备线索。
- 新增/更新信息：
  - Yahoo!ショッピング お得ガイド已出现 2026/7/10 0:00 - 7/12 25:59 超PayPay祭预告，対象ストア合计 5,000-19,999 日元决済 +4%、20,000 日元以上 +7%，另有 7/1 起抽选、最大 70%OFF 期间限定セール和対象者限定クーポン等予定；已写入 `data/shopping-calendar.json`，但未写入 `data/deals.json`，因为没有具体母婴商品页、价格、库存或券后条件。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、Yahoo!お得ガイド、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 优惠均已复查；3 条保持 `expired`，3 条保持 `active`，未发现商品下架、页面失效或需新增 `unavailable` 的情况。已新增 1 条 Yahoo! 7/10 超PayPay祭日历预告，并修正赤ちゃん本舗 30 日规则。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、14 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查6月30日母婴优惠状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：7/10 前继续等待 Yahoo! 超PayPay祭正式活动页和対象商品确认；明天重点复查西松屋 6/18-6/30 チラシ/ミミよりコレクション是否结束。

## 2026-06-30 攻略列表移动端路线优化

- 时间：2026-06-30 06:03 JST
- 当前优化方向：06:00 移动端体验。
- 目标：减少 `/guides` 手机端顶部“新手宝妈必读路线”三张步骤卡的纵向占用，让用户更快看到下面的“按问题找攻略”分组，同时保持桌面端三列路线不变。
- 修改文件：
  - `pages/guides/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查 `/guides` 新手路线包含横向滚动、snap、隐藏滚动条、移动端固定卡宽和桌面端三列布局。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`/guides` 新手路线在手机端改为横向滑动步骤卡，卡片使用 `w-[78vw]`、`min-w-[17rem]` 和 `snap-start` 保持可读宽度；桌面端仍通过 `md:grid md:grid-cols-3` 保持三列展示。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；攻略列表移动端路线静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化攻略列表移动端路线”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可在真实浏览器检查 `/guides` 320-390px 宽度下路线卡滑动、首屏高度和分组标题露出情况。

## 2026-06-30 童装尺码攻略完善

- 时间：2026-06-30 03:03 JST
- 当前优化方向：03:00 攻略内容。
- 目标：把偏薄的《日本童装 80/90/100 尺码怎么选》扩展成更可执行的尺码和换季清仓攻略，帮助 1-3 岁家庭按衣服类型、保育园规则和季节风险判断是否值得买。
- 修改文件：
  - `content/guides/kids-clothes-size-80-90-100.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略包含 7 分钟阅读、`updatedAt: "2026-06-30"`、按衣服类型判断、保育园衣服、换季清仓和买前检查清单等关键章节。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：攻略新增上衣、裤子、外套、睡衣/内搭的尺码判断，补充保育园衣服选择、换季清仓保守购买规则、买前检查清单和收纳建议；阅读时长更新为 7 分钟，`public/sitemap.xml` 同步更新首页、攻略列表和该攻略详情页的 `lastmod`。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；童装尺码攻略静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善童装尺码攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可继续补强楽天 5/0 日或药妆店优惠券攻略里的示例计算；网络恢复后优先推送本地领先提交。

## 2026-06-30 首页值得买货架过滤优化

- 时间：2026-06-30 00:03 JST
- 当前优化方向：00:00 内容结构。
- 目标：复查发现最近已把 3 条过期活动保留在 `data/deals.json` 中作复盘和下次准备参考，但首页“本周值得买”仍直接取前 3 条优惠，容易让首屏展示已结束活动；本次让首页优先展示仍可参加或仍值得确认的 active 优惠。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查首页优惠货架按 `availabilityStatus === "active"` 优先排序，并确认当前首页 3 条为 active。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：首页 `getStaticProps` 不再直接取 `data/deals.json` 前 3 条，而是先取 active 优惠，不足 3 条时再用其他状态补位；当前首页会展示赤ちゃん本舗、西松屋、PayPay 三条 active 优惠，已结束的楽天买回、Yahoo! 6/25 和楽天姓名贴买回不再占用首页首屏货架。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；首页 active 优先静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 已完成 lint/type check 和 production compile，但在 Collecting page data 阶段因当前沙箱禁止监听 `0.0.0.0` 失败，报 `listen EPERM: operation not permitted 0.0.0.0`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化首页有效优惠展示”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可继续检查首页其它货架是否需要按可行动性排序，例如日历是否优先展示未结束、今天可用或近期要准备的节点。

## 2026-06-26 07:34 最新母婴省钱消息整理

- 时间：2026-06-26 07:34 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：按自动化要求先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠，再只同步官方或可靠来源能支撑的信息，避免已结束活动继续显示为可参加。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，但已显示本轮お買い物マラソン结束；因此 `rakuten-marathon-diaper-wipes` 不能继续作为 active 买回优惠展示。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，仍可读到 2026/6/25 00:00 - 23:59、指定支付 +4%、1,000 円相当上限和期间限定 PayPay ポイント规则，但当前已显示エントリー期间外；因此 `yahoo-5day-diaper-box` 不能继续作为 6/25 active 优惠展示。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，対象カテゴリ入口和通园/お名前グッズ等分类仍可读；保留 active，但仍需结算页确认対象商品和预计积分。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18-6/30 チラシ/ミミよりコレクション和 6/18-7/14 月間奉仕品入口仍可读；保留 active，但未确认具体单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19-7/31、200 日元以上支付和抽选返还规则仍可读；保留 active，但仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关商品、价格、送料無料和発送目安；但作为买回店铺的本轮活动条件已结束，因此 `rakuten-name-sticker-marathon` 改为 expired。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `node` 静态检查 6 条优惠状态和重点日历更新时间。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 中，3 条依赖已结束活动的优惠已改为 `availabilityStatus: "expired"`，并同步修改 `note`、`whyWorthBuying`、`skipWhen`、`updatedAt` 和展示标签；赤ちゃん本舗、西松屋、PayPay 三条保留 active 并更新核验日期。日历中楽天买回和 Yahoo! 6/25 场次改为已结束/等下一场的提醒；未新增商品级优惠，因为本轮没有确认到同时具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`node` 静态检查确认 3 条 expired、3 条 active，重点日历活动更新时间已同步；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查已结束母婴优惠”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续跟进 Yahoo! 7/10 起超PayPay祭预告、下一轮楽天买回公告，以及纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格和条件。

## 2026-06-26 全站移动端导航优化

- 时间：2026-06-26 06:04 JST
- 当前优化方向：06:00 移动端体验。
- 目标：减少手机端打开页面时顶部导航换行占用的首屏高度，让首页、优惠、日历和攻略页的主要入口在小屏上保持一行横向滑动，同时不影响桌面端右侧导航布局。
- 修改文件：
  - `components/Layout.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查 `Layout` 包含主要导航 `aria-label`、移动端横向滚动、隐藏滚动条、桌面端恢复换行和导航项不换行。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：全站头部导航在手机端改为单行横向滑动，导航项使用 `shrink-0` 和 `whitespace-nowrap` 避免按钮被压缩或断行；外层头部手机端垂直内边距略收紧，桌面端仍保持原有上下间距和可换行导航。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；移动端导航静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化全站移动端导航”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可在依赖可用时用真实浏览器检查 320-390px 宽度下的头部高度、横向滑动手感和当前页高亮可见性。

## 2026-06-26 母婴店选择攻略完善

- 时间：2026-06-26 03:03 JST
- 当前优化方向：03:00 攻略内容。
- 目标：把偏薄的《西松屋、バースデイ、赤ちゃん本舗 新手宝妈怎么选》扩展成更可执行的店铺选择攻略，让新手能按购物任务、宝宝阶段和预算判断先去哪家店、买什么、哪些不要被促销带着买。
- 修改文件：
  - `content/guides/choose-baby-stores-japan.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略包含 7 分钟阅读、`updatedAt: "2026-06-26"`、三家店适合买什么、按场景怎么选、推荐购买顺序、买前检查清单和不建议只看促销等关键内容。
  - `node` 静态检查攻略 H2 标题结构没有空小节。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：攻略新增按新生儿准备期、3-12 个月、保育园准备和周末顺路逛等场景的选店建议，补充“看实物、买基础、补好看”的购买顺序、买前检查清单，以及童装清仓、赤ちゃん本舗安心感和西松屋低价的注意事项；阅读时长更新为 7 分钟，`public/sitemap.xml` 同步更新首页、攻略列表和该攻略详情页的 `lastmod`。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；攻略内容和标题结构静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善母婴店选择攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可继续补强童装尺码或楽天 5/0 日攻略；网络恢复后优先推送本地领先提交。

## 2026-06-26 首页新手入口结构优化

- 时间：2026-06-26 00:03 JST
- 当前优化方向：00:00 内容结构。
- 目标：让首页首屏的“第一次打开”分流更像可执行路线，而不是泛入口；尤其让刚开始准备母婴用品的新手直接进入第一篇清单攻略。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查首页新手入口链接到 `/guides/newborn-shopping-list`，并包含三条“下一步”提示。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：首页“刚开始准备”入口从攻略列表改为直达《日本新生儿用品第一批买什么》，并为“刚开始准备 / 准备下单 / 等活动日”三张入口卡补充下一步提示，帮助用户按状态选择下一屏。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；首页入口静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化首页新手入口结构”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 00:00 内容结构方向可观察首页三条入口是否仍过于依赖用户自选；若有真实反馈，再把最常见状态沉到更显眼的位置。

## 2026-06-25 07:32 最新母婴省钱消息整理

- 时间：2026-06-25 07:32 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 且 `availabilityStatus: "active"` 的优惠机会，再只同步官方或可靠来源能支撑的信息。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认 1 店铺 1,000 日元（税込）以上、7,000 点上限、期间限定积分和 2026/7/15 左右付与说明仍可读；活动期仍覆盖 2026/6/25 当天。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，确认 2026/6/25 00:00 - 23:59、エントリー、指定支付 +4% 和期间限定 PayPay ポイント仍可读。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，确认每月 3/8 结尾日 10:00 到次日 09:59、対象カテゴリ积分 10 倍、Online Shop 限定和重叠积分活动优先规则仍可读。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品入口仍可读；未确认具体单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上対象決済、抽选返还档位和 10 万点上限规则仍可读；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关商品、价格、送料無料和発送目安；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified + active 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立，因此未改为 `expired` / `unavailable`。本轮同步核验日期和日历更新时间，没有新增商品级优惠，因为没有确认到同时具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查6月25日母婴优惠状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优先找纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格、库存/配送和券后条件。

## 2026-06-25 攻略详情页移动端小节导航

- 时间：2026-06-25 06:03 JST
- 当前优化方向：06:00 移动端体验。
- 目标：长攻略内容最近持续加厚后，在手机端阅读时需要频繁纵向滚动；本次为攻略详情页增加小节快捷入口，让用户能直接跳到正文中的主要 H2 小节。
- 修改文件：
  - `pages/guides/[slug].tsx`
  - `components/MarkdownContent.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略详情页会解析正文 H2、渲染“快速跳到小节”、限制最多 6 个入口，并确认 Markdown H2 输出稳定锚点和滚动偏移。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：攻略详情页标题卡片下方新增横向滚动的小节导航，仅在正文存在多个 H2 时展示；Markdown H2 增加 `section-*` 锚点和 `scroll-mt-24`，避免跳转后标题被顶部区域贴边。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；攻略详情页小节导航静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化攻略详情页移动端导航”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可在依赖可用时用真实浏览器检查长攻略页面的锚点跳转、横向小节按钮宽度和 320-390px 手机首屏高度。

## 2026-06-25 保育园入园准备攻略完善

- 时间：2026-06-25 03:02 JST
- 当前优化方向：03:00 攻略内容。
- 目标：把偏短的《保育园入园准备 哪些可以买便宜的》扩展成更可执行的入园准备省钱攻略，让用户能先按园方清单分层，再决定哪些可以买便宜、哪些必须等尺寸和规则确认后再买。
- 修改文件：
  - `content/guides/nursery-entry-budget-items.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略包含 7 分钟阅读、`updatedAt: "2026-06-25"`、清单分层、购买顺序、适合便宜买、不建议只看低价、买前检查清单等关键内容。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：攻略新增“先把清单分成三层”“推荐购买顺序”“哪些适合便宜买”“哪些不建议只看低价”“买前检查清单”等章节，并把阅读时长更新为 7 分钟；`public/sitemap.xml` 同步更新首页、攻略列表和该攻略详情页的 `lastmod`。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；入园准备攻略静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善保育园入园准备攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可继续补强童装尺码或楽天 5/0 日攻略；网络恢复后优先推送本地领先提交。

## 2026-06-25 本周值得买任务入口优化

- 时间：2026-06-25 00:01 JST
- 当前优化方向：00:00 内容结构。
- 目标：让 `/deals` 访问者在看到分类/平台筛选前，先按“马上补货、准备入园、出门前确认”这类真实任务进入，降低首次理解优惠类型和平台规则的成本。
- 修改文件：
  - `pages/deals.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查 `/deals` 包含任务入口、三种状态文案和筛选应用函数。
  - `git diff --check`
  - `npm run build`
- 结果：`/deals` 顶部新增“先按当前任务进入”结构卡片，三个入口按钮会直接套用现有分类/平台筛选；后续用户仍可用原有分类、平台按钮继续调整。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；任务入口静态检查通过；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化值得买任务入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：观察真实用户是否更常点击任务入口；若仍反馈“不知道哪条能今天买”，再考虑把优惠确定性作为可筛选项。

## 2026-06-24 16:32 最新母婴省钱消息整理复查

- 时间：2026-06-24 16:32 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：按自动化要求先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 且 `availabilityStatus: "active"` 的优惠机会，再只同步官方或可靠来源能支撑的信息。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认ポイントアップ期间为 2026/6/20 20:00 - 6/26 01:59；1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限仍可读。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，确认対象金额计算、期间限定 PayPay ポイント、付与上限 1,000 円相当和付与日说明仍可读。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，确认每月 3/8 结尾日 10:00 到次日 09:59、対象カテゴリポイント10倍和 Online Shop 限定规则仍可读。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 2026/6/18 チラシ情報、ミミよりコレクション和期間限定セール情報更新入口仍可读；页面另有 2026/6/24 SmartAngel 超厚手おしりふき新品新闻，但不是优惠价。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 0:00 - 7/31 23:59、200 日元以上対象決済、抽选返还档位和 10 万点上限规则仍可读；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育園姓名贴相关结果数量；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified + active 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立，因此未改为 `expired` / `unavailable`。本轮只同步已核验日历活动的更新时间，没有新增商品级优惠；西松屋新品信息仅记录为信号。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查母婴优惠即时状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优先找纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格、库存/配送和券后条件。

## 2026-06-24 16:30 最新母婴省钱消息整理

- 时间：2026-06-24 16:31 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 且 `availabilityStatus: "active"` 的优惠机会，再只更新能由官方或可靠来源支撑的信息，避免把未确认价格写成确定推荐。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认ポイントアップ期间为 2026/6/20 20:00 - 6/26 01:59；1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限仍可读。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，确认 2026/6/25 00:00 - 23:59；エントリー、指定支付 +4% 和 1,000 円相当上限仍可读。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，确认每月 3/8 结尾日 10:00 到次日 09:59、対象カテゴリポイント10倍和 Online Shop 限定规则仍可读。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品入口仍可读；未确认单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上対象決済、抽选返还档位和 10 万点上限规则仍可读；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关结果、价格、送料無料和配送时间等信息；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified + active 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立，因此未改为 `expired` / `unavailable`。本轮只同步已核验日历活动的更新时间，没有新增商品级优惠，因为未确认到同时具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查6月24日母婴优惠状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优先找纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格、库存/配送和券后条件；网络正常时推送到 `origin main`。

## 2026-06-24 首次分享执行清单

- 时间：2026-06-24 07:03 JST
- 当前优化方向：07:00 增长准备。
- 目标：把现有小红书/朋友圈文案库和亲友试用话术之间的执行步骤补齐，让第一次对外分享前能完成入口选择、可信度检查、发布记录和反馈处理判断。
- 修改文件：
  - `docs/first-share-checklist.md`
  - `docs/growth-copy-bank.md`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查首次分享清单包含发布前检查、入口和文案匹配、发布当天记录、反馈处理和不做事项，并确认文案库链接到该清单。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：新增首次分享执行清单，覆盖发布前 10 分钟检查、不同用户状态对应的推荐入口和文案方向、发布当天记录模板、反馈处理规则以及早期不做事项；`docs/growth-copy-bank.md` 的使用原则补充首次发布前先执行该清单。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；首次分享清单静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“新增首次分享执行清单”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：第一次真实发布后，把发布渠道、使用文案编号、收到回复数和最常见困惑填入清单模板；若 3 人以上反馈同类问题，再决定是否调整首页、优惠信任提示或攻略入口。

## 2026-06-24 省钱日历移动端平台筛选

- 时间：2026-06-24 06:02 JST
- 当前优化方向：06:00 移动端体验。
- 目标：优化 `/calendar` 在手机端查看多个平台活动时的浏览效率，让用户可以先按常用平台快速缩小日历节点，避免在小屏上反复纵向滚动。
- 修改文件：
  - `pages/calendar.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查日历页包含平台筛选状态、可见节点数量、横向筛选按钮、`aria-pressed` 和清除按钮。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`/calendar` 新增“按平台快速查看”筛选区，移动端使用横向滑动按钮行，桌面端自动换行；筛选区展示当前可见省钱节点数量，单平台筛选后可一键清除。日历 JSON-LD 仍使用完整事件集合，页面正文只过滤可见分组。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；日历页移动端筛选静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化省钱日历移动端筛选”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可用真实浏览器复查 `/calendar` 首屏筛选区高度和各平台按钮在 320-390px 宽度下是否容易点击。

## 2026-06-24 结构化数据基础对象复用

- 时间：2026-06-24 05:03 JST
- 当前优化方向：05:00 代码质量。
- 目标：继续收敛结构化数据 helper 内部重复逻辑，避免 `schema.org` context、站点语言、站点组织、站点 WebSite 和受众信息在 CollectionPage 与 Article JSON-LD 之间分散维护。
- 修改文件：
  - `lib/structured-data.ts`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查结构化数据 helper 仍包含共享 `schemaContext`、`siteLanguage`、`siteOrganization`、`siteWebsite`，Article JSON-LD 仍包含 `author`、`publisher`、`isPartOf`、`audience` 和一次性 `timeRequired` 转换。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：新增结构化数据基础对象复用，CollectionPage、BreadcrumbList 和 Article JSON-LD 统一使用共享 context、语言、站点组织、站点 WebSite 和受众对象；Article 的 `timeRequired` 只解析一次，减少后续维护时的字段漂移。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；结构化数据 helper 静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复用结构化数据基础对象”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续代码质量方向可考虑为 JSON-LD 输出增加轻量测试脚本，或在依赖可用后补跑 TypeScript/Next 构建。

## 2026-06-24 攻略详情页结构化数据优化

- 时间：2026-06-24 04:03 JST
- 当前优化方向：04:00 SEO。
- 目标：补强攻略详情页的 Article 和 BreadcrumbList 结构化数据，让搜索引擎更清楚识别每篇攻略的页面主体、发布时间、更新时间、阅读时长、作者/发布方和站内层级。
- 修改文件：
  - `lib/structured-data.ts`
  - `pages/guides/[slug].tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略详情页使用 `createArticleJsonLd`、`createBreadcrumbJsonLd`、`getAbsoluteUrl`，且 Article JSON-LD 包含 `mainEntityOfPage`、`timeRequired`、`author` 和 `publisher`。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：新增 `createArticleJsonLd`，将攻略详情页原本内联的 Article JSON-LD 改为共享 helper，并补充 `mainEntityOfPage`、ISO 8601 阅读时长、作者和发布方；攻略详情页同时输出“首页 > 攻略 > 当前攻略”的面包屑 JSON-LD。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态 SEO 检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化攻略详情页结构化数据”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 SEO 方向可检查首页是否需要站点级 `WebSite` / `Organization` JSON-LD，或继续优化攻略间的相关链接锚文本；网络恢复后优先推送本地领先提交。

## 2026-06-24 纸尿裤好价线攻略完善

- 时间：2026-06-24 03:02 JST
- 当前优化方向：03:00 攻略内容。
- 目标：把偏薄的《纸尿裤怎么算好价》扩展成可执行的新手判断攻略，让宝妈能用单片价、尺码风险和实付金额判断是否值得囤，而不是只看箱购总价或积分宣传。
- 修改文件：
  - `content/guides/diaper-price-line.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略包含“适合谁”“怎么定自己的好价线”“下单前检查清单”、单片价公式、`updatedAt: "2026-06-24"` 和单一 `readingTime`。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：纸尿裤好价线攻略从短提示扩展为约 6 分钟阅读文章，补充适合人群、单片价公式、手机记录模板、好价线设定方法、尺码风险信号、下单前检查清单和凑单风险提醒。`public/sitemap.xml` 同步更新攻略列表页和该攻略详情页的 `lastmod`。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善纸尿裤好价线攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 03:00 攻略内容方向可优先补湿巾或宝宝洗护好价判断攻略；网络恢复后优先推送本地领先提交。

## 2026-06-24 省钱日历难度标签展示

- 时间：2026-06-24 02:01 JST
- 当前优化方向：02:00 省钱日历。
- 目标：把日历数据里已有的活动难度展示到卡片和页面说明里，让新手宝妈先区分“简单”“需要核对”“规则复杂”，优先处理更容易判断的省钱节点。
- 修改文件：
  - `components/CalendarCard.tsx`
  - `pages/calendar.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查日历难度标签、三种难度文案，以及摘要卡、首页货架卡、详情卡均展示难度标签。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：日历摘要卡、首页货架卡和 `/calendar` 详情卡都展示活动难度；`/calendar` 新手说明区补充三种难度含义，帮助用户判断哪些活动只需看价格，哪些需要额外核对支付、运费、対象条件、积分上限和期限。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“展示省钱日历难度标签”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 02:00 省钱日历方向可根据亲友反馈观察“规则复杂”活动是否需要更短的结算前检查清单；网络恢复后优先推送本地领先提交。

## 2026-06-24 优惠确定性标签优化

- 时间：2026-06-24 01:03 JST
- 当前优化方向：01:00 优惠数据。
- 目标：在不新增未核验商品优惠的前提下，让 `/deals` 的已核验优惠更清楚地区分“活动规则已核验”“入口已核验”“集合入口已核验”和“抽选不确定”，降低用户把活动机会误读成确定低价的风险。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，能确认エントリー、1 店铺 1,000 日元（税込）条件、7,000 点上限和期间限定积分说明；未核验具体 SKU 价格/库存/送料。
  - Yahoo!ショッピング 5のつく日：官方活动页仍可访问，能确认 2026/06/25 00:00 - 23:59、エントリー、指定支付、+4% 和 1,000 円相当上限；未核验具体箱购商品价格或 PayPay 内訳。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，能确认 Online Shop 限定和対象カテゴリ入口；具体商品是否対象仍需结算页确认。
  - 西松屋チラシ・セール入口：官方首页仍可访问，能确认 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品入口；未核验单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，能确认 2026/6/19 - 7/31、200 日元以上支付、抽选返还档位和上限；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关商品集合、价格和配送信息；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `data/deals.json`
  - `components/DealCard.tsx`
  - `lib/types.ts`
  - `scripts/validate-content.mjs`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `node` 静态检查 6 条优惠均有 `benefitCertainty` 和 `certaintyReason`，且 verified active 条目更新到 `2026-06-24`。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified + active 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立，因此未改为 `expired` / `unavailable`。新增 `benefitCertainty` 和 `certaintyReason`，并在 `/deals` 摘要卡、首页货架卡和详情卡展示；内容校验同步要求优惠必须填写确定性字段。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“补充优惠确定性标签”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续优惠数据方向继续优先找纸尿裤、湿巾、辅食、宝宝洗护的商品页级明确价格、库存/配送和券后条件；网络恢复后优先推送本地领先提交。

## 2026-06-24 攻略分组阅读顺序优化

- 时间：2026-06-24 00:01 JST
- 当前优化方向：00:00 内容结构。
- 目标：让 `/guides` 的“按问题找攻略”不只按主题分组，还能提示每组内先读哪篇、再读哪篇，降低新手第一次进入攻略列表时的选择成本。
- 修改文件：
  - `components/GuideCard.tsx`
  - `pages/guides/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略分组阅读顺序标签和 `GuideCard` 可选上下文标签
  - `git diff --check`
  - `npm run build`
- 结果：`GuideCard` 新增可选 `contextLabel`，不影响首页攻略货架；攻略列表 4 个问题分组分别展示“先读 / 再读 / 需要时读 / 出门前读 / 换季前读”等阅读提示，帮助用户按当前问题进入对应攻略。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。额外尝试 `npx tsc --noEmit` 时同样因本地缺少 Next/React 类型依赖出现大量既有模块类型错误，未作为本次通过项。
- 是否提交：是，提交说明为“优化攻略分组阅读顺序”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可观察亲友试用反馈中“攻略列表是否知道先点哪篇”，再决定是否把同样的阅读顺序提示扩展到首页新手攻略模块。

## 2026-06-23 首页横向卡片货架优化

- 时间：2026-06-23 21:10 JST
- 当前优化方向：首页移动端信息流体验。
- 目标：把首页“本周值得买”“出门前先看支付返点”“最近要关注的省钱节点”“新手攻略”改成移动端横向滑动卡片，减少一直向下滚动的压力，同时保留每个模块的“查看全部”入口。
- 修改文件：
  - `components/HorizontalCardSection.tsx`
  - `components/DealCard.tsx`
  - `components/CalendarCard.tsx`
  - `components/PaymentRebateSpotlight.tsx`
  - `components/GuideCard.tsx`
  - `pages/index.tsx`
  - `styles/globals.css`
- 结果：首页新增通用横向模块组件，移动端卡片宽度约为屏幕 82%，右侧露出下一张卡片；桌面端回到三列网格。四个首页模块都改用更短的首页专用卡片，只保留亮点、标题、平台/时间、行动建议和“查看详情”。“查看全部”统一放在模块标题右侧。
- 验证方式：
  - `npm run validate:content`
  - `git diff --check`
  - 夸张表达关键词检查
  - `npm run build`
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`git diff --check` 通过；未发现“必买、稳赚、一定返、全网最低、错过就亏”等表达。`npm run build` 的 sitemap 生成成功，但主构建仍因当前工作区没有安装依赖、找不到 `next` 命令失败，报 `sh: next: command not found`。

## 2026-06-23 16:30 最新母婴省钱消息整理

- 时间：2026-06-23 16:31 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 且 `availabilityStatus: "active"` 的优惠机会，再只更新能由官方或可靠来源支撑的信息，避免把未确认价格写成确定推荐。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认エントリー、1 店铺 1,000 日元（税込）和 7,000 点上限仍可读。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，确认 2026/6/25 00:00 - 23:59；エントリー、指定支付 +4% 和 1,000 円相当上限仍可读。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，确认 Online Shop 限定、対象カテゴリ入口和 3/8 结尾日规则仍可读。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品入口仍可读；未确认单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上対象決済、抽选返还和 10 万点上限规则仍可读；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关结果、价格和配送信息；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified + active 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立，因此未改为 `expired` / `unavailable`。本轮只同步已核验日历活动的更新时间，没有新增商品级优惠，因为未确认到同时具备具体商品页、价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查母婴优惠最新状态”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优先找纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格、库存/配送和券后条件；网络正常时推送到 `origin main`。

## 2026-06-23 最新母婴省钱消息整理

- 时间：2026-06-23 07:37 JST
- 当前优化方向：最新日本母婴省钱消息整理。
- 目标：先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 且 `availabilityStatus: "active"` 的优惠机会，再只更新能由官方或可靠来源支撑的信息，避免把未确认价格写成确定推荐。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认ポイントアップ期间为 2026/6/20 20:00 - 6/26 01:59；1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限仍可读。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，确认 2026/6/25 00:00 - 23:59；エントリー、指定支付 +4% 和 1,000 円相当上限仍可读。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，确认每月 3/8 结尾日 10:00 到次日 09:59、対象カテゴリポイント10倍和 Online Shop 限定规则仍可读。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品入口仍可读；未确认单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上対象決済、抽选返还和 10 万点上限规则仍可读；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关结果；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified + active 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立，因此未改为 `expired` / `unavailable`。本轮只同步已核验日历活动的更新时间，没有新增商品级优惠，因为未确认到同时具备具体商品页、价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“复查最新母婴省钱消息”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优先找纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格、库存/配送和券后条件；网络正常时推送到 `origin main`。

## 2026-06-23 亲友试用发送话术

- 时间：2026-06-23 07:02 JST
- 当前优化方向：07:00 增长准备。
- 目标：把亲友小范围试用从“反馈清单”推进到可直接发送的话术，降低邀请成本，同时继续避免表单、登录、订阅和追踪链接。
- 修改文件：
  - `docs/friend-trial-message.md`
  - `docs/friend-feedback-checklist.md`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查试用话术包含私聊版、群聊版、3 个小任务、跟进追问和不做登录/追踪说明
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：新增亲友试用发送话术，包含微信或 LINE 私聊版、群聊轻量版、跟进追问和反馈处理规则；反馈清单的发送前检查补充该话术入口。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“新增亲友试用发送话术”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：亲友试用后优先把信任问题和找不到入口的问题回填到反馈清单；网络恢复后优先推送本地领先提交。

## 2026-06-23 值得买页移动端筛选优化

- 时间：2026-06-23 06:03 JST
- 当前优化方向：06:00 移动端体验。
- 目标：优化 `/deals` 在手机端的筛选区和优惠卡片信息密度，让分类/平台筛选不再挤占过多首屏空间，同时避免卡片元信息在窄屏里过度压缩。
- 修改文件：
  - `pages/deals.tsx`
  - `components/DealCard.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查手机端横向筛选、`aria-pressed`、清除按钮位置、CTA 触控高度、移动端元信息单列和长文案换行
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`/deals` 分类和平台筛选在手机端改为横向滑动按钮行，筛选按钮补充 `aria-pressed`，当前数量和清除按钮合并到筛选标题右侧；优惠摘要卡和详情卡的元信息在手机端改为单列，长字段允许换行，详情/官网入口保留标签视觉但增加手机端可点高度。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“优化值得买页移动端筛选”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 06:00 移动端体验方向可用真实浏览器复查 `/deals` 小屏首屏高度和横向筛选提示是否足够明显；网络恢复后优先推送本地领先提交。

## 2026-06-23 结构化数据 helper 抽取

- 时间：2026-06-23 05:03 JST
- 当前优化方向：05:00 代码质量。
- 目标：把 `/guides`、`/deals`、`/calendar` 三个列表页重复的 `CollectionPage`、`ItemList`、`BreadcrumbList` JSON-LD 外壳抽成共享 helper，减少后续 SEO 结构化数据维护时的重复和漂移。
- 修改文件：
  - `lib/structured-data.ts`
  - `pages/guides/index.tsx`
  - `pages/deals.tsx`
  - `pages/calendar.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查三个列表页均使用 `createCollectionPageJsonLd`、`createListItemJsonLd`、`createBreadcrumbJsonLd` 和 `getAbsoluteUrl`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：新增 `lib/structured-data.ts`，集中生成站点绝对 URL、集合页 JSON-LD、列表项 JSON-LD 和面包屑 JSON-LD；三个核心列表页继续保留各自的页面描述、列表项详情和 `application/ld+json` 输出。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“抽取结构化数据生成工具”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 05:00 代码质量方向可继续检查攻略详情页的 JSON-LD 是否也能复用同一 helper；网络恢复后优先推送本地领先提交。

## 2026-06-23 核心列表页 SEO 结构化数据

- 时间：2026-06-23 04:03 JST
- 当前优化方向：04:00 SEO。
- 目标：为 `/deals` 和 `/calendar` 两个核心列表页补充集合页、列表项和面包屑结构化数据，让搜索引擎更清楚识别“本周值得买”和“省钱日历”的页面层级与内容范围。
- 修改文件：
  - `pages/deals.tsx`
  - `pages/calendar.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查两个页面包含 `CollectionPage`、`ItemList` 和 `BreadcrumbList`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`/deals` 输出 `CollectionPage`、`ItemList`、优惠 `Offer` 和面包屑 JSON-LD；`/calendar` 输出 `CollectionPage`、`ItemList`、日历条目 `Thing` 和面包屑 JSON-LD。日历条目没有标准 ISO 活动日期，因此未使用 `Event` 类型，避免生成缺少 `startDate` 的结构化数据。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“补充核心列表页SEO结构化数据”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 04:00 SEO 方向可检查首页是否需要站点级 `WebSite` / `Organization` JSON-LD，或检查攻略详情页内链锚文本覆盖。

## 2026-06-23 新生儿准备攻略完善

- 时间：2026-06-23 03:03 JST
- 当前优化方向：03:00 攻略内容。
- 目标：把偏薄的《新生儿准备品先买什么》扩展成完整新手攻略，补足“适合谁 / 怎么买 / 买前检查 / 注意事项”，让第一次准备宝宝用品的用户能按刚需优先、少量试错来做决策。
- 修改文件：
  - `content/guides/newborn-shopping-list.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查新生儿攻略包含核心章节、`updatedAt` 和阅读时长
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：新生儿攻略从短清单扩展为约 6 分钟阅读文章，新增第一批先买什么、线下看实物/线上比价、消耗品先少量试错、买前检查清单和不急囤品类说明。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“完善新生儿准备攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 03:00 攻略内容方向可优先完善仍偏短的纸尿裤好价线攻略，或新增湿巾/宝宝洗护好价判断攻略；网络恢复后优先推送本地领先提交。

## 2026-06-23 省钱日历行动时机展示

- 时间：2026-06-23 02:03 JST
- 当前优化方向：02:00 省钱日历。
- 目标：把日历数据里已有的“提前准备 / 当天确认 / 先观察”和“先这样判断”展示到卡片上，让用户不用展开详情也能判断这类活动应该怎么处理。
- 修改文件：
  - `components/CalendarCard.tsx`
  - `pages/calendar.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查日历卡片包含行动时机标签、判断提示和页面图例
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：日历首页摘要卡和 `/calendar` 详情卡都显示行动时机标签，并在核心信息区展示“先这样判断”；日历页新手说明补充 3 个标签的含义。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“展示省钱日历行动时机”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 02:00 省钱日历方向可继续检查是否需要按平台增加“本周优先看哪 3 个活动”的排序说明；网络恢复后优先推送本地领先提交。

## 2026-06-23 优惠类型标识

- 时间：2026-06-23 01:02 JST
- 当前优化方向：01:00 优惠数据。
- 目标：让 `/deals` 的 6 条已核验优惠先显示“优惠类型”，帮助用户区分买回活动、活动日返点、积分日、门店/线上入口、抽选返还和商品集合入口，避免把活动机会误读成固定 SKU 低价。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认エントリー、1 店铺 1,000 日元（税込）和 7,000 点上限等规则仍可读。
  - Yahoo!ショッピング 5のつく日：官方活动页仍可访问；当前条目继续作为 6/25 活动日前的箱购提醒展示。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，确认 3/8 结尾日 10:00 到次日 09:59、対象カテゴリ和 Online Shop 限定规则仍可读。
  - 西松屋チラシ・セール入口：官方首页仍可访问，チラシ、ミミよりコレクション和月間奉仕品入口仍可读。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上支付和抽选返还规则仍可读。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关商品集合、价格和配送信息；仍不推荐单一 SKU。
- 修改文件：
  - `data/deals.json`
  - `components/DealCard.tsx`
  - `lib/types.ts`
  - `scripts/validate-content.mjs`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `node` 静态检查 6 条优惠均有 `dealType`，且 verified active 条目更新到 2026-06-23。
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条优惠新增 `dealType`，`/deals` 首页摘要卡和详情卡均展示“类型”；内容校验把 `dealType` 设为必填并限制长度。复查未发现商品页失效、优惠结束、价格不成立或商品下架，因此没有条目需要改为 `expired` 或 `unavailable`。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因当前工作区没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“补充优惠类型标识”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续优惠数据方向可继续把活动机会推进到 1-2 条具体商品页级核验；网络恢复后优先推送本地领先提交。

## 2026-06-23 攻略列表按问题分组

- 时间：2026-06-23 00:02 JST
- 当前优化方向：00:00 内容结构。
- 目标：让 `/guides` 不只是按发布时间平铺攻略，而是按新手真实问题组织阅读入口，帮助首次访问者更快找到“先买什么、怎么算值、看平台规则、保育园童装”等内容。
- 修改文件：
  - `pages/guides/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `node` 静态检查攻略列表包含 4 个问题分组和 10 篇现有攻略 slug
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：攻略列表页新增 4 个“按问题找攻略”分组：先定购物范围、判断消耗品值不值、看懂平台和返点、保育园和童装准备；保留原有新手宝妈必读路线，不新增优惠、价格或日历信息。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；静态检查通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 的 `prebuild` 和 sitemap 成功，但主构建仍因本地没有可用 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败。
- 是否提交：是，提交说明为“按问题组织攻略列表”。
- 是否推送：失败；提交前执行 `git ls-remote origin HEAD`、提交后执行 `git push origin main` 均无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可根据亲友试用反馈判断 4 个问题分组是否需要改名，或给每组增加更明确的“先读哪篇”标识。

## 2026-06-22 详情入口改为标签尺寸

- 时间：2026-06-22 JST
- 当前优化方向：卡片 CTA 视觉收敛。
- 目标：将「查看详情」「去官方页面」按钮改成与推荐标签相同的尺寸、背景色和文字颜色，并确保按钮/标签文字不换行。
- 修改文件：
  - `components/DealCard.tsx`
  - `components/CalendarCard.tsx`
  - `components/PaymentRebateSpotlight.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - 搜索蓝色按钮样式残留
  - `npm run validate:content`
  - `git diff --check`
  - `npm run build`
- 结果：三处组件的 CTA class 统一为 `bg-linen px-3 py-1 text-xs font-semibold text-stone-700 whitespace-nowrap`，和「适合囤货」标签默认视觉一致；推荐标签和适合买什么标签也补充 `whitespace-nowrap`，避免文字换行。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`git diff --check` 通过；`npm run build` 的 `prebuild` 生成 sitemap 成功，但主构建因本地没有可用 `next` 命令失败，报 `sh: next: command not found`。

## 2026-06-22 CTA 按钮样式统一

- 时间：2026-06-22 JST
- 当前优化方向：链接与按钮视觉一致性。
- 目标：将站内「查看详情」「去官方页面」从蓝色文字链接改成按钮 UI；首页「查看全部」「查看全部省钱日历」改成和「查看全部攻略」一致的轻文本样式；支付返点卡片只在返点、时间等重点信息上使用红色。
- 修改文件：
  - `components/CalendarCard.tsx`
  - `components/DealCard.tsx`
  - `components/PaymentRebateSpotlight.tsx`
  - `pages/index.tsx`
  - `pages/deals.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - 搜索旧的箭头文字链接和下划线样式
  - `npm run validate:content`
  - `git diff --check`
  - 页面/组件/数据搜索夸张表达
  - `npm run build`
- 结果：卡片内「查看详情」「去官方页面」统一为圆角浅蓝按钮；支付返点卡片增加黑色活动标题，红色只用于 highlight 和 period；首页两个「查看全部」入口恢复为普通 teal 文本链接；`/deals` 的「清除筛选」也同步去掉蓝色下划线和箭头。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`git diff --check` 通过；页面/组件/数据中未发现“必买 / 稳赚 / 一定省 / 全网最低 / 必返”等夸张表达；`npm run build` 的 `prebuild` 生成 sitemap 成功，但主构建因本地没有可用 `next` 命令失败，报 `sh: next: command not found`。

## 2026-06-22 16:30 最新母婴省钱消息整理

- 时间：2026-06-22 16:32 JST
- 当前优化方向：16:30 最新日本母婴省钱消息整理。
- 目标：先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 且 `availabilityStatus: "active"` 的优惠机会，再只更新能由官方或可靠来源支撑的信息，避免把未确认价格写成确定推荐。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认活动期为 2026/6/20 20:00 - 6/26 01:59；エントリー、1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限仍可读。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，确认下一次为 2026/6/25 00:00 - 23:59；エントリー、指定支付 +4% 和 1,000 円相当上限仍可读。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，対象カテゴリ入口覆盖辅食、宝宝食品、通园用品等；具体商品是否対象仍需商品和结算页确认。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 2026/6/18 更新チラシ、ミミよりコレクション和期間限定セール信息；未确认单品价格或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上対象決済、抽选返还和上限规则；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，并显示保育园姓名贴相关商品、价格和配送信息；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
  - `public/sitemap.xml`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified + active 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立，因此未改为 `expired` / `unavailable`。本轮只同步已核验优惠和对应日历活动的更新时间，没有新增商品级优惠，因为未确认到同时具备具体商品页、价格/券后条件、库存/配送和来源的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild` 和 sitemap，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“复查母婴优惠有效性”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优先找纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格、库存/配送和券后条件；网络正常时推送到 `origin main`。

## 2026-06-22 首页省钱节点轻量化

- 时间：2026-06-22 JST
- 当前优化方向：首页支付返点和省钱节点信息流。
- 目标：首页只负责提醒和吸引点击，详细规则与核验信息由 `/calendar` 承接；支付返点和最近省钱节点都控制为最多 3 条轻量卡片。
- 修改文件：
  - `components/PaymentRebateSpotlight.tsx`
  - `components/CalendarCard.tsx`
  - `pages/index.tsx`
  - `data/shopping-calendar.json`
  - `lib/types.ts`
  - `lib/calendar-highlights.ts`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `git diff --check`
  - 页面/组件/数据搜索夸张表达
  - `npm run build`
- 结果：首页「出门前先看支付返点」改为平台、重点优惠、一句话提醒和「查看详情 →」；首页「最近要关注的省钱节点」改为活动名称、时间、关键优惠、适合买什么、行动建议和「查看详情 →」。两块首页模块均最多展示 3 条。`/calendar` 活动卡片默认显示轻量信息，详细参加方法、省钱示例、最大返还、下单前确认、注意事项、来源和更新时间放入展开区。每个活动新增 `slug` 和 `detailUrl`，首页链接可跳转到 `/calendar#slug`。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`git diff --check` 通过；页面/组件/数据中未发现“必买 / 稳赚 / 一定省 / 全网最低 / 必返”等夸张表达；`npm run build` 的 `prebuild` 生成 sitemap 成功，但主构建因本地没有可用 `next` 命令失败，报 `sh: next: command not found`。

## 2026-06-22 首页和值得买轻量化

- 时间：2026-06-22 JST
- 当前优化方向：首页移动端信息流与 `/deals` 分层展示。
- 目标：让首页「本周值得买」只展示 3 个重点项目和轻量字段，减少手机端阅读压力；`/deals` 默认展示短信息，详细参加方法、购买前确认、来源和更新时间放入展开区。
- 修改文件：
  - `components/DealCard.tsx`
  - `pages/index.tsx`
  - `pages/deals.tsx`
  - `data/deals.json`
  - `lib/types.ts`
  - `scripts/validate-content.mjs`
  - `README.md`
  - `docs/30-day-optimization-plan.md`
  - `docs/product-goals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `git diff --check`
  - 全站搜索开发阶段文案
  - `npm run build`
- 结果：首页改用 `DealSummaryCard`，每张卡片只展示 highlight、title、platform、shortPeriod、recommendationLabel、targetSummary 和「查看详情 →」；`/deals` 卡片默认展示轻量判断，并提供「查看详情 →」展开区和「去官方页面 →」。链接统一为蓝色、加粗、下划线并带箭头。`data/deals.json` 新增轻量字段并纳入内容校验。全站已清除指定开发阶段文案。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`git diff --check` 通过；`npm run build` 的 `prebuild` 生成 sitemap 成功，但主构建因本地没有可用 `next` 命令失败，报 `sh: next: command not found`。尝试 `npm install --fetch-timeout=15000 --cache /tmp/mama-save-npm-cache` 超过 60 秒无输出后中止，未生成依赖文件。

## 2026-06-22 首页新手分流前置

- 时间：2026-06-22 00:02 JST
- 当前优化方向：00:00 内容结构。
- 目标：把首页第一屏从单纯展示“本周值得买 / 省钱日历”按钮，改成能按用户当前状态快速分流，方便首次访问或亲友试用时知道先看哪里。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 静态检查首页包含 3 个 quick-start 入口和对应链接
  - `git diff --check`
  - `npm run build`
- 结果：首页 hero 按钮下新增“第一次打开，按现在的状态先走这里”分流区，覆盖“刚开始准备 -> 攻略”“准备下单 -> 本周值得买”“等活动日 -> 省钱日历”三类访问意图；不改变现有优惠、日历和攻略数据。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`node` 静态检查首页 quick-start 入口通过；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“前置首页新手分流入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可结合亲友试用反馈，判断首页三个分流入口文案是否需要更贴近真实提问；网络恢复后先推送本地领先提交。

## 2026-06-21 16:30 最新母婴省钱消息整理

- 时间：2026-06-21 16:32 JST
- 当前优化方向：16:30 最新日本母婴省钱消息整理。
- 目标：先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠机会，再只记录能够由官方或可靠来源支撑的信息，避免把未确认商品价格写成确定推荐。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，继续确认エントリー、1 店铺 1,000 日元（税込）和 7,000 点上限等活动规则；当前仍在 2026/6/20 20:00 - 6/26 01:59 活动期内。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，下一次为 2026/6/25 00:00 - 23:59，エントリー、指定支付 +4% 和 1,000 円相当上限仍可读。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，対象カテゴリ入口仍覆盖纸尿裤/湿巾、授乳用品、ベビーケア、食品等；仍需商品和结算页确认具体対象和积分内訳。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品入口仍在；未确认单品价或门店库存。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上対象決済、抽选返还和 10 万点上限；仍不是确定母婴商品折扣。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，显示保育园姓名贴相关结果；仍是商品集合入口，不推荐单一 SKU。
- 修改文件：
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 条目均未发现优惠结束、商品下架、页面失效或价格/条件不成立的情况，因此未将任何条目改为 `expired` / `unavailable`。本轮没有确认到同时具备具体商品页、价格/券后条件、库存/配送和来源的母婴单品，因此未更新 `data/deals.json` 或 `data/shopping-calendar.json`，只把复查和待确认信号写入文档。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“记录母婴优惠复查结果”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续优先找纸尿裤、湿巾、辅食、婴儿洗护的商品页级明确价格、库存/配送和券后条件；有商品级证据再新增 verified 优惠。

## 2026-06-21 07:30 最新母婴省钱消息整理

- 时间：2026-06-21 07:31 JST
- 当前优化方向：07:30 最新日本母婴省钱消息整理。
- 目标：先复查 `data/deals.json` 中所有 `dataStatus: "verified"` 的优惠机会，再更新少量可确认的官方来源信息，避免把过期或来源不直接的信息继续展示为可行动推荐。
- 已核验优惠复查：
  - 楽天お買い物マラソン：官方活动页仍可访问，确认 2026/6/20 20:00 - 6/26 01:59、1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限仍成立。
  - Yahoo!ショッピング 5のつく日：官方页仍可访问，确认 2026/6/25 00:00 - 23:59、エントリー、指定支付 +4% 和 1,000 円相当上限仍成立。
  - アカチャンホンポ 3/8 日対象カテゴリポイント10倍：官方页仍可访问，対象カテゴリ入口仍可读；仍需用户在商品和结算页确认是否対象。
  - 西松屋チラシ・セール入口：官方首页仍可访问，确认 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品入口仍在。
  - PayPayスクラッチ：官方详情页仍可访问，确认 2026/6/19 - 7/31、200 日元以上対象決済、抽选 1 等 100% / 2 等 5% / 3 等 0.5% 和 10 万点上限；未确认具体药妆店商品降价。
  - 楽天姓名贴搜索页：搜索结果页仍可访问，保育园/入园相关姓名贴商品集合仍存在；未推荐单一 SKU。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方/平台页面人工核对楽天、Yahoo!ショッピング、アカチャンホンポ、西松屋、PayPayスクラッチ、楽天姓名贴搜索结果。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条 verified 条目均未发现失效、下架或页面不可访问，因此未改为 `expired` / `unavailable`；将 PayPay 优惠和日历的来源从泛活动页改为 PayPayスクラッチくじ官方详情页，并记录本轮信号。未新增商品级优惠，因为本轮没有确认到同时具备具体商品页、库存/配送、券后价和明确适用条件的母婴单品。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“更新PayPay核验来源”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续把 verified 从活动机会推进到具体商品页级核验；优先找纸尿裤、湿巾、辅食、婴儿洗护的明确券后价和库存条件。

## 2026-06-21 亲友试用反馈清单

- 时间：2026-06-21 07:03 JST
- 当前优化方向：07:00 增长准备。
- 目标：为 5-10 个亲友小范围试用准备可执行的反馈清单，帮助验证站点定位、信任感、决策帮助和分享意愿，而不引入表单、后端、账号或追踪。
- 修改文件：
  - `docs/friend-feedback-checklist.md`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 静态检查反馈清单包含试用对象、发送前检查、观察任务、访谈问题、反馈记录模板和优先级判断
  - `git diff --check`
  - `npm run build`
- 结果：新增亲友试用反馈清单，覆盖试用对象选择、发送前人工检查、5 个观察任务、围绕第一印象/信任感/决策帮助/分享意愿的访谈问题、反馈记录模板和反馈处理优先级。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`node` 静态检查反馈清单核心章节通过；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“新增亲友试用反馈清单”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：把清单用于 5-10 个亲友试用，优先记录原话；网络恢复后先推送本地领先提交。

## 2026-06-21 攻略详情页移动端阅读优化

- 时间：2026-06-21 06:02 JST
- 当前优化方向：06:00 移动端体验。
- 目标：收紧攻略详情页在手机端的首屏信息密度和正文阅读节奏，减少长标签、标题区和正文卡片占用过多竖向空间。
- 修改文件：
  - `pages/guides/[slug].tsx`
  - `components/MarkdownContent.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 静态检查攻略详情页移动端 padding、标签折叠、标题字号和正文行高
  - `git diff --check`
  - `npm run build`
- 结果：攻略详情页在手机端减少页面上下留白、标题卡片和正文卡片 padding；标签移动端优先显示前 3 个并用数量提示折叠剩余标签，桌面端继续展示完整标签；正文二级标题、段落和列表在手机端使用更紧凑的间距与行高；相关推荐卡片在手机端同步收紧。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`node` 静态检查通过；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“优化攻略详情页移动端阅读”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可继续检查攻略列表的新手路线卡片在 360px 宽度下是否需要进一步压缩；网络恢复后先推送本地领先提交。

## 2026-06-21 站点配置集中管理

- 时间：2026-06-21 05:02 JST
- 当前优化方向：05:00 代码质量。
- 目标：把站点名称和站点 URL 从 Layout、攻略 JSON-LD 和 sitemap 脚本中的局部常量收敛到共享配置，降低 canonical、Open Graph、结构化数据和 sitemap URL 后续漂移风险。
- 修改文件：
  - `data/site-config.json`
  - `lib/site.ts`
  - `components/Layout.tsx`
  - `pages/guides/index.tsx`
  - `pages/guides/[slug].tsx`
  - `scripts/generate-sitemap.mjs`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 静态检查核心代码不再硬编码站点 URL，且 `data/site-config.json` 的 `siteUrl` 可被解析为合法 URL
  - `git diff --check`
  - `npm run build`
- 结果：新增 `data/site-config.json` 作为站点名称和站点 URL 的单一配置来源；页面侧通过 `lib/site.ts` 复用该配置，sitemap 生成脚本直接读取同一份 JSON；内容校验脚本新增站点配置必填和 HTTPS URL 校验。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`node` 静态检查通过；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“集中管理站点基础配置”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：网络恢复后先推送本地领先提交；后续代码质量方向可继续把 robots.txt 的 Sitemap URL 也纳入可生成流程，或补充页面 SEO 配置的集中管理。

## 2026-06-21 攻略列表 SEO 结构化数据

- 时间：2026-06-21 04:01 JST
- 当前优化方向：04:00 SEO。
- 目标：让攻略列表页不仅展示文章卡片，也用结构化数据明确这是日本母婴省钱攻略集合页，并把全部攻略作为 ItemList 暴露给搜索引擎。
- 修改文件：
  - `pages/guides/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 静态检查攻略列表页包含 CollectionPage、BreadcrumbList 和攻略 ItemList JSON-LD
  - `git diff --check`
  - `npm run build`
- 结果：攻略列表页新增 `CollectionPage` JSON-LD，包含站点归属、目标读者和 10 篇攻略的 `ItemList`；同时新增 `BreadcrumbList`，明确首页到攻略列表页的层级。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`node` 静态检查通过；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充攻略列表SEO结构化数据”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 SEO 方向可继续为 `/deals` 或 `/calendar` 补充集合页结构化数据；网络恢复后先推送本地领先提交。

## 2026-06-21 支付返点新手攻略

- 时间：2026-06-21 03:03 JST
- 当前优化方向：03:00 攻略内容。
- 目标：新增一篇面向新手宝妈的支付返点判断攻略，承接首页和省钱日历里的 PayPay、楽天ペイ、d払い、au PAY 等支付活动入口，帮助用户区分“顺手叠加刚需”和“为了返点多买”。
- 修改文件：
  - `content/guides/payment-rebates-mama-shopping.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 静态检查新增攻略已进入攻略列表数据和 sitemap
  - `git diff --check`
  - `npm run build`
- 结果：新增《PayPay、楽天ペイ等支付返点 母婴用品怎么判断》，包含“适合谁”“适合买什么”“怎么判断值不值得”“买前检查清单”“不建议”，强调支付返点不是直接降价、抽选不能当确定优惠、先看实付和是否本来就要买。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 10 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 14 个 URL；`node` 静态检查确认新增攻略包含 5 个核心章节且 sitemap 已包含新增 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“新增支付返点新手攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续攻略内容方向可继续补齐支付返点与药妆店、楽天买回、保育园清单之间的内链锚文本；优惠数据方向仍应优先复查 verified 条目后再新增商品页级优惠。

## 2026-06-21 省钱日历决策提示

- 时间：2026-06-21 02:03 JST
- 当前优化方向：02:00 省钱日历。
- 目标：给每个省钱日历活动补一条短的“先这样判断”提示，让用户在长规则、返点和注意事项前先知道是否值得行动。
- 修改文件：
  - `data/shopping-calendar.json`
  - `components/CalendarCard.tsx`
  - `lib/types.ts`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 检查 13 个日历活动均有 `decisionHint` 且长度在 12-80 字
  - `git diff --check`
  - `npm run build`
- 结果：13 个日历活动均新增 `decisionHint`，覆盖 Amazon、楽天、西松屋、赤ちゃん本舗、药妆店、Yahoo!ショッピング和支付返点活动；日历卡片在标题下展示“先这样判断”，帮助用户先判断是提前准备、当天核价还是只观察线索。内容校验脚本已要求所有日历活动必须提供短判断提示。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`node` 检查 13 个日历活动均有 `decisionHint`；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充省钱日历决策提示”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续省钱日历方向可继续检查活动排序或把即将到来的日期单独标记；网络恢复后先推送本地领先提交。

## 2026-06-21 支付返点展示提前

- 时间：2026-06-21 JST
- 当前优化方向：支付返点入口。
- 目标：把 PayPay、Yahoo!ショッピング、楽天ペイ、d払い、au PAY 等支付返点从省钱日历底部提升为用户优先看到的决策入口。
- 修改文件：
  - `lib/payment-rebates.ts`
  - `components/PaymentRebateSpotlight.tsx`
  - `pages/calendar.tsx`
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 结果：`/calendar` 顶部新增「本周先看：支付返点」区块，展示 5 条重点支付返点；首页新增「出门前先看支付返点」模块，展示 3 条重点支付返点并引导查看省钱日历。省钱日历原有按平台分组保留，支付平台不再只出现在页面底部。

## 2026-06-21 合规规则补充

- 时间：2026-06-21 JST
- 当前优化方向：数据与版权合规边界。
- 目标：补齐图片版权、内容版权、来源等级、联盟链接、AI 生成内容和用户可见免责声明规则，避免后续优惠自动化或内容更新越界。
- 修改文件：
  - `docs/compliance-rules.md`
  - `components/Layout.tsx`
  - `lib/types.ts`
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 结果：新增图片使用规则、内容版权规则、`sourceLevel` 来源等级、联盟链接规则、AI 生成内容规则和 Footer 免责声明；已核验优惠现在必须来自 `official` 或 `authorized` 来源等级。页面 Footer 已提示价格、库存、积分规则以官方页面、结算页面和门店公告为准，并声明本站与相关品牌无隶属关系。

## 2026-06-21

- 时间：2026-06-21 01:03 JST
- 当前优化方向：01:00 优惠数据。
- 目标：为 `/deals` 已核验优惠补充“核验范围”，让朋友评估时能区分官方活动规则已核验、商品实时价格/库存仍需下单前确认。
- 已核验优惠复查：本次修改 `data/deals.json` 前复查 6 条 `dataStatus: "verified"` 优惠。楽天お買い物マラソン、Yahoo!ショッピング 5のつく日、アカチャンホンポ 3/8 日ポイント10倍、西松屋チラシ・セール入口、PayPay キャンペーン / PayPayスクラッチ、楽天姓名贴搜索页均仍可访问；未发现需要改为 `expired` 或 `unavailable` 的条目。
- 修改文件：
  - `data/deals.json`
  - `components/DealCard.tsx`
  - `lib/types.ts`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方页面人工核对 6 条已核验优惠来源
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：6 条已核验优惠均新增 `verificationScope`，逐条说明已核验的是官方活动规则、活动入口或商品集合入口，并明确具体 SKU、库存、送料、券后价、积分内訳、门店参加情况仍需用户在商品页或结算页确认；优惠卡片新增“核验范围”展示，内容校验脚本要求所有已核验优惠必须提供该字段。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、6 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充优惠核验范围说明”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续把已核验优惠从“活动机会”推进到少量具体商品页级别核验；新增商品页优惠前仍需先复查现有 verified 条目。

## 2026-06-21 真实数据评估版

- 时间：2026-06-21 JST
- 当前优化方向：明天给朋友评估前的真实数据替换。
- 目标：把 `/deals` 从待核验线索改为可评估的已核验优惠/活动来源，并让 `/calendar` 明确说明怎么参加、能省多少、最大可返多少。
- 修改文件：
  - `data/deals.json`
  - `data/shopping-calendar.json`
  - `components/DealCard.tsx`
  - `components/CalendarCard.tsx`
  - `lib/types.ts`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 结果：`/deals` 已替换为 6 条已核验优惠机会，优先使用楽天、Yahoo!ショッピング、赤ちゃん本舗、西松屋、PayPay 官方来源；卡片新增“怎么参加”“买了能省多少”“最大可省/可返示例”。`/calendar` 13 个活动均补充官方/准官方来源、参加步骤、节省示例和最大返还示例。内容校验新增强制规则，防止已核验优惠缺少来源、参加方法和计算示例。
- 注意：当前版本核验的是“官方活动/优惠入口 + 可执行购买场景”，不是每个 SKU 的实时库存和最终结算价。具体单品仍需用户在官方商品页或结算页确认价格、库存、券后价、送料和积分内訳。

## 2026-06-21

- 时间：2026-06-21 00:03 JST
- 当前优化方向：00:00 内容结构。
- 目标：让攻略详情页的“相关攻略”按主题关联，而不是简单展示最新文章，帮助用户从尿不湿、楽天、线下购物等主题继续阅读。
- 修改文件：
  - `pages/guides/[slug].tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 静态检查攻略详情页包含相关推荐打分逻辑和新版标题
  - `git diff --check`
  - `npm run build`
- 结果：攻略详情页新增 `getRelatedGuides`，按同分类、共享标签和相同月龄为候选文章打分，并在同分时按更新时间/发布时间排序；页面文案从笼统的“继续阅读”改为“按主题继续读 / 相关攻略”。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`node` 静态检查通过；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“优化攻略相关内容推荐”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续内容结构方向可继续检查攻略列表是否需要按主题分组；网络恢复后先推送本地领先提交。

## 2026-06-20

- 时间：2026-06-20 20:30 JST
- 当前优化方向：计划优先级调整。
- 目标：将短期执行重点明确写入 30 天计划，避免自动化继续平均推进页面优化而忽略真实数据核验。
- 修改文件：
  - `docs/30-day-optimization-plan.md`
  - `docs/optimization-history.md`
- 验证方式：文档关键词检查。
- 结果：已新增“2026-06-20 起近期优先级调整”，明确短期优先级为真实数据核验、待核验线索替换、页面小优化、新功能；到 2026-06-27 前以 5-10 条真实已核验优惠和官方来源日历为阶段目标。
- 是否提交：待提交。
- 是否推送：待推送。
- 下一步：自动化后续执行时优先替换 `/deals` 待核验线索，并保持已核验优惠有效性复查。

- 时间：2026-06-20 16:31 JST
- 当前优化方向：16:30 最新日本母婴省钱消息整理。
- 目标：先复查已核验优惠有效性，再从官方来源整理少量可确认的母婴省钱活动；没有具体价格和商品页的信息只记录为信号。
- 已核验优惠复查：读取 `data/deals.json` 后确认当前 8 条优惠均为 `dataStatus: "sample"`，`dataStatus: "verified"` 数量为 0，因此没有具体商品页需要逐条打开复查；本轮未新增 verified 商品优惠。
- 信息来源：
  - アカチャンホンポ Online Shop 3と8のつく日官方页：确认每月 3 和 8 结尾日 10:00 起至次日 09:59，対象カテゴリ商品ポイント10倍；31 日まである月は 30 日 10:00 - 翌月 1 日 09:59；Online Shop 限定，积分活动重叠时付与率较高者优先；対象カテゴリ覆盖マタニティ・ママ、ベビー服、ベビーカー・チャイルドシート、纸尿裤/湿巾、授乳用品、ベビーケア、食品、通园用品等。
  - アカチャンホンポ子育て応援サマーセール页：能确认“14日間限定のお買得”、夏に活躍する育児アイテム、育児応援FAIR、紙おむつSALE 等入口，但页面主要为图片，当前可读文本不足以确认具体商品价格、券后条件、库存和完整日期。
  - 西松屋オンラインストア 月間奉仕品页：复核 6/18 - 7/14 月間奉仕品、6/18 - 6/30 今週のチラシ / ミミコレ入口仍可读，页面显示 3,980 日元（税込）以上送料無料（一部商品除外）；本轮未确认具体母婴单品好价。
  - 楽天市場 お買い物マラソン、Yahoo!ショッピング 5のつく日、PayPay 官方活动页：复核前次写入的活动页仍可读，本轮站内已有对应信息，不重复扩写。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方页面人工核对赤ちゃん本舗 Online Shop 3/8 日规则、赤ちゃん本舗夏季特卖页、西松屋月間奉仕品页、楽天、Yahoo!ショッピング、PayPay 活动页。
  - `node` 统计 `data/deals.json` 中 verified 数量。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：将赤ちゃん本舗 Online Shop 3/8 日対象カテゴリ积分 10 倍规则写入省钱日历，补充来源、来源链接、更新时间、适合买什么和注意事项；夏季特卖和西松屋商品入口因缺少可核验具体价格/库存/券后条件，只记录到 `docs/latest-signals.md`；未更新 `data/deals.json`。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“更新赤ちゃん本舗积分日提醒”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续核对赤ちゃん本舗夏季特卖中能否打开具体商品页，以及 Amazon Japan、药妆店、Yahoo! 7 月活动细则；只有商品页、库存/条件、券后价和来源明确时再新增 verified 优惠。

- 时间：2026-06-20 07:32 JST
- 当前优化方向：07:30 最新日本母婴省钱消息整理。
- 目标：先复查已核验优惠是否仍有效，再从官方来源整理少量对在日华人宝妈有用的最新省钱信号，避免把未确认价格写成确定推荐。
- 已核验优惠复查：读取 `data/deals.json` 后确认当前 8 条优惠均为 `dataStatus: "sample"`，`dataStatus: "verified"` 数量为 0，因此没有具体商品页需要逐条打开复查；本轮未新增 verified 商品优惠。
- 信息来源：
  - 楽天市場 お買い物マラソン官方活动页：复核 2026/6/20 20:00 - 6/26 01:59、エントリー必要、1 店铺 1,000 日元（税込、送料別、券后）计入、买回特典积分上限 7,000 点、预计 2026/7/15 左右付与、期限 2026/8/31 23:59；当前站内日历已有对应信息，本轮不重复扩写。
  - Yahoo!ショッピング 5のつく日官方活动页：复核下一次開催期間仍为 2026/6/25 00:00 - 23:59，指定支付 +4%、上限 1,000 円相当、エントリー后订单才计入；站内日历已有对应信息，本轮不重复扩写。
  - 西松屋官方首页：复核 6/18 - 6/30 チラシ / ミミよりコレクション、6/18 - 7/14 月間奉仕品仍可读；仍未确认具体母婴单品价格。
  - PayPay 官方キャンペーン页、PayPayスクラッチ官方页、スギ薬局×ドトール PayPay 联动页：确认 2026/6/19 - 7/31 超PayPay祭 / PayPayスクラッチ 开始；PayPayスクラッチ需本人确认、200 日元以上/次対象決済、抽选付与 1 等 100% / 2 等 5% / 3 等 0.5%、上限 10 万点/回および期間；スギ薬局联动第 2 弾购物期间为 2026/6/16 - 6/30，但属于后日跨店 PayPay クーポン，不是母婴商品直接降价。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方页面人工核对楽天、Yahoo!ショッピング、西松屋、PayPay / PayPayスクラッチ / スギ薬局联动信息。
  - `node` 统计 `data/deals.json` 中 verified 数量。
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：将 PayPay 官方活动检查更新为当前可核验的超PayPay祭 / PayPayスクラッチ信息，提醒用户只在本来要买宝宝洗护、湿巾小包装、妈妈用品时顺手确认，不把抽选或“最大返还”写成确定优惠；スギ薬局联动和未确认的具体商品价格只记录为信号；未更新 `data/deals.json`。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL，并将日历页 `lastmod` 更新到 2026-06-20；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“更新PayPay母婴省钱活动提醒”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：继续跟进赤ちゃん本舗商品/活动页、Yahoo! 7 月活动细则和药妆店母婴单品价格；只有商品页、库存/条件、券后价和来源明确时再新增 verified 优惠。

- 时间：2026-06-20 07:01 JST
- 当前优化方向：07:00 增长准备。
- 目标：沉淀第一批可直接用于小红书/朋友圈/微信群转发的引流文案，让早期增长不依赖临时口头描述，并把每条文案明确绑定到站内落地页。
- 修改文件：
  - `docs/growth-copy-bank.md`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 静态检查文案库包含 10 条文案且每条都有引导页
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：新增小红书/朋友圈引流文案库，包含使用原则、10 条按用户场景组织的中文文案、对应站内引导页和发布节奏建议；文案覆盖新手清单、尿不湿补货、楽天规则、省钱日历、保育园、童装尺码、药妆店优惠和群友转发场景。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`node` 静态检查通过，文案库包含 10 条文案和 10 个引导页；`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“新增增长引流文案库”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续增长准备方向可基于这 10 条文案选择 2-3 条实际发布，并记录用户点击、收藏或群内反馈；网络恢复后先推送本地领先提交。

- 时间：2026-06-20 06:03 JST
- 当前优化方向：06:00 移动端体验。
- 目标：收紧省钱日历在手机端的卡片间距、标签宽度和说明区块占用，让新增行动标签、适合买什么和下单前确认清单在小屏上更容易扫读。
- 修改文件：
  - `components/CalendarCard.tsx`
  - `pages/calendar.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：日历卡片在手机端改为更紧凑的 `p-4`、更小的标签水平内边距、较短的区块间距和列表间距；平台分组、页面外边距和新手提示卡片也增加响应式间距，桌面端继续保持原有宽松布局。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“优化省钱日历移动端布局”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续移动端体验方向可继续检查攻略卡片和攻略详情页正文在手机端的标签换行、标题长度和段落密度；网络恢复后先推送本地领先提交。

- 时间：2026-06-20 05:03 JST
- 当前优化方向：05:00 代码质量。
- 目标：把攻略 frontmatter 从“能被解析”提升到“稳定满足展示层依赖”，避免攻略卡片、详情页 SEO 和标签展示继续依赖默认兜底值。
- 修改文件：
  - `scripts/validate-content.mjs`
  - `content/guides/buy-diapers-japan.mdx`
  - `content/guides/choose-baby-stores-japan.mdx`
  - `content/guides/diaper-price-line.mdx`
  - `content/guides/kids-clothes-size-80-90-100.mdx`
  - `content/guides/newborn-shopping-list.mdx`
  - `content/guides/nursery-entry-budget-items.mdx`
  - `content/guides/rakuten-5-0-mama-shopping.mdx`
  - `public/sitemap.xml`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `node` 检查 9 篇攻略均包含 `babyAge`、`readingTime` 和 `tags`
  - `git diff --check`
  - `npm run build`
- 结果：内容校验脚本新增攻略展示字段约束，要求每篇攻略必须包含 `babyAge`、`readingTime`、`tags`，且 `readingTime` 使用“数字 分钟”、`tags` 至少 3 个；补齐 7 篇攻略缺失的展示/SEO frontmatter，并重新生成 sitemap。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`node` 检查 9 篇攻略展示 frontmatter 完整；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“加强攻略元数据校验”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续代码质量方向可继续减少 `lib/guides.tsx` 和脚本侧 frontmatter 解析规则重复；网络恢复后先推送本地领先提交。

- 时间：2026-06-20 04:03 JST
- 当前优化方向：04:00 SEO。
- 目标：让攻略详情页从普通网站页面升级为文章页 SEO 元信息，补充 `article` Open Graph 和 Article JSON-LD，帮助搜索引擎更清楚识别攻略标题、发布时间、更新时间、标签和目标读者。
- 修改文件：
  - `components/Layout.tsx`
  - `pages/guides/[slug].tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 静态检查攻略详情页是否输出 `ogType="article"`、Article JSON-LD 和 `article:modified_time`
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`Layout` 新增可配置的 `ogType`，默认页面仍为 `website`；攻略详情页改为 `article`，并基于现有 MDX frontmatter 输出 Article JSON-LD、发布时间、更新时间、分类和标签。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`node` SEO 元信息静态检查通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充攻略文章SEO结构化数据”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 SEO 方向可继续检查 Open Graph 图片、面包屑结构化数据或攻略内链锚文本；网络恢复后先推送本地领先提交。

- 时间：2026-06-20 03:02 JST
- 当前优化方向：03:00 攻略内容。
- 目标：把偏薄的楽天积分入门攻略扩展成可执行的新手决策文章，帮助在日华人宝妈判断买回活动里哪些母婴用品适合买、怎么核对积分规则，以及什么时候应该跳过。
- 修改文件：
  - `content/guides/rakuten-points-basics.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 检查 `rakuten-points-basics` 正文长度和核心章节
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：`rakuten-points-basics` 从简短提示扩展为约 6 分钟阅读攻略，新增“适合谁”“适合买什么”“怎么买”“下单前检查清单”“注意事项”，并补充 tags、readingTime 和 updatedAt；sitemap 中首页、攻略列表和该攻略的 `lastmod` 已更新到 2026-06-20。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`node` 检查该攻略正文 1523 字符且核心章节完整；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“完善楽天积分入门攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 04:00 SEO 方向可继续检查攻略详情页 canonical、Open Graph 或结构化数据；网络恢复后先推送本地领先提交。

- 时间：2026-06-20 02:01 JST
- 当前优化方向：02:00 省钱日历。
- 目标：为省钱日历活动补充“适合提前准备 / 当天确认再买 / 先观察价格”的决策标签，让用户扫读时先判断活动是否值得现在行动。
- 修改文件：
  - `data/shopping-calendar.json`
  - `lib/types.ts`
  - `components/CalendarCard.tsx`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 统计 `data/shopping-calendar.json` 中 `buyingTiming` 覆盖和分布
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：13 个日历活动均新增 `buyingTiming` 字段，其中 2 个适合提前准备、5 个当天确认再买、6 个先观察价格；日历卡片顶部新增决策标签；内容校验脚本要求每个日历活动必须使用合法的 `buyingTiming` 值，避免后续新增活动遗漏行动判断。本次未修改 `data/deals.json`，因此不触发已核验优惠复查流程。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充省钱日历行动标签”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 03:00 攻略内容方向可优先新增或扩展一篇与省钱日历强相关的攻略，例如把楽天买回活动或支付平台返点拆成新手可执行的中文步骤。

- 时间：2026-06-20 01:02 JST
- 当前优化方向：01:00 优惠数据。
- 目标：为每条优惠补充结构化“下单前核价”动作，让用户不只看到价格和适合买/不适合买，也能在下单前逐项确认单价、规格、库存、尺码或适用条件。
- 已核验优惠复查：本次修改 `data/deals.json` 前检查到当前 8 条优惠均为 `dataStatus: "sample"`，`dataStatus: "verified"` 数量为 0，因此没有需要复查商品页有效性的已核验优惠。
- 修改文件：
  - `data/deals.json`
  - `lib/types.ts`
  - `components/DealCard.tsx`
  - `scripts/validate-content.mjs`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 检查 `data/deals.json` 中 verified 数量和 `checkBeforeBuying` 完整度
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：8 条优惠/攻略型推荐均新增至少 3 条 `checkBeforeBuying`；优惠卡片新增“下单前核价”清单；内容校验脚本要求每条优惠必须包含至少 3 条核价项，避免后续新增优惠遗漏关键决策信息。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充优惠下单前核价清单”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：如果后续继续优惠数据方向，可优先把 1-2 条样例优惠替换成可核验的官方活动页或商品页数据，并按已核验优惠规则填写 `url`、`sourceName` 和明确的 `availabilityStatus`。

- 时间：2026-06-20 00:02 JST
- 当前优化方向：00:00 内容结构。
- 目标：把首页攻略区从普通文章列表改成明确的新手三步阅读入口，承接 `/guides` 已有的新手路线，让第一次访问的宝妈更快知道先读哪几篇。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
  - `npm run sitemap`
  - `git diff --check`
  - `npm run build`
- 结果：首页攻略区固定展示“准备清单 / 高频消耗品 / 平台规则”三步路线，分别链接新生儿准备清单、在日本买尿不湿、楽天 5と0のつく日三篇现有攻略，并新增“查看全部攻略”入口；本次未修改 `data/deals.json`。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建仍因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“优化首页新手攻略入口”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：网络恢复后先推送本地提交；后续内容结构方向可继续检查攻略详情页之间的内部链接，优先把尿不湿、楽天和纸尿裤好价线三篇互相串联。

## 2026-06-19

- 时间：2026-06-19 20:15 JST
- 当前优化方向：产品路线图补充。
- 目标：把个人账号、购买频率、省钱记录和订阅动力列入中期规划，但不影响当前静态信息站的短期验证节奏。
- 修改文件：
  - `docs/product-goals.md`
  - `docs/30-day-optimization-plan.md`
  - `docs/optimization-history.md`
- 验证方式：文档结构检查。
- 结果：已将 email/密码登录、家庭常用品、购买频率、月度省钱报告、个性化提醒列入 2-5 年目标；30 天计划中新增“只预研不开发”的账号功能设计任务，并明确隐私、安全和订阅前置条件。
- 是否提交：待提交。
- 是否推送：待推送。
- 下一步：后续可单独创建 `docs/account-feature-plan.md`，细化用户数据字段、认证方案、订阅模型和上线门槛。

- 时间：2026-06-19 19:56 JST
- 当前优化方向：优惠数据可信度规则。
- 目标：确保已核验优惠不会在商品下架或活动结束后继续误导用户。
- 修改文件：
  - `lib/types.ts`
  - `components/DealCard.tsx`
  - `data/deals.json`
  - `scripts/validate-content.mjs`
  - `docs/30-day-optimization-plan.md`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content`
- 结果：优惠数据新增 `availabilityStatus`，支持 `unknown`、`active`、`expired`、`unavailable`；卡片会展示“待确认 / 进行中 / 已过期 / 已下架”；内容校验要求已核验优惠必须有具体商品页或活动页、来源和明确有效状态；自动化提示词已更新，要求每次消息整理优先复查已有已核验优惠是否仍有效。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、13 个日历活动校验通过。
- 是否提交：待提交。
- 是否推送：待推送。
- 下一步：开始添加第一批已核验优惠时，必须同时填写 `dataStatus: "verified"`、`availabilityStatus: "active"`、具体 `url` 和 `sourceName`；优惠结束或商品下架时及时改为 `expired` 或 `unavailable`。

- 时间：2026-06-19 16:31 JST
- 当前优化方向：16:30 最新日本母婴省钱消息整理。
- 目标：继续核对官方来源，只把规则明确、对在日华人宝妈有实际决策价值的信息写入日历；价格或条件不足的信息只记录为信号。
- 信息来源：
  - 楽天市場 お買い物マラソン官方活动页：复核活动期为 2026/6/20 20:00 - 6/26 01:59，单店铺 1,000 日元（税込、送料別、券后）计入，特典积分上限 7,000 点；官方页面同时预告 6/20 20:00 开场 2 小时限定最高 50%OFF 优惠券、对象商品限定最高半额优惠券和多类事前配布优惠券。
  - Yahoo!ショッピング 5のつく日官方活动页：复核 6/25 指定支付 +4% 规则仍可读；页面出现 7/10 起相关大型活动预告，但当前未完整确认母婴适用条件、上限和报名规则，本轮只记录为信号。
  - 赤ちゃん本舗官方首页：确认可读到纸尿裤、婴儿洗护、辅食、通园用品等母婴品类入口，但未确认具体商品价格或会员积分日规则。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方页面人工核对楽天、Yahoo!ショッピング、赤ちゃん本舗信息。
  - `npm run validate:content` 校验攻略、优惠和日历数据。
  - `npm run sitemap` 重新生成 sitemap。
  - `npm run build` 尝试完整构建。
  - `git diff --check` 检查空白和补丁格式。
- 结果：已把楽天 6/20 买回活动的开场 2 小时/对象商品优惠券注意事项补进省钱日历，提醒用户先领券、确认限店铺/限商品/限数量，不把“最高 50%OFF”当作确定好价；未确认到具体母婴商品券后价，因此未更新 `data/deals.json`；赤ちゃん本舗和 Yahoo! 7 月活动预告只记录到 `docs/latest-signals.md`。
- 构建结果：`npm run validate:content` 通过，当前 9 篇攻略、8 条优惠、8 个日历活动校验通过；`npm run sitemap` 生成 13 个 URL；`git diff --check` 通过；`npm run build` 先成功执行 `prebuild`，但主构建因当前工作区没有可用的 `next` 命令失败，报 `sh: next: command not found`。npm 日志写入用户目录仍因权限受限失败，未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“补充楽天买回优惠券提醒”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：下次继续核对赤ちゃん本舗商品/活动页与 Yahoo! 7/10 活动细则；只有价格、条件、适用人群和注意事项明确时再更新 `data/deals.json` 或新增日历活动。

- 时间：2026-06-19 07:32 JST
- 当前优化方向：07:30 最新日本母婴省钱消息整理。
- 目标：优先核对官方或可靠来源，只把可确认的平台活动规则写入站点；未确认具体价格的来源只作为信号记录。
- 信息来源：
  - Yahoo!ショッピング 5のつく日官方活动页：确认下一次開催期間为 2026/06/25 00:00 - 23:59，需開催日ごとにエントリー；エントリー后订单才计入；指定支付方式包括 PayPayクレジット、PayPay残高等、PayPayカード、PayPayカード ゴールド、ヤフーショッピング商品券；付与内容为対象金額 4% 的 PayPayポイント（期間限定），上限 1,000 円相当；対象金額按税抜商品价扣除优惠券后计算，不含送料和手数料；付与翌日后最短 30 日以后的月末到期。
  - 楽天市場 お買い物マラソン官方活动页：复核 2026/6/20 20:00 - 6/26 01:59 活动规则仍可读，站点已有对应日历数据，本轮不重复修改。
  - Amazon Japan、赤ちゃん本舗、主要药妆店官方入口：本地 `curl` 访问官方域名时 DNS 解析失败，公开搜索也未稳定返回可确认的日本母婴具体单品活动页；未写成确定优惠。
- 修改文件：
  - `data/shopping-calendar.json`
  - `docs/latest-signals.md`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - 官方页面人工核对 Yahoo!ショッピング 5のつく日活动规则。
  - `npm run validate:content` 校验攻略、优惠和日历数据。
  - `npm run build` 尝试完整构建。
  - `git diff --check` 检查空白和补丁格式。
- 结果：已把 Yahoo!ショッピング 6/25「5のつく日」指定支付 +4% 规则更新到省钱日历，写清适合买什么和下单前注意事项；未确认到具体母婴商品券后价，因此未更新 `data/deals.json`；无法确认的 Amazon Japan、赤ちゃん本舗、药妆店信息只记录到 `docs/latest-signals.md`。
- 构建结果：`npm run validate:content` 通过；`npm run build` 先成功执行 `prebuild` 并生成 13 个 sitemap URL，但主构建仍未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交 `8dfe634`，说明为“更新Yahoo购物5日活动规则”；历史记录已在本提交记录，说明为“记录Yahoo活动整理结果”。
- 是否推送：失败；三次执行 `git push origin main` 均无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：网络恢复后先推送本地领先提交；继续核对 Amazon Japan、赤ちゃん本舗、Yahoo!ショッピング、药妆店官方活动页，只有价格、条件和适用人群明确时再更新 `data/deals.json`。

- 时间：2026-06-19 07:01 JST
- 当前优化方向：07:00 增长准备。
- 目标：在不增加表单、后端或追踪脚本的前提下，为首页补充轻量分享和收藏引导，让用户更容易把站点发给同在日本的宝妈/宝爸。
- 修改文件：
  - `pages/index.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content` 校验攻略、优惠和日历数据。
  - `npm run sitemap` 生成 `public/sitemap.xml`。
  - `git diff --check` 检查空白和补丁格式。
  - 尝试执行 `npm run build`。
- 结果：首页攻略区后新增“分享给同在日本的宝妈/宝爸”区块，文案引导用户收藏本站，并提供“收藏本周值得买”和“发给新手先读攻略”两个内部入口，承接微信群/朋友圈分享场景。
- 构建结果：`npm run build` 先成功执行 `prebuild` 并生成 13 个 sitemap URL，但主构建仍未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“新增首页分享收藏引导”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续增长准备方向可继续补充第一份可领取资料包结构，或准备小红书/朋友圈引流文案。

- 时间：2026-06-19 06:03 JST
- 当前优化方向：06:00 移动端体验。
- 目标：收紧优惠卡片在手机端的垂直占用和标签宽度，让新增“为什么值得买 / 什么情况不适合买”后仍然便于扫读。
- 修改文件：
  - `components/DealCard.tsx`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content` 校验攻略、优惠和日历数据。
  - `npm run sitemap` 生成 `public/sitemap.xml`。
  - `git diff --check` 检查空白和补丁格式。
  - 尝试执行 `npm run build`。
- 结果：优惠卡片在移动端减少标签、标题、价格区、决策区和详情列表的间距；价格信息在手机端改为两列展示，桌面端保持三列；来源入口在手机端改为更轻的文字样式，减少卡片头部拥挤。
- 构建结果：`npm run build` 先成功执行 `prebuild` 并生成 13 个 sitemap URL，但主构建仍未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“优化优惠卡片移动端布局”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：07:00 增长准备方向可补充轻量分享或收藏引导，优先选择不需要表单和后端的一处入口。

- 时间：2026-06-19 05:03 JST
- 当前优化方向：05:00 代码质量。
- 目标：把内容数据校验沉淀为可重复运行的脚本，并让 sitemap 生成脚本复用同一套 MDX frontmatter 解析工具，减少后续人工校验和脚本解析规则漂移。
- 修改文件：
  - `scripts/content-utils.mjs`
  - `scripts/validate-content.mjs`
  - `scripts/generate-sitemap.mjs`
  - `package.json`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run validate:content` 校验攻略 frontmatter、正文长度、优惠字段、日历字段、日期格式和重复 id。
  - `npm run sitemap` 生成 `public/sitemap.xml`。
  - `git diff --check` 检查空白和补丁格式。
  - 尝试执行 `npm run build`。
- 结果：新增 `validate:content` 脚本，当前 9 篇攻略、8 条优惠、8 个日历活动校验通过；新增 `scripts/content-utils.mjs`，`scripts/generate-sitemap.mjs` 已复用共享日期和 frontmatter 工具。
- 构建结果：`npm run build` 先成功执行 `prebuild` 并生成 13 个 sitemap URL，但主构建仍未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“新增内容质量校验脚本”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：06:00 移动端体验方向可检查优惠卡片和日历卡片在小屏上的信息密度，优先优化一处不会影响数据结构的展示细节。

- 时间：2026-06-19 04:02 JST
- 当前优化方向：04:00 SEO。
- 目标：把手写 sitemap 改为可重复生成的静态 SEO 文件，降低新增或更新攻略后忘记同步 `lastmod` 和 URL 的风险。
- 修改文件：
  - `scripts/generate-sitemap.mjs`
  - `package.json`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `npm run sitemap` 生成 `public/sitemap.xml`。
  - `node` 解析 `public/sitemap.xml`，检查 URL 数量、重复 URL、攻略 URL 是否覆盖全部 `content/guides/*.mdx`。
  - `node` 解析所有 `content/guides/*.mdx` 的 frontmatter。
  - `node` 解析 `data/deals.json` 和 `data/shopping-calendar.json`。
  - 尝试执行 `npm run build`。
- 结果：新增 sitemap 生成脚本，构建前会通过 `prebuild` 自动刷新静态 sitemap；首页和攻略列表的 `lastmod` 会跟随内容最新日期，单篇攻略页会读取对应 MDX 的 `updatedAt` 或 `publishedAt`。
- 构建结果：`npm run build` 先成功执行 `prebuild` 并生成 13 个 sitemap URL，但主构建仍未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“自动生成站点地图”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续可继续检查攻略详情页的结构化数据和 Open Graph 类型，使文章页与普通页面的 SEO 元信息更一致。

- 时间：2026-06-19 03:01 JST
- 当前优化方向：03:00 攻略内容。
- 目标：把较薄的药妆店优惠券攻略补成完整决策型文章，让新手宝妈能判断药妆店优惠券适合买什么、怎么买、哪些情况不要买。
- 修改文件：
  - `content/guides/drugstore-coupon.mdx`
  - `public/sitemap.xml`
  - `docs/optimization-history.md`
- 验证方式：
  - `node` 解析所有 `content/guides/*.mdx` 的 frontmatter，检查标题、描述和正文存在。
  - `node` 检查 `drugstore-coupon` 攻略正文包含“适合谁”“怎么买”“买前检查清单”“不建议”。
  - `node` 解析 `data/deals.json` 和 `data/shopping-calendar.json`。
  - 尝试执行 `npm run build`。
- 结果：药妆店优惠券攻略从简短说明扩展为约 5 分钟阅读内容，新增适用人群、适合买的品类、下单前检查清单和避免为优惠券凑单的提醒；同步更新 sitemap 中该攻略的 `lastmod`。
- 构建结果：`npm run build` 未通过环境验证，当前工作区没有可用的 `next` 命令，报 `sh: next: command not found`；npm 日志写入用户目录也因权限受限失败。未安装依赖，避免提交 `node_modules` 或缓存。
- 是否提交：是，提交说明为“完善药妆店优惠券攻略”。
- 是否推送：失败；执行 `git push origin main` 时无法解析 `github.com`，报 `Could not resolve hostname github.com: -65563`。
- 下一步：后续 04:00 SEO 方向可检查攻略详情页的 canonical、结构化数据或 sitemap 是否需要自动生成，避免新增攻略时遗漏。

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
