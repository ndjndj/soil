# soil

## 達成したいこと

- 知りたい情報にすぐにアクセスすることができる
  - 資料の検索がしやすい
  - ページの読み込み速度がはやい
- データはローカルに残す
  - 閲覧もローカルのみ
  - セキュリティ上のためおよび、サーバー利用はまずは考えない
- ユーザー検索、プログラム検索
- マークダウンで登録したい

### 小まとめ
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

### 小まとめ
編集頻度が多いものは SSR, すくないものについては SSG を利用すれば読み込み速度の上昇が見込める

## stack
- DB
  - SQLite
  - ファイルで管理できるため、ローカルで運用が可能。スケールしたときに移行も考える
- HeadlessCMS
  - Strapi
- frontend framework
  - Next.js(React.js)
- UI-framework
  - Material-UI
