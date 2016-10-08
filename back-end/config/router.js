'use strict';
const importer = require('anytv-node-importer');
const recruit = require(__dirname + '/../controllers/recruit');
const recruiter = require(__dirname + '/../controllers/recruiter');
const all = require(__dirname + '/../controllers/all');

module.exports = (router) => {

    router.post('/api/create-account', all.create_account);
    router.get('api/logout', all.logout);
    router.get('api/whoami', all.whoami);    
    router.post('/api/login', all.login);
    router.post('/api/add-recruit', recruiter.add_recruit);
    router.put ('/api/update_progress', recruiter.update_progress); //okay
    router.put ('/api/update-profile', recruit.update_profile);     //okay *
    router.all('*', (req, res, next) => {
        res.status(404).send({
            message: 'Not Found!'
        });
    });

    return router;
};