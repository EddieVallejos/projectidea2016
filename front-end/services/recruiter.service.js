(() => {
    'use strict';

    angular
        .module('app')
        .factory('RecruiterService', RecruiterService);

    RecruiterService.$inject = ['$http', '$q'];

    const headers = {
        'content-type': 'application/x-www-form-urlencoded'
    };

    function RecruiterService($http, $q) {
        const service = {
            getAllRecruits      : getAllRecruits,
            getAllAnnouncements : getAllAnnouncements,
            updateProgress      : updateProgress,
            postAnnouncement    : postAnnouncement,
            promoteApplicant    : promoteApplicant,
            sendInvite          : sendInvite,
            appointAdmin        : appointAdmin
        }

        return service;

        function getAllRecruits() {
            return $http.get('/api/applicants');
        }

        function getAllAnnouncements() {
            return $http.get('/api/announcements');
        }

        function updateProgress(recruit) {
            let deferred = $q.defer();

            let data = {
                progress: recruit.progress,
                studno: recruit.studno
            }

            $http.put('/api/admin/progress', data)
            .then((res) => {
                    console.log(res);
                    deferred.resolve(res);
                }, (err) => {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function postAnnouncement(announcement) {
            let deferred = $q.defer();

            let data = {
                announcement: announcement
            }

            $http.post('/api/admin/announcement', data)
            .then((res) => {
                    console.log(res);
                    deferred.resolve(res);
                }, (err) => {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function sendInvite(email, password, recipient) {
            let deferred = $q.defer();

            let data = {
                email: email,
                password: password,
                recipient: recipient
            }

            $http.post('/api/admin/invite', data)
            .then((res) => {
                    console.log(res);
                    deferred.resolve(res);
                }, (err) => {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function promoteApplicant(recruit) {
            let deferred = $q.defer();

            let data = {
                studno : recruit.studno
            }

            $http.post('/api/admin/promote', data)
            .then((res) => {
                    console.log(res);
                    deferred.resolve(res);
                }, (err) => {
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function appointAdmin(studno) {
            let deferred = $q.defer();

            let data = {
                studno : studno
            }

            $http.post('/api/mainadmin/appoint', data)
            .then((res) => {
                    console.log(res);
                    deferred.resolve(res);
                }, (err) => {
                    deferred.reject(err);
                });

            return deferred.promise;
        }
    }
})();