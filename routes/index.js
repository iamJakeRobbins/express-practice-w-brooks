var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	req.session.favoriteDog = 'German Shepard';
  res.render('index', { title: 'Express' });
});

module.exports = router;
