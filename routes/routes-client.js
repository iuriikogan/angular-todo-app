module.exports = function(app){

	app.get('/', function(req, res, next) {
		res.sendFile(__dirname + '/client/index.html')
	})

}
