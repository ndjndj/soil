# soil

## 達成したいこと

- 知りたい情報にすぐにアクセスすることができる
  - 資料の検索がしやすい
  - ページの読み込み速度
- データはローカルに残す
- 閲覧もローカルのみ
- ユーザー検索、プログラム検索
- マークダウンで登録したい

データをローカルに残すことと、読み込み速度を考慮すると
Next.js と Strapi(SQLite) を使用した SSG or SSR が優位か

## 編集対象
1. 資料
  - 更新頻度少
  - SSG
2. 案件
  - 更新頻度多
  - SSR
3. 窓口
  - 更新頻度多
  - SSR

## stack

- DB
  - SQLite
- HeadlessCMS
  - Strapi
- frontend framework
  - Next.js(React.js)
- UI-framework
  - Material-UI
