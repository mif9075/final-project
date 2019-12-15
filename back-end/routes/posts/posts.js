var express = require('express');
var router = express.Router();
var postsController = require('./controller/postsController');

router.get('/', function(req, res, next) {
    res.send('Posts Route');
})

router.get('/posts', postsController.posts);

router.post('/newPost', postsController.newPost);

router.patch('/patch/:id', postsController.patch);

router.delete('/delete/:id', postsController.delete);

module.exports = router;