'use strict';

angular
    .module('app')
    .controller('RecruitmentCtrl', RecruitmentCtrl);

StudentCtrl.$inject = ['$scope', 'RecruitmentService'];

function RecruitmentCtrl($scope, RecruitmentService) {

    /*$scope.students = [];

    populateStudents();

    function populateStudents() {
        StudentService.getAllStudents().success((students) => {
            $scope.students = students.students;
        })
    }*/

    $scope.recruit = {};

    $scope.addRecruit = function(applicant) {
    	console.log("added")
        RecruitmentService.addRecruit(applicant);
    }


    $scope.editProfile = function(applicant) {
        RecruitmentService.updateProfile(applicant);
    }

    $scope.editProgress = function(applicant) {
        RecruitmentService.updateProgress(applicant);
    }

    /*$scope.deleteStudent = function() {
        console.log($scope.student.id);
        StudentService.deleteStudent($scope.student.id)
            .success(function(data) {
                alert('DELETED!');
            });
    }*/
}