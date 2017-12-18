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
router.get('/logout', function (req, res, next) {
	req.session.user = null;
	res.redirect('/')
})

router.get('/success', function(req,res){
	if (req.session.user != null){
		console.log(req.session.user.username);
	res.render('success', req.session)
} else {
	res.render('index')
}
})

router.post('/success', function(req,res) {
	knex('users').where('username', req.body.username)
	.then((data) =>{
		if(data != undefined && data[0].password === req.body.password){
	req.session.user = {
		id:data[0].id,
		username: data[0].username,
		password: data[0].password
	}
	console.log(data[0].username);
	res.redirect('success')
	}else {
		res.render('index', data)
	}
})
})

module.exports = router;
