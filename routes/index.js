var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createzone', function(req, res, next) {
  res.render('createzone', { title: 'Create Zone' });
});

router.get('/createcomment', function(req, res, next) {
  res.render('createcomment', { title: 'Create Comments' });
});

router.get('/updatecomment', function(req, res, next) {
  res.render('updatecomment', { title: 'Create Comments' });
});


module.exports = router;
