'use strict';

const admin     = require(__dirname + '/../controllers/admin');
const recruit   = require(__dirname + '/../controllers/recruit');
const recruiter = require(__dirname + '/../controllers/recruiter');
const all       = require(__dirname + '/../controllers/all');

module.exports = (router) => {

    //functionalities for all
    router.post('/api/login',                   all.login);
    router.get ('/api/logout',                  all.logout);
    router.get ('/api/applicants',              all.get_recruits);
    router.get ('/api/announcements',           all.get_announcements);

    //functionalities for admin
    router.get ('/api/mainadmin/logs',          admin.check_logs);
    router.put ('/api/mainadmin/appoint',       admin.appoint_admin);

    //functionalities for recruiter
    //router.post('/api/admin/signup',            all.create_acct_admin);
    router.put ('/api/admin/progress',          recruiter.update_progress);
    router.post('/api/admin/announcement',      recruiter.post_announcements);
    router.post('/api/admin/promote',           recruiter.promote_applicant);
    router.post('/api/admin/invite',            recruiter.send_email);

    //functionalities for recruit
    router.post('/api/applicant/signup',        all.create_account);
    router.put ('/api/applicant/update',        recruit.update_profile);
    router.post('/api/applicant/announcement',  recruit.send_announcements);

    router.all('*', (req, res, next) => {
        res.status(404).send({
            message: 'Not Found!'
        });
    });

    return router;
};