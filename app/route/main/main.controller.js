'use strict';

angular.module("ardasApp").controller('MainCtrl', ["$scope", "$http", "$state", "$rootScope",
    function ($scope, $http, $state, $rootScope) {

        $scope.state = $state;
        $scope.url = 'tasks.json';


        $http.get($scope.url).success(function (data) {
            $scope.lists = [];
            data.forEach(function (elem) {
                if (elem.obj_status == 'active') {
                    $scope.lists.push(elem)
                }
            });
        });


        $scope.getTask = function (obj) {
            $rootScope.task = obj;
            $state.go('task')
        }

    }]);
