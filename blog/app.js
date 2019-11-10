// expressのモジュールの読み込み
// appとすると、expressを使ってオブジェクトを作ってくれる
var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    app = express(),
    post = require('./routes/post');

// テンプレートを読み込むための設定
// テンプレートがどこにあるか設定
app.set('views', __dirname + '/views');
// どのテンプレートエンジンを使うか指定
app.set('view engine', 'ejs');

// app.useで読み込まれるものを、middlewareと呼ぶ（expressにおいて）
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

// routing（いろんな関数を書くのだが、見通しが悪くなるので、別ファイルに書く）

app.get('/new', function(req, res) {
    res.render('new');
});

app.listen(3000);
console.log("server starting...");