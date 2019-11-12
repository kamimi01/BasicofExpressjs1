// expressのモジュールの読み込み
// appとすると、expressを使ってオブジェクトを作ってくれる
var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    post = require('./routes/post'),
    methodOverride = require('method-override'),
    connect = require('connect'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    csrf = require('csurf');

// テンプレートを読み込むための設定
// テンプレートがどこにあるか設定
app.set('views', __dirname + '/views');
// どのテンプレートエンジンを使うか指定
app.set('view engine', 'ejs');

// app.useで読み込まれるものを、middlewareと呼ぶ（expressにおいて）
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// ブラウザは、getとpostにしか対応していないので、putとdeleteにも対応できるようにするmiddlewareが必要
app.use(methodOverride('_method'));
app.use(logger('dev'));

// csrf対策（悪意のあるフォームから変なデータが投稿されないように）
app.use(cookieParser());
app.use(expressSession({secret: '2345$56',resave: false, saveUninitialized: true}));
app.use(csrf());
app.use(function(req, res, next) {
    res.locals.csrftoken = req.csrfToken();
    next();
});

// routing（いろんな関数を書くのだが、見通しが悪くなるので、別ファイルに書く）
// 記事一覧
app.get('/', post.index);
// 記事の詳細画面
app.get('/posts/:id([0-9]+)', post.show);
// 記事の新規作成のフォーム表示
app.get('/posts/new', post.new);
// 記事の新規作成した記事の表示
app.post('/posts/create', post.create);
// 記事の更新フォーム
app.get('/posts/:id/edit', post.edit);
// 記事の更新を実施する
app.put('/posts/:id', post.update);
// 記事の削除
app.delete('/posts/:id', post.destroy);

// エラー処理（渡されたidが違うとき）
app.use(function(err, req, res, next) {
    res.send(err.message);
});

app.listen(3000);
console.log("server starting...");