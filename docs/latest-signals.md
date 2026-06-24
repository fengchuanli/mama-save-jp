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
