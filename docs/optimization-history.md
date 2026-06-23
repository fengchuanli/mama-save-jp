# 优化记录

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
