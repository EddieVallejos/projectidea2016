'use strict';

angular
    .module('app')
    .factory('RecruitmentService', RecruitmentService);

function RecruitmentService($http) {
    return {
        createAccount : function(user) {
            return $http.post('/api/create_account',
                {
                    code : user.code
                    studno: user.studno,
                    username: user.username,
                    password: user.password
                }
            );
        },

        updateProfile : function(applicant) {
            return $http.post('/api/update_profile',
                {
                    username: applicant.username,
                    password: applicant.password,
                    studno: applicant.studno,
                    surname: applicant.surname,
                    givenname: applicant.givenname,
                    middlename: applicant.givenname,
                    suffix: applicant.suffix,
                    emailadd: applicant.emailadd,
                    contactnum: applicant.contactnum,
                    degreeprog: applicant.degreeprog,
                    adviser: applicant.adviser,
                    year: applicant.year,
                    gwa: applicant.gwa,
                    prefproglang: applicant.prefproglang,
                    essay1: applicant.essay1,
                    essay2: applicant.essay2,
                    sched: applicant.sched,
                    id: applicant.studno
                }
            );
        },

        addRecruit : function(applicant) {
            return $http.post('/api/update_profile',
                {
                    username: applicant.username,
                    password: applicant.password,
                    studno: applicant.studno,
                    surname: applicant.surname,
                    givenname: applicant.givenname,
                    middlename: applicant.givenname,
                    suffix: applicant.suffix,
                    emailadd: applicant.emailadd,
                    contactnum: applicant.contactnum,
                    degreeprog: applicant.degreeprog,
                    adviser: applicant.adviser,
                    year: applicant.year,
                    gwa: applicant.gwa,
                    prefproglang: applicant.prefproglang,
                    essay1: applicant.essay1,
                    essay2: applicant.essay2,
                    sched: applicant.sched,
                    id: applicant.studno
                }
            );
        },

        updateProgress : function(applicant) {
            return $http.put('/api/update_progress',
                {
                    progress: applicant.progress,
                    studno: applicant.studno
                }
            );
        },

        /*

        getAllStudents : function() {
            return $http.get('/api/all-students');
        },

        editStudent : function(student) {
            return $http.put('/api/edit-student',
                {
                    id : student.id,
                    name : student.name,
                    batch : student.batch,
                    studno : student.studno,
                    course : student.course,
                    college : student.college,
                    sex : student.sex
                }
            );
        },

        deleteStudent : function(id) {
            $http.delete('/api/delete-student/' + id);
        }*/
    }
}