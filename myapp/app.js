// expressのモジュールの読み込み
// appとすると、expressを使ってオブジェクトを作ってくれる
var express = require('express'),
    app = express();

// express4以降、この文言は不要のため削除
// app.use(app.router);

// スラッシュでアクセスしてきたら、次のことをしなさいよと言う命令
// usersの後の文言を処理の中に表示させる（URLの一部を取得することができる）
app.get('/users/:name?', function(req,res) {
    if (req.params.name) {
        res.send('hello, ' + req.params.name);
    } else {
        res.send('hello, nobody')
    }
});

// パラメータに正規表現で制限をかけることができる
app.get('/items/:id([0-9]+)', function(req,res) {
    res.send('item no: ' + req.params.id);
});
/*
//スラッシュを使った、ルーティングの設定をすると、ルーターが読み込んでくれる
app.get('/about', function(req,res) {
    res.send('about this page!');
});
*/

app.listen(3000);
console.log("server starting...");