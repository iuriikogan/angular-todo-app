const express = require('express')
const body_parser = require('body-parser')
const cors = require('cors')

const app = express()

// middleware

require('dotenv').config()
app.use(body_parser.json())
app.use(body_parser.urlencoded({ // understands form submits
	extended: true
}))
app.use(cors())

// Routes
require('./routes-client.js')(app)
require('./routes-api.js')(app)
// Static
app.use(express.static(__dirname + '/client')) // serves all files in the /client folder as static
// Errors
app.use(function(err, req, res, next) {
	console.log('err', err);
	res.status(400).json({
		message: err.message
	})
})

app.listen(process.env.PORT, function() {
	console.log(`Server ready on port ${process.env.PORT}`);
})
