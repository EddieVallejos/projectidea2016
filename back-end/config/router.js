'use strict';

const admin = require(__dirname + '/../controllers/admin');
const recruit = require(__dirname + '/../controllers/recruit');
const recruiter = require(__dirname + '/../controllers/recruiter');
const all = require(__dirname + '/../controllers/all');

module.exports = (router) => {

    //functionalities for all
    router.post('/api/create_account', all.create_account);
    router.post('/api/login', all.login);
    router.get('/api/logout', all.logout);

    //functionalities for admin
    router.get('/api/check_logs', admin.check_logs);
    router.post('/api/send_email', admin.send_email);
    router.put('/api/appoint_admin', admin.appoint_admin);

    //functionalities for recruiter
    router.put('/api/update_progress', recruiter.update_progress);
    router.post('/api/post_announcements', recruiter.post_announcements);
    router.post('/api/promote_applicant', recruiter.promote_applicant);

    //functionalities for recruit
    router.put('/api/update_profile', recruit.update_profile);
    router.post('/api/send_announcements', recruit.send_announcements);

    router.all('*', (req, res, next) => {
        res.status(404).send({
            message: 'Not Found!'
        });
    });

    return router;
};