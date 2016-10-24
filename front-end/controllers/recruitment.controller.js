'use strict';

angular
    .module('app')
    .controller('RecruitmentCtrl', RecruitmentCtrl);

StudentCtrl.$inject = ['$scope', 'RecruitmentService'];

function RecruitmentCtrl($scope, RecruitmentService) {
    $scope.user = {};

    $scope.createAccount = function(user) {
    	console.log("added")
        RecruitmentService.createAccount(user);
    }

    $scope.login = function(user) {
    	RecruitmentService.login(user);
    }

    $scope.logout = function(user) {
        RecruitmentService.logout(user);
    }

    $scope.appointAdmin = function(user) {
        RecruitmentService.appointAdmin(user);
    }
}