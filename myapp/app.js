// expressのモジュールの読み込み
// appとすると、expressを使ってオブジェクトを作ってくれる
var express = require('express'),
    app = express();

// express4以降、この文言は不要のため削除
// app.use(app.router);
// 静的なファイルは、/publicから読み込みしてほしい、とする
app.use(express.static(__dirname + '/public'))

// スラッシュでアクセスしてきたら、次のことをしなさいよと言う命令
// usersの後の文言を処理の中に表示させる（URLの一部を取得することができる）
// ファイルを読み出したい場合には、sendFileを使用する
// わざわざ指定するのは面倒なので、express.staticを使用する
app.get('/hello.txt', function(req,res) {
    res.sendFile(__dirname + '/public/hello.txt');
});

app.listen(3000);
console.log("server starting...");