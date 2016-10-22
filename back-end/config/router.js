'use strict';

const recruit = require(__dirname + '/../controllers/recruit');
const recruiter = require(__dirname + '/../controllers/recruiter');
const all = require(__dirname + '/../controllers/all');

module.exports = (router) => {

    router.post('/api/create_account', all.create_account);         //check existing username pa
    router.get('/api/login', all.login);                            //okay
    router.post('/api/add_recruit', recruiter.add_recruit);
    router.put ('/api/update_progress', recruiter.update_progress); //okay
    router.put ('/api/update_profile', recruit.update_profile);     //okay

    router.all('*', (req, res, next) => {
        res.status(404).send({
            message: 'Not Found!'
        });
    });

    return router;
};