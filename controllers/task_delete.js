// Import db_task
const db_task = require('../models/task')

module.exports = function(req, res, next) {
	db_task.findByIdAndRemove(req.params.id).then(function(deleted_task) {
		res.status(200).json(deleted_task)
	})
}
