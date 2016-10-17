'use strict';
(function(){ 
    angular
        .module('app', ['ngRoute'])
        .config(config)
        .directive('addButtonDirective', function() {
            return {
                restrict: "A",
                link: function(scope, elem, attrs) {
                    $(elem).on('click', function() {
                        $('#modal1').modal('show');
                    });
                }
            }
        })
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
                'templateUrl': 'views/main.view.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/profile', {
                'templateUrl': 'views/applicant/profile.view.html',
                'caseInsensitiveMatch': true
            })
            .when('/applicant/announcement', {
                'templateUrl': 'views/applicant/announcement/applicant.view.html',
                'caseInsensitiveMatch': true
            })
            .when('/superadmin/announcement', {
                'templateUrl': 'views/superadmin/announcement/admin.view.html',
                'caseInsensitiveMatch': true
            })
            .when('/superadmin/progress', {
                'templateUrl': 'views/superadmin/progress/superadmin.view.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/announcement', {
                'templateUrl': 'views/admin/announcement/admin.view.html',
                'caseInsensitiveMatch': true
            })
            .when('/admin/progress', {
                'templateUrl': 'views/admin/progress/admin.view.html',
                'caseInsensitiveMatch': true
            });
            
    }    
})();
