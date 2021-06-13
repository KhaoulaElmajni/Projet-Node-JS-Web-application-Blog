
var express = require('express');
var router = express.Router();
const articlesRepo = require('../repositories/articles')

router.get('/', async function (req, res, next) {
   const articlesNbr = req.query.articlesNbr;
   if(articlesNbr == undefined)
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

router.get('/userid/:userid', async function (req, res, next) {
   const userId = req.params.userid;
   res.send(await articlesRepo.getArticlesByUserId(userId))
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

router.post('/', async function (req, res, next) {
   const article = req.body;
   res.send(await articlesRepo.addArticle(article))
});

router.put('/:id', async function (req, res, next) {
   const id = req.params.id;
   const article = req.body;
   res.send(await articlesRepo.updateArticle(id, article))
});


module.exports = router;



