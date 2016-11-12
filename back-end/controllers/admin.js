'use strict';

const db = require(__dirname + '/../lib/mysql');
const nodemailer = require('nodemailer');


exports.check_logs = (req, res, next) => {

};

exports.create_admin_account = (req, res, next) => {
    const queryAccount = 'INSERT INTO account SET ?';
    const payload1 = {
       usertype: req.body.usertype,
       username: req.body.username,
       password: req.body.password,
       studno: req.body.studno,
       surname: req.body.surname,
       givenname: req.body.givenname,
       middlename: req.body.middlename,
       suffix: req.body.suffix,
    }

    const queryMember = 'INSERT INTO member SET ?';
    const payload2 = {
       username: req.body.username,
       password: req.body.password,
       studno: req.body.studno,
       surname: req.body.surname,
       givenname: req.body.givenname,
       middlename: req.body.middlename,
       suffix: req.body.suffix,
       role: 'Recruiter',
       team: req.body.team,
    }

    db.query(queryAccount, payload1, (err, data) => {
        if(!err) {
            console.log('recruiter added to account!');
        } else {
            console.log(err);
        }
    });

    db.query(queryMember, payload2, (err, data) => {
        if(!err) {
            console.log('recruiter added to member!');
        } else {
            console.log(err);
        }
    });
    
};

exports.send_email = (req, res, next) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: req.body.email,
            pass: req.body.password
        }
    });

    var text = 'Sample Text';

    var mailOptions = {
        from: req.body.email,
        to: req.body.recipient,
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