var express = require('express');
var router = express.Router();
const knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
	knex('users')
		.then(data =>{
		res.render('index', {data:data});
	})
});

router.get('/success', function(req,res){
	if (req.session.user != null){
	res.render('success')
	}
})

router.post('/success', function(req,res) {
	knex('users').where('username', req.body.username)
	.then((data) =>{
		if( data[0].username === req.body.username && data[0].password === req.body.password){
	req.session.user = {
		id:data[0].id,
		username: data[0].username,
		password: data[0].password
	}
	console.log(req.session.user);
	res.redirect('success')
	}
})
})

module.exports = router;
