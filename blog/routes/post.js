// データの準備
var posts = [
    {title: 'title0', body: 'body0'},
    {title: 'title1', body: 'body1'},
    {title: 'title2', body: 'body2'}
];

// 他のファイルからも使える関数を定義する場合は、exports
exports.index = function(req, res) {
    res.render('posts/index', {posts: posts});
};
exports.show = function(req, res) {
    res.render('posts/show', {post: posts[req.params.id]});
};
exports.new = function(req, res) {
    res.render('posts/new');
};
exports.create = function(req, res) {
    // フォームから渡ってきたデータでpostを作る
    var post = {
        title: req.body.title,
        body: req.body.body
    };
    // postsの末尾にpostを加える
    posts.push(post);
    // 一覧にリダイレクト
    res.redirect('/');
};