'use strict';

const db = require(__dirname + '/../lib/mysql');
const nodemailer = require('nodemailer');

exports.update_progress = (req, res, next) => {
    const query_string = 'UPDATE recruit SET progress = ? WHERE studno = ?';
    const payload = [req.body.progress, req.body.studno];
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log(data);
            console.log('PROGRESS SUCCESSFULLY UPDATED!');
        } else {
            console.log(err);
        }
    });
};

exports.post_announcements = (req, res, next) => {
    const query_string = 'INSERT INTO announcements SET ?';
    var datetime = new Date();
    var date = datetime.getFullYear() + "-" + datetime.getMonth() + "-" + datetime.getDay();
    var time = datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();
    const payload = {
        announcement: req.body.announcement,
        dateposted: date,
        timeposted: time,
        //recipient: req.body.recipient
    }
    
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log('ANNOUNCEMENT SUCCESSFULLY POSTED!');
            res.send(payload);
        } else {
            console.log(err);
        }
    });
};

exports.promote_applicant = (req, res, next) => {
	const query_string = 'SELECT * from recruit WHERE studno = ?';
	const payload = req.body.studno;

    db.query(query_string, payload, (err, data) => {
        if(data.length != 0) {
        	const query_string2 = 'UPDATE account SET ?';
        	const payload2 = { 'usertype': 'Member' };
	        db.query(query_string2, payload2);

            const query_string3 = 'INSERT INTO member SET ?';
            const payload3 = {
		    	username: data[0].username,
		    	password: data[0].password,
		    	studno: data[0].studno,
		    	surname: data[0].surname,
		    	givenname: data[0].givenname,
		    	middlename: data[0].middlename,
		    	suffix: data[0].suffix,
		    	role: 'Recruiter'
            }

            db.query(query_string3, payload3, (err, data) => {
		        if(!err) {
		        	console.log('APPLICANT SUCCESSFULLY PROMOTED!');
		        } else {
		            console.log(err);
		        }
	    	});

	    	const query_string4 = 'DELETE FROM recruit WHERE studno = ?';
            const payload4 = req.body.studno;
            db.query(query_string4, payload4);

        } else {
            console.log('APPLICANT DOES NOT EXIST');
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