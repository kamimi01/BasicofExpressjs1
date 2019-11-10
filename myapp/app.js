// expressのモジュールの読み込み
// appとすると、expressを使ってオブジェクトを作ってくれる
var express = require('express'),
    logger = require('morgan'),
    app = express();

// テンプレートを読み込むための設定
// テンプレートがどこにあるか設定
app.set('views', __dirname + '/views');
// どのテンプレートエンジンを使うか指定
app.set('view engine', 'ejs');

// app.useで読み込まれるものを、middlewareと呼ぶ（expressにおいて）
// 自分でmiddlewareを作ることもできる
// リクエストがやってきた時に、順次適用してください。と言う意味
// express4以降、この文言は不要のため削除
// app.use(app.router);
// 静的なファイルは、/publicから読み込みしてほしい、とする
// 開発中に便利なログ情報を表示することができる
// middlewareはいくつも重ねることができるが、次のmiddlewareを実行するには、next()を忘れずに
app.use(logger('dev'));
app.use(express.static(__dirname + '/public'))
/*
// 自分でmiddlewareを作成する
app.use(function(req, res, next) {
    console.log('my custom middleware !!');
    next();
});
*/

// スラッシュでアクセスしてきたら、次のことをしなさいよと言う命令
// usersの後の文言を処理の中に表示させる（URLの一部を取得することができる）
// ファイルを読み出したい場合には、sendFileを使用する
// わざわざ指定するのは面倒なので、express.staticを使用する
app.get('/', function(req,res) {
    // スラッシュにアクセスしてきたら、index.ejsにアクセス
    // 値を渡すこともできる
    res.render('index', {title: 'titleです'});
});

app.listen(3000);
console.log("server starting...");