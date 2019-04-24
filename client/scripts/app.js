import {
    runInNewContext
} from "vm";

//config    
const tasks_app = angular.module('tasks_app', [])
// ##tasks controller##
tasks_app.controller('tasks', ['$scope', '$http', function ($scope, $http) {
    // ##get all tasks
    const get_tasks = function () {
        $http({
            method: GET,
            url: '/api/tasks'
        })
    }.then((function (res) {
        $scope.tasks = res.data
    }, function (err) {
        console.log('err', err);
    }))


    //add a task
    add_task = function () {
        $http({
            method: POST,
            url: '/api/tasks',
            data: {
                name: task.name
            }
        })
    }.then((function (res) {
        $scope.task.push(res.task)
        console.log("TCL: add_task -> req.task", req.task)
        $scope.task = ''
        return $scope.task
    }, function (err) {
        console.log('err', err);
    }))

    // selected_task
    $scope.select_task = function(task) {
		$scope.selected_task = task
	}


    // delete_task
    $scope.delete_task = function () {
        $http({
            method: 'DELETE',
            url: '/api/tasks/' + $scope.selected_task._id,
        }).then(function (res) {
            get_tasks()
            console.log("TCL: $scope.delete_task -> $Scope.selected_task", $Scope.selected_task)
            res.status(200)
        }, function (err) {
            console.log('err', err)
        })
    }
    //complete a task
    $scope.complete_task = function (selected_task) {
        $http({

        }).then(function (req) {
            $scope.tasks.filter(function (tasks) {
                get_tasks()
                return req.body.task
            }).then(function (err) {
                console.log('err', err);
            })

        })
    }

}])
