module.exports = function(app){

	// Tasks

	app.get('/api/tasks', require('./controllers/tasks_read'))
	app.get('/api/tasks/:id', require('./controllers/task_read'))
	app.post('/api/tasks', require('./controllers/task_create'))
	app.patch('/api/tasks/:id', require('./controllers/task_update'))
	app.delete('/api/tasks/:id', require('./controllers/task_delete'))

}
