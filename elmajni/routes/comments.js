
var express = require('express');
var router = express.Router();
const commentsRepo = require('../repositories/comments')

router.get('/', async function (req, res, next) {
   const commentsNbr = req.query.commentsNbr;
   if(commentsNbr == undefined)
      res.send(await commentsRepo.getAllComments)
   else
      res.send(await commentsRepo.getAllCommentsNumber())
   //const message = await commentsRepo.getArticleTitleAndNbrOfComments();
   //res.send(message)
});


router.get('/offset/:offset/limit/:limit', async function (req, res, next) {
   const offset = req.params.offset
   const limit = req.params.limit
   res.send(await commentsRepo.getComments(offset, limit))
});



router.get('/:id', async function (req, res, next) {
   const id = req.params.id;
   const message = await commentsRepo.getComment(id);
   res.status(message.status).send(message)
});


router.delete('/:id', async function (req, res, next) {
   const id = req.params.id;
   res.send(await commentsRepo.deleteComment(id))
});

router.delete('/', async function (req, res, next) {
   res.send(await commentsRepo.deleteAllComments())
});

router.post('/', async function (req, res, next) {
   const comment = req.body;
   res.send(await commentsRepo.addComment(comment))
});

router.put('/:id', async function (req, res, next) {
   const id = req.params.id;
   const comment = req.body;
   res.send(await commentsRepo.updateComment(id, comment))
});


module.exports = router;



