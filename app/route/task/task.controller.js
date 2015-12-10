'use strict';

angular.module("ardasApp").controller('TaskCtrl', ["$scope", "$http", "$state", "$rootScope",
    function ($scope, $http, $state, $rootScope, $document) {
        $scope.task = $rootScope.task;

        $scope.visible = false;

        $scope.chgClass = function () {
            return $scope.editing = true;
        };

        $scope.getReq = function () {
            return $scope.editing = false;
        };

        $scope.request = function (name) {
            console.log('Запрос улетел')
            $http.put('tasks.json', name)
                .success(function (data) {
                    console.log(data);
                })
                .error(function (result) {
                    /*error logic*/
                });
        }
    }

]);
