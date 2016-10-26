'use strict';

angular
    .module('app')
    .factory('RecruitmentService', RecruitmentService);

function RecruitmentService($http) {
    return {
        createAccount : function(user) {
            return $http.post('/api/create_account',
                {
                    usertype: 'Recruit',
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
                    essay2 : user.essay2,
                    sched : user.sched
                }
            );
        },

        createAdminAccount : function(user) {
            return $http.post('/api/create_admin_account',
                {
                    usertype: 'Member',
                    username: user.username,
                    password: user.password,
                    studno: user.studno,
                    surname: user.surname,
                    givenname: user.givenname,
                    middlename: user.middlename,
                    suffix: user.suffix,
                    team: user.team
                }
            );
        },

        login : function(user) {
            return $http.post('/api/login',
                {
                    username: user.username,
                    password: user.password,
                }
            );
        },

        appointAdmin : function(user) {
            return $http.post('/api/appoint_admin',
                {
                    studno: user.studno,
                }
            );
        },

        updateProgress : function(recruit) {
            return $http.post('/api/update_progress',
                {
                    progress: recruit.progress,
                    studno: recruit.studno
                }
            );
        },

        postAnnouncements : function(announcements) {
            return $http.post('/api/post_announcements',
                {
                    announcements: announcements,
                    //recipient: post.recipient
                }
            );
        },

        sendAnnouncements : function(post) {
            return $http.post('/api/send_announcements',
                {
                    announcements: post.announcements,
                    recipient: post.recipient
                }
            );
        },

        promoteApplicant : function(applicant) {
            return $http.post('/api/promote_applicant',
                {
                    studno: applicant.studno
                }
            );
        },

        updateProfile : function(user) {
            return $http.put('/api/update_profile',
                {
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
                    sched: user.sched,
                }
            );
        },

        updateProgress : function(user) {
            return $http.put('/api/update_progress',
                {
                    progress: user.progress,
                    studno: user.studno
                }
            );
        },

        getAllRecruits : function() {
            return $http.get('/api/getRecruits');
        },

        getAllAnnouncements : function() {
            return $http.get('/api/getAnnouncements');
        }

    }
}