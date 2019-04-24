// Import db_task
const db_task = require('../models/task')

module.exports = function(req, res, next) {
	db_task.find({}).then(function(tasks) {
		res.json(tasks)
	})
}
