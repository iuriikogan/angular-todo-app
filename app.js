//config    
const tasks_app = angular.module('tasks_app', [])
// ##tasks controller##
tasks_app.controller('tasks', ['$scope', '$http', function ($scope, $http) {
    console.log('this is working')
    // ##get all tasks
   
		$http({
			method: 'GET',
			url: '/api/tasks'
		}).then(function(res) {
			$scope.tasks = res.data
		}, function(err) {
			console.log('err', err)
		})
	

    // //add a task
    // add_task = function () {
    //     $http({
    //         method: POST,
    //         url: '/api/tasks/',
    //         data: {
    //             "name": $scope.task.name;
    //         }
    //     })
    // }.then(function (res) {
    //       res.status(200)
    // }), function(err) {
	// 		console.log('err', err)
    // }
    

    // // selected_task
    // $scope.select_task = function(task) {
    //     $scope.selected_task = task
    //     console.log("TCL: $scope.select_task -> task", task)
	// }


    // // delete_task
    // $scope.delete_task = function () {
    //     $http({
    //         method: 'DELETE',
    //         url: '/api/tasks/' + $scope.selected_task._id
    //     }).then(function (res) {
    //         console.log("$scope.selected_task._id", $scope.selected_task._id);
    //         get_tasks()
    //         console.log("TCL: $scope.delete_task -> $Scope.selected_task", $Scope.selected_task)
    //         res.status(200)
    //     }, function (err) {
    //         console.log('err', err)
    //     })
    // }
    // //complete a task
    // $scope.complete_task = function (selected_task) {
    //     $http({
    //         method: 'POST',
    //         url: '/api/tasks/',
    //         data: {
    //             _id: task._id
    //         }
    //     }).then(function (req) {
    //         $scope.tasks.filter(function (tasks) {
    //             get_tasks()
	// 			console.log("TCL: $scope.complete_task -> get_tasks()", get_tasks())
    //             return req.tasks
	// 			console.log("TCL: $scope.complete_task -> req.tasks", req.tasks)
    //         }).then(function (err) {
    //             console.log('err', err);
    //         })

    //     })
    // }    

}])
