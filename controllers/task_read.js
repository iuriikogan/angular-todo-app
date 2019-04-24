// Import db_task
const db_task = require('../models/task')

module.exports = function(req, res, next) {
	db_task.findById(req.params.id).then(function(task) {
		res.status(200).json(task)
	})
}
