var User 	= require ('../repositories/users');
var jwt 	= require('jsonwebtoken');

module.exports = function (router) {
	router.post('/auth', async function(req, res){
		// data validation
		var user = await User.getUserByEmail(req.body.email);

		if(user) {
			if(user.password == req.body.password) {
				var token = jwt.sign({id: user.id}, 'ismykey');
				return res.status(200).send({
					message: 'Authentifiaction réussi',
					token: token
				})
			}
		}

		return res.status(403).send({
				message: 'Email ou password est incorrect'
		});
	});
}