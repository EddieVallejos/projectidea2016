'use strict';
(function(){ 
    angular
        .module('app', ['ngRoute'])
        .config(config)
        
        /*
        .directive('editButtonDirective', function() {
            return {
                restrict: "A",
                link: function(scope, elem, attrs) {
                    $(elem).on('click', function() {
                        $('#edit-modal').modal('show');
                    });
                }
            }
        })
        .directive('delEditDirective', function() {
            return {
                restrict: "A",
                scope: {},
                link: function(scope, elem, attrs) {
                    $(elem).hover(function(){
                        $('.delete.button').css('visibility','visible');
                        $('.edit.button').css('visibility','visible');
                    }, function(){
                        $('.delete.button').css('visibility','hidden');
                        $('.edit.button').css('visibility','hidden');
                    });
                }
            }
        })*/

    config.$inject = ['$routeProvider','$locationProvider'];

    function config($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                'templateUrl': 'views/home.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/sign-up', {
                'templateUrl': 'views/applicant-sign-up.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/profile', {
                'templateUrl': 'views/applicant-profile.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/announcement', {
                'templateUrl': 'views/announcements-applicant.html',
                'caseInsensitiveMatch': true
            })
            .when('/superadmin/announcement', {
                'templateUrl': 'views/announcements-super-admin.html',
                'caseInsensitiveMatch': true
            })
            .when('/superadmin/progress', {
                'templateUrl': 'views/super_admin.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/sign-up', {
                'templateUrl': 'views/admin-sign-up.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/announcement', {
                'templateUrl': 'views/announcements-admin.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/progress', {
                'templateUrl': 'views/admin.html',
                'caseInsensitiveMatch': true
            })
            
    }    
})();
