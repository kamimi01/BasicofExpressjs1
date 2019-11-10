// 他のファイルからも使える関数を定義する場合は、exports
exports.index = function(req, res) {
    res.render('posts/index');
};