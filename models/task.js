// Import db.js
const db = require('../db')
// Import mongoose from node_modules
const mongoose = require('mongoose')

// Create schema for task
const db_task = db.model('task', {
	__v: {
		type: Number,
		select: false
	},
	name: {
		type: String,
		required: true
	}
})

// Export
module.exports = db_task
