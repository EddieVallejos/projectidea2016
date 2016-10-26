(() => {
    'use strict';

    angular
        .module('app')
        .controller('RecruiterController', RecruiterController);

    RecruiterController.$inject = ['$scope', 'RecruiterService'];

    function RecruiterController($scope, RecruiterService) {
        $scope.recruits = [];
        $scope.announcements = [];
        $scope.updateProgress = updateProgress;
        $scope.postAnnouncement = postAnnouncement;

        populateRecruits();
        populateAnnouncements();

        function populateRecruits() {
            RecruiterService
                .getAllRecruits()
                .success((recruits) => {
                    $scope.recruits = recruits.recruits;
                    console.log('SUCCESS!');
                })
        }

        function populateAnnouncements() {
            RecruiterService
                .getAllAnnouncements()
                .success((announcements) => {
                    $scope.announcements = announcements.announcements;
                    console.log('SUCCESS!');
                })
        }

        function updateProgress(recruit) {
            console.log(recruit);
            RecruiterService
                .updateProgress(recruit);
        }

        function postAnnouncement(announcement) {
            RecruiterService
                .postAnnouncement(announcement);
        }
    }
})();