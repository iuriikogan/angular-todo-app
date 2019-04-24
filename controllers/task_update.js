// Import db_task
const db_task = require('../models/task')

module.exports = function(req, res, next) {
	db_task.findByIdAndUpdate(
		req.params.id,
		req.body,
		{
			new: true
		}).then(function(task_updated) {
		res.status(200).json(task_updated)
	})
}
