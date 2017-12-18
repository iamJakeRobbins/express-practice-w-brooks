var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
	knex('users')
	.then(data =>{
		console.log(data);
		res.render('index', {data:data});
	})
});

module.exports = router;
