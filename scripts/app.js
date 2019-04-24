    //config    
const tasks_app = angular.module('tasks_app', [])
var task
    // ##tasks controller##
tasks_app.controller('tasks', ['$scope', '$http', function($scope, $http) {
    // ##get all tasks
    const get_tasks = function() {
        $http({
            method: GET,
            url:'api/tasks'
        })
    }.then((function(res){
        $scope.tasks = res.tasks    
    },function(err){
        console.log('err', err);
    }))
    //add a task
    add_task = function() {
        $http({
            method: POST,
            url:'api/tasks',
            data: {
                name: $scope.task
            }

        })
    }.then((function(req){
        $scope.tasks = req.tasks
        return $scope.tasks    
    },function(err){
        console.log('err', err);
    }))
    // delete_task
    $scope.delete_task = function(selected_task) {
		$http({
			method: 'DELETE',
			url: '/api/messages/' + selected_task.name
		}).then(function(res) {
			get_tasks()
		}, function(err) {
			console.log('err', err)
		})
    }
    $scope.select_task = function(task) {
		return task = $scope.selected_task 
	}




}])
