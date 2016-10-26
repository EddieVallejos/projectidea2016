'use strict';

angular
    .module('app')
    .controller('RecruitmentCtrl', RecruitmentCtrl);

RecruitmentCtrl.$inject = ['$scope', 'RecruitmentService'];

function RecruitmentCtrl($scope, RecruitmentService) {
    $scope.user = {};
    $scope.currentUser = {};
    $scope.recruits = [];
    $scope.announcements = [];

    populateRecruits();
    populateAnnouncements();

    function populateRecruits() {
        RecruitmentService.getAllRecruits().success((recruits) => {
            $scope.recruits = recruits.recruits;
            console.log('SUCCESS!');
        })
    }

    function populateAnnouncements() {
        RecruitmentService.getAllAnnouncements().success((announcements) => {
            $scope.announcements = announcements.announcements;
            console.log('SUCCESS!');
        })
    }

    $scope.createAccount = function(user) {
        RecruitmentService.createAccount(user);
    }

    $scope.createAdminAccount = function(user) {
        RecruitmentService.createAdminAccount(user);
    }

    $scope.login = function(user) {
    	RecruitmentService.login(user).success((user) => {
            $scope.currentUser = {
                username: user.username,
                password: user.password,
                studno: user.studno,
                surname: user.surname,
                givenname: user.givenname,
                middlename: user.givenname,
                suffix: user.suffix,
                emailadd: user.emailadd,
                contactnum: user.contactnum,
                degreeprog: user.degreeprog,
                adviser: user.adviser,
                year: user.year,
                gwa: user.gwa,
                prefproglang: user.prefproglang,
                essay1: user.essay1,
                essay2: user.essay2,
                sched: user.sched
            };
        })
    }

    $scope.logout = function(user) {
        RecruitmentService.logout(user);
    }

    $scope.appointAdmin = function(user) {
        RecruitmentService.appointAdmin(user);
    }

    $scope.getCurrentRecruit = function(user) {
        $scope.user = {
            username: user.username,
            password: user.password,
            studno: user.studno,
            surname: user.surname,
            givenname: user.givenname,
            middlename: user.givenname,
            suffix: user.suffix,
            emailadd: user.emailadd,
            contactnum: user.contactnum,
            degreeprog: user.degreeprog,
            adviser: user.adviser,
            year: user.year,
            gwa: user.gwa,
            prefproglang: user.prefproglang,
            essay1: user.essay1,
            essay2: user.essay2,
            sched: user.sched
        };
    }

    $scope.updateProfile = function(user) {
        console.log(user);
        RecruitmentService.updateProfile(user);
    }

    $scope.updateProgress = function(recruit) {
        RecruitmentService.updateProgress(recruit);
    }

    $scope.postAnnouncements = function(announcement) {
        RecruitmentService.postAnnouncements(announcement);
    }

    
}