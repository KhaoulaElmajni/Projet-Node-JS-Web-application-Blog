var jwt = require('express-jwt');
var express = require('express');
var router = express.Router();
const articlesRepo = require('../repositories/articles')
const commentsRepo = require('../repositories/comments')
const accessTokenSecret = 'fpm.ATC4)ec`Zxn"t=YL`Hc#?j';

router.get('/', async function (req, res, next) {
    const articlesNbr = req.query.articlesNbr;
    if (articlesNbr == undefined)
        res.send(await articlesRepo.getAllArticles())
    else
        res.send(await articlesRepo.getAllArticlesNumber())
});

router.get('/offset/:offset/limit/:limit', async function (req, res, next) {
    const offset = req.params.offset
    const limit = req.params.limit
    res.send(await articlesRepo.getArticles(offset, limit))
});


router.get('/:id', async function (req, res, next) {
    const id = req.params.id;
    const message = await articlesRepo.getArticle(id);
    res.status(message.status).send(message)
});

router.get('/:id/comments', async function (req, res, next) {
    const articleId = req.params.id;
    res.send(await commentsRepo.getCommentByArticleId(articleId))
});

router.get('/title/:title', async function (req, res, next) {
    const title = req.params.title;
    res.send(await articlesRepo.getArticlesByTitle(title))
});


router.delete('/:id', async function (req, res, next) {
    const id = req.params.id;
    res.send(await articlesRepo.deleteArticle(id))
});


router.delete('/', async function (req, res, next) {
    res.send(await articlesRepo.deleteAllArticles())
});

router.delete('/:id', jwt({algorithms: ['HS256'], secret: accessTokenSecret}),
    async function (req, res) {
        if (req.user.role === 'admin' || req.user.role === 'author') {
            const id = req.params.id;
            res.send(await articlesRepo.deleteArticle(id))
        } else {
            res.sendStatus(403);
        }
    });


router.post('/', async function (req, res, next) {
    const article = req.body;
    res.send(await articlesRepo.addArticle(article))
});

router.put('/:id', async function (req, res, next) {
    const id = req.params.id;
    const article = req.body;
    res.send(await articlesRepo.updateArticle(id, article))
});

function authorized(user) {
    if (user !== undefined && user.hasOwnProperty('role') && (user.role === 'admin' || user.role === 'author')) {
        return true;
    } else {
        return false;
    }
}

module.exports = router;



