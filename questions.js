/* 全81問。2026-11-12、カノウとクノウを各15問削除。 */
(() => {
  'use strict';
  window.QUIZ_SOURCES = {
  "source-001": {
    "title": "和牛焼肉 うのう 本店・店舗案内",
    "url": "https://r.gnavi.co.jp/k478800/"
  },
  "source-002": {
    "title": "メルカリ公式 / 山田進太郎インタビュー",
    "url": "https://careers.mercari.com/mercan/articles/4224/"
  },
  "source-003": {
    "title": "ASHA / 感情的な声の抑揚と右半球",
    "url": "https://pubs.asha.org/doi/10.1044/persp1.SIG2.82"
  },
  "source-004": {
    "title": "ASHA / 右半球とコミュニケーション",
    "url": "https://www.asha.org/practice-portal/clinical-topics/right-hemisphere-disorder/"
  },
  "source-005": {
    "title": "BrainFacts / 左右の半球と身体",
    "url": "https://www.brainfacts.org/brain-anatomy-and-function/anatomy/2024/the-brain-divide-a-hemispheric-hoax-111224"
  },
  "source-006": {
    "title": "Neuroscience / 視野と視覚野の対応",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK10944/"
  },
  "source-007": {
    "title": "Neuroscience / 体性感覚野",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK11153/"
  },
  "source-008": {
    "title": "Neuroscience / 言語機能の局在と左右差",
    "url": "https://www.ncbi.nlm.nih.gov/books/NBK11066/"
  },
  "source-009": {
    "title": "漢字ペディア：苦悩",
    "url": "https://www.kanjipedia.jp/kotoba/0001660900"
  },
  "source-010": {
    "title": "青空文庫 / 苦悩の年鑑",
    "url": "https://www.aozora.gr.jp/cards/000035/card288.html"
  },
  "source-011": {
    "title": "青空文庫：カフカ『最初の苦悩』",
    "url": "https://www.aozora.gr.jp/cards/001235/files/49861_41921.html"
  },
  "source-012": {
    "title": "國學院大學 / 中世に大きく変容した日本語",
    "url": "https://www.kokugakuin.ac.jp/article/353676"
  },
  "source-013": {
    "title": "国立国会図書館 / 嘉納治五郎",
    "url": "https://www.ndl.go.jp/portrait/datas/253/index.html"
  },
  "source-014": {
    "title": "皇居三の丸尚蔵館 / 唐獅子図屏風",
    "url": "https://collection.shozokan.nich.go.jp/object/SZK002944"
  },
  "source-015": {
    "title": "東京国立博物館 / 檜図屏風",
    "url": "https://www.tnm.jp/modules/r_collection/index.php?colid=A1069&controller=dtl"
  },
  "source-016": {
    "title": "国立文化財機構 e国宝 / 花下遊楽図屏風",
    "url": "https://emuseum.nich.go.jp/detail?content_base_id=100159&langId=ja"
  },
  "source-017": {
    "title": "東京藝術大学 / 狩野芳崖と悲母観音",
    "url": "https://museum.geidai.ac.jp/exhibit/2008/08/hogai.html"
  },
  "source-018": {
    "title": "文化遺産オンライン / 周茂叔愛蓮図",
    "url": "https://online.bunka.go.jp/db/heritages/detail/581333"
  },
  "source-019": {
    "title": "ワタナベエンターテインメント / 加納",
    "url": "https://www.watanabepro.co.jp/mypage/40000180/"
  },
  "source-020": {
    "title": "東京創元社 / ななつのこ・加納朋子",
    "url": "https://www.tsogen.co.jp/np/isbn/9784488426019"
  },
  "source-021": {
    "title": "JOC / 加納虹輝・東京2020インタビュー",
    "url": "https://www.joc.or.jp/news/014161.html"
  },
  "source-022": {
    "title": "名古屋鉄道 / 加納駅",
    "url": "https://www.meitetsu.co.jp/train/station_info/line01/station/1251.html"
  },
  "source-023": {
    "title": "岐阜市 / 中山道加納宿まちづくり交流センター",
    "url": "https://www.city.gifu.lg.jp/info/kaikaku/1008530/1015332/1034096.html"
  },
  "source-024": {
    "title": "岐阜市 / 中山道沿道の歴史",
    "url": "https://www.city.gifu.lg.jp/_res/projects/default_project/_page_/001/007/951/_keikan_all_10.pdf"
  },
  "source-025": {
    "title": "国際交流基金：まるごと初級2・可能形",
    "url": "https://marugoto.jpf.go.jp/assets/docs/teacher/resource/elementary2_a/elementary2_activities_teachers_notes.pdf"
  },
  "source-026": {
    "title": "BrainFacts / 大脳の構造",
    "url": "https://www.brainfacts.org/brain-anatomy-and-function/anatomy/2012/Mapping-the-Brain"
  },
  "source-027": {
    "title": "裏！でびラジ / Appare!プロデューサー・加納凌 ゲスト回",
    "url": "https://stand.fm/episodes/639c3336a9385a4152de5049"
  },
  "source-028": {
    "title": "久能山東照宮公式 / 家康の遺命と埋葬",
    "url": "https://www.toshogu.or.jp/"
  },
  "source-029": {
    "title": "キッズネット辞典 / さのう（砂のう）",
    "url": "https://kids.gakken.co.jp/jiten/dictionary03100336/"
  },
  "source-030": {
    "title": "ウノプロダクション：宇野宇プロフィール",
    "url": "https://www.unopro.co.jp/4_about_unopro/profile_unou.pdf"
  },
  "source-031": {
    "title": "劇団ラッパ屋：宇納佑",
    "url": "https://rappaya.jp/member/12.php"
  },
  "source-032": {
    "title": "株式会社ウノウ電子：会社概要",
    "url": "https://www.unou.co.jp/company/"
  },
  "source-033": {
    "title": "ウォーカープラス：作者に聞いた『俺らは絶対に分かり合えません！』",
    "url": "https://www.walkerplus.com/special/fandomplus/article/1129808/"
  },
  "source-034": {
    "title": "日本写真家協会：令和7年度文化関係資料アーカイブ調査報告書・15頁",
    "url": "https://photo-archive.jp/web/wp-content/uploads/2026/04/R7center.pdf#page=15"
  },
  "source-035": {
    "title": "右納誠司税理士事務所：ご挨拶",
    "url": "https://uno1-zeirishi.jp/staff"
  },
  "source-036": {
    "title": "漢字ペディア：膿",
    "url": "https://www.kanjipedia.jp/kanji/0005507600"
  },
  "source-037": {
    "title": "漢字ペディア：嘉納",
    "url": "https://www.kanjipedia.jp/kotoba/0000709700"
  },
  "source-038": {
    "title": "小学館・デジタル大辞泉：仮納",
    "url": "https://kotobank.jp/word/仮納-465468"
  },
  "source-039": {
    "title": "兵庫県：包括外部監査結果報告書・過納と誤納",
    "url": "https://web.pref.hyogo.lg.jp/kk20/documents/23houkatugaibukekka.pdf#page=68"
  },
  "source-040": {
    "title": "行橋市史：荘園と加納",
    "url": "https://adeac.jp/yukuhashi-city/texthtml/d100010/mp000000-000010/ht2031101020"
  },
  "source-041": {
    "title": "日本植物生理学会：ガジュマルの花嚢と受粉",
    "url": "https://jspp.org/hiroba/q_and_a/detail.html?id=3838"
  },
  "source-042": {
    "title": "倉吉博物館：打吹山ウォッチングガイド55",
    "url": "https://www.city.kurayoshi.lg.jp/secure/5897/wg055.pdf"
  },
  "source-043": {
    "title": "フジテレビ / ミステリと言う勿れ イントロダクション",
    "url": "https://www.fujitv.co.jp/mystery/introduction/index.html"
  },
  "source-044": {
    "title": "TVアニメ らんま1/2公式 / キャラクター",
    "url": "https://ranma-pr.com/character/"
  },
  "source-045": {
    "title": "トミーテック 鉄道むすめ公式 / 久能あいら",
    "url": "https://tetsudou-musume.net/chara/%E4%B9%85%E8%83%BD%E3%81%82%E3%81%84%E3%82%89/"
  },
  "source-046": {
    "title": "JSIE / 久能祐子",
    "url": "https://www.jsie.net/archives/dt_team/%E4%B9%85%E8%83%BD%E7%A5%90%E5%AD%90/"
  },
  "source-047": {
    "title": "京都大学125周年 / 久能祐子",
    "url": "https://www.kyoto-u.ac.jp/125th/alumni/07/"
  },
  "source-048": {
    "title": "日本テレビ 世界一受けたい授業 / 久能靖",
    "url": "https://www.ntv.co.jp/sekaju/profile/kunouyasushi.html"
  },
  "source-049": {
    "title": "河出書房新社 / 連合赤軍 浅間山荘事件の真実",
    "url": "https://www.kawade.co.jp/np/isbn/9784309418247/"
  },
  "source-050": {
    "title": "KADOKAWA / ボーダー・ライン",
    "url": "https://www.kadokawa.co.jp/product/200301000059/"
  },
  "source-051": {
    "title": "トーハン / 2018年4月3日週間ベストセラー",
    "url": "https://www.tohan.jp/wp/wp-content/uploads/2024/03/180403bestseller_w.pdf"
  },
  "source-052": {
    "title": "日本ゴルフ協会 / 久能大紀 選手プロフィール",
    "url": "https://www.jga.or.jp/jga/jsp/players/profile_31222.html"
  },
  "source-053": {
    "title": "京都大学 / 第10回京都大学久能賞授賞式・報告会",
    "url": "https://www.kyoto-u.ac.jp/ja/news/2026-02-19"
  },
  "source-054": {
    "title": "静岡市公式 / しずまえ 久能エリア",
    "url": "https://www.city.shizuoka.lg.jp/ijuteiju/s000047.html"
  },
  "source-055": {
    "title": "久能山東照宮公式 / 久能山城（久能城）について",
    "url": "https://www.toshogu.or.jp/news/post_152.php"
  },
  "source-056": {
    "title": "静岡市公式 / 不二見地区カルテ",
    "url": "https://www.city.shizuoka.lg.jp/documents/51294/08fujimi.pdf"
  },
  "source-057": {
    "title": "国立文化財機構 e国宝 / 法華経（久能寺経）",
    "url": "https://emuseum.nich.go.jp/detail?content_base_id=100369&content_part_id=000&content_pict_id=0&langId=ja"
  },
  "source-058": {
    "title": "富里市公式 / 久能獅子舞",
    "url": "https://www.city.tomisato.lg.jp/0000001175.html"
  },
  "source-059": {
    "title": "富里市公式 / 久能臥龍桜",
    "url": "https://www.city.tomisato.lg.jp/0000004699.html"
  },
  "source-060": {
    "title": "日本郵便 / 久能郵便局の風景印",
    "url": "https://www.post.japanpost.jp/enjoy/culture/stamp/fuke/detail.php?id=9582"
  },
  "source-061": {
    "title": "久能カントリー倶楽部公式 / 倶楽部紹介",
    "url": "https://www.kunocc.co.jp/club/"
  },
  "source-062": {
    "title": "農林水産省 九州農政局 / 有機農業の取組 No.52",
    "url": "https://www.maff.go.jp/kyusyu/seiryuu/kankyou/attach/pdf/yuuki_torikumi-83.pdf"
  },
  "source-063": {
    "title": "集英社イミダス 広辞典 / 砂嚢",
    "url": "https://imidas.jp/kojiten/detail/W-11-0-800-06.html"
  },
  "source-064": {
    "title": "朝日大学 / 研究紹介冊子",
    "url": "https://www.asahi-u.ac.jp/media/f_sangakukan_20190712.pdf"
  },
  "source-065": {
    "title": "GMOインターネット / 第20期定時株主総会 事業説明資料",
    "url": "https://ir.group.gmo/pdf/shareholder/shareholder_h230328_01.pdf"
  },
  "source-066": {
    "title": "経済産業省 Gビズインフォ / 株式会社佐能松山園",
    "url": "https://info.gbiz.go.jp/hojin/ichiran?hojinBango=2260001018229"
  },
  "source-067": {
    "title": "叶 匠壽庵 公式サイト",
    "url": "https://kanou.com/"
  },
  "source-068": {
    "title": "味処 叶：店の歴史",
    "url": "https://www.misokatu-kanou.com/history.html"
  },
  "source-069": {
    "title": "能作：ひみ栄和温泉元湯 叶との記念日宿泊プラン",
    "url": "https://www.nousaku.co.jp/travel/himi-kanouya/"
  },
  "source-070": {
    "title": "京急：普通電車の旅・浦賀",
    "url": "https://www.keikyu.co.jp/visit/magazine/pdf/local_vol41.pdf"
  },
  "source-071": {
    "title": "福岡市：叶岳（叶嶽神社）",
    "url": "https://www.city.fukuoka.lg.jp/nishiku/c-shinko/charm/nisikunotakara/kanodake_jinja.html"
  },
  "source-072": {
    "title": "周防大島ドットコム：登山・ハイキング",
    "url": "https://www.suouoshima.com/kanko/tozan.html"
  },
  "source-073": {
    "title": "安来市加納美術館 公式サイト",
    "url": "https://www.art-kano.jp/"
  },
  "source-074": {
    "title": "岐阜県立加納高等学校 公式サイト",
    "url": "https://school.gifu-net.ed.jp/kano-hs/"
  },
  "source-075": {
    "title": "岐阜市：加納天満宮",
    "url": "https://www.city.gifu.lg.jp/kankoubunka/kankou/1013050/1005149/1017450/1017461/1020345.html"
  },
  "source-076": {
    "title": "桶川市立加納小学校：学校概要",
    "url": "https://okegawakanou-es.edumap.jp/about"
  },
  "source-077": {
    "title": "東大阪市：町名別投票区一覧",
    "url": "https://www.city.higashiosaka.lg.jp/0000003546.html"
  },
  "source-078": {
    "title": "鳥取県警：叶（かのう）駐在所",
    "url": "https://www.pref.tottori.lg.jp/66092.htm"
  },
  "source-079": {
    "title": "カノウ冷機：会社案内",
    "url": "https://www.kanoureiki.com/company/"
  },
  "source-080": {
    "title": "カノウ印刷：会社概要",
    "url": "https://www.kanou-insatsu.co.jp/corporate/"
  },
  "source-081": {
    "title": "カノウプレシジョン：会社概要",
    "url": "https://www.kanoudisplay.jp/company/index.html"
  },
  "source-082": {
    "title": "カノウ株式会社：会社概要",
    "url": "https://www.kanou-tosou.com/html/company.html"
  },
  "source-083": {
    "title": "加納化成：会社概要",
    "url": "https://kano-kasei.co.jp/company/"
  },
  "source-084": {
    "title": "ORIGINAL ART CERAMIC：株式会社加納の会社概要",
    "url": "https://original-artceramic.com/company/"
  },
  "source-085": {
    "title": "加納製作所 公式サイト",
    "url": "https://kano-x.jp/"
  },
  "source-086": {
    "title": "加納フーズ公式採用サイト：会社概要",
    "url": "https://saiyo.page/194803"
  },
  "source-087": {
    "title": "加納工務店 公式サイト",
    "url": "https://www.kanokom.com/"
  },
  "source-088": {
    "title": "カノークス：沿革",
    "url": "https://www.canox.co.jp/company/history/"
  },
  "source-089": {
    "title": "加納総合病院 公式サイト",
    "url": "https://www.heartfull.or.jp/kano/"
  },
  "source-090": {
    "title": "加納経営事務所：企業情報",
    "url": "https://km-o.jp/company/"
  },
  "source-091": {
    "title": "加納会館 公式サイト",
    "url": "https://www.kk-kanou.jp/"
  },
  "source-092": {
    "title": "厚生労働省 医療情報ネット：医療法人泉壽会 加納病院",
    "url": "https://www.iryou.teikyouseido.mhlw.go.jp/znk-web/juminkanja/S2430/initialize?kikanCd=1180000400&kikanKbn=1&prefCd=18"
  },
  "source-093": {
    "title": "静岡県立美術館 / 江戸狩野派の250年・出品目録",
    "url": "https://spmoa.shizuoka.shizuoka.jp/uploads/exhibition/02ce176b7b7aec5809cd90f7b96c5200c225b939.pdf"
  },
  "source-094": {
    "title": "文化庁 / 桃山時代の狩野派",
    "url": "https://www.bunka.go.jp/prmagazine/rensai/bunkazai/bunkazai_011.html"
  },
  "source-095": {
    "title": "京都国立博物館 / 十二ヶ月花木図",
    "url": "https://knmdb.kyohaku.go.jp/12425.html"
  },
  "source-096": {
    "title": "神奈川県立近代美術館 / 加納光於展",
    "url": "https://www.moma.pref.kanagawa.jp/exhibition/2023-h-collection2/"
  },
  "source-097": {
    "title": "しまね観光ナビ / 加納莞蕾の平和運動",
    "url": "https://www.kankou-shimane.com/events/68835"
  },
  "source-098": {
    "title": "ZEN FOTO GALLERY / 加納典明",
    "url": "https://zen-foto.jp/jp/artist/tenmei-kanoh"
  },
  "source-099": {
    "title": "志賀町立図書館 / 加能作次郎",
    "url": "https://www.town.shika.lg.jp/page/2505.html"
  },
  "source-100": {
    "title": "PHP研究所 / 香納諒一・熱愛",
    "url": "https://www.php.co.jp/books/detail.php?isbn=978-4-569-79165-4"
  },
  "source-101": {
    "title": "論創社 / 加納一朗探偵小説選・著者紹介",
    "url": "https://rskrsk.sakura.ne.jp/ronso/wp-content/uploads/2018/06/0972b4a15e7a370531c3ad223be1984a.pdf"
  },
  "source-102": {
    "title": "テイチク / 加納秀人プロフィール",
    "url": "https://www.teichiku.co.jp/artist/kanoh-hideto/profile/"
  },
  "source-103": {
    "title": "加納有沙公式 / プロフィール",
    "url": "https://www.alissakano.com/blank"
  },
  "source-104": {
    "title": "文学座 / 加納朋之",
    "url": "https://www.bungakuza.com/member/prof/kanou-tomoyuki.htm"
  },
  "source-105": {
    "title": "花組芝居 / 加納幸和",
    "url": "https://hanagumi.ne.jp/profile/kanou/"
  },
  "source-106": {
    "title": "狩野泰一公式 / プロフィール",
    "url": "https://yasukazu.com/profile"
  },
  "source-107": {
    "title": "ヤマハ / 叶高プロフィール",
    "url": "https://archive.yamaha.com/ja/news_release/2013/pdf/1306210101.pdf"
  },
  "source-108": {
    "title": "羽島市 / 出演者プロフィール・叶正子",
    "url": "https://www.city.hashima.lg.jp/secure/3334/takarakuzikouen.pdf"
  },
  "source-109": {
    "title": "フジテレビ / ayu ready?・叶姉妹",
    "url": "https://www.fujitv.co.jp/AYU/guest034.html"
  },
  "source-110": {
    "title": "JOC / 狩野舞子・ロンドン2012",
    "url": "https://www.joc.or.jp/games/olympic/london/sports/volleyball/team/kanomaiko.html?newwindow=true"
  },
  "source-111": {
    "title": "アーツビジョン / 狩野茉莉",
    "url": "https://www.artsvision.co.jp/talent/14288/"
  },
  "source-112": {
    "title": "テレビ東京 / 狩野恵里",
    "url": "https://www.tv-tokyo.co.jp/announcer/kanoeri/"
  },
  "source-113": {
    "title": "鹿児島県 / 加納知事の就任",
    "url": "https://www.pref.kagoshima.jp/ab23/pr/gaiyou/rekishi/kindai/kanotiji.html"
  },
  "source-114": {
    "title": "サイバード / ケンガン・加納アギト紹介",
    "url": "https://www.cybird.co.jp/news/2019103002/"
  },
  "source-115": {
    "title": "集英社・少年ジャンプ＋ / ドーベルマン刑事",
    "url": "https://shonenjumpplus.com/volume/4856001361007397521"
  },
  "source-116": {
    "title": "東映・仮面ライダー図鑑 / 加納修",
    "url": "https://www.kamen-rider-official.com/zukan/characters/1512"
  },
  "source-117": {
    "title": "東映・仮面ライダー図鑑 / 加納省吾",
    "url": "https://www.kamen-rider-official.com/zukan/characters/2622"
  },
  "source-118": {
    "title": "東映・仮面ライダー図鑑 / 加納達也",
    "url": "https://www.kamen-rider-official.com/zukan/characters/1963"
  },
  "source-119": {
    "title": "東映・仮面ライダー図鑑 / 叶茂",
    "url": "https://www.kamen-rider-official.com/zukan/characters/3765"
  },
  "source-120": {
    "title": "東映・仮面ライダー図鑑 / 叶みどり",
    "url": "https://www.kamen-rider-official.com/zukan/characters/3761"
  },
  "source-121": {
    "title": "東京大学東洋文化研究所 / 加納啓良",
    "url": "https://www.ioc.u-tokyo.ac.jp/faculty/prof/hkano.html"
  },
  "source-122": {
    "title": "京都大学大学文書館 / 狩野亨吉",
    "url": "https://kensaku.kua1.archives.kyoto-u.ac.jp/rireki/?c=detail&id=000275"
  },
  "source-123": {
    "title": "国立国会図書館 / 加納実紀代",
    "url": "https://id.ndl.go.jp/auth/ndlna/00101706"
  },
  "source-124": {
    "title": "KADOKAWA / 君の名は。Another Side：Earthbound",
    "url": "https://www.kadokawa.co.jp/product/322604001287/"
  },
  "source-125": {
    "title": "国立音楽大学 / 加納悦子",
    "url": "https://www.kunitachi.ac.jp/faculty_list/50on/ka/kano_etuko.html"
  },
  "source-126": {
    "title": "家納ジュンコ公式 / プロフィール",
    "url": "https://junkokano.com/"
  },
  "source-127": {
    "title": "名古屋大学 / 加納修",
    "url": "https://profs.provost.nagoya-u.ac.jp/html/100000263_ja.html"
  },
  "source-128": {
    "title": "京都大学 / ボノボ研究",
    "url": "https://www.wrc.kyoto-u.ac.jp/kumasan/ja/report/bonobos/"
  },
  "source-129": {
    "title": "国立アートリサーチセンター / 海の市日",
    "url": "https://artplatform.go.jp/ja/collections/W1002854"
  },
  "source-130": {
    "title": "加納永美子公式 / Profile",
    "url": "https://kanoemiko.amebaownd.com/pages/77100/profile"
  },
  "source-131": {
    "title": "講談社 / ガラスの麒麟",
    "url": "https://www.kodansha.co.jp/book/products/0000198714"
  },
  "source-132": {
    "title": "新潮社 / カーテンコール！",
    "url": "https://www.shinchosha.co.jp/book/102251/"
  },
  "source-133": {
    "title": "新潮社 / 加納朋子・著者紹介",
    "url": "https://www.shinchosha.co.jp/writer/5993/"
  },
  "source-134": {
    "title": "KADOKAWA / 秒速5センチメートル one more side",
    "url": "https://www.kadokawa.co.jp/product/201104000007/"
  },
  "source-135": {
    "title": "KADOKAWA / 言の葉の庭・2017年版",
    "url": "https://www.kadokawa.co.jp/product/321706000203/"
  },
  "source-136": {
    "title": "光文社 / 2024年8月新刊案内・鉄のほころび",
    "url": "https://pr.kobunsha.com/denshishoseki/pdf/all_202408.pdf"
  },
  "source-137": {
    "title": "河出書房新社 / これはちゃうか",
    "url": "https://www.kawade.co.jp/np/isbn/9784309030814/"
  },
  "source-138": {
    "title": "文藝春秋 / かわいないで",
    "url": "https://books.bunshun.jp/ud/book/num/9784163918419"
  },
  "source-139": {
    "title": "火ノ丸相撲公式 / 加納彰平",
    "url": "https://www.hinomaru-zumou.com/character/kano.html"
  },
  "source-140": {
    "title": "TBS公式 / アウトブレイク・カンパニー あらすじ",
    "url": "https://www.tbs.co.jp/anime/obc/story/"
  },
  "source-141": {
    "title": "Summer Pocketsアニメ公式 / 登場人物",
    "url": "https://summerpockets-anime.jp/uncategorized/"
  },
  "source-142": {
    "title": "東京喰種：re公式 / 嘉納明博",
    "url": "https://www.marv.jp/special/tokyoghoul/chara/chara_04_28.html"
  },
  "source-143": {
    "title": "スタリラ公式 / 叶美空",
    "url": "https://revuestarlight.bushimo.jp/character/misora/"
  },
  "source-144": {
    "title": "おおきく振りかぶって公式 / 三星学園のキャラクター",
    "url": "https://www.oofuri.com/chara/mihoshi.html"
  },
  "source-145": {
    "title": "日本アニメーション公式 / ハングリーハート WILD STRIKER",
    "url": "https://www.nippon-animation.co.jp/work/1819/"
  },
  "source-146": {
    "title": "TBS公式 / 会長はメイド様！ 叶爽太郎",
    "url": "https://www.tbs.co.jp/anime/maidsama/chara/chara04.html"
  },
  "source-147": {
    "title": "講談社公式プレスリリース / バトルスタディーズ",
    "url": "https://prtimes.jp/main/html/rd/p/000001251.000001719.html"
  },
  "source-148": {
    "title": "TBS公式 / 半沢直樹 スパイラル相関図",
    "url": "https://www.tbs.co.jp/hanzawa_naoki/chart/spiral.html"
  },
  "source-149": {
    "title": "テレビ朝日公式 / 警視庁捜査一課9係 season11 キャスト",
    "url": "https://www.tv-asahi.co.jp/9gakari_11/cast/"
  },
  "source-150": {
    "title": "セガサミー公式 / ペルソナ5：The Phantom X 発表資料",
    "url": "https://www.segasammy.co.jp/cms/wp-content/uploads/pdf/ja/ir/20240926_P5X_j.pdf"
  },
  "source-151": {
    "title": "松竹公式 / 御法度",
    "url": "https://www.shochiku.co.jp/cinema/database/04538/"
  },
  "source-152": {
    "title": "松竹公式 / あの花の続編制作発表",
    "url": "https://movies.shochiku.co.jp/anohoshi-movie/news/release_20260219/"
  },
  "source-153": {
    "title": "PlayStation公式ブログ / 428 封鎖された渋谷で",
    "url": "https://blog.ja.playstation.com/2018/08/24/20180824-428/"
  },
  "source-154": {
    "title": "読売テレビ公式 / 電波教師 キャラクター",
    "url": "https://www.ytv.co.jp/denpa/character/"
  },
  "source-155": {
    "title": "日本鳥学会『鳥類学用語集』",
    "url": "https://ornithology.jp/docs/osj_ornithological_terms_2006.pdf"
  },
  "source-156": {
    "title": "TBS プリンセス駅伝2026 センコー",
    "url": "https://www.tbs.co.jp/princess-ekiden/team/23.html"
  },
  "source-157": {
    "title": "愛知教育大学 研究者総覧・宇納一公",
    "url": "https://souran.aichi-edu.ac.jp/teachers/9024a6ab9edb91f8.html"
  },
  "source-158": {
    "title": "デンソーテクニカルレビュー10巻2号・著者紹介",
    "url": "https://www.denso.com/jp/ja/-/media/global/business/innovation/review/10-2/10-2-doc-dissertation11-id-ja.pdf"
  },
  "source-159": {
    "title": "JA横浜 あぐり横浜・プチ アントルメ",
    "url": "https://ja-yokohama.or.jp/ebook/aguri/agri12_249/pageindices/index8.html"
  },
  "source-160": {
    "title": "ウノウシリーズ 公式サイト",
    "url": "https://www.unou-series.com/"
  },
  "source-161": {
    "title": "広島大学 久納早智",
    "url": "https://www.hiroshima-u.ac.jp/bungaku/research/staff/kuno_sachi"
  },
  "source-162": {
    "title": "慶應義塾 研究者情報・久納孝彦",
    "url": "https://k-ris.keio.ac.jp/html/100011269_ja.html"
  },
  "source-163": {
    "title": "内閣府 令和7年秋 瑞宝中綬章受章者名簿",
    "url": "https://www8.cao.go.jp/shokun/hatsurei/r07aki/meibo_jokun/zuiho-chujusho.pdf"
  },
  "source-164": {
    "title": "新纂浄土宗大辞典 久納察冏",
    "url": "https://jodoshuzensho.jp/daijiten/index.php/久納察冏"
  },
  "source-165": {
    "title": "新纂浄土宗大辞典 功能",
    "url": "https://jodoshuzensho.jp/daijiten/index.php/功能"
  },
  "source-166": {
    "title": "株式会社クノウ 会社概要",
    "url": "https://www.kunou.co.jp/about/"
  },
  "source-167": {
    "title": "古河市 住所表記",
    "url": "https://www.city.ibaraki-koga.lg.jp/soshiki/soumu/4/1441.html"
  },
  "source-168": {
    "title": "日本郵便 島根県安来市九重町",
    "url": "https://www.post.japanpost.jp/cgi-zip/zipcode.php?city=1322060&id=125561&merge=&pref=32"
  },
  "source-169": {
    "title": "日本郵便 奈良市の郵便番号一覧",
    "url": "https://www.post.japanpost.jp/cgi-zip/zipcode.php?city=1292010&pref=29"
  },
  "source-170": {
    "title": "秋田書店 クローズ25周年・九能龍信",
    "url": "https://www.akitashoten.co.jp/special/crows25th/characters/47"
  },
  "source-171": {
    "title": "BS日テレ ハイスクールD×D HERO",
    "url": "https://www.bs4.jp/haremking/"
  },
  "source-172": {
    "title": "文藝春秋 ガリレオシリーズ",
    "url": "https://www.bunshun.co.jp/galileo/"
  },
  "source-173": {
    "title": "東京創元社 苦悩する男",
    "url": "https://www.tsogen.co.jp/np/isbn/9784488209223"
  },
  "source-174": {
    "title": "国立西洋美術館 永遠の苦悩",
    "url": "https://collection.nmwa.go.jp/S.1959-0061.html"
  },
  "source-175": {
    "title": "Art Platform Japan 瑛九・苦悩",
    "url": "https://artplatform.go.jp/ja/collections/W646455"
  },
  "source-176": {
    "title": "神奈川県立近代美術館 2025年度コレクション展3",
    "url": "https://www.moma.pref.kanagawa.jp/exhibition/2025-h-collection3/"
  },
  "source-177": {
    "title": "山梨県立美術館 アンジェリカ第1部",
    "url": "https://jmapps.ne.jp/yamanashimuse/det.html?data_id=2602"
  },
  "source-178": {
    "title": "愛知県美術館 恩地孝四郎作品情報",
    "url": "https://jmapps.ne.jp/apmoa/det.html?data_id=18295&data_idx=0&referer_id=18255"
  },
  "source-179": {
    "title": "Snoh 会社概要",
    "url": "https://www.snoh.info/about/"
  },
  "source-180": {
    "title": "日本郵便 2025年 あいテレビとの協定発表",
    "url": "https://www.post.japanpost.jp/notification/pressrelease/2025/11_shikoku/0723_01_01.pdf"
  },
  "source-181": {
    "title": "Synspective 2026年1月の役員人事",
    "url": "https://www.synspective.com/jp/news/executive_appointments_20260101/"
  },
  "source-182": {
    "title": "日本医療法人協会 2025年役員名簿",
    "url": "https://ajhc.or.jp/profile/2025_yakuin.pdf"
  },
  "source-183": {
    "title": "心臓病センター榊原病院 2025年2月外来担当表",
    "url": "https://www.sakakibara-hp.com/institution/support/community/pdf/renkei_tantou_2502.pdf"
  },
  "source-184": {
    "title": "楽天ブックス Swiss love・刊行時著者紹介",
    "url": "https://books.rakuten.co.jp/rb/1470010/"
  },
  "source-185": {
    "title": "佐賀県立佐賀農業高等学校 公式パンフレット",
    "url": "https://www.education.saga.jp/hp/saganougyoukoukou/wp-content/uploads/sites/268/2020/06/新漫画版パンフ.pdf"
  },
  "source-186": {
    "title": "秋田書店 月刊少年チャンピオン2013年12月号",
    "url": "https://www.akitashoten.co.jp/m-champion/2013/12"
  },
  "source-187": {
    "title": "大阪公立大学医学部附属病院 羽曳野市の連携医一覧",
    "url": "https://www.hosp.omu.ac.jp/pdf/renkei_tourokui/03_osaka-fu/12_habikino-shi_fu-2506.pdf"
  }
};
  window.QUIZ_QUESTIONS = [
  {
    "id": "v3-001",
    "answer": "ウノウ",
    "answerText": "ウノウ（回文）",
    "category": "ミニひらめき",
    "topic": "palindrome",
    "domain": "人物・文化",
    "kind": "wordplay",
    "standardConcept": null,
    "prompt": "次のうち回文は？",
    "explanation": "ウノウは、前から読んでも後ろから読んでも同じです。",
    "source": null,
    "visual": null,
    "wordplay": true
  },
  {
    "id": "v3-002",
    "answer": "ウノウ",
    "answerText": "うのう",
    "category": "お店",
    "topic": "restaurant",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "大阪府内で本店やあべの店などを展開する焼肉店は？",
    "explanation": "店名は「和牛焼肉 うのう」。選択肢ではウノウです。",
    "source": "source-001",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-003",
    "answer": "ウノウ",
    "answerText": "ウノウ",
    "category": "企業",
    "topic": "unoh-history",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "メルカリ創業者の山田進太郎が、メルカリより前に設立した会社は？",
    "explanation": "山田進太郎は2001年にウノウを設立し、2010年にZyngaへ売却しました。",
    "source": "source-002",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-004",
    "answer": "ウノウ",
    "answerText": "右脳",
    "category": "脳の知識",
    "topic": "prosody",
    "domain": "脳",
    "kind": "standard",
    "standardConcept": "emotional-prosody",
    "prompt": "声の抑揚に込められた感情を理解する働きで、重要な役割を果たす側の大脳半球は？",
    "explanation": "右脳です。感情を伝える声の高低やリズムは、右半球の働きが重要な分野です。",
    "source": "source-003",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-005",
    "answer": "ウノウ",
    "answerText": "右脳",
    "category": "脳の知識",
    "topic": "spatial-attention",
    "domain": "脳",
    "kind": "standard",
    "standardConcept": "spatial-neglect",
    "prompt": "左側の空間への注意が弱くなる「左半側空間無視」と、特に関係が深い側の半球は？",
    "explanation": "右脳です。右半球の損傷後に左側への注意が弱くなることがあります。",
    "source": "source-004",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-006",
    "answer": "ウノウ",
    "answerText": "右脳",
    "category": "脳の知識",
    "topic": "motor",
    "domain": "脳",
    "kind": "standard",
    "standardConcept": "motor-crossing",
    "prompt": "左手を動かす信号の多くは、反対側の大脳から出る。その側の呼び名は？",
    "explanation": "左手の随意運動には、主に右脳の運動野が関わります。",
    "source": "source-005",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-007",
    "answer": "ウノウ",
    "answerText": "右脳",
    "category": "脳の知識",
    "topic": "visual-field",
    "domain": "脳",
    "kind": "standard",
    "standardConcept": "visual-field-crossing",
    "prompt": "両目で見た景色のうち、注視点より左側の情報を主に受け取る大脳半球は？",
    "explanation": "左視野の情報は主に右脳の視覚野へ届きます。左目だけ、という意味ではありません。",
    "source": "source-006",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-008",
    "answer": "ウノウ",
    "answerText": "右脳",
    "category": "脳の知識",
    "topic": "touch",
    "domain": "脳",
    "kind": "standard",
    "standardConcept": "somatosensory-crossing",
    "prompt": "左手のひらに触れた刺激を処理する一次体性感覚野は、主にどちらの大脳半球にある？",
    "explanation": "左手の体性感覚は主に、反対側にある右脳の一次体性感覚野で処理されます。",
    "source": "source-007",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-009",
    "answer": "サノウ",
    "answerText": "左脳",
    "category": "脳の知識",
    "topic": "language-main",
    "domain": "脳",
    "kind": "standard",
    "standardConcept": "language-lateralization",
    "prompt": "多くの人で、言語の主要な働きが比較的集中している側の大脳半球は？",
    "explanation": "多くの人では左脳に主要な言語領域があります。ただし言語は左脳だけの仕事ではありません。",
    "source": "source-008",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-010",
    "answer": "クノウ",
    "answerText": "苦悩",
    "category": "語彙",
    "topic": "meaning-kunou",
    "domain": "ことば",
    "kind": "standard",
    "standardConcept": "anguish-meaning",
    "prompt": "精神的に苦しみ、深く悩むことを表す言葉は？",
    "explanation": "心の苦しみや悩みを「苦悩」といいます。",
    "source": "source-009",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-011",
    "answer": "クノウ",
    "answerText": "苦悩",
    "category": "文学",
    "topic": "dazai",
    "domain": "本",
    "kind": "standard",
    "standardConcept": "dazai-yearbook-title",
    "prompt": "太宰治の随筆『○○の年鑑』。○○に入るのは？",
    "explanation": "作品名は『苦悩の年鑑』です。1946年に発表されました。",
    "source": "source-010",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-012",
    "answer": "クノウ",
    "answerText": "苦悩",
    "category": "文学",
    "topic": "kafka",
    "domain": "本",
    "kind": "standard",
    "standardConcept": "kafka-first-sorrow-title",
    "prompt": "カフカの短編『最初の○○』。空中ぶらんこ乗りが登場する作品名は？",
    "explanation": "原田義人訳で『最初の苦悩』という題名になっています。",
    "source": "source-011",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-013",
    "answer": "カノウ",
    "answerText": "可能",
    "category": "古文",
    "topic": "classical-grammar",
    "domain": "人物・文化",
    "kind": "standard",
    "standardConcept": "classical-auxiliary-functions",
    "prompt": "助動詞「る・らる」の意味は、受身・自発・尊敬と、あと1つは？",
    "explanation": "あと1つは可能です。「〜できる」という意味を表します。",
    "source": "source-012",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-014",
    "answer": "カノウ",
    "answerText": "嘉納",
    "category": "歴史",
    "topic": "jigoro",
    "domain": "歴史・地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "柔道の創始者・○○治五郎。○○に入る名字の読みは？",
    "explanation": "嘉納治五郎（かのう・じごろう）です。1882年に講道館を創設しました。",
    "source": "source-013",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-015",
    "answer": "カノウ",
    "answerText": "狩野",
    "category": "美術",
    "topic": "eitoku-lion",
    "domain": "美術",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "『唐獅子図屏風』の右隻を描いた桃山時代の絵師・○○永徳。名字の読みは？",
    "explanation": "狩野永徳（かのう・えいとく）です。",
    "source": "source-014",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-023",
    "answer": "カノウ",
    "answerText": "加納",
    "category": "スポーツ",
    "topic": "koki",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "東京2020のフェンシング男子エペ団体金メダリスト・○○虹輝。名字の読みは？",
    "explanation": "加納虹輝（かのう・こうき）です。",
    "source": "source-021",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-026",
    "answer": "カノウ",
    "answerText": "加納",
    "category": "歴史・地理",
    "topic": "kano-castle",
    "domain": "歴史・地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "関ヶ原の戦いの後、徳川家康の命で築かれた岐阜市の「加納城」。城を除いた読みは？",
    "explanation": "加納城は「かのうじょう」。地名の加納はカノウです。",
    "source": "source-024",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-028",
    "answer": "サノウ",
    "answerText": "左脳",
    "category": "図解",
    "topic": "orientation-axial",
    "domain": "脳",
    "kind": "standard",
    "standardConcept": "axial-orientation",
    "prompt": "画面左を本人の右として表示した画像の模式図。色の付いた半球は？",
    "explanation": "Rは本人の右、Lは本人の左です。色の付いた部分は本人の左側なので左脳です。",
    "source": "source-026",
    "visual": {
      "type": "brain",
      "side": "左",
      "view": "axial",
      "note": "R＝本人の右、L＝本人の左。形は簡略化しています。"
    },
    "wordplay": false
  },
  {
    "id": "v3-029",
    "answer": "カノウ",
    "answerText": "加納",
    "category": "アイドル",
    "topic": "appare-producer",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "アイドルグループ「Appare!」のプロデューサーで、名前が「凌（りょう）」の人物。苗字の読みは？",
    "explanation": "加納凌（カノウリョウ）さんです。ラジオ「裏！でびラジ」でも、Appare!のプロデューサーとして紹介されています。",
    "source": "source-027",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-030",
    "answer": "クノウ",
    "answerText": "久能",
    "category": "日本史",
    "topic": "ieyasu-first-burial",
    "domain": "歴史・地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "徳川家康が遺命により最初に埋葬された静岡の山。現在「○○山東照宮」が建つ、この「○○」の読みは？",
    "explanation": "久能山（くのうざん）です。「山」を除いた「久能」の読みはクノウ。家康の遺骸が埋葬された地に、久能山東照宮が創建されました。",
    "source": "source-028",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-031",
    "answer": "サノウ",
    "answerText": "砂嚢",
    "category": "生物",
    "topic": "gizzard",
    "domain": "生物",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "鳥類やミミズなどに見られ、食べた物をすりつぶす消化器官。鳥類では「筋胃」とも呼ばれる、その名前は？",
    "explanation": "砂嚢（さのう）です。鳥類では筋胃とも呼ばれます。食物を一時的にためる嗉嚢（そのう）とは別の器官です。",
    "source": "source-029",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-032",
    "answer": "ウノウ",
    "answerText": "宇野 宇",
    "category": "放送・人物",
    "topic": "unou-writer",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "新野新に師事し、師匠と笑福亭鶴瓶にペンネームを付けてもらった放送作家。「宇野 宇」のフルネームの読みは？",
    "explanation": "宇野 宇は「うの う」と読みます。1981年に新野新に師事して放送作家となりました。",
    "source": "source-030",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-033",
    "answer": "ウノウ",
    "answerText": "宇納",
    "category": "演劇・人物",
    "topic": "unou-tasuku",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "劇団ラッパ屋の俳優・宇納佑。名前は「たすく」、名字「宇納」の読みは？",
    "explanation": "宇納佑は「うのう たすく」。劇団公式でも Tasuku Unou と紹介されています。",
    "source": "source-031",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-034",
    "answer": "ウノウ",
    "answerText": "ウノウ（電子）",
    "category": "ものづくり",
    "topic": "unou-electronics",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "岐阜県神戸町で電子基板の加工・導通検査を手がける会社。「株式会社○○電子」の○○は？",
    "explanation": "株式会社ウノウ電子です。1977年に宇納電子工業として創立し、1993年に現在の社名へ変更しました。",
    "source": "source-032",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-035",
    "answer": "ウノウ",
    "answerText": "宇納",
    "category": "漫画",
    "topic": "unou-ayano",
    "domain": "漫画・映像・ゲーム",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "うんばばの漫画『俺らは絶対に分かり合えません！』で、佐野理の隣の席にいる少女・綾乃の名字は？",
    "explanation": "宇納綾乃（うのう あやの）です。無表情ながら佐野に積極的に話しかける少女として描かれます。",
    "source": "source-033",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-036",
    "answer": "ウノウ",
    "answerText": "宇納",
    "category": "写真",
    "topic": "unou-satoshi",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "ボクサーや剣道選手を撮影した写真家・宇納敏。名前は「さとし」、名字「宇納」の読みは？",
    "explanation": "宇納敏は「うのう さとし」。日本写真家協会の調査報告書では、ボクシングジムや剣道大会の写真が紹介されています。",
    "source": "source-034",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-037",
    "answer": "ウノウ",
    "answerText": "右納",
    "category": "名字",
    "topic": "unou-seiji",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "名古屋市の税理士・右納誠司。名前は「せいじ」、名字「右納」の読みは？",
    "explanation": "「右納」は「うのう」と読みます。本人の税理士事務所の紹介ページにふりがなが記載されています。",
    "source": "source-035",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-038",
    "answer": "カノウ",
    "answerText": "化膿",
    "category": "ことば",
    "topic": "suppuration",
    "domain": "ことば",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "傷口などに膿（うみ）が生じることを、漢字2文字で何という？",
    "explanation": "化膿（かのう）です。傷口などが膿をもつことを指す言葉です。",
    "source": "source-036",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-039",
    "answer": "カノウ",
    "answerText": "嘉納",
    "category": "ことば",
    "topic": "gracious-acceptance",
    "domain": "ことば",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "目上の人が、献上された品物や進言を喜んで受け入れることを何という？",
    "explanation": "嘉納（かのう）です。品物や意見を、喜んで受け入れるという意味があります。",
    "source": "source-037",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-040",
    "answer": "カノウ",
    "answerText": "仮納",
    "category": "ことば",
    "topic": "provisional-payment",
    "domain": "ことば",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "金銭や品物を、正式な納入に先立って仮に納めることを何という？",
    "explanation": "仮納（かのう）です。金銭・物品などを仮に納めることを表します。",
    "source": "source-038",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-041",
    "answer": "カノウ",
    "answerText": "過納",
    "category": "ことば",
    "topic": "overpayment",
    "domain": "ことば",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "税額が後から減額され、結果として納め過ぎになったこと。「過納」の読みは？",
    "explanation": "過納（かのう）です。納付した税金が、後の税額の変更などによって払い過ぎとなる場合に使われます。",
    "source": "source-039",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-042",
    "answer": "カノウ",
    "answerText": "加納",
    "category": "日本史",
    "topic": "manor-addition",
    "domain": "歴史・地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "中世の荘園が、公田などを本免田の付属地として取り込んで拡大すること。「加納」の読みは？",
    "explanation": "加納（かのう）です。人の名字や岐阜の地名だけでなく、荘園の拡大に関する歴史用語でもあります。",
    "source": "source-040",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-043",
    "answer": "カノウ",
    "answerText": "花嚢",
    "category": "植物",
    "topic": "fig-flower-receptacle",
    "domain": "生物",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "イチジクの仲間で、小さな花を内側にたくさんつける、袋のような構造。「花嚢」の読みは？",
    "explanation": "花嚢（かのう）です。外から花が見えにくいのは、小さな花がこの構造の内側にあるためです。",
    "source": "source-041",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-044",
    "answer": "カノウ",
    "answerText": "果嚢",
    "category": "植物",
    "topic": "fig-fruit-receptacle",
    "domain": "生物",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "イヌビワで、若い段階の花嚢が熟して果実状になったもの。「果嚢」の読みは？",
    "explanation": "果嚢（かのう）です。倉吉博物館の解説では、若いものを花嚢、熟したものを果嚢と区別しています。",
    "source": "source-042",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-045",
    "answer": "クノウ",
    "answerText": "久能",
    "category": "漫画・ドラマ",
    "topic": "kuno-totonou",
    "domain": "漫画・映像・ゲーム",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "『ミステリと言う勿れ』の主人公は、カレー好きで天然パーマの大学生・○○整。苗字は？",
    "explanation": "久能整（くのう・ととのう）です。ドラマでは菅田将暉が演じています。",
    "source": "source-043",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-046",
    "answer": "クノウ",
    "answerText": "九能",
    "category": "漫画・アニメ",
    "topic": "kuno-tatewaki",
    "domain": "漫画・映像・ゲーム",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "『らんま1/2』で、風林館高校剣道部の主将を務める「帯刀」の苗字は？",
    "explanation": "九能帯刀（くのう・たてわき）です。自ら「蒼い雷」と名乗っています。",
    "source": "source-044",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-049",
    "answer": "クノウ",
    "answerText": "久能",
    "category": "科学・人物",
    "topic": "kuno-rescula",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "緑内障治療薬「レスキュラ」の開発に携わり、アールテック・ウエノを共同創業した「祐子」さん。苗字は？",
    "explanation": "久能祐子（くのう・さちこ）さんです。上野隆司さんと創薬に取り組みました。",
    "source": "source-046",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-051",
    "answer": "クノウ",
    "answerText": "久能",
    "category": "報道・人物",
    "topic": "kuno-yasushi",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "日本テレビの元アナウンサーで、皇室ジャーナリストとして知られる「靖」さん。苗字は？",
    "explanation": "久能靖（くのう・やすし）さんです。日本テレビではニュースや事件の中継を担当しました。",
    "source": "source-048",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-060",
    "answer": "クノウ",
    "answerText": "久能",
    "category": "文化財",
    "topic": "kunoji-kyo",
    "domain": "歴史・地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "平安時代の装飾経で、鉄舟寺に19巻が伝わる国宝「○○寺経」。○○は？",
    "explanation": "久能寺経（くのうじきょう）です。東京国立博物館などにも分蔵されている装飾経です。",
    "source": "source-057",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-061",
    "answer": "クノウ",
    "answerText": "久能",
    "category": "郷土芸能",
    "topic": "kuno-shishimai",
    "domain": "歴史・地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "千葉県富里市の駒形神社で伝承され、「やきもち獅子」とも呼ばれる「○○獅子舞」。○○は？",
    "explanation": "久能獅子舞（くのうししまい）です。雌獅子をめぐる雄獅子2匹の物語を、3匹の獅子で演じます。",
    "source": "source-058",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-065",
    "answer": "サノウ",
    "answerText": "砂のう（果肉の粒）",
    "category": "植物・食",
    "topic": "citrus-juice-sacs",
    "domain": "生物",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "ミカンの一房の中に詰まる、果汁を含んだ小さな粒。「砂じょう」とも呼ばれる、この粒の別名は？",
    "explanation": "さのうです。果肉のつぶつぶを包む小さな袋を指し、房全体を包む薄皮「じょうのう」とは区別します。",
    "source": "source-062",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-066",
    "answer": "サノウ",
    "answerText": "砂嚢（砂を入れた袋）",
    "category": "道具・言葉",
    "topic": "sandbag",
    "domain": "ことば",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "中に砂を詰めた袋を、漢字で「砂嚢」と書く。「すなぶくろ」のほかの音読みは？",
    "explanation": "砂嚢（さのう）です。消化器官を指すこともありますが、この問題では砂入りの袋という意味です。",
    "source": "source-063",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-067",
    "answer": "サノウ",
    "answerText": "佐納",
    "category": "科学・本",
    "topic": "sano-yasuharu-geomagnetism",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "永野宏と『長谷川万吉と地球電磁気学』を共著した、朝日大学の研究者・○○康治。苗字は？",
    "explanation": "佐納康治（さのう・やすはる）さんです。地球や惑星の磁場、地球電磁気学の歴史を研究しています。",
    "source": "source-064",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-068",
    "answer": "サノウ",
    "answerText": "サノウ株式会社",
    "category": "ITの歴史",
    "topic": "sanou-neoad",
    "domain": "歴史・地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "携帯サイト向け広告ネットワーク「NeoAd」を開発・運営し、2010年にGMOアドパートナーズの子会社になった会社は？",
    "explanation": "サノウ株式会社です。GMOの公式IR資料で、NeoAdの開発・運営会社として紹介されています。",
    "source": "source-065",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-069",
    "answer": "サノウ",
    "answerText": "佐能",
    "category": "企業",
    "topic": "sanou-shozanen",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "岡山県井原市の土木・造園会社「○○松山園」。社名の前半2字の読みは？",
    "explanation": "佐能松山園（さのうしょうざんえん）です。政府の法人情報でも、この読みが登録されています。",
    "source": "source-066",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-070",
    "answer": "カノウ",
    "answerText": "叶（匠壽庵）",
    "category": "和菓子",
    "topic": "kanou-shoujuan",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "滋賀県大津市に『寿長生の郷』を構え、銘菓『あも』で知られる和菓子店。『○○ 匠壽庵』の○○は？",
    "explanation": "叶（かのう）匠壽庵です。本社の寿長生の郷では、梅や柚子など菓子の原料も育てています。",
    "source": "source-067",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-073",
    "answer": "カノウ",
    "answerText": "叶（神社）",
    "category": "神社",
    "topic": "kanou-uraga-shrine",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "横須賀市の浦賀湾を挟んで東西に鎮座し、両社を巡ってお守りをそろえることでも知られる『○○神社』は？",
    "explanation": "叶（かのう）神社です。東叶神社は東浦賀、西叶神社は西浦賀にあります。",
    "source": "source-070",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-075",
    "answer": "カノウ",
    "answerText": "嘉納（山）",
    "category": "山",
    "topic": "kanou-suo-mountain",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "山口県の周防大島で最高峰となる山。文珠山・源明山・嵩山と縦走できる『○○山』は？",
    "explanation": "嘉納山（かのうさん）です。周防大島の最高峰で、瀬戸内アルプスの縦走コースに含まれます。",
    "source": "source-072",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-082",
    "answer": "カノウ",
    "answerText": "カノウ（冷機）",
    "category": "企業",
    "topic": "kanou-reiki",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "超低温フリーザーやワクチン・検体用の保管冷凍庫を開発するメーカー。『○○冷機』は？",
    "explanation": "カノウ冷機です。神奈川県愛川町を拠点に、超低温冷凍庫や冷蔵ショーケースなどを製造・販売しています。",
    "source": "source-079",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-145",
    "answer": "カノウ",
    "answerText": "加能",
    "category": "文学",
    "topic": "kanou-sakujiro-yononaka",
    "domain": "本",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "小説『世の中へ』で知られる石川県出身の作家・○○作次郎。苗字の読みは？",
    "explanation": "加能作次郎です。1918年の『世の中へ』で文壇的地位を確立しました。",
    "source": "source-099",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-146",
    "answer": "カノウ",
    "answerText": "香納",
    "category": "小説",
    "topic": "kanou-ryoichi-maboroshi",
    "domain": "本",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "『幻の女』で日本推理作家協会賞を受賞した作家・○○諒一。苗字の読みは？",
    "explanation": "香納諒一です。1999年に『幻の女』で同賞の長編部門を受賞しました。",
    "source": "source-100",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-155",
    "answer": "カノウ",
    "answerText": "叶",
    "category": "芸能",
    "topic": "kanou-sisters",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "恭子と美香からなる、華やかな装いで知られる「○○姉妹」。○○に入る読みは？",
    "explanation": "叶姉妹です。恭子さんと美香さんがテレビなどで活動しています。",
    "source": "source-109",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-172",
    "answer": "カノウ",
    "answerText": "家納",
    "category": "演劇",
    "topic": "kanou-junko",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "劇団「サモ・アリナンズ」に2002年に入団した俳優・○○ジュンコ。苗字の読みは？",
    "explanation": "家納ジュンコです。名前の表記は「家納」で、読みは「かのう」です。",
    "source": "source-126",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v3-194",
    "answer": "カノウ",
    "answerText": "加納",
    "category": "ドラマ",
    "topic": "kano-kazunari",
    "domain": "漫画・映像・ゲーム",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "2020年のドラマ『半沢直樹』で、スパイラルの戦略担当役員として井上芳雄が演じた「一成」の苗字は？",
    "explanation": "加納一成（かのう・かずなり）です。瀬名洋介たちとスパイラルを立ち上げた一人です。",
    "source": "source-148",
    "visual": null,
    "wordplay": false
  },
  {
    "id": "v4-001",
    "answer": "ウノウ",
    "answerText": "羽嚢",
    "category": "生物",
    "topic": "feather-follicle",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "鳥の羽毛がつくられる、皮膚にある袋状の構造。英語でfeather follicleと呼ぶものは？",
    "explanation": "羽嚢（うのう）です。羽毛の根元にある構造で、消化器官の砂嚢とは別です。",
    "source": "source-155",
    "visual": null,
    "wordplay": false,
    "researchId": "NU01"
  },
  {
    "id": "v4-002",
    "answer": "ウノウ",
    "answerText": "宇納",
    "category": "スポーツ",
    "topic": "unou-anri",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "プリンセス駅伝2026のセンコーのチーム紹介に載る陸上選手「杏莉」。苗字の読みは？",
    "explanation": "宇納杏莉（うのう・あんり）です。日本陸連の大会資料でも姓の読みを確認できます。",
    "source": "source-156",
    "visual": null,
    "wordplay": false,
    "researchId": "NU02"
  },
  {
    "id": "v4-003",
    "answer": "ウノウ",
    "answerText": "宇納",
    "category": "美術",
    "topic": "unou-kazuhiro",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "彫刻を専門とする愛知教育大学名誉教授「一公」。苗字の読みは？",
    "explanation": "宇納一公（うのう・かずひろ）です。大学の研究者総覧に読みと研究分野が掲載されています。",
    "source": "source-157",
    "visual": null,
    "wordplay": false,
    "researchId": "NU03"
  },
  {
    "id": "v4-004",
    "answer": "ウノウ",
    "answerText": "鵜生",
    "category": "技術",
    "topic": "unou-takanori",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "2005年のデンソーテクニカルレビューで、EMCの研究に携わる著者として紹介された「高徳」。苗字の読みは？",
    "explanation": "鵜生高徳（うのう・たかのり）です。同誌10巻2号の著者紹介に読みが記されています。",
    "source": "source-158",
    "visual": null,
    "wordplay": false,
    "researchId": "NU04"
  },
  {
    "id": "v4-005",
    "answer": "ウノウ",
    "answerText": "鵜納",
    "category": "お店",
    "topic": "unou-petit-entremets",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "JA横浜の広報誌で、日吉の洋菓子店「プチ アントルメ」の店主として紹介された「三三男」。苗字の読みは？",
    "explanation": "鵜納三三男さんです。日本総研の2016年度事業報告でも、同店の店主を「鵜納（うのう）」と記載しています。",
    "source": "source-159",
    "visual": null,
    "wordplay": false,
    "researchId": "NU05"
  },
  {
    "id": "v4-006",
    "answer": "ウノウ",
    "answerText": "ウノウ",
    "category": "企業",
    "topic": "unou-series",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "ロゴ・Web・ノベルティなどで事業の立ち上げを支援する制作サービス。「○○シリーズ」の○○は？",
    "explanation": "ウノウシリーズです。公式サイトで、事業に必要なデザインや制作の支援を案内しています。",
    "source": "source-160",
    "visual": null,
    "wordplay": false,
    "researchId": "NU06"
  },
  {
    "id": "v4-007",
    "answer": "クノウ",
    "answerText": "久納",
    "category": "歴史",
    "topic": "kuno-sachi",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "中世スペイン・マリョルカの国王統治と文書管理を研究する、広島大学の研究者「早智」。苗字の読みは？",
    "explanation": "久納早智（くのう・さち）です。広島大学の研究紹介に読みと研究内容が掲載されています。",
    "source": "source-161",
    "visual": null,
    "wordplay": false,
    "researchId": "NK01"
  },
  {
    "id": "v4-010",
    "answer": "クノウ",
    "answerText": "久納",
    "category": "歴史",
    "topic": "kuno-satsugei",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "仁川に教会所を設立するなどした、明治・大正期の浄土宗の僧「察冏」。苗字の読みは？",
    "explanation": "久納察冏（くのう・さつげい）です。『新纂浄土宗大辞典』に立項されています。",
    "source": "source-164",
    "visual": null,
    "wordplay": false,
    "researchId": "NK04"
  },
  {
    "id": "v4-011",
    "answer": "クノウ",
    "answerText": "功能",
    "category": "宗教",
    "topic": "kuno-buddhist-term",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "『新纂浄土宗大辞典』で、事物に期待される効能を表す「功能」の見出しに使われる読みは？",
    "explanation": "この辞典では「くのう」です。仏教の伝統によっては「くうのう」とも読み、一般語の「こうのう」とは区別しています。",
    "source": "source-165",
    "visual": null,
    "wordplay": false,
    "researchId": "NK05"
  },
  {
    "id": "v4-012",
    "answer": "クノウ",
    "answerText": "クノウ",
    "category": "企業",
    "topic": "kunou-koriyama",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "福島県郡山市を拠点に、広告と人材紹介を手がける「株式会社○○」。○○は？",
    "explanation": "株式会社クノウです。会社公式の概要に所在地と事業内容が掲載されています。",
    "source": "source-166",
    "visual": null,
    "wordplay": false,
    "researchId": "NK06"
  },
  {
    "id": "v4-013",
    "answer": "クノウ",
    "answerText": "久能",
    "category": "地理",
    "topic": "kuno-koga",
    "domain": "地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "茨城県古河市の総和地区にある地名「久能」。読みは？",
    "explanation": "くのうです。古河市公式の住所表記に読みが掲載されています。",
    "source": "source-167",
    "visual": null,
    "wordplay": false,
    "researchId": "NK07"
  },
  {
    "id": "v4-014",
    "answer": "クノウ",
    "answerText": "九重",
    "category": "地理",
    "topic": "kuno-yasugi",
    "domain": "地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "島根県安来市の「九重町」。「町」を除いた部分の読みは？",
    "explanation": "くのうです。町名全体は「くのうちょう」。大分県の九重町（ここのえまち）とは読みが異なります。",
    "source": "source-168",
    "visual": null,
    "wordplay": false,
    "researchId": "NK08"
  },
  {
    "id": "v4-015",
    "answer": "クノウ",
    "answerText": "公納",
    "category": "地理",
    "topic": "kuno-nara",
    "domain": "地理",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "奈良市の町名「公納堂町」。「堂町」を除いた前半2字の読みは？",
    "explanation": "くのうです。町名全体の読みは「くのうどうちょう」です。",
    "source": "source-169",
    "visual": null,
    "wordplay": false,
    "researchId": "NK09"
  },
  {
    "id": "v4-016",
    "answer": "クノウ",
    "answerText": "九能",
    "category": "漫画・アニメ",
    "topic": "kuno-ryushin",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "漫画『クローズ』で、四代目武装戦線の頭を務める「龍信」。苗字の読みは？",
    "explanation": "九能龍信（くのう・りゅうしん）です。秋田書店の公式人物紹介に読みも掲載されています。",
    "source": "source-170",
    "visual": null,
    "wordplay": false,
    "researchId": "NK10"
  },
  {
    "id": "v4-017",
    "answer": "クノウ",
    "answerText": "九重",
    "category": "漫画・アニメ",
    "topic": "kuno-dxd",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "『ハイスクールD×D HERO』で、京都の妖怪・八坂の娘であり、徳井青空が声を担当する「九重」。名前の読みは？",
    "explanation": "くのうです。京都で暮らす、九尾の狐の少女として登場します。",
    "source": "source-171",
    "visual": null,
    "wordplay": false,
    "researchId": "NK11"
  },
  {
    "id": "v4-018",
    "answer": "クノウ",
    "answerText": "苦悩",
    "category": "小説",
    "topic": "galileo-kunou",
    "domain": "人物・文化",
    "kind": "standard",
    "standardConcept": "galileo-kunou",
    "prompt": "東野圭吾のガリレオシリーズで、「悪魔の手」と名乗る相手の挑戦を描く『ガリレオの○○』。○○は？",
    "explanation": "『ガリレオの苦悩』です。作品名の一部を問う問題です。",
    "source": "source-172",
    "visual": null,
    "wordplay": false,
    "researchId": "NK12"
  },
  {
    "id": "v4-019",
    "answer": "クノウ",
    "answerText": "苦悩",
    "category": "小説",
    "topic": "troubled-man-mankell",
    "domain": "人物・文化",
    "kind": "standard",
    "standardConcept": "troubled-man-mankell",
    "prompt": "ヘニング・マンケルの刑事ヴァランダー・シリーズ。東京創元社から刊行された『○○する男』の○○は？",
    "explanation": "『苦悩する男』です。日本では上下巻で刊行されています。",
    "source": "source-173",
    "visual": null,
    "wordplay": false,
    "researchId": "NK13"
  },
  {
    "id": "v4-024",
    "answer": "クノウ",
    "answerText": "苦悩",
    "category": "美術",
    "topic": "onchi-lyric-light",
    "domain": "人物・文化",
    "kind": "standard",
    "standardConcept": "onchi-lyric-light",
    "prompt": "恩地孝四郎の1915年の木版画『抒情 ○○のうちに光る』。○○は？",
    "explanation": "『抒情 苦悩のうちに光る』です。版画誌『月映』に関わる作品です。",
    "source": "source-178",
    "visual": null,
    "wordplay": false,
    "researchId": "NK18"
  },
  {
    "id": "v4-025",
    "answer": "サノウ",
    "answerText": "Snoh",
    "category": "企業",
    "topic": "snoh-suwa",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "長野県諏訪市でWeb制作やプログラミング教育を手がける会社「Snoh」。社名の読みは？",
    "explanation": "サノウです。会社公式サイトで、社名の読みと事業内容が紹介されています。",
    "source": "source-179",
    "visual": null,
    "wordplay": false,
    "researchId": "NS01"
  },
  {
    "id": "v4-026",
    "answer": "サノウ",
    "answerText": "左納",
    "category": "人物",
    "topic": "sano-kazunori-itv",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "日本郵便の2025年の防災協定発表に、あいテレビ代表として記載された「和宜」。苗字の読みは？",
    "explanation": "左納和宜（さのう・かずのり）です。この問題は当該発表資料の表記に基づきます。",
    "source": "source-180",
    "visual": null,
    "wordplay": false,
    "researchId": "NS02"
  },
  {
    "id": "v4-027",
    "answer": "サノウ",
    "answerText": "左納",
    "category": "企業",
    "topic": "sano-takehiro-synspective",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "小型SAR衛星を扱うSynspectiveの2026年1月の役員発表に登場する「健大」。苗字の読みは？",
    "explanation": "左納健大（さのう・たけひろ）です。会社公式の役員人事発表に読みが記載されています。",
    "source": "source-181",
    "visual": null,
    "wordplay": false,
    "researchId": "NS03"
  },
  {
    "id": "v4-028",
    "answer": "サノウ",
    "answerText": "佐能",
    "category": "人物",
    "topic": "sano-kazuo-kosei",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "日本医療法人協会の2025年の役員名簿で、光生病院の所属として載る「量雄」。苗字の読みは？",
    "explanation": "佐能量雄（さのう・かずお）です。協会の公式名簿で読みを確認できます。",
    "source": "source-182",
    "visual": null,
    "wordplay": false,
    "researchId": "NS04"
  },
  {
    "id": "v4-029",
    "answer": "サノウ",
    "answerText": "佐能",
    "category": "人物",
    "topic": "sano-akira-sakakibara",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "心臓病センター榊原病院の2025年2月の外来担当表に載る、医師「昭」。苗字の読みは？",
    "explanation": "佐能昭（さのう・あきら）です。病院が公開した担当表に読み付きで掲載されています。",
    "source": "source-183",
    "visual": null,
    "wordplay": false,
    "researchId": "NS05"
  },
  {
    "id": "v4-030",
    "answer": "サノウ",
    "answerText": "佐納",
    "category": "写真",
    "topic": "sano-toru-swiss-love",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "写真集『Swiss love』の著者「徹」。苗字の読みは？",
    "explanation": "佐納徹（さのう・とおる）です。刊行時の著者紹介に読みが掲載されています。",
    "source": "source-184",
    "visual": null,
    "wordplay": false,
    "researchId": "NS06"
  },
  {
    "id": "v4-031",
    "answer": "サノウ",
    "answerText": "佐農",
    "category": "学校",
    "topic": "sano-saga-agricultural-school",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "佐賀県立佐賀農業高等学校の略称「佐農」。読みは？",
    "explanation": "さのうです。学校公式パンフレットの裏表紙にも、読み付きで「佐農」と記されています。",
    "source": "source-185",
    "visual": null,
    "wordplay": false,
    "researchId": "NS07"
  },
  {
    "id": "v4-032",
    "answer": "サノウ",
    "answerText": "さのう",
    "category": "漫画・アニメ",
    "topic": "sanou-kunikazu-erashiko",
    "domain": "人物・文化",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "サッカー漫画『えらしこ』の作者「○○くにかず」。○○に入る苗字の読みは？",
    "explanation": "さのうくにかずです。秋田書店の掲載誌紹介でも、この著者名で案内されています。",
    "source": "source-186",
    "visual": null,
    "wordplay": false,
    "researchId": "NS08"
  },
  {
    "id": "v4-033",
    "answer": "サノウ",
    "answerText": "さのう",
    "category": "施設",
    "topic": "sano-oka-clinic",
    "domain": "企業・施設",
    "kind": "alternate",
    "standardConcept": null,
    "prompt": "大阪府羽曳野市で医療法人優心会が運営する「丘の上○○クリニック」。○○は？",
    "explanation": "丘の上さのうクリニックです。大阪公立大学医学部附属病院の連携医一覧にも掲載されています。",
    "source": "source-187",
    "visual": null,
    "wordplay": false,
    "researchId": "NS09"
  }
];
})();
