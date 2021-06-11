
var express = require('express');
var router = express.Router();
const tagsRepo = require('../repositories/tags')

router.get('/', async function (req, res, next) {
   const tagsNbr = req.query.tagsNbr;
   if(tagsNbr == undefined)
      res.send(await tagsRepo.getAllTags())
   else
      res.send(await tagsRepo.getAllTagsNumber())
});

router.get('/offset/:offset/limit/:limit', async function (req, res, next) {
   const offset = req.params.offset
   const limit = req.params.limit
   res.send(await tagsRepo.getTags(offset, limit))
});


router.get('/:id', async function (req, res, next) {
   const id = req.params.id;
   const message = await tagsRepo.getTag(id);
   res.status(message.status).send(message)
});

router.delete('/:id', async function (req, res, next) {
   const id = req.params.id;
   res.send(await tagsRepo.deleteTag(id))
});

router.delete('/', async function (req, res, next) {
   res.send(await tagsRepo.deleteAllTags())
});

router.post('/', async function (req, res, next) {
   const tag = req.body;
   res.send(await tagsRepo.addTag(tag))
});

router.put('/:id', async function (req, res, next) {
   const id = req.params.id;
   const tag = req.body;
   res.send(await tagsRepo.updateTag(id, tag))
});


module.exports = router;



