'use strict';

const db = require(__dirname + '/../lib/mysql');
const nodemailer = require('nodemailer');


exports.check_logs = (req, res, next) => {

};

exports.send_email = (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: req.body.user,
            pass: req.body.password
        }
    });

    var text = 'Sample Text';

    var mailOptions = {
        from: req.body.user,
        to: req.body.sendTo,
        subject: 'Applicant Create Account',
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });
};

exports.appoint_admin = (req, res, next) => {
	const query_string = 'UPDATE member SET role = ? WHERE studno = ?';
    const payload = ['Admin', req.body.studno];
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log('MEMBER SUCCESSFULLY APPOINTED AS ADMIN!');
        } else {
            console.log(err);
        }
    });
};