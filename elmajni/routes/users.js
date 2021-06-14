
var express = require('express');
var router = express.Router();
const usersRepo = require('../repositories/users')
const articlesRepo = require('../repositories/articles')

router.get('/', async function (req, res, next) {
   const usersNbr = req.query.usersNbr;
   if(usersNbr == undefined)
      res.send(await usersRepo.getAllUsers())
   else
      res.send(await usersRepo.getAllUsersNumber())
});

router.get('/offset/:offset/limit/:limit', async function (req, res, next) {
   const offset = req.params.offset
   const limit = req.params.limit
   res.send(await usersRepo.getUsers(offset, limit))
});

router.get('/admins', async function (req, res, next) {
   res.send(await usersRepo.getAdmins())
});

router.get('/guests', async function (req, res, next) {
   res.send(await usersRepo.getGuests())
});

router.get('/authors', async function (req, res, next) {
   res.send(await usersRepo.getAuthors())
});

router.get('/:id', async function (req, res, next) {
   const id = req.params.id;
   const message = await usersRepo.getUser(id);
   res.status(message.status).send(message)
});

router.get('/email/:email', async function (req, res, next) {
   const email = req.params.email;
   res.send(await usersRepo.getUserByEmail(email))
});

router.delete('/:id', async function (req, res, next) {
   const id = req.params.id;
   res.send(await usersRepo.deleteUser(id))
});

router.delete('/', async function (req, res, next) {
   res.send(await usersRepo.deleteAllUsers())
});

router.post('/', async function (req, res, next) {
   const user = req.body;
   res.send(await usersRepo.addUser(user))
});

let post = router.post('/login', async function (req, res, next) {
   const cridentials = req.body;
   res.send(await usersRepo.login(cridentials));
});

router.put('/:id', async function (req, res, next) {
   const id = req.params.id;
   const user = req.body;
   res.send(await usersRepo.updateUser(id, user))
});

router.get('/:id/articles', async function (req, res, next) {
   const id = req.params.id;
   const message = await articlesRepo.getArticlesByUserId(id);
   res.status(message.status).send(message)
});

module.exports = router;



