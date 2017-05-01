# tablesetting

全員が同じ環境でHTML, CSS コードを簡単に作成する為、
作成した開発環境です。Build は Gulp を使用しています。

## 設置

まずは、本レポジトリを `clone` し、ターミナル上で下記のコマンドを入力します。

```bash
$ ./go
```

> １回設置後には下記のコマンドを実行、
ブラウザで [http://localhost:3000/](http://localhost:3000/) を立ち上げてください。
```bash
$ npm start
```

### CSS
基本的にはSCSSで管理しています。

#### source に使用している modules

SCSS source には下記の modules を使用しています。
詳しい内容は `src/demo.scss`, `src/util.scss` コード、または下記のリンクで確認してください。
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [postcss-text-remove-gap](https://github.com/m18ru/postcss-text-remove-gap)
- [LostGrid](https://github.com/peterramsing/lost)
- [include-media](https://github.com/eduardoboucas/include-media/)

### JS
//@todo 説明追加
