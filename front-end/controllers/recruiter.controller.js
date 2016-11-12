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
        $scope.promoteApplicant = promoteApplicant;
        $scope.sendInvite = sendInvite;
        $scope.appointAdmin = appointAdmin;

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

        function promoteApplicant(recruit) {
            RecruiterService
                .promoteApplicant(recruit);
        }

        function sendInvite(email, password, recipient) {
            RecruiterService
                .sendInvite(email, password, recipient);
        }

        function appointAdmin(studno) {
            RecruiterService
                .appointAdmin(studno);
        }
    }
})();