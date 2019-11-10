// expressのモジュールの読み込み
// appとすると、expressを使ってオブジェクトを作ってくれる
var express = require('express'),
    app = express();

// express4以降、この文言は不要のため削除
// app.use(app.router);

// スラッシュでアクセスしてきたら、次のことをしなさいよと言う命令
app.get('/', function(req,res) {
    res.send('hello world');
});

app.listen(3000);
console.log("server starting...");