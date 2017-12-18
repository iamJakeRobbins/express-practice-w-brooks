var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	if(req.session.count >= 1){
		req.session.count ++
	} else {
		req.session.count = 1
	}console.log(req.session.count);
  res.render('index', { title: 'Express' });
});

module.exports = router;
