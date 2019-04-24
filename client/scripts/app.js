    //config    
const tasks_app = angular.module('tasks_app', [])
var task
    // ##tasks controller##
tasks_app.controller('tasks', ['$scope', '$http', function($scope, $http) {
    // ##get all tasks
    const get_tasks = function() {
        $http({
            method: GET,
<<<<<<< HEAD
            url:'api/tasks'
=======
            url:'/api/tasks'
>>>>>>> origin/master
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
<<<<<<< HEAD
            url:'api/tasks',
=======
            url:'/api/tasks',
>>>>>>> origin/master
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
