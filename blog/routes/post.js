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
exports.edit = function(req, res) {
    res.render('posts/edit', {post: posts[req.params.id], id: req.params.id});
};
exports.update = function(req, res, next) {
    // データを書き換える
    // 渡ってきたidに対して
    if (req.body.id !== req.params.id) {
        next(new Error('ID not valid'));
    } else {
        posts[req.body.id] = {
            title: req.body.title,
            body: req.body.body
        };
        // 一覧にリダイレクト
        res.redirect('/');
    }
};
exports.destroy = function(req, res, next) {
    if (req.body.id !== req.params.id) {
        next(new Error('ID not valid'));
    } else {
        // データの削除（splice）
        // 第二引数は、削除する数
        posts.splice(req.body.id, 1);
        // 一覧にリダイレクト
        res.redirect('/');
    }
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