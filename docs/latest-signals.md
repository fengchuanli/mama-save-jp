# 最新母婴省钱消息记录

这个文件用于记录自动化在每天 7:30 和 16:30 发现但尚未完全确认、或暂时不适合直接写入页面的数据。

## 记录格式

```text
日期时间：
来源：
主题：
可能影响：
是否已更新到站点：
下一步：
```

## 当前记录

```text
日期时间：2026-08-09 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラ ベビー分类 https://www.matsukiyococokara-online.com/store/catalog/category/view/categories/008/03/01；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示エントリー期間 2026/8/2 10:00-8/11 01:59、ポイントアップ期間 2026/8/4 20:00-8/11 01:59、1ショップ税込1,000円以上、送料別、クーポン適用後、エントリー必要、上限 7,000ポイント，因此楽天买回和楽天姓名贴入口继续 active/逐项核价；8/9 不是楽天 5と0 日，不能把 8/5 场次继续作为今天叠加条件，下一场等 8/10 当天确认。Yahoo! 5のつく日官方页仍显示下一场 2026/08/15 00:00-23:59，yahoo-5day-diaper-box 继续 expired。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、カート可、5%(395pt)，继续 active 但只作比价候选且不能沿用 8/5 +4%。赤ちゃん本舗 3/8 日规则入口仍有效，8/9 07:32 仍处在 8/8 10:00-8/9 09:59 窗口，因此 akachan-3-8-baby-category 从 expired 改为 active/结算页确认。おしりナップ 1,199円限时价继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/30-8/11、月間奉仕品 7/16-8/11，继续 active/逐项核价。PayPayスクラッチ官方页仍显示 2026/6/19-7/31，继续 expired。マツキヨココカラ ベビー分类和ウエルシアキャンペーン入口可访问，但未核验单个母婴商品当前库存、券后条件和配送。
可能影响：今天关键变化是赤ちゃん本舗 8/8 窗口在 8/9 09:59 前仍有效，站内 verified 状态从 4 active / 4 expired 改为 5 active / 3 expired。没有发现需要改为 unavailable 的页面失效或商品下架；未新增具备具体商品页、明确当前价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；akachan-3-8-baby-category 改为 active；楽天买回、LOHACO、西松屋、楽天姓名贴保持 active；Yahoo! 5のつく日、赤ちゃん本舗 おしりナップ和 PayPayスクラッチ保持 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、赤ちゃん本舗、西松屋、药妆店入口和 PayPay 说明。未新增商品级优惠。
下一步：8/9 09:59 后赤ちゃん本舗本窗口结束，下一场等 8/13 10:00；8/10 当天复查楽天 5と0 日是否可エントリー；8/11 01:59 后及时处理楽天买回和姓名贴入口状态；8/15 当天再复查 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-08-07 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラ ベビー分类 https://www.matsukiyococokara-online.com/store/catalog/category/view/categories/008/03/01；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示エントリー期間 2026/8/2 10:00-8/11 01:59、ポイントアップ期間 2026/8/4 20:00-8/11 01:59、1ショップ税込1,000円以上、エントリー必要、上限 7,000ポイント，因此楽天买回和楽天姓名贴入口继续 active/逐项核价；8/7 不是楽天 5と0 日，不能把 8/5 场次继续作为今天叠加条件。Yahoo! 5のつく日官方页仍显示 2026/08/15 00:00-23:59 预告和当前エントリー期間外，yahoo-5day-diaper-box 继续 expired。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、カート可、5%(395pt)，继续 active 但只作比价候选且不能沿用 8/5 +4%。赤ちゃん本舗 3/8 日规则入口仍有效，当前不在窗口，下一场等 8/8 10:00；おしりナップ 1,199円限时价继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/30-8/11、月間奉仕品 7/16-8/11，继续 active/逐项核价。PayPayスクラッチ官方页仍显示 2026/6/19-7/31，继续 expired。マツキヨココカラ ベビー分类和ウエルシアキャンペーン入口可访问，但未核验单个母婴商品当前库存、券后条件和配送。
可能影响：今天没有发现需要改为 unavailable 的页面失效或商品下架；8 条 verified 当前仍为 4 active / 4 expired。关键提醒是 8/7 不能沿用楽天 5と0 日或 Yahoo! 5のつく日 8/5 场次；楽天买回和西松屋入口仍可作为当前核价入口，赤ちゃん本舗等 8/8 10:00。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持为楽天买回、LOHACO、西松屋、楽天姓名贴 active，Yahoo! 5のつく日、赤ちゃん本舗 3/8 日、赤ちゃん本舗 おしりナップ和 PayPayスクラッチ expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、赤ちゃん本舗、西松屋、药妆店入口和 PayPay 说明。未新增商品级优惠。
下一步：8/8 10:00 后复查赤ちゃん本舗 3/8 日下一场；8/10 当天复查楽天 5と0 日是否可エントリー；8/11 01:59 后及时处理楽天买回和姓名贴入口状态；8/15 当天再复查 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-08-06 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラ ベビー分类 https://www.matsukiyococokara-online.com/store/catalog/category/view/categories/008/03/01；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示エントリー期間 2026/8/2 10:00-8/11 01:59、ポイントアップ期間 2026/8/4 20:00-8/11 01:59、1ショップ税込1,000円以上、エントリー必要、上限 7,000ポイント，因此楽天买回和楽天姓名贴入口继续 active/逐项核价；但 8/5 的楽天 5と0 日已过，不能再作为今天叠加条件。Yahoo! 5のつく日官方页已切到 2026/08/15 00:00-23:59 预告，并显示当前エントリー期間外，因此 yahoo-5day-diaper-box 从 active 改为 expired。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、在庫あり、カート可、5%(395pt)，继续 active 但只作比价候选且不能沿用 8/5 +4%。赤ちゃん本舗 3/8 日规则入口仍有效，当前不在窗口，下一场等 8/8 10:00；おしりナップ 1,199円限时价继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/30-8/11、月間奉仕品 7/16-8/11，继续 active/逐项核价。PayPayスクラッチ官方页仍显示 2026/6/19-7/31，继续 expired。マツキヨココカラ ベビー分类可访问，显示 46 商品、パンパース/メリーズ/ムーニー等品牌筛选和部分値引き商品；ウエルシアキャンペーン入口可访问，但未核验单个母婴商品当前库存、券后条件和配送。
可能影响：今天必须把 Yahoo! 5のつく日从当天可用改回过期/等 8/15，避免用户在 8/6 继续按 +4% 下单。8 条 verified 当前为 4 active / 4 expired。没有发现需要改为 unavailable 的页面失效或商品下架；未新增具备具体商品页、明确当前价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；yahoo-5day-diaper-box 改为 expired；楽天买回、LOHACO、西松屋、楽天姓名贴保持 active；赤ちゃん本舗 3/8 日、赤ちゃん本舗 おしりナップ和 PayPayスクラッチ保持 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、赤ちゃん本舗、药妆店入口和 PayPay 说明。未新增商品级优惠。
下一步：8/8 10:00 后复查赤ちゃん本舗 3/8 日下一场；8/11 01:59 后及时处理楽天买回和姓名贴入口状态；8/15 当天再复查 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-08-05 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラ ベビー分类 https://www.matsukiyococokara-online.com/store/catalog/category/view/categories/008/03/01；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页显示本轮エントリー期間 2026/8/2 10:00-8/11 01:59、ポイントアップ期間 2026/8/4 20:00-8/11 01:59、1ショップ税込1,000円以上、上限 7,000ポイント，当前已进入买回期间。楽天 5と0のつく日官方页列 2026/8/5 00:00-23:59、楽天カード利用でポイント4倍和月間上限 1,000ポイント，但同页仍出现当前未開催提示，叠加前需看エントリー状态。Yahoo! 5のつく日官方页显示 2026/08/05 00:00-23:59 当天场次、エントリー後订单対象、指定支付 +4%、上限 1,000円相当，并列出未エントリー/未登录/未用指定支付等対象外条件，因此 Yahoo 5 日条目从 expired 改为 active/当天核对。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、在庫あり、カート可、5%(395pt)，继续 active 但只作比价候选。赤ちゃん本舗 3/8 日入口仍显示每月 3/8 结尾日 10:00 到次日 09:59；8/3 10:00-8/4 09:59 窗口已结束，因此 akachan-3-8-baby-category 从 active 改为 expired，下一场等 8/8 10:00。赤ちゃん本舗 おしりナップ 1,199円限时期间 2026/6/26 10:00-7/22 09:59 已结束，继续 expired。西松屋首页仍有 7/30 チラシ情報更新、7/30 ミミよりコレクション追加和月間奉仕品入口，继续 active/逐项核价。PayPayスクラッチ官方页仍显示 2026/6/19-7/31，继续 expired。楽天姓名贴搜索入口仍显示示例 1,480円、送料無料、13ポイント、1-3営業日発送；因楽天买回进行中，本条继续 active/逐项核价。マツキヨココカラ ベビー分类可访问并显示 46 商品、パンパース/メリーズ/ムーニー等品牌筛选；ウエルシアキャンペーン入口可访问，但未进入具体商品页核验当前库存、券后条件和配送，暂不新增 verified。
可能影响：今天的关键变化是 Yahoo! 5のつく日进入 8/5 当天场次，站内可从“预告/过期”切为“当天核对”；赤ちゃん本舗 8/3 窗口已结束，必须从 active 改回 expired，避免用户 8/5 误按ポイント10倍下单。8 条 verified 当前为 5 active / 3 expired。没有发现需要改为 unavailable 的页面失效或商品下架；未新增具备具体商品页、明确当前价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；yahoo-5day-diaper-box 改为 active，akachan-3-8-baby-category 改为 expired；楽天买回、LOHACO、西松屋、楽天姓名贴保持 active；赤ちゃん本舗 おしりナップ和 PayPayスクラッチ保持 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、赤ちゃん本舗、药妆店入口等说明。未新增商品级优惠。
下一步：8/5 晚些时候可复查 Yahoo! 5のつく日具体箱购商品和结算页内訳；8/8 10:00 后复查赤ちゃん本舗 3/8 日下一场；8/11 01:59 后及时处理楽天买回和姓名贴入口状态。
```

```text
日期时间：2026-08-04 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラ ベビー分类/セール入口 https://www.matsukiyococokara-online.com/store/catalog/category/view/categories/008/03/01；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示本轮エントリー期間 2026/8/2 10:00-8/11 01:59、ポイントアップ期間 2026/8/4 20:00-8/11 01:59、1ショップ税込1,000円以上、ショップ買いまわり特典上限 7,000ポイント；8/4 07:32 仍未到 20:00，只能先 Entry 和整理清单。楽天 5と0のつく日入口显示当前未開催，下一场等 8/5。Yahoo! 5のつく日官方页仍列 2026/08/05 00:00-23:59，8/4 仍为エントリー期間外，不能按 +4% 下单。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、在庫あり、カート可、5%(395pt)，继续 active 但仅作比价候选。赤ちゃん本舗 3/8 日入口显示每月 3/8 结尾日 10:00 到次日 09:59，8/4 07:32 仍在 8/3 10:00-8/4 09:59 窗口内，因此从 expired 改为 active/结算页确认。赤ちゃん本舗 おしりナップ 1,199円限时期间 2026/6/26 10:00-7/22 09:59 已结束，继续 expired。西松屋首页仍显示 7/30-8/11 チラシ/ミミコレ和 7/16-8/11 月間奉仕品入口，继续 active。PayPayスクラッチ官方页仍显示 2026/6/19-7/31，继续 expired。楽天姓名贴搜索入口可打开并显示「保育園+名前シール」195件，示例 1,480円、送料無料、13ポイント、1-3営業日発送；本条继续 active/先筛选，8/4 20:00 前不要为倍率付款。マツキヨココカラ ベビー纸おむつ分类可见部分値引き商品和カート入口，ウエルシアキャンペーン入口可访问，但未进入具体商品页核验当前库存、券后条件和配送，暂不新增 verified。
可能影响：今天的关键变化是赤ちゃん本舗 3/8 日处在 8/4 09:59 前的有效窗口，站内 verified 状态从 4 active / 4 expired 变为 5 active / 3 expired。楽天买回仍要等 8/4 20:00 后才能按倍率核价；Yahoo! 5のつく日等 8/5；药妆店只记录观察线索。没有发现需要改为 unavailable 的页面失效或商品下架。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；akachan-3-8-baby-category 从 expired 改为 active，并同步 note、whyWorthBuying、skipWhen、checkBeforeBuying、participationSteps 和展示标签。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 和药妆店入口。未新增商品级优惠。
下一步：8/4 20:00 后复查楽天买回具体商品页和结算页条件；8/5 当天复查楽天 5と0 日和 Yahoo! 5のつく日是否可エントリー；8/4 09:59 后赤ちゃん本舗本窗口结束，下一场等 8/8 10:00。
```

```text
日期时间：2026-08-03 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页已公开新一轮，エントリー期間 2026/8/2 10:00-8/11 01:59，ポイントアップ期間 2026/8/4 20:00-8/11 01:59，1ショップ税込1,000円以上，ショップ買いまわり特典上限 7,000ポイント；楽天买回尿不湿/湿巾从 expired 改回 active，但文案强调 8/3 只做事前エントリー和清单，8/4 20:00 后才按商品页/结算页核价。楽天姓名贴搜索入口可打开但搜索快照较旧，本条也改为 active/先准备，要求进入具体商品页核验デザイン、枚数、券后价和発送。楽天 5と0のつく日规则入口显示每月 5/10/15/20/25/30 日、開催日ごとにエントリー必要、楽天カード利用でポイント4倍；下一场 8/5 可和买回叠加核对。Yahoo! 5のつく日官方页仍列 2026/08/05 00:00-23:59，8/3 仍显示エントリー期間外。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、カート可、5%(395pt)，继续 active 但仅作比价候选。赤ちゃん本舗 3/8 日入口仍可访问，但 07:31 尚未到 8/3 10:00 活动窗口，继续 expired/等 10:00 后核对。赤ちゃん本舗 おしりナップ 1,199円限时价继续 expired。西松屋首页仍显示 7/30-8/11 チラシ/ミミコレ、7/16-8/11 月間奉仕品入口，继续 active。PayPayスクラッチ官方页仍显示 2026/6/19-7/31，继续 expired。マツキヨココカラ和ウエルシア入口可访问，但未确认到可写入 verified 的具体母婴单品价、券后条件、库存和配送。
可能影响：今天的关键变化是楽天お買い物マラソン新一轮已公开，站内 verified 状态从 2 active / 6 expired 变为 4 active / 4 expired；active 为楽天买回规则入口、LOHACO 商品页、西松屋入口、楽天姓名贴准备入口。没有发现需要改为 unavailable 的页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；楽天买回尿不湿/湿巾与楽天姓名贴从 expired 改为 active/先准备，并同步 note、whyWorthBuying、skipWhen、checkBeforeBuying、participationSteps 和展示标签。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 和药妆店入口。未新增商品级优惠。
下一步：8/3 10:00 后复查赤ちゃん本舗 3/8 日是否进入新窗口；8/4 20:00 后复查楽天买回商品页和结算页是否实际显示可参加条件；8/5 当天复查楽天 5と0 日和 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-08-02 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示“お買い物マラソンは終了しました”，楽天买回尿不湿/湿巾和楽天姓名贴买回继续 expired；楽天 5と0のつく日页面仍显示当前ポイントアップキャンペーン未開催，并保留 2026/7/30 00:00-23:59 场次，下一场等 8/5。Yahoo! 5のつく日官方页仍列 2026/08/05 00:00-23:59 场次预告，但 8/2 仍显示エントリー期間外，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、在庫あり、カート可、5%(395pt)、最短翌日お届け和 3,780円以上基本配送料550円無料，继续 active 但只作为比价候选。赤ちゃん本舗 3/8 日入口仍可访问，但 7/30 10:00-8/1 09:59 特殊窗口已结束，下一场等 8/3 10:00，本条从 active 改为 expired/等待下一场。赤ちゃん本舗 おしりナップ 1,199円限时价继续 expired。西松屋首页仍列 2026/07/30 チラシ情報更新和ミミよりコレクション追加，西松屋入口继续 active。PayPayスクラッチ官方页仍显示 2026/6/19-7/31，继续 expired。楽天姓名贴搜索入口仍可打开并返回相关商品，示例 1,480円、送料無料、13ポイント、1-3営業日発送，但本条依赖的楽天买回已结束，继续 expired。マツキヨココカラ和ウエルシア入口可访问，但未确认到可写入 verified 的具体母婴单品价、券后条件、库存和配送。
可能影响：今天的关键变化是赤ちゃん本舗 3/8 日特殊窗口已过，不能继续展示为当前可参加；站内 verified 状态变为 2 active / 6 expired。active 仅保留 LOHACO 商品页和西松屋入口；其他活动只作为下一场准备或历史参考。没有发现需要改为 unavailable 的页面失效或商品下架，也没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；赤ちゃん本舗 3/8 日 availabilityStatus 改为 expired，并同步修改 note、whyWorthBuying、skipWhen、checkBeforeBuying、participationSteps 和展示标签。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 和药妆店入口。未新增商品级优惠。
下一步：8/3 10:00 后优先复查赤ちゃん本舗 3/8 日是否进入新窗口；8/5 当天复查楽天 5と0 日和 Yahoo! 5のつく日是否可エントリー；继续寻找 Amazon/药妆店/楽天/Yahoo 中具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-08-01 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示“お買い物マラソンは終了しました”，楽天买回尿不湿/湿巾和楽天姓名贴买回继续 expired；楽天 5と0のつく日页面仍显示当前ポイントアップキャンペーン未開催，并保留 2026/7/30 00:00-23:59 场次，下一场等 8/5。Yahoo! 5のつく日官方页已切到 2026/08/05 00:00-23:59 场次预告，但 8/1 仍显示エントリー期間外，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍显示 8,640円（税込）、64枚×3パック、在庫あり、カート可、5%(395pt)、最短翌日お届け和 3,780円以上基本配送料550円無料，继续 active 但只作为比价候选。赤ちゃん本舗 3/8 日入口仍可访问，8/1 07:32 仍在 7/30 10:00-8/1 09:59 的 31 日月份特殊窗口内，但具体商品仍需看対象カテゴリ和结算页积分。赤ちゃん本舗 おしりナップ 1,199円限时价继续 expired。西松屋首页新着情報仍列 2026/07/30 チラシ情報更新和ミミよりコレクション追加，西松屋入口继续 active。PayPayスクラッチ官方页仍显示 2026/6/19-7/31；由于今天已是 8/1，本条从 active 改为 expired。楽天姓名贴搜索入口仍可打开并返回相关商品，示例 1,480円、送料無料、13ポイント、1-3営業日発送，但本条依赖的楽天买回已结束，继续 expired。マツキヨココカラ有ベビー分类、店舗キャンペーン和オンラインセール入口；未确认到可写入 verified 的具体母婴单品价、券后条件、库存和配送。
可能影响：今天的关键变化是 PayPayスクラッチ必须从 active 改为 expired，避免用户 8/1 以后还按抽选活动补货；Yahoo! 5のつく日已切到 8/5 预告，但当前仍不能エントリー；赤ちゃん本舗特殊窗口在 8/1 09:59 前仍可核对；LOHACO 价格和ポイント保持 8,640円、5%(395pt)。没有发现需要改为 unavailable 的页面失效或商品下架，也没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。当前 8 条 verified 为 3 条 active、5 条 expired；active 为 LOHACO 商品页、赤ちゃん本舗 3/8 日规则入口、西松屋入口。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；PayPayスクラッチ availabilityStatus 改为 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 和药妆店入口。未新增商品级优惠。
下一步：8/1 09:59 后优先复查赤ちゃん本舗特殊窗口是否结束；8/5 当天复查楽天 5と0 日和 Yahoo! 5のつく日是否可エントリー；继续寻找 Amazon/药妆店/楽天/Yahoo 中具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-31 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示“お買い物マラソンは終了しました”，楽天买回尿不湿/湿巾和楽天姓名贴买回继续 expired；楽天 5と0のつく日页面显示当前ポイントアップキャンペーン未開催，并保留 2026/7/30 00:00-23:59 场次说明，因此 7/31 不能按 5と0 日下单。Yahoo! 5のつく日官方页仍列 2026/07/25 00:00-23:59 且エントリー期間外，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍可购买，但价格/积分从 7/30 的 8,630円、20%(1,571pt)变为 8,640円（税込）、5%(395pt)，继续 active 但只作为比价候选，不能沿用高返点说明。赤ちゃん本舗 3/8 日入口仍可访问，当前 7/31 07:31 处在 7/30 10:00-8/1 09:59 的 31 日月份特殊窗口内，但具体商品仍需看対象カテゴリ和结算页积分。赤ちゃん本舗 おしりナップ 1,199円限时价继续 expired。西松屋首页仍显示 7/30-8/11 チラシ/ミミコレ，月間奉仕品 7/16-8/11 仍公开；西松屋入口继续 active，但仍不写固定单品价。PayPayスクラッチ仍显示 2026/6/19-7/31，7/31 是最后一天，继续 active，但 8/1 后需复查并改状态。楽天姓名贴搜索入口仍可打开并返回相关商品，但本条依赖的楽天买回已结束，继续 expired。マツキヨココカラ有ベビー分类、店舗キャンペーン和オンラインセール入口；ウエルシアキャンペーン页有 2026/06/01 夏のボーナス大還元祭等入口；Amazon Deals 可作为观察入口；但未确认到可写入 verified 的具体母婴单品价、券后条件、库存和配送。
可能影响：今天的关键变化是 LOHACO 商品价格和ポイント条件变化，需要避免用户继续按 20% 返点理解；楽天 7/30 的 5と0 日已结束；赤ちゃん本舗 7/30 特殊窗口已进入进行中；PayPayスクラッチ今天是最后一天。没有发现需要改为 unavailable 的页面失效或商品下架，也没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。当前 8 条 verified 仍为 4 条 active、4 条 expired；active 为 LOHACO 商品页、赤ちゃん本舗 3/8 日规则入口、西松屋入口、PayPayスクラッチ。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；LOHACO 价格/积分改为 8,640円、5%(395pt)，状态仍 active 但推荐语降级为比价候选。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 和药妆店入口。未新增商品级优惠。
下一步：8/1 后优先复查 PayPayスクラッチ是否结束并改为 expired；8/1 09:59 后复查赤ちゃん本舗特殊窗口是否结束；8/5 当天复查楽天 5と0 日和 Yahoo! 5のつく日是否切到新场次；继续寻找 Amazon/药妆店/楽天/Yahoo 中具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-30 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示“お買い物マラソンは終了しました”，楽天买回尿不湿/湿巾和楽天姓名贴买回继续 expired；楽天 5と0のつく日页面列 2026/7/30 00:00-23:59，可作为今天单独核对楽天カード规则，但不能和已结束的买回混算。Yahoo! 5のつく日官方页仍列 2026/07/25 00:00-23:59 且エントリー期間外，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、20%(1,571pt)、最短翌日お届け、3,780円以上基本配送料550円無料和 1 回订单 2 点まで，继续 active，但不叠加已结束的 Yahoo! 5 日。赤ちゃん本舗 3/8 日入口仍可访问，规则为每月 3/8 结尾日 10:00-次日09:59，31 日月份为 30 日 10:00-次月 1 日 09:59；7/28 场已结束，7/30 07:32 尚未到 10:00，只能提示等下一窗口核对，不能写成当前积分已生效。赤ちゃん本舗 おしりナップ 1,199円限时价继续 expired。西松屋首页已公开 7/30-8/11 チラシ/ミミコレ，月間奉仕品 7/16-8/11 仍公开；西松屋入口继续 active，但仍不写固定单品价。PayPayスクラッチ仍显示 2026/6/19-7/31、200円以上/回、1等100%/2等5%/3等0.5%、付与上限和本人确认等条件，继续 active。マツキヨココカラ有ベビー分类、店舗キャンペーン和オンラインセール入口；ウエルシアキャンペーン页有 2026/06/01 夏のボーナス大還元祭等入口；Amazon Deals 可作为观察入口；但未确认到可写入 verified 的具体母婴单品价、券后条件、库存和配送。
可能影响：今天的关键变化是 7/30 当日信息切换：楽天 5と0 日可单独核对，西松屋新チラシ/ミミコレ已公开，赤ちゃん本舗 7/28 场已结束且 7/30 下一窗口需等 10:00 后核对。没有发现需要改为 unavailable 的页面失效或商品下架，也没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。当前 8 条 verified 仍为 4 条 active、4 条 expired；active 为 LOHACO 商品页、西松屋入口、PayPayスクラッチ和赤ちゃん本舗 3/8 日规则入口。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 4 active、4 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 和药妆店入口。未新增商品级优惠。
下一步：7/30 10:00 后复查赤ちゃん本舗 30 日特殊窗口是否实际生效；8/1 后复查 PayPayスクラッチ是否结束；8/5 当天复查 Yahoo! 5のつく日是否切到新场次；继续寻找 Amazon/药妆店/楽天/Yahoo 中具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-29 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示“お買い物マラソンは終了しました”；楽天 5と0のつく日页面仍显示当前ポイントアップキャンペーン未開催，上一场为 2026/7/25 00:00-23:59，因此楽天买回相关条目继续 expired。Yahoo! 5のつく日官方页仍列 2026/07/25 00:00-23:59 场次，规则为要エントリー、指定支付 +4%、上限 1,000 円相当，7/25 场已结束，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、20%(1,571pt)、最短翌日お届け、3,780円以上基本配送料550円無料，继续 active，但仍不能叠加 7/25 5のつく日。赤ちゃん本舗 3/8 日入口仍可访问，规则为每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；7/29 07:32 仍在 7/28 10:00-7/29 09:59 窗口内，但具体商品仍需看対象カテゴリ和结算页积分。赤ちゃん本舗 おしりナップ商品页仍可访问并显示 1,199円限时期间为 2026/6/26 10:00-7/22 09:59，继续 expired。西松屋首页已从 7/16-7/28 チラシ/ミミコレ切换为“次回のデジタルチラシは 7/30 から、次回のミミコレは 7/30 から”，月間奉仕品 7/16-8/11 仍公开；因此西松屋条目保持 active 入口，但移除沿用上一轮チラシ/ミミコレ的下单语气。PayPayスクラッチ仍显示 2026/6/19-7/31、200円以上/回、本人确认、抽选返还和対象外条件，继续 active。楽天姓名贴搜索结果仍有相关商品，示例 1,380円、送料無料、12ポイント、0-3営業日発送，1,320円、送料無料、12ポイント、1-3営業日以内発送，以及 2,500円、送料無料、22ポイント、1-2営業日発送；但本条依赖楽天买回，本轮已结束，因此继续 expired。Yahoo! 超PayPay祭仍为開催期間外，9/11 起大型企画只观察；マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问或可作为入口记录，但没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是西松屋 7/16-7/28 チラシ/ミミコレ不能继续按有效活动写，只保留 7/16-8/11 月間奉仕品和 7/30 新チラシ待复查；赤ちゃん本舗 7/28 场在 7/29 09:59 前仍可核对。没有发现需要改为 unavailable 的页面失效或商品下架，也没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。当前 8 条 verified 仍为 4 条 active、4 条 expired；active 为 LOHACO 商品页、西松屋月間奉仕品入口、PayPayスクラッチ和赤ちゃん本舗 3/8 日规则入口。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 4 active、4 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/29 09:59 后复查赤ちゃん本舗対象カテゴリ积分窗口是否结束；7/30 复查西松屋新チラシ/ミミコレ是否已公开并是否有可核验母婴单品；7/30 当天复查楽天 5と0のつく日是否可エントリー；8/5 当天复查 Yahoo! 5のつく日是否切到新场次。
```

```text
日期时间：2026-07-28 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示“お買い物マラソンは終了しました”；楽天 5と0のつく日页面仍显示当前ポイントアップキャンペーン未開催，上一场为 2026/7/25 00:00-23:59，因此楽天买回相关条目继续 expired。Yahoo! 5のつく日官方页仍列 2026/07/25 00:00-23:59 场次，规则为要エントリー、指定支付 +4%、上限 1,000 円相当，7/25 场已结束，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、20%(1,571pt)、最短翌日お届け、3,780円以上基本配送料550円無料，继续 active，但仍不能叠加 7/25 5のつく日。赤ちゃん本舗 3/8 日入口仍可访问，规则为每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；今天 7/28 是活动日，但 07:33 尚未到 10:00，预计窗口为 10:00-7/29 09:59，但具体商品仍需看対象カテゴリ和结算页积分。赤ちゃん本舗 おしりナップ商品页仍可访问并显示 1,199円限时期间为 2026/6/26 10:00-7/22 09:59，继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11，今天是チラシ/ミミコレ最后一天。PayPayスクラッチ仍显示 2026/6/19-7/31、200円以上/回、抽选返还 100%/5%/0.5%、付与上限 10万ポイント/回および期間。楽天姓名贴搜索结果仍有相关商品，示例 1,480円、送料無料、13ポイント、1-3営業日発送，以及 2,780円、送料無料、25ポイント、2-3営業日発送；但本条依赖楽天买回，本轮已结束，因此继续 expired。Yahoo! 超PayPay祭仍为開催期間外，9/11 起大型企画只观察；マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问或可作为入口记录，但没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是赤ちゃん本舗 3/8 日从“等待 7/28”推进到“今天 10:00 后可核对”，但 07:33 尚未到活动开始时间；西松屋チラシ/ミミコレ仍有效但今天到期。没有发现需要改为 unavailable 的页面失效或商品下架，也没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。当前 8 条 verified 仍为 4 条 active、4 条 expired；active 为 LOHACO 商品页、西松屋入口、PayPayスクラッチ和赤ちゃん本舗 3/8 日规则入口。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 4 active、4 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/29 09:59 后复查赤ちゃん本舗対象カテゴリ积分窗口是否结束；7/29 后复查西松屋 7/16-7/28 チラシ/ミミコレ是否切换或结束；7/30 当天复查楽天 5と0のつく日是否可エントリー；8/5 当天复查 Yahoo! 5のつく日是否切到新场次。
```

```text
日期时间：2026-07-27 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示“お買い物マラソンは終了しました”；楽天 5と0のつく日页面仍显示当前ポイントアップキャンペーン未開催，上一场为 2026/7/25 00:00-23:59，因此楽天买回相关条目继续 expired。Yahoo! 5のつく日官方页仍列 2026/07/25 00:00-23:59 场次，规则为要エントリー、指定支付 +4%、上限 1,000 円相当，7/25 场已结束，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、20%(1,571pt)、最短翌日お届け、3,780円以上基本配送料550円無料，继续 active，但仍不能叠加 7/25 5のつく日。赤ちゃん本舗 3/8 日入口仍可访问，规则为每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；今天 7/27 不在窗口，下一场等 7/28 10:00。赤ちゃん本舗 おしりナップ商品页仍可访问并显示 1,199円限时期间为 2026/6/26 10:00-7/22 09:59，继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200円以上/回、抽选返还 100%/5%/0.5%、付与上限 10万ポイント/回および期間。楽天姓名贴搜索结果仍有 195 件相关商品，示例 1,480円、送料無料、13ポイント、1-3営業日発送，以及 1,250円、送料無料、11ポイント、2営業日出荷；但本条依赖楽天买回，本轮已结束，因此继续 expired。Yahoo! 超PayPay祭仍为開催期間外，9 月大型企画只观察；マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问或可作为入口记录，但没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天没有新增需要改为 unavailable 的页面失效或商品下架，也没有新增具备具体商品页、明确价格/条件、库存/配送和来源的 verified 商品。当前 8 条 verified 仍为 4 条 active、4 条 expired；active 为 LOHACO 商品页、西松屋入口、PayPayスクラッチ和赤ちゃん本舗 3/8 日规则入口。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 4 active、4 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/28 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否进入窗口；7/28 后复查西松屋 7/16-7/28 チラシ/ミミコレ是否结束；7/30 当天复查楽天 5と0のつく日是否可エントリー；8/5 当天复查 Yahoo! 5のつく日是否切到新场次。
```

```text
日期时间：2026-07-26 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页显示“お買い物マラソンは終了しました”，因此楽天买回尿不湿/湿巾条目从 active 改为 expired；楽天 5と0のつく日页面显示当前ポイントアップキャンペーン未開催，上一场为 2026/7/25 00:00-23:59。Yahoo! 5のつく日官方页仍列 2026/07/25 00:00-23:59 场次，并显示ただいまエントリー期間外，因此 Yahoo 5 日条目从 active 改为 expired。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、20%(1,571pt)、最短翌日お届け、3,780円以上基本配送料550円無料，继续 active，但移除 7/25 5のつく日叠加语气。赤ちゃん本舗 3/8 日入口仍可访问，今天 7/26 不在窗口，下一场等 7/28 10:00；おしりナップ 1,199円限时价仍标注 2026/6/26 10:00-7/22 09:59，继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200円以上/回、抽选返还 100%/5%/0.5%。楽天姓名贴搜索结果仍有相关商品，示例 1,380円、送料無料、12ポイント、0-3営業日発送；但本条依赖楽天买回，本轮已结束，因此从 active 改为 expired。Yahoo! 超PayPay祭仍为開催期間外，9 月大型企画只观察；マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问，但没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是回收 7/25 当天活动语气：楽天买回、楽天姓名贴买回和 Yahoo! 5のつく日不再展示为当前可参加。当前 8 条 verified 状态变为 4 条 active、4 条 expired；active 为 LOHACO 商品页、西松屋入口、PayPayスクラッチ和赤ちゃん本舗 3/8 日规则入口。没有发现页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；楽天买回、Yahoo! 5 日、楽天姓名贴买回改为 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/28 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否进入窗口；7/28 后复查西松屋 7/16-7/28 チラシ/ミミコレ是否结束；7/30 当天复查楽天 5と0のつく日是否可エントリー；8/5 当天复查 Yahoo! 5のつく日是否切到新场次。
```

```text
日期时间：2026-07-25 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示全会員対象、エントリー必要、1ショップ1,000円(税込)以上、買いまわり特典上限7,000ポイント和 2026/8/15 頃付与，继续 active；楽天 5と0のつく日页面显示 2026/7/25 00:00-23:59 为対象期間、開催日ごとにエントリー必要、楽天カード利用和月間上限1,000ポイント，可作为今天核对点。Yahoo! 5のつく日显示開催期間 2026/07/25 00:00-23:59、要エントリー、エントリー後注文、指定支付 +4%、上限 1,000 円相当和期间限定 PayPay ポイント，因此 Yahoo 5 日条目从 expired 改为 active。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、20%(1,571pt)、最短翌日お届け、3,780円以上基本配送料550円無料和 1 回订单 2 点まで。赤ちゃん本舗 3/8 日页面仍显示每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；今天 7/25 不在窗口，下一场等 7/28 10:00。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页仍可访问，但 1,199円限时价已在 7/22 09:59 结束，继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200円以上/回、抽选返还 100%/5%/0.5%、本人确认和付与上限。楽天姓名贴搜索结果仍显示相关商品，示例价 1,380円、1,320円、1,200円、送料無料和 0-3営業日発送等。Yahoo! 超PayPay祭未确认到可用于今天下单的 7 月本番条件，9 月大型企画仅观察。マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问，但本轮没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是 Yahoo! 5のつく日进入 7/25 当天窗口，`yahoo-5day-diaper-box` 已从 expired 改为 active；楽天买回和楽天姓名贴加入 7/25 5と0 日可核对语气，但仍要求先 Entry、看楽天カード条件和具体商品页/结算页。赤ちゃん本舗 3/8 日仍等 7/28，赤ちゃん本舗湿巾继续 expired。没有发现页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态为 7 条 active、1 条 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/26 01:59 后复查楽天お買い物マラソン是否结束，并同步将楽天买回/姓名贴相关条目改为 expired 或准备下一轮；7/26 之后复查 Yahoo! 5のつく日是否回到下一场准备；7/28 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否进入窗口。
```

```text
日期时间：2026-07-24 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示全会員対象、エントリー必要、1ショップ1,000円(税込)以上、買いまわり特典上限7,000ポイント和 2026/8/15 頃付与，继续 active；楽天 5と0のつく日页面显示当前未開催，页面仍指向上一场 7/20，下一场需 7/25 当天再核对。Yahoo! 5のつく日仍显示下一场 2026/07/25 00:00-23:59、当前エントリー期間外、要エントリー、指定支付 +4% 和上限 1,000 円相当，Yahoo 5 日条目继续 expired/等下一场。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、20%(1,571pt)、最短翌日お届け和 3,780円以上基本配送料550円無料。赤ちゃん本舗 3/8 日页面仍显示每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；7/23 场已在 7/24 09:59 结束，下一场等 7/28 10:00。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页仍显示 2026/6/26 10:00-7/22 09:59 限り、1,199円（税込）和购买入口；限时价已过期，继续 expired。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还 100%/5%/0.5%、本人确认和対象店舗条件。楽天姓名贴搜索结果仍显示 195 件相关结果，示例商品 1,480円、送料無料、1-3営業日発送。Yahoo! 超PayPay祭仍显示 7 月特集结束、9 月大型企画仅为观察。マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问，但本轮没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是赤ちゃん本舗 7/23 10:00-7/24 09:59 的 3/8 日积分窗口已过，不能继续写成“今天 10 点开始”或“当前可按 10 倍下单”，已改为等 7/28。楽天买回、LOHACO、西松屋、PayPay 和楽天姓名贴仍 active；Yahoo 5 日仍等 7/25；赤ちゃん本舗湿巾继续 expired。没有发现页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态仍为 6 条 active、2 条 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、赤ちゃん本舗、Yahoo!、Yahoo! 超PayPay祭、西松屋、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/25 当天复查 Yahoo! 5のつく日和楽天 5と0のつく日是否可エントリー；7/26 01:59 后复查楽天お買い物マラソン是否结束；7/28 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否进入窗口；继续寻找 Amazon、楽天、药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-23 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示全会員対象、エントリー必要、1ショップ1,000円(税込)以上、買いまわり特典上限7,000ポイント和 2026/8/15 頃付与，继续 active；楽天 5と0のつく日页面仍显示当前未開催，下一场等 7/25。Yahoo! 5のつく日仍显示下一场 2026/07/25 00:00-23:59、要エントリー、指定支付 +4% 和上限 1,000 円相当，Yahoo 5 日条目继续 expired/等下一场。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、カート可、20%(1,571pt) 和登录且全额 PayPay 支付条件。赤ちゃん本舗 3/8 日页面仍显示每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；7/23 07:33 复查时尚未到 10:00，仍写成等 10:00 后核对。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页仍可访问，并仍显示 1,199円（税込）和购买入口，但页面标注期间为 2026/6/26 10:00-7/22 09:59 限り，今天已超过该限时价窗口，因此改为 expired。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还 100%/5%/0.5%、本人确认和対象店舗条件。楽天姓名贴搜索结果仍显示 195 件相关商品、送料無料、1,480円等价格和発送目安。Yahoo! 超PayPay祭仍显示 7 月特集结束、9 月大型企画仅为观察。マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问，但本轮没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是赤ちゃん本舗 おしりナップ 1,199円限时价已超过 7/22 09:59，不能继续作为 active 优惠展示；已改为 expired，并提示后续必须重新按商品页/购物车核价。楽天买回、LOHACO、赤ちゃん本舗 3/8 日规则入口、西松屋、PayPay 和楽天姓名贴仍 active；Yahoo 5 日仍等 7/25。没有发现页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态变为 6 条 active、2 条 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、赤ちゃん本舗、Yahoo!、Yahoo! 超PayPay祭、西松屋、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/23 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否已经在商品页/结算页显示；7/25 当天复查 Yahoo! 5のつく日和楽天 5と0のつく日是否可エントリー；继续寻找 Amazon、楽天、药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-22 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示全会員対象、エントリー必要、1ショップ1,000円(税込)以上、買いまわり特典上限7,000ポイント和 8/15 頃付与，继续 active；今天 7/22 不是楽天 5と0のつく日，下一场等 7/25。Yahoo! 5のつく日仍显示下一场 2026/07/25 00:00-23:59、要エントリー、指定支付 +4% 和上限 1,000 円相当，Yahoo 5 日条目继续 expired/等下一场。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、カート可、20%(1,571pt) 和登录且全额 PayPay 支付条件。赤ちゃん本舗 3/8 日页面仍显示每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；今天不在窗口，下一场 7/23 10:00。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页在 07:31 仍显示 2026/6/26 10:00-7/22 09:59 限り、1,199円（税込）、買い物かごに入れる、1回1種類4点迄和 5,500円以上送料当社負担。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还 100%/5%/0.5%、本人确认和対象店舗条件。楽天姓名贴搜索结果仍显示 195 件相关商品、1,000-2,780円左右、送料無料和発送目安。Yahoo! 超PayPay祭仍显示 7 月特集结束、9 月大型企画仅为观察。マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问，但本轮没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是赤ちゃん本舗湿巾只剩 7/22 09:59 前的短窗口，已把说明收紧为过 09:59 后必须重新核价，不能继续沿用 1,199円限时价。楽天买回、LOHACO、赤ちゃん本舗 3/8 日规则入口、西松屋、PayPay 和楽天姓名贴仍 active；Yahoo 5 日仍等 7/25。没有发现页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 7 条 active、1 条 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、赤ちゃん本舗、Yahoo!、Yahoo! 超PayPay祭、西松屋、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/22 09:59 后再次复查赤ちゃん本舗 おしりナップ限时价，若 1,199円不再显示就立即改为 expired；7/23 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否进入窗口；7/25 当天复查 Yahoo! 5のつく日和楽天 5と0のつく日是否可エントリー；继续寻找 Amazon、楽天、药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-21 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign；Amazon.co.jp Deals https://www.amazon.co.jp/deals
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示全会員対象、エントリー必要、1ショップ1,000円(税込)以上、買いまわり特典上限7,000ポイント和 8/15 頃付与，继续 active；但楽天 5と0のつく日官方页显示当前未開催，7/20 场已过，因此今天不能再写成 5と0 日可叠加，下一场等 7/25。Yahoo! 5のつく日仍显示下一场 2026/07/25 00:00-23:59、要エントリー、指定支付 +4% 和上限 1,000 円相当，Yahoo 5 日条目继续 expired/等下一场。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、20%(1,571pt)、最大付与率30%、在庫あり、カート可、最短翌日お届け、3,780円以上で基本配送料 550円無料和 25,000円以上 1,000円OFF クーポン入口。赤ちゃん本舗 3/8 日页面仍显示每月 3/8 结尾日 10:00-次日09:59、対象カテゴリポイント10倍、Online Shop 限定；今天不在窗口，下一场 7/23 10:00。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页仍显示 2026/6/26 10:00-7/22 09:59 限り、1,199円（税込）、買い物かごに入れる、1回1種類4点迄、一般商品送料600円和 5,500円以上送料当社負担。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还 100%/5%/0.5%、本人确认和対象店舗条件。楽天姓名贴搜索结果仍显示 195 件相关商品、1,000-2,780円左右、送料無料和発送目安。マツキヨココカラ、ウエルシア、Amazon Deals 入口可访问，但本轮没有确认到可写入 verified 的新母婴单品价、券后条件、库存和配送。
可能影响：今天最重要变化是移除楽天 5と0のつく日 7/20 当天叠加语气；楽天买回本身仍 active。赤ちゃん本舗湿巾限时价仍 active，但明天 7/22 09:59 后必须重点复查并准备改状态。LOHACO、赤ちゃん本舗 3/8 日规则入口、西松屋、PayPay 和楽天姓名贴仍 active；Yahoo 5 日仍等 7/25。没有发现页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 7 条 active、1 条 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、赤ちゃん本舗、Yahoo!、西松屋、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/22 09:59 后复查赤ちゃん本舗 おしりナップ限时价是否结束，若价格不再成立及时改为 expired；7/23 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否进入窗口；7/25 当天复查 Yahoo! 5のつく日和楽天 5と0のつく日是否可エントリー；继续寻找 Amazon、楽天、药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-20 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；楽天市場 5と0のつく日 https://event.rakuten.co.jp/card/pointday/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示活动进行中、エントリー必要、1ショップ1,000円(税込)以上、買いまわり特典上限7,000ポイント和 8/15 頃付与；7/20 已过 7/19 20:00 ポイントアップ开始时间，因此楽天尿不湿/湿巾买回和楽天姓名贴从“先准备”改为“可按商品页和结算页核对”。楽天 5と0のつく日官方页显示 2026/7/20 00:00-23:59、開催日ごとにエントリー必要、楽天カード利用でポイント4倍、月間獲得上限1,000ポイント，可作为当天叠加核对点。Yahoo! 5のつく日仍显示下一场 2026/07/25 00:00-23:59，Yahoo 5 日条目继续 expired/等下一场。LOHACO パンパース Big 码商品页仍显示 8,630円（税込）、64枚×3パック、在庫あり、カート可、最短翌日お届け、3,780円以上で基本配送料 550円無料和 20%(1,571pt)。赤ちゃん本舗 3/8 日页面仍可访问，但 7/18 场已在 7/19 09:59 结束，下一场等 7/23 10:00。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页仍显示 2026/6/26 10:00-7/22 09:59 限り、1,199円（税込）、買い物かごに入れる、1回1種類4点迄。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还条件。楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。マツキヨココカラ/ウエルシア入口可访问，但本轮没有确认到可写入 verified 的具体母婴单品价、券后条件和库存。
可能影响：今天最重要变化是楽天买回已从准备期进入实际核对期，且 7/20 可叠加核对楽天 5と0のつく日；赤ちゃん本舗 3/8 日当前不在积分 10 倍窗口，必须改成等 7/23，避免用户误以为今天仍可按 10 倍积分下单。LOHACO、赤ちゃん本舗湿巾、西松屋和 PayPay 仍 active；Yahoo 5 日仍等 7/25。没有发现页面失效、商品下架或需要改为 unavailable 的条目。没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 7 条 active、1 条 expired。同步更新 data/shopping-calendar.json 的楽天买回、楽天 5と0 日、赤ちゃん本舗、Yahoo!、西松屋、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/22 09:59 后复查赤ちゃん本舗 おしりナップ限时价是否结束；7/23 10:00 后复查赤ちゃん本舗対象カテゴリ积分是否进入窗口；7/25 当天复查 Yahoo! 5のつく日是否可エントリー；继续寻找 Amazon、楽天、药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-19 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；マツキヨココカラオンラインストア https://www.matsukiyococokara-online.com/store/；ウエルシアキャンペーン https://www.welcia-yakkyoku.co.jp/campaign
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页仍显示エントリー期間 2026/7/17 10:00-7/26 01:59、ポイントアップ期間 2026/7/19 20:00-7/26 01:59、1ショップ1,000円(税込、送料別、クーポン適用後)以上、買いまわり特典上限 7,000 ポイント和 8/15 頃付与；7/19 07:32 还没到 20:00，楽天尿不湿/湿巾买回和楽天姓名贴保持 active 但继续写成先エントリー/先筛规格。Yahoo! 5のつく日仍显示下一场 2026/07/25 00:00-23:59、ただいまエントリー期間外，Yahoo 5 日条目继续 expired。Yahoo! 超PayPay祭仍開催期間外、特集終了，6/26-7/12 已结束，只保留 9 月大型企画观察。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可、最短翌日お届け和 3,780 円以上で基本配送料 550 円無料。赤ちゃん本舗 3/8 日页面仍可访问，7/19 07:32 仍在 7/18 10:00-7/19 09:59 窗口内，之后需等 7/23 10:00。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页仍显示 2026/6/26 10:00-7/22 09:59 限り、1,199円（税込）、買い物かごに入れる、1回1種類4点迄、一般商品送料 600 円和 5,500円以上送料当社負担。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11，并有 7/16 更新信息。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还条件。楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。マツキヨココカラ/ウエルシア官方入口可访问，但本轮没有确认到可写入 verified 的具体母婴单品价、券后条件和库存。
可能影响：今天的重点是时间语气更新：楽天买回仍需等 7/19 20:00 后再按商品页和结算页内訳下单；赤ちゃん本舗 3/8 日只到 7/19 09:59，过后不能继续按本场积分推荐。LOHACO 和赤ちゃん本舗湿巾仍 active；Yahoo 5 日仍等 7/25；没有发现页面失效、商品下架或需要改为 unavailable 的条目。没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；状态保持 7 条 active、1 条 expired。同步更新 data/shopping-calendar.json 的楽天、赤ちゃん本舗、Yahoo! 超PayPay祭、西松屋、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/19 20:00 后复查楽天买回是否已进入ポイントアップ窗口，并寻找尿不湿/湿巾/姓名贴具体商品页；7/19 09:59 后避免继续按赤ちゃん本舗 7/18 场次引导下单，下一场等 7/23 10:00；7/22 09:59 后复查赤ちゃん本舗 おしりナップ限时价是否结束；7/25 当天复查 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-07-18 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 8 条 verified 优惠。楽天お買い物マラソン官方页已切到新一轮，显示エントリー期間 2026/7/17 10:00-7/26 01:59、ポイントアップ期間 2026/7/19 20:00-7/26 01:59、1ショップ1,000円(税込、送料別、クーポン適用後)以上和買いまわり特典上限 7,000 ポイント；因此楽天尿不湿/湿巾买回和楽天姓名贴从 expired 改为 active 但只写成先エントリー/先筛规格，提醒 7/19 20:00 前不要按买回倍率下单。Yahoo! 5のつく日官方页仍显示下一场 2026/07/25 00:00-23:59、当前エントリー期間外，Yahoo 5 日条目继续 expired。Yahoo! 超PayPay祭页仍显示開催期間外、特集終了，開催期間为 6/26 12:00-7/12 25:59，并有 9 月起大型企画告知；只记录为观察信号。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可、最短翌日お届け和 3,780 円以上で基本配送料 550 円無料。赤ちゃん本舗 3/8 日页面仍可访问，今天 7/18 已进入 10:00-次日 09:59 活动窗口，但具体商品仍需看対象カテゴリ和结算页积分。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页仍显示 2026/6/26 10:00-7/22 09:59 限り、1,199円（税込）、買い物かごに入れる、1回1種類4点迄和 5,500円以上送料当社負担说明。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认、抽选返还档位和対象店舗。楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和配送提示。
可能影响：今天的主要变化是楽天新一轮买回已公开、赤ちゃん本舗 3/8 日进入当天窗口；但都不能直接写成固定商品低价。LOHACO 和赤ちゃん本舗湿巾仍 active，需继续提醒登录/购物车/结算页确认。没有发现页面失效或商品下架；没有新增具备具体商品页、明确价格/条件、库存/配送和来源的全新 verified 商品。
是否已更新到站点：已更新 data/deals.json 中 8 条 verified 的 updatedAt 和复查说明；楽天尿不湿/湿巾买回、楽天姓名贴从 expired 改为 active 准备状态；赤ちゃん本舗 3/8 日改为 7/18 当天确认；其余状态按复查结果保持。同步更新 data/shopping-calendar.json 的楽天、赤ちゃん本舗、Yahoo!、西松屋、PayPay 更新时间与注意事项。未新增商品级优惠。
下一步：7/19 20:00 后复查楽天买回是否已进入ポイントアップ窗口，并寻找尿不湿/湿巾/姓名贴具体商品页；7/22 09:59 后复查赤ちゃん本舗 おしりナップ限时价是否结束；7/25 当天复查 Yahoo! 5のつく日是否可エントリー；继续从 Amazon、楽天、药妆店等官方来源寻找具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-17 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ おしりナップ商品页 https://shop.akachan.jp/shop/g/g240855500/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 7 条既有 verified 优惠，并新增 1 条赤ちゃん本舗商品页级湿巾优惠。楽天お買い物マラソン官方页仍显示「お買い物マラソンは終了しました」，两条楽天买回相关优惠继续 expired。Yahoo! 5のつく日官方页仍显示下一场 2026/07/25 00:00-23:59、当前エントリー期間外，Yahoo 5 日条目继续 expired。Yahoo! 超PayPay祭页仍显示開催期間外、特集終了，開催期間为 6/26 12:00-7/12 25:59。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可、最短翌日お届け和 3,780 円以上基本配送料無料。赤ちゃん本舗 3/8 日页面仍可访问，今天 7/17 不是活动窗口，下一场等 7/18 10:00。赤ちゃん本舗 おしりナップ厚手 80枚×12パック商品页显示 2026/6/26 10:00-7/22 09:59 限り、1,199円（税込）、買い物かごに入れる、1回1種類4点迄和 5,500円以上送料当社負担说明。西松屋首页仍显示チラシ/ミミコレ 7/16-7/28、月間奉仕品 7/16-8/11。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还档位。楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和配送提示，但買い物マラソン已结束。
可能影响：既有优惠没有发现需要改为 unavailable 的页面失效或商品下架。LOHACO 商品仍 active，但只能按商品页实时内訳比价，不叠加已结束活动。新增赤ちゃん本舗湿巾可作为 verified active 商品级优惠，但必须提醒单买送料、5,500 円免运门槛和 1 回 4 点上限，避免为了凑单或囤货误买。
是否已更新到站点：已更新 data/deals.json 中 7 条既有 verified 的 updatedAt 和 verificationScope，并新增 akachan-oshirinap-thick-wipes-12pack 为 verified active。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未把 Amazon 或药妆店未确认线索写成确定优惠。
下一步：7/18 10:00 后复查赤ちゃん本舗対象カテゴリ积分；7/22 09:59 后复查赤ちゃん本舗 おしりナップ限时价是否结束；7/25 当天复查 Yahoo! 5のつく日是否可エントリー；继续从 Amazon、楽天、药妆店等官方来源寻找具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-16 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 7 条 verified 优惠。楽天お買い物マラソン官方页仍显示「お買い物マラソンは終了しました」，两条楽天买回相关优惠继续 expired。Yahoo! 5のつく日官方页已切换到下一场 2026/07/25 00:00-23:59，当前为エントリー期間外，因此 Yahoo 5 日条目从 active 改回 expired/等下一场。Yahoo! 超PayPay祭页仍显示開催期間外、特集終了，開催期間为 6/26 12:00-7/12 25:59。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可、最短翌日お届け和 3,780 円以上基本配送料無料；但今天不能沿用超PayPay祭或 7/15 5のつく日条件，只作为商品页比价候选。赤ちゃん本舗 3/8 日页面仍可访问，今天 7/16 不是活动窗口，下一场等 7/18 10:00。西松屋首页已公开 7/16 新セール入口：チラシ/ミミコレ 7/16-7/28，月間奉仕品 7/16-8/11；但未确认具体母婴单品价和库存。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还档位。楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和配送提示，但買い物マラソン已结束。
可能影响：必须把 Yahoo 5のつく日从昨天活动中改回等待 7/25，避免用户误以为今天仍可エントリー。西松屋新活动入口已公开，可从 expired 改为 active，但只能写成按清单核对入口，不能写成具体单品优惠。LOHACO 商品仍 active，但今天只按商品页实时价格/ポイント/配送比价，不叠加已结束活动。没有发现商品页失效或需要改为 unavailable 的条目。
是否已更新到站点：已更新 data/deals.json 中 7 条 verified 的 updatedAt 和 verificationScope；Yahoo! 5のつく日改为 expired，西松屋改为 active，LOHACO、赤ちゃん本舗、PayPay 保持 active，楽天买回、楽天姓名贴保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/18 10:00 后复查赤ちゃん本舗対象カテゴリ积分；7/25 当天复查 Yahoo! 5のつく日是否可エントリー；继续从西松屋新チラシ、Amazon、药妆店等官方来源寻找具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-15 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；Amazon Prime Day / Deals 入口 https://www.amazon.co.jp/primeday
主题：复查 data/deals.json 的 7 条 verified 优惠。楽天お買い物マラソン官方页仍显示「お買い物マラソンは終了しました」，两条楽天买回相关优惠继续 expired。Yahoo! 5のつく日官方页显示 2026/07/15 00:00-23:59 当天场次、要エントリー、エントリー後注文が対象、指定支付 +4%、上限 1,000 円相当和期间限定 PayPay ポイント，因此 Yahoo 5 日条目从 expired 改为 active。Yahoo! 超PayPay祭页仍显示開催期間外、特集終了，開催期間为 6/26 12:00-7/12 25:59。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可、最短翌日お届け和 3,780 円以上基本配送料無料，可作为今天 5のつく日重新比价候选，但不能沿用超PayPay祭本番 BONUS。赤ちゃん本舗 3/8 日页面仍可访问，规则仍为 3/8 结尾日 10:00 至次日 09:59，但今天 7/15 不是活动窗口，下一场等 7/18 10:00。西松屋首页显示「ただいま準備中です」「次回のセールは 7/16[木]から」，7/2-7/14 旧活动不应继续 active。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还档位。楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和配送提示，但買い物マラソン已结束。Amazon Prime Day / Deals 入口可访问，但本轮未确认到可写入 verified 的日本母婴具体单品价格、库存和券后条件。
可能影响：必须把 Yahoo 5のつく日改为今天可核对，同时提醒エントリー前订单不计入、指定支付和期间限定ポイント；西松屋旧活动必须改为 expired，避免用户按 7/14 前价格判断。LOHACO 商品仍 active，但今天只可按商品页实时内訳和 5のつく日结算页确认，不可叠加已结束的超PayPay祭条件。赤ちゃん本舗保持规则型 active，但今天只做 7/18 准备。没有发现商品页失效或需要改为 unavailable 的条目。
是否已更新到站点：已更新 data/deals.json 中 7 条 verified 的 updatedAt 和 verificationScope；Yahoo! 5のつく日改为 active，西松屋改为 expired，LOHACO、赤ちゃん本舗、PayPay 保持 active，楽天买回、楽天姓名贴保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/16 复查西松屋新セール是否公开且是否有具体母婴单品价格；7/18 10:00 后复查赤ちゃん本舗対象カテゴリ积分；7/16 后确认 Yahoo! 5のつく日是否应回到 expired/等 7/25；继续寻找 Amazon/药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-14 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/；Amazon.co.jp Prime Day / Deals 入口 https://www.amazon.co.jp/primeday
主题：复查 data/deals.json 的 7 条 verified 优惠。楽天お買い物マラソン官方页仍显示「お買い物マラソンは終了しました」，两条楽天买回相关优惠继续 expired。Yahoo! 5のつく日官方页仍显示下一场 2026/7/15 00:00-23:59，当前为エントリー期間外，要エントリー、指定支付 +4%、上限 1,000 円相当和期间限定 PayPay ポイント，Yahoo 5 日条目继续 expired/等明天。Yahoo! 超PayPay祭页仍显示開催期間外、特集終了，開催期間为 6/26 12:00-7/12 25:59。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、20%(1,571pt)、在庫あり、カート可、最短翌日お届け和 3,780 円以上基本配送料無料，但不能沿用已结束的超PayPay祭 BONUS。赤ちゃん本舗 3/8 日页面仍可访问，7/14 07:32 时仍在 7/13 10:00-7/14 09:59 窗口内；过 09:59 后需等 7/18 10:00 下一场。西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品 6/18-7/14，今天是当前活动最后一天。PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还档位。楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和配送提示。Amazon Prime Day / Deals 入口可访问，但本轮未确认到可写入 verified 的日本母婴具体单品价格、库存和券后条件。
可能影响：LOHACO 商品仍可作为 verified active 的商品页比价线索；赤ちゃん本舗在 7/14 09:59 前仍可按当前窗口核对対象カテゴリ和结算页积分，之后要等 7/18；西松屋今天只适合最后一天按清单补基础款。没有发现页面失效、商品下架或需要改为 unavailable 的条目。Amazon 只记录为观察信号，不写入商品级优惠。
是否已更新到站点：已更新 data/deals.json 中 7 条 verified 的 updatedAt 和 verificationScope；LOHACO、赤ちゃん本舗、西松屋、PayPay 保持 active，楽天买回、楽天姓名贴、Yahoo! 5のつく日保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/15 当天复查 Yahoo! 5のつく日是否可エントリー；7/14 后复查西松屋当前チラシ/ミミコレ/月間奉仕品是否结束或切换新活动；7/18 10:00 后复查赤ちゃん本舗下一场対象カテゴリ积分；继续寻找 Amazon/药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-13 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 7 条 verified 优惠。楽天お買い物マラソン官方页仍显示「お買い物マラソンは終了しました」，两条楽天买回相关优惠继续 expired。Yahoo! 5のつく日官方页仍显示下一场 2026/7/15 00:00-23:59，当前为エントリー期間外，Yahoo 5 日条目继续 expired。Yahoo! 超PayPay祭页显示当前開催期間外、特集終了，開催期間为 6/26 12:00-7/12 25:59。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック販売単位，登录且全额 PayPay 支付时预计 20%(1,571pt)，但不能再沿用 7/10-7/12 超PayPay祭 BONUS 条件。赤ちゃん本舗 3/8 日页面仍可访问，今天 7/13 是活动日，但 07:32 复查时未到 10:00，需 10:00 后再确认商品页/结算页积分。西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品 6/18-7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还档位；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和配送提示。
可能影响：LOHACO 商品仍可作为 verified active 的商品页比价线索，但必须把超PayPay祭本番 BONUS 从今天可用条件中移除，按商品页实时ポイント、配送和地区库存重新判断。Yahoo! 超PayPay祭日历需切为已结束/观察。赤ちゃん本舗今天 10:00 后可复查対象カテゴリ和结算页积分，当前不能提前写成已生效。没有发现页面失效、商品下架或需要改为 unavailable 的条目。
是否已更新到站点：已更新 data/deals.json 中 7 条 verified 的 updatedAt 和 verificationScope；LOHACO、赤ちゃん本舗、西松屋、PayPay 保持 active，楽天买回、楽天姓名贴、Yahoo! 5のつく日保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/13 10:00 后可再次复查赤ちゃん本舗対象カテゴリ积分；7/15 当天复查 Yahoo! 5のつく日是否可エントリー；7/14 后复查西松屋 7/2-7/14 活动是否结束；继续寻找 Amazon/药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-12 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 7 条 verified 优惠。楽天お買い物マラソン官方页仍显示「お買い物マラソンは終了しました」，两条楽天买回相关优惠继续 expired。Yahoo! 5のつく日官方页仍显示下一场 2026/7/15 00:00-23:59，当前为エントリー期間外，Yahoo 5 日条目继续 expired。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可用、最短翌日お届け和 3,780 円以上基本配送料無料。Yahoo! 超PayPay祭活动页仍显示 7/10-7/12 本番，BONUS 商品合计 5,000 円以上 +4%、20,000 円以上 +7%、该项上限 7,000 円相当/期间；今天 7/12 是本番最后一天。赤ちゃん本舗 3/8 日页面仍可访问，但今天 7/12 不是活动日，下一场为 7/13 10:00 起。西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认和抽选返还档位；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和配送提示。
可能影响：LOHACO パンパース仍可作为 verified active，但必须突出 7/12 是超PayPay祭本番最后一天，最终ポイント、BONUS、クーポン和地区库存仍要登录后在商品页/购物车确认；7/13 后不能沿用本番条件。赤ちゃん本舗需从 7/11 文案改成 7/12 不是活动日、明天 7/13 10:00 后再确认。没有发现页面失效、商品下架或需要改为 unavailable 的条目。
是否已更新到站点：已更新 data/deals.json 中 7 条 verified 的 updatedAt 和 verificationScope；LOHACO、赤ちゃん本舗、西松屋、PayPay 保持 active，楽天买回、楽天姓名贴、Yahoo! 5のつく日保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/13 后确认 Yahoo! 超PayPay祭是否结束并处理 LOHACO 条目状态；7/13 10:00 后复查赤ちゃん本舗対象カテゴリ积分；7/15 当天复查 Yahoo! 5のつく日是否可エントリー；继续寻找 Amazon/药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-11 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 7 条 verified 优惠。楽天お買い物マラソン官方页已显示「お買い物マラソンは終了しました」，本轮 7/4 20:00-7/11 01:59 买回窗口已过；楽天尿不湿/湿巾买回和楽天姓名贴买回都不应继续作为 active 展示。Yahoo! 5のつく日官方页仍显示下一场 2026/7/15 00:00-23:59，当前为エントリー期間外；Yahoo 5 日条目继续 expired/等下一场。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可用、最短翌日お届け和 3,780 円以上基本配送料無料。Yahoo! 超PayPay祭活动页仍显示 7/10-7/12 本番、BONUS 商品合计 5,000 円以上 +4%、20,000 円以上 +7%、该项上限 7,000 円相当/期间。赤ちゃん本舗 3/8 日页面仍可访问，但今天 7/11 不是活动日，下一场为 7/13 10:00 起。西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上和本人确认等条件；楽天姓名贴搜索结果仍显示相关商品、价格和送料無料等信息。
可能影响：必须把 `rakuten-marathon-diaper-wipes` 和 `rakuten-name-sticker-marathon` 的 availabilityStatus 改为 expired，并同步修改 note、whyWorthBuying、skipWhen、updatedAt 等字段，避免用户误以为今天仍可按本轮买回返点下单。LOHACO 商品仍可作为 verified active，但最终ポイント、BONUS、クーポン和地区库存仍要登录后到商品页/购物车确认；1,000 円OFF クーポン仍要求商品合计 25,000 円以上，不能默认单买可用。
是否已更新到站点：已更新 data/deals.json 中 7 条 verified 的 updatedAt 和 verificationScope；两条楽天买回相关优惠改为 expired，LOHACO、赤ちゃん本舗、西松屋、PayPay 保持 active，Yahoo! 5のつく日保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、Yahoo! 5のつく日、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/12 后确认 Yahoo! 超PayPay祭是否结束并处理 LOHACO 条目状态；7/13 10:00 后复查赤ちゃん本舗対象カテゴリ积分；7/15 当天复查 Yahoo! 5のつく日是否可エントリー；继续寻找 Amazon/药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-10 07:34 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 7 条 verified 优惠。楽天お買い物マラソン官方页仍显示エントリー必要、1ショップ1,000円(税込)以上、7,000ポイント上限、対象期間中エントリー和 2026/8/15 左右付与；楽天尿不湿/湿巾买回和姓名贴买回继续 active。Yahoo! 5のつく日官方页仍显示下一场 2026/7/15，当前为エントリー期間外；Yahoo 5 日条目继续 expired/等下一场。LOHACO パンパース Big 码商品页仍显示 8,630 円（税込）、64枚×3パック、20%(1,571pt)、在庫あり、カート可用、最短翌日お届け和 3,780 円以上基本配送料無料。Yahoo! 超PayPay祭活动页显示 7/10-7/12 本番、BONUS 商品合计 5,000 円以上 +4%、20,000 円以上 +7%、该项上限 7,000 円相当/期间。赤ちゃん本舗 3/8 日页面仍可访问，但今天 7/10 不是活动日，下一场为 7/13 10:00 起。西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上和抽选返还档位；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。
可能影响：今天没有发现需要把 active 条目改为 expired/unavailable 的页面失效、下架或价格不成立。LOHACO 商品仍可作为 verified active，但最终ポイント、BONUS、クーポン和地区库存仍要登录后到商品页/购物车确认；1,000 円OFF クーポン仍要求商品合计 25,000 円以上，不能默认单买可用。Yahoo! 超PayPay祭已进入本番，适合把日历从“准备”改为“当天确认”。
是否已更新到站点：已更新 data/deals.json 中 7 条 verified 的 updatedAt、verificationScope 和相关说明；同步更新 data/shopping-calendar.json 的楽天、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、Yahoo! 5のつく日、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/11 01:59 后确认楽天买回是否结束，并及时把相关楽天条目改为 expired；7/13 10:00 后复查赤ちゃん本舗対象カテゴリ积分；7/15 当天复查 Yahoo! 5のつく日是否可エントリー；继续寻找 Amazon/药妆店等具备具体商品页、价格、库存和条件的母婴单品。
```

```text
日期时间：2026-07-09 07:34 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；LOHACO パンパース商品页 https://lohaco.yahoo.co.jp/store/h-lohaco/item/ek09918/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条既有 verified 优惠，并新增 1 条可核验商品页优惠。楽天お買い物マラソン官方页仍显示 1ショップ1,000円(税込)以上、7,000ポイント上限、対象期間中エントリー和 2026/8/15 左右付与；楽天尿不湿/湿巾买回和姓名贴买回继续 active。Yahoo! 5のつく日官方页仍显示下一场 2026/7/15，当前不是活动窗口；Yahoo 5 日条目继续 expired/等下一场。赤ちゃん本舗 3/8 日页面仍可访问，但今天 7/9 不是活动日，下一场为 7/13 10:00 起。西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上和抽选返还档位；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。Yahoo! 超PayPay祭活动页的注目ポイントアップ商品已能跳到 LOHACO パンパース Big 码商品页，商品页显示 8,630 円（税込）、64枚×3パック、在庫あり、最短翌日お届け、3,780 円以上基本配送料無料和登录/全额 PayPay 支付时预计 20%(1,571pt)。
可能影响：既有 active 条目没有发现页面失效或需要改为 unavailable；赤ちゃん本舗需要从“7/8 今天活动日”改为“下一场 7/13”。LOHACO パンパース Big 码具备具体商品页、价格、库存、配送和来源，可新增为 verified active；但ポイント、期間限定比例、クーポン和地区库存仍要登录后到商品页/购物车确认，不能写成无条件现金折扣。页面上的 1,000 円OFF クーポン要求商品合计 25,000 円以上，不能默认单买可用。
是否已更新到站点：已更新 data/deals.json 中既有 6 条 verified 的 updatedAt 和 verificationScope；新增 lohaco-pampers-big-super-paypay。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、Yahoo! 5のつく日、PayPay 更新时间与注意事项。
下一步：7/10 活动开始后复查 LOHACO パンパース商品页是否仍有库存、BONUS/ポイント内訳是否成立；7/11 后确认楽天买回是否结束；7/13 10:00 后复查赤ちゃん本舗対象カテゴリ积分；7/15 当天复查 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-07-08 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング 超PayPay祭 https://shopping.yahoo.co.jp/promotion/sale/ppf/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン官方页仍显示 2026/7/4 20:00-7/11 01:59、1ショップ1,000円(税込)以上、7,000ポイント上限和 2026/8/15 左右付与；楽天尿不湿/湿巾买回和姓名贴买回继续 active。Yahoo! 5のつく日官方页仍是下一场 2026/7/15，当前不是活动窗口；Yahoo 条目继续 expired/等下一场。赤ちゃん本舗 3/8 日页面仍可访问，今天 7/8 是活动日但 07:32 复查时需等 10:00 后确认対象カテゴリ和结算页积分。西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还和対象外说明；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。Yahoo! 超PayPay祭单独活动页已公开，显示 7/10-7/12 本番、BONUS 商品合计 5,000 日元以上 +4%、20,000 日元以上 +7%、该项上限 7,000 円相当/期间。
可能影响：今天没有发现需要把 active 条目改为 expired/unavailable 的页面失效或条件失效；Yahoo! 5のつく日仍不能写成今天可参加。赤ちゃん本舗今天 10:00 后可作为活动日确认，但不能在 10:00 前写成结算页积分已生效。Yahoo! 超PayPay祭已从预告入口升级为官方活动页，但仍缺少具体母婴商品页、库存、券后价和购物车内訳，因此只更新日历，不新增商品级优惠。
是否已更新到站点：已更新 data/deals.json 中 6 条 verified 的 updatedAt 和 verificationScope；5 条保持 active，Yahoo! 5のつく日保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/10 起复查 Yahoo! 超PayPay祭本番期间対象ストア、BONUS 商品和具体母婴商品页；7/11 后确认楽天买回是否结束；7/15 当天复查 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-07-07 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング お得ガイド https://shopping.yahoo.co.jp/promotion/campaign/guide/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン官方页仍显示ポイントアップ期間 2026/7/4 20:00-7/11 01:59、1ショップ1,000円(税込、送料別、券后)以上、エントリー必要、7,000ポイント上限和 2026/8/15 左右付与；楽天尿不湿/湿巾买回和姓名贴买回继续 active。Yahoo! 5のつく日官方页仍是下一场 2026/7/15，当前不是活动窗口；Yahoo 条目继续 expired/等下一场。赤ちゃん本舗 3/8 日页面仍可访问并能确认対象カテゴリ积分规则入口；西松屋首页仍显示チラシ/ミミコレ 7/2-7/14、月間奉仕品到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还和対象外说明；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。Yahoo! お得ガイド仍显示 7/10-7/12 超PayPay祭预告。
可能影响：今天没有发现需要把 active 条目改为 expired/unavailable 的页面失效或条件失效；Yahoo! 5のつく日仍不能写成今天可参加。Yahoo! 超PayPay祭仍是活动预告，缺少具体母婴商品页、库存、券后价和结算内訳，因此只保留日历准备提醒。
是否已更新到站点：已更新 data/deals.json 中 6 条 verified 的 updatedAt 和 verificationScope；5 条保持 active，Yahoo! 5のつく日保持 expired。同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/10 起复查 Yahoo! 超PayPay祭正式活动页、対象ストア和具体母婴商品页；7/11 后确认楽天买回是否结束；7/15 当天复查 Yahoo! 5のつく日是否可エントリー。
```

```text
日期时间：2026-07-06 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング お得ガイド https://shopping.yahoo.co.jp/promotion/campaign/guide/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン官方页仍显示买回进行中、1ショップ1,000円(税込)以上、7,000ポイント上限、対象期間中エントリー和 2026/8/15 左右付与说明；楽天尿不湿/湿巾买回和姓名贴买回继续 active。Yahoo! 5のつく日官方页已切换到下一场 2026/7/15 00:00-23:59，7/5 场次已结束，因此 Yahoo 条目不应继续展示为今天可参加，已改为 expired/等下一场。赤ちゃん本舗 3/8 日页面仍可访问并能看到母婴対象カテゴリ入口；西松屋首页仍显示チラシ/ミミコレ 2026/7/2-7/14、月間奉仕品到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还和対象外说明；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。Yahoo! お得ガイド仍显示 7/10-7/12 超PayPay祭预告。
可能影响：今天最重要的是把 Yahoo! 5のつく日从 7/5 当天可参加改回下一场准备，避免用户误以为仍可エントリー。楽天买回仍可作为活动中提醒，但没有确认具体尿不湿/湿巾 SKU 的券后价、库存、送料和ポイント内訳；Yahoo! 超PayPay祭仍只适合日历准备，不适合写成商品级优惠。
是否已更新到站点：已更新 data/deals.json 中 6 条 verified 的 updatedAt 和 verificationScope；Yahoo! 5のつく日 availabilityStatus 改为 expired，并同步修改 note、whyWorthBuying、skipWhen、购买步骤和展示标签；同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、Yahoo! 超PayPay祭、西松屋、赤ちゃん本舗、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/10 前继续等待 Yahoo! 超PayPay祭正式活动页/対象商品确认；7/15 当天复查 Yahoo! 5のつく日是否可エントリー；楽天买回期间如继续找商品，只新增具备具体商品页、明确价格/券后条件、库存/配送和来源的母婴单品。
```

```text
日期时间：2026-07-05 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋チラシ・セール https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン官方页仍显示买回进行中、1ショップ1,000円(税込)以上、7,000ポイント上限和 2026/8/15 左右付与说明；因此楽天尿不湿/湿巾买回和姓名贴买回继续 active，但从“先准备”改成“活动中按商品页和结算页内訳判断”。Yahoo! 5のつく日官方页已进入 2026/7/5 00:00-23:59 场次，显示需要エントリー、エントリー后订单为对象、指定支付 +4% 和 1,000 円相当上限；因此 Yahoo 条目从 expired 改回 active。赤ちゃん本舗 3/8 日页面仍可访问；西松屋 7/2-7/14 チラシ/ミミコレ和 6/18-7/14 月間奉仕品入口仍可确认；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还和 10 万点上限；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。
可能影响：7/5 当天 Yahoo! 5のつく日可以作为“今天可参加”的活动日提醒，但仍没有确认具体尿不湿/湿巾箱购 SKU 的价格、库存和最终 PayPay 内訳；楽天买回已进入下单窗口，但也不能新增单品级 verified 优惠，除非能确认具体商品页、券后价、送料、库存和来源。
是否已更新到站点：已更新 data/deals.json 中 6 条 verified 的 updatedAt、verificationScope 和状态说明；Yahoo! 5のつく日 availabilityStatus 改为 active；同步更新 data/shopping-calendar.json 的楽天、Yahoo! 5のつく日、西松屋、赤ちゃん本舗、Yahoo! 超PayPay祭、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/5 当天如继续更新，重点只查 Yahoo! 具体箱购商品是否有可核验价格/库存/内訳；7/10 前继续等待 Yahoo! 超PayPay祭正式対象ストア/商品确认；楽天买回期间继续寻找纸尿裤/湿巾具体 SKU 的商品页级好价。
```

```text
日期时间：2026-07-04 07:33 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング お得ガイド https://shopping.yahoo.co.jp/promotion/campaign/guide/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋チラシ・セール https://www.24028.jp/tenpo/flier/gentei.php；西松屋月間奉仕品 https://www.24028-net.jp/category/MONTHLY/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン官方页仍显示エントリー期間 2026/7/2 10:00 - 7/11 01:59、ポイントアップ期間 2026/7/4 20:00 - 7/11 01:59、1ショップ1,000円(税込、券后、送料别)以上和7,000ポイント上限；因此楽天尿不湿/湿巾买回和姓名贴买回继续保留 active，但强调 7/4 20:00 前只做清单和エントリー。Yahoo! 5のつく日仍显示下一场 2026/7/5 00:00-23:59，当前为エントリー期間外，并继续说明 2026/7/1 起ヤフーショッピング商品券利用分不再作为付与対象。赤ちゃん本舗 3/8 日页面仍可访问；西松屋 7/2-7/14 チラシ/ミミコレ和 6/18-7/14 月間奉仕品入口仍可确认；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、抽选返还和 10 万点上限；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。
可能影响：今天重点是把已核验优惠从 7/3 复查状态推进到 7/4 当日判断。楽天买回即将进入真正下单窗口，但仍没有确认具体纸尿裤/湿巾 SKU 的实时券后价、库存和送料；Yahoo! 7/5 和 7/10 超PayPay祭仍只适合日历提醒，不适合写成商品级优惠。
是否已更新到站点：已更新 data/deals.json 中 6 条 verified 的 updatedAt、verificationScope 和 7/4 当日措辞；同步更新 data/shopping-calendar.json 的楽天、西松屋、赤ちゃん本舗、Yahoo! 5のつく日、Yahoo! 超PayPay祭、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/4 20:00 后复查楽天买回是否出现可确认的纸尿裤/湿巾具体 SKU 价格、库存、送料和ポイント内訳；7/5 当天复查 Yahoo! 5のつく日是否可エントリー；7/10 前继续等待 Yahoo! 超PayPay祭正式対象ストア/商品确认。
```

```text
日期时间：2026-07-03 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング お得ガイド https://shopping.yahoo.co.jp/promotion/campaign/guide/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；西松屋ミミコレ https://www.24028.jp/tenpo/flier/gentei.php；西松屋月間奉仕品 https://www.24028-net.jp/category/MONTHLY/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン官方页已切换到新一轮：エントリー期間 2026/7/2 10:00 - 7/11 01:59，ポイントアップ期間 2026/7/4 20:00 - 7/11 01:59，1ショップ1,000円(税込)以上、7,000ポイント上限；因此尿不湿/湿巾买回和姓名贴买回两条不应继续写成“本轮已结束”，已改为先エントリー、7/4 20:00 后再核对商品页。Yahoo! 5のつく日仍显示下一场 2026/7/5 00:00-23:59，当前为エントリー期間外；赤ちゃん本舗 3/8 日页面仍可访问；西松屋 7/2-7/14 ミミコレ/月間奉仕品入口仍可访问；PayPayスクラッチ仍显示 2026/6/19-7/31 规则；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。
可能影响：楽天买回从“等下一轮”变成“本轮可提前エントリー、7/4 晚上后再买”；但仍没有确认具体尿不湿、湿巾或姓名贴 SKU 的实时价格、库存、送料和券后条件，不能新增单品级 verified 优惠。Yahoo! 7/5、Yahoo! 7/10 超PayPay祭仍只适合日历提醒和提前准备。
是否已更新到站点：已更新 data/deals.json 中 6 条 verified 的核验日期/范围；将两条楽天相关优惠改为 active，并明确 7/4 20:00 前只做清单和エントリー；同步更新 data/shopping-calendar.json 的楽天买回、Yahoo! 5のつく日、Yahoo! 超PayPay祭、赤ちゃん本舗、西松屋、PayPay 更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/4 20:00 后复查楽天买回是否出现可确认的纸尿裤/湿巾具体 SKU 价格、库存、送料和积分内訳；7/5 当天复查 Yahoo! 5のつく日是否可エントリー；7/10 前继续等待 Yahoo! 超PayPay祭正式対象ストア/商品确认。
```

```text
日期时间：2026-07-02 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング お得ガイド https://shopping.yahoo.co.jp/promotion/campaign/guide/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；西松屋ミミコレ https://www.24028.jp/tenpo/flier/gentei.php；西松屋月間奉仕品 https://www.24028-net.jp/category/MONTHLY/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン仍显示本轮已结束；Yahoo! 5のつく日仍显示下一场 2026/7/5 00:00-23:59 且当前为エントリー期间外，并继续提示 2026/7/1 起ヤフーショッピング商品券利用分不再作为付与対象；赤ちゃん本舗 3/8 日页面仍可访问；西松屋 7/2 新チラシ「夏休み直前セール」和ミミコレ「子育て応援SALE!!」已开始，有效期均为 2026/7/2-7/14，月間奉仕品也到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认、抽选返还规则；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。
可能影响：西松屋不再是“7/2 待确认”，已可作为 7/2-7/14 活动入口提醒；但当前读到的仍主要是官方入口、图片チラシ和分类页，不足以新增单品级 verified 优惠。Yahoo! 超PayPay祭仍是 7/10-7/12 预告，只适合日历提前准备。
是否已更新到站点：已更新 data/deals.json 的 6 条 verified 核验日期/范围，修正西松屋 note、condition、bestTime、shortPeriod 和购买步骤；同步更新 data/shopping-calendar.json 中西松屋、Yahoo! 5のつく日、Yahoo! 超PayPay祭、PayPay、楽天、赤ちゃん本舗更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/5 当天复查 Yahoo! 5のつく日是否可エントリー；7/10 前继续等待 Yahoo! 超PayPay祭正式商品/対象ストア确认；后续若能打开西松屋具体商品页并确认价格、库存和送料，再考虑新增 verified 单品优惠。
```

```text
日期时间：2026-07-01 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング お得ガイド https://shopping.yahoo.co.jp/promotion/campaign/guide/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン仍显示本轮已结束；Yahoo! 5のつく日已更新下一场 2026/7/5 00:00-23:59，但当前仍在エントリー期间外，并新增 2026/7/1 起ヤフーショッピング商品券利用分不再作为付与対象的说明；赤ちゃん本舗 3/8 日页面仍可访问；西松屋首页显示次回デジタルチラシ和次回ミミコレ为 7/2 起，月間奉仕品仍到 7/14；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上、本人确认、抽选返还和 10 万点上限；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。
可能影响：没有新增商品级 verified 优惠。西松屋 6/18-6/30 チラシ/ミミよりコレクション不应继续作为当前活动展示，已收窄为 7/14 月間奉仕品和 7/2 新チラシ待确认；Yahoo! 5のつく日适合提前准备 7/5，但不是当前可参加的商品优惠。
是否已更新到站点：已更新 data/deals.json 的 6 条 verified 核验日期/范围，修正西松屋 note、bestTime、condition 和短周期；同步更新 data/shopping-calendar.json 的西松屋、Yahoo! 5のつく日、Yahoo! 超PayPay祭、PayPay、楽天、赤ちゃん本舗更新时间与注意事项。未新增 data/deals.json 商品级优惠。
下一步：7/2 后复查西松屋新数字チラシ/ミミコレ是否有可确认的保育园衣物、小件用品或消耗品单品价；7/5 当天复查 Yahoo! 5のつく日是否仍显示可エントリー；7/10 前继续等 Yahoo! 超PayPay祭正式商品/対象ストア确认。
```

```text
日期时间：2026-06-30 07:35 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；Yahoo!ショッピング お得ガイド https://shopping.yahoo.co.jp/promotion/campaign/guide/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン仍显示活动已结束；Yahoo! 5のつく日 6/25 场次仍在エントリー期间外；赤ちゃん本舗 3/8 日页面仍可访问，但 30 日规则应写成“有 31 日的月份为 30 日 10:00 至次月 1 日 09:59”；西松屋首页仍显示 6/18-6/30 チラシ/ミミよりコレクション和 6/18-7/14 月間奉仕品入口；PayPayスクラッチ仍显示 2026/6/19-7/31、200 日元以上和抽选返还规则；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安。另确认 Yahoo! お得ガイド已有 7/10-7/12 超PayPay祭预告：対象ストア合计 5,000-19,999 日元 +4%、20,000 日元以上 +7%，但条件/上限/内容可能变更。
可能影响：没有发现需要把当前 3 条 active verified 改为 expired/unavailable 的情况；但赤ちゃん本舗 30 日适用条件需要修正，避免用户在 6/30 误以为一定有积分 10 倍。7/10 超PayPay祭适合加入日历作提前准备，不适合写成具体商品优惠。
是否已更新到站点：已更新 data/deals.json 的核验日期和赤ちゃん本舗规则措辞；更新 data/shopping-calendar.json 的赤ちゃん本舗、西松屋、PayPay 时间，并新增 Yahoo! 7/10 超PayPay祭预告日历项；未新增 data/deals.json 商品级优惠。
下一步：7/10 前继续等待 Yahoo! 超PayPay祭正式活动页和対象ストア/商品确认；明天需重点复查西松屋 6/18-6/30 チラシ/ミミよりコレクション是否已结束，必要时把相关优惠和日历说明收窄到 7/14 月間奉仕品。
```

```text
日期时间：2026-06-26 07:34 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠。楽天お買い物マラソン官方页已显示活动结束，因此尿不湿/湿巾买回和姓名贴买回两条不应继续展示为可参加；Yahoo! 5のつく日页面仍显示 2026/6/25 00:00 - 23:59、指定支付 +4% 和 1,000 円相当上限，但当前已在エントリー期间外，因此 6/25 场次不应继续展示为可参加。赤ちゃん本舗 3/8 日页面仍可访问并保留対象カテゴリ积分 10 倍入口；西松屋首页仍显示 6/18-6/30 チラシ/ミミよりコレクション和 6/18-7/14 月間奉仕品入口；PayPayスクラッチ仍显示 2026/6/19-7/31 活动、200 日元以上支付和抽选返还规则；楽天姓名贴搜索结果仍显示相关商品、价格、送料無料和発送目安，但本轮买回条件已结束。
可能影响：已把 3 条依赖已结束活动的 verified 优惠改为 expired，避免用户误以为仍可参加。其余 3 条 verified 仍可作为活动机会/购买前提醒展示，但依然需要用户在具体商品页、门店或结算页确认价格、库存、送料、対象店舗和积分内訳。
是否已更新到站点：已更新 data/deals.json 的 availabilityStatus、note、whyWorthBuying、skipWhen、updatedAt 等字段；同步更新 data/shopping-calendar.json 中楽天、Yahoo!、赤ちゃん本舗、西松屋、PayPay 的说明和更新时间。未新增商品级优惠。
下一步：继续跟进 Yahoo! 7/10 起超PayPay祭预告和下一轮楽天买回公告；只有官方细则、具体商品页、价格/券后条件、库存/配送和 sourceName 都明确时，再新增 dataStatus=verified 的商品级优惠。
```

```text
日期时间：2026-06-25 07:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified + active 优惠机会。楽天买回官方页仍显示 1 店铺 1,000 日元（税込）以上、7,000 点上限和 2026/7/15 左右付与等规则；Yahoo! 5のつく日官方页显示 2026/6/25 00:00 - 23:59、エントリー、指定支付 +4% 和期间限定 PayPay ポイント；赤ちゃん本舗 3/8 日页面仍显示 10:00 到次日 09:59、対象カテゴリ积分 10 倍和 Online Shop 限定；西松屋首页仍有 6/18 - 6/30 チラシ / ミミよりコレクション与 6/18 - 7/14 月間奉仕品入口；PayPayスクラッチ仍显示 2026/6/19 - 7/31、200 日元以上支付、抽选返还档位和 10 万点上限；楽天姓名贴搜索结果仍显示保育园姓名贴相关商品、价格、送料無料和発送目安。
可能影响：现有 verified 条目仍可作为“活动机会/购买前提醒”展示，没有发现需要改为 expired 或 unavailable 的条目。但它们仍不是单一 SKU 固定低价，用户下单前必须确认具体商品页、库存、送料、券后价、対象店舗和积分内訳。
是否已更新到站点：已同步 data/deals.json 的核验日期，并更新 data/shopping-calendar.json 中对应活动的更新时间；未新增商品级优惠。
下一步：继续找纸尿裤、湿巾、辅食、婴儿洗护的具体商品页或官方活动页；只有同时确认商品 URL、价格/券后条件、库存/配送、sourceName 和 updatedAt 时，才新增 dataStatus=verified 的商品级优惠。
```

```text
日期时间：2026-06-24 16:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified + active 优惠机会。楽天买回官方页仍显示 2026/6/20 20:00 - 6/26 01:59、1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限；Yahoo! 5のつく日官方页仍显示付与上限 1,000 円相当、期间限定 PayPay ポイント和对象金额计算规则；赤ちゃん本舗 3/8 日积分页、西松屋首页、PayPayスクラッチ详情页和楽天姓名贴搜索页均仍可访问。西松屋首页出现 2026/6/24 SmartAngel 超厚手おしりふき新品新闻，但未提供优惠价或活动条件。
可能影响：现有 verified 条目仍适合作为“活动机会/购买前提醒”展示，没有发现需要改为 expired 或 unavailable 的条目。西松屋新品只适合后续观察，不写成优惠。
是否已更新到站点：已同步 data/shopping-calendar.json 中对应活动的更新时间；未新增商品级优惠，也未改动 data/deals.json 的状态。
下一步：继续找纸尿裤、湿巾、辅食、婴儿洗护的具体商品页或官方活动页；只有同时确认商品 URL、价格/券后条件、库存/配送、sourceName 和 updatedAt 时，才新增 dataStatus=verified 的商品级优惠。
```

```text
日期时间：2026-06-24 16:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified + active 优惠机会。楽天买回官方页仍显示 2026/6/20 20:00 - 6/26 01:59、1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限；Yahoo! 5のつく日官方页仍显示 2026/6/25 00:00 - 23:59、エントリー、指定支付 +4% 和 1,000 円相当上限；赤ちゃん本舗 3/8 日対象カテゴリ积分页、西松屋首页、PayPayスクラッチ详情页和楽天姓名贴搜索页均仍可访问。
可能影响：现有 verified 条目仍适合作为“活动机会/购买前提醒”展示，没有发现需要改为 expired 或 unavailable 的条目；但它们仍不是商品页级固定低价，用户下单前必须确认具体 SKU、库存、送料、券后价、対象店舗和积分内訳。
是否已更新到站点：已同步 data/shopping-calendar.json 中对应活动的更新时间；未新增商品级优惠，也未改动 data/deals.json 的状态。
下一步：继续找纸尿裤、湿巾、辅食、婴儿洗护的具体商品页或官方活动页；只有同时确认商品 URL、价格/券后条件、库存/配送、sourceName 和 updatedAt 时，才新增 dataStatus=verified 的商品级优惠。
```

```text
日期时间：2026-06-23 16:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified + active 优惠机会。楽天买回官方页仍显示エントリー、1 店铺 1,000 日元（税込）和 7,000 点上限；Yahoo! 5のつく日官方页仍显示 2026/6/25 00:00 - 23:59、エントリー、指定支付 +4% 和 1,000 円相当上限；赤ちゃん本舗 3/8 日対象カテゴリ积分页、西松屋首页、PayPayスクラッチ详情页和楽天姓名贴搜索页均仍可访问。
可能影响：现有 verified 条目仍适合作为“活动机会/购买前提醒”展示，没有发现需要改为 expired 或 unavailable 的条目；但它们仍不是商品页级固定低价，用户下单前必须确认具体 SKU、库存、送料、券后价、対象店舗和积分内訳。
是否已更新到站点：已同步 data/shopping-calendar.json 中对应活动的更新时间；未新增商品级优惠，也未改动 data/deals.json 的状态。
下一步：继续找纸尿裤、湿巾、辅食、婴儿洗护的具体商品页或官方活动页；只有同时确认商品 URL、价格/券后条件、库存/配送、sourceName 和 updatedAt 时，才新增 dataStatus=verified 的商品级优惠。
```

```text
日期时间：2026-06-23 07:37 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified + active 优惠机会。楽天买回官方页仍显示 2026/6/20 20:00 - 6/26 01:59、1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限；Yahoo! 5のつく日官方页仍显示 2026/6/25 00:00 - 23:59、エントリー、指定支付 +4% 和 1,000 円相当上限；赤ちゃん本舗 3/8 日対象カテゴリ积分页、西松屋首页、PayPayスクラッチ详情页和楽天姓名贴搜索页均仍可访问。
可能影响：现有 verified 条目仍适合作为“活动机会/购买前提醒”展示，没有发现需要改为 expired 或 unavailable 的条目；但它们仍不是商品页级固定低价，用户下单前必须确认具体 SKU、库存、送料、券后价、対象店舗和积分内訳。
是否已更新到站点：已同步 data/shopping-calendar.json 中对应活动的更新时间；未新增商品级优惠，也未改动 data/deals.json 的状态。
下一步：继续找纸尿裤、湿巾、辅食、婴儿洗护的具体商品页或官方活动页；只有同时确认商品 URL、价格/券后条件、库存/配送、sourceName 和 updatedAt 时，才新增 dataStatus=verified 的商品级优惠。
```

```text
日期时间：2026-06-22 16:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified + active 优惠机会。楽天买回官方页确认 2026/6/20 20:00 - 6/26 01:59、1 店铺 1,000 日元（税込、送料別、券后）和 7,000 点上限；Yahoo! 5のつく日官方页确认 2026/6/25 00:00 - 23:59、エントリー和指定支付 +4%；赤ちゃん本舗 3/8 日対象カテゴリ积分页、西松屋首页、PayPayスクラッチ详情页和楽天姓名贴搜索页均仍可访问。
可能影响：现有 verified 条目仍适合作为“活动机会/购买前提醒”展示，没有发现需要改为 expired 或 unavailable 的条目；但它们仍不是商品页级固定低价，用户下单前必须确认具体 SKU、库存、送料、券后价、対象店舗和积分内訳。
是否已更新到站点：已更新 data/deals.json 的核验日期，并同步 data/shopping-calendar.json 中对应活动的更新时间；未新增商品级优惠。
下一步：继续找纸尿裤、湿巾、辅食、婴儿洗护的具体商品页或官方活动页；只有同时确认商品 URL、价格/券后条件、库存/配送、sourceName 和 updatedAt 时，才新增 dataStatus=verified 的商品级优惠。
```

```text
日期时间：2026-06-18 16:31 JST
来源：西松屋官方首页 セール情報 https://www.24028.jp/；西松屋オンラインストア 月間奉仕品入口 https://www.24028-net.jp/category/MONTHLY/
主题：西松屋 6/18 起チラシ、WEB限定ミミよりコレクション、月間奉仕品开始。
可能影响：适合提醒宝妈关注夏季童装、手口湿巾、纸尿裤、母乳垫、调乳和离乳食用品等常用品，但当前可读页面只确认活动期间和品类入口，未确认具体单品价格。
是否已更新到站点：已更新到 data/shopping-calendar.json；未写入 data/deals.json。
下一步：下次检查官方チラシ或商品页能否读取具体价格，只有确认价格和适用条件后再新增商品优惠。
```

```text
日期时间：2026-06-19 07:32 JST
来源：Amazon Japan、赤ちゃん本舗、主要药妆店官方入口；本地 curl 访问这些官方域名时 DNS 解析失败，公开搜索也未稳定返回可确认的日本母婴具体单品活动页。
主题：本轮未确认到 Amazon Japan、赤ちゃん本舗或药妆店的具体母婴商品价格和活动条件。
可能影响：暂不新增商品优惠，避免把未确认价格写成确定推荐；后续仍可继续看纸尿裤、湿巾、辅食、婴儿洗护和妈妈用品。
是否已更新到站点：否；仅记录为待确认信号。
下一步：下次优先用官方活动页或商品页核对具体券后价、适用条件、库存/配送和更新时间，再决定是否写入 data/deals.json。
```

```text
日期时间：2026-06-19 16:31 JST
来源：赤ちゃん本舗官方首页 https://www.akachan.jp/；Yahoo!ショッピング 5のつく日官方活动页 https://shopping.yahoo.co.jp/promotion/campaign/5day/
主题：赤ちゃん本舗首页可确认母婴品类入口（纸尿裤、婴儿洗护、辅食、通园用品等），但未确认到本轮具体商品价格或会员积分日规则；Yahoo!ショッピング页面出现 7/10 起相关大型活动预告，但当前可读信息不足以写清母婴品类适用条件。
可能影响：赤ちゃん本舗适合后续继续核对辅食、餐具、洗护和通园用品；Yahoo! 7 月活动可能适合纸尿裤、湿巾箱购和儿童家具，但需要等官方细则完整后再写入日历或优惠。
是否已更新到站点：否；仅作为待确认信号。楽天 6/20 买回活动的开场优惠券细节已更新到 data/shopping-calendar.json。
下一步：下次优先查看赤ちゃん本舗活动页或商品页是否出现明确价格/积分条件；继续跟进 Yahoo! 7/10 活动官方细则，确认报名、支付、上限、付与日和対象外条件后再更新。
```

```text
日期时间：2026-06-20 07:32 JST
来源：PayPay 官方キャンペーン页 https://paypay.ne.jp/event/；PayPayスクラッチ官方页 https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；スギ薬局×ドトール PayPay 联动页 https://paypay.ne.jp/event/sugi-doutor-20260601/
主题：PayPay 官方页确认 2026/6/19 - 7/31 超PayPay祭 / PayPayスクラッチ 开始；スギ薬局×ドトール联动第 2 弾购物期间为 2026/6/16 - 6/30，后日可获得跨店 PayPay クーポン。
可能影响：可提醒宝妈在药妆店、超市或线上日用品渠道购买宝宝洗护、湿巾小包装、妈妈用品前顺手确认 PayPay 活动；但 PayPayスクラッチ是抽选，スギ薬局联动不是直接母婴商品降价，不能写成确定好价。
是否已更新到站点：已更新 data/shopping-calendar.json 的 PayPay 官方活动检查；未更新 data/deals.json。
下一步：后续如果确认某个药妆店或线上平台的母婴商品本身降价、且可叠加 PayPay 条件，再核对具体商品页和券后价后写入优惠数据。
```

```text
日期时间：2026-06-20 16:31 JST
来源：アカチャンホンポ Online Shop 3と8のつく日官方页 https://shop.akachan.jp/shop/r/rse90/；アカチャンホンポ子育て応援サマーセール页 https://chirashi.akachan.jp/chirashi/special/summersale2606/；西松屋オンラインストア 月間奉仕品 https://www.24028-net.jp/category/MONTHLY/
主题：赤ちゃん本舗 Online Shop 可确认每月 3/8 结尾日対象カテゴリ积分 10 倍规则；夏季特卖页主要为图片内容，能确认“14日間限定のお買得”和育儿用品/纸尿裤等入口，但当前可读文本不足以确认具体单品价格、日期细节和库存；西松屋月間奉仕品页仍可确认 6/18 - 7/14 活动入口和夏物/育儿用品品类。
可能影响：赤ちゃん本舗积分日适合放入省钱日历，提醒宝妈在 3/8 结尾日核对辅食、奶瓶配件、纸尿裤/湿巾、通园用品等；夏季特卖和西松屋商品页暂不写成具体优惠，避免把图片或入口信息误读为确定好价。
是否已更新到站点：已更新 data/shopping-calendar.json 的赤ちゃん本舗日历规则；未更新 data/deals.json。
下一步：下次优先继续核对赤ちゃん本舗夏季特卖中能否打开具体商品页，并确认价格、库存、送料和积分条件；只有具体商品页和条件完整时再新增 verified 优惠。
```

```text
日期时间：2026-06-21 07:31 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页。
主题：复查 data/deals.json 的 6 条 verified 优惠机会，页面仍可访问，未发现需要改为 expired 或 unavailable 的条目；PayPay 泛活动页当前不如スクラッチ详情页直接，因此已把站内 PayPay 来源链接改为官方详情页。
可能影响：现有 verified 条目仍可作为活动机会展示，但仍不是 SKU 级固定低价。用户下单前必须继续确认具体商品页、库存、送料、券后价和积分内訳。
是否已更新到站点：已更新 data/deals.json 和 data/shopping-calendar.json 的 PayPay 来源链接；未新增商品级优惠。
下一步：继续优先找具体母婴商品页级好价；只有价格、库存/配送、券后条件和来源都清楚时再新增 verified 商品优惠。
```

```text
日期时间：2026-06-21 16:32 JST
来源：楽天市場 お買い物マラソン https://event.rakuten.co.jp/campaign/point-up/marathon/；Yahoo!ショッピング 5のつく日 https://shopping.yahoo.co.jp/promotion/campaign/5day/；アカチャンホンポ 3と8のつく日 https://shop.akachan.jp/shop/r/rse90/；西松屋官方首页 https://www.24028.jp/；PayPayスクラッチくじ https://paypay.ne.jp/event/matsuri202606-paypay-scratch/；楽天市場姓名贴搜索页 https://search.rakuten.co.jp/search/mall/%E4%BF%9D%E8%82%B2%E5%9C%92+%E5%90%8D%E5%89%8D%E3%82%B7%E3%83%BC%E3%83%AB/
主题：复查 data/deals.json 的 6 条 verified 优惠机会。楽天买回、Yahoo! 5のつく日、アカチャンホンポ 3/8 日対象カテゴリポイント10倍、西松屋セール入口、PayPayスクラッチ和楽天姓名贴搜索入口均仍可访问；没有发现需要改为 expired 或 unavailable 的条目。
可能影响：当前 verified 条目仍适合作为“活动机会/购买前提醒”展示，但依旧不是商品页级固定低价。尤其西松屋、PayPay 和楽天姓名贴仍需要用户在具体商品页、门店或结算页确认价格、库存、送料、対象店舗和积分内訳。
是否已更新到站点：未更新 data/deals.json 或 data/shopping-calendar.json；本轮信息只记录为复查信号，避免把没有具体 SKU 的线索写成确定商品优惠。
下一步：继续优先查纸尿裤、湿巾、辅食、婴儿洗护的官方商品页或活动页；只有同时确认商品 URL、价格/券后条件、库存/配送、sourceName 和 updatedAt 时，才新增 dataStatus=verified 的商品级优惠。
```
