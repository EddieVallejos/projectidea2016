'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.add_recruit = (req, res, next) => {

};

exports.update_progress = (req, res, next) => {
    const query_string ='UPDATE recruit SET progress = ? WHERE studno = ?';
    const payload = [req.body.progress, req.body.studno];
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log('PROGRESS SUCCESSFULLY UPDATED!');
        } else {
            console.log(err);
        }
    });
};

