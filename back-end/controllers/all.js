'use strict';

const crypto = require('crypto');
const db = require(__dirname + '/../lib/mysql');

exports.create_account = (req, res, next) => { 

    const query_string1 = 'SELECT * FROM codes WHERE code = ?';
    const payload1 = req.body.code;

    db.query(query_string1, payload1, (err, code) => {
        if(!err) {
            if(code.length != 0) {
                const usertype = code[0].usertype.toLowerCase();

                if(usertype === 'recruit') {
                    var query_string2 ='INSERT INTO recruit SET ?';
                }
                else if (usertype === 'recruiter') {
                    var query_string2 ='INSERT INTO recruiter SET ?';
                } else {
                    var query_string2 ='INSERT INTO admin SET ?';
                }

                const password =  encrypt(req.body.password);

                const payload2 = {
                        studno : req.body.studno,
                        username : req.body.username,
                        password : password
                    }

                db.query(query_string2, payload2, (err, data) => {
                    if(!err) {
                        console.log('ACCOUNT SUCCESSFULLY CREATED!');
                    } else {
                        console.log(err);
                    }
                });
            }
        } else {
            console.log(err);
        }
    });
   
};

exports.login = (req, res, next) => {

};

function encrypt(text){
  var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text){
  var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}