'use strict';

(function(){  
    angular
        .module('app', ['ngRoute'])
        .config(config)

    config.$inject = ['$routeProvider','$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                'templateUrl': 'views/home.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/home', {
                'templateUrl': 'views/applicant/home.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/sign-up', {
                'templateUrl': 'views/applicant/sign-up.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/profile', {
                'templateUrl': 'views/applicant/profile.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/announcement', {
                'templateUrl': 'views/applicant/announcements.html',
                'caseInsensitiveMatch': true
            })
            .when('/superadmin/home', {
                'templateUrl': 'views/superadmin/home.html',
                'caseInsensitiveMatch': true
            })
            .when('/superadmin/announcement', {
                'templateUrl': 'views/superadmin/announcements.html',
                'caseInsensitiveMatch': true,
                'controller': 'RecruiterController'
            })
            .when('/superadmin/progress', {
                'templateUrl': 'views/superadmin/progress.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/sign-up', {
                'templateUrl': 'views/admin/signup.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/home', {
                'templateUrl': 'views/admin/home.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/announcement', {
                'templateUrl': 'views/admin/announcements.html',
                'caseInsensitiveMatch': true,
                'controller': 'RecruiterController'
            })
            .when('/admin/progress', {
                'templateUrl': 'views/admin/progress.html',
                'caseInsensitiveMatch': true,
                'controller': 'RecruiterController'
            })
            .otherwise({
                'redirectTo': '/'
            });
            
    }    
})();
