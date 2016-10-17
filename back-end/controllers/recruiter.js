'use strict';

const db = require(__dirname + '/../lib/mysql');

exports.add_recruit = (req, res, next) => {

	const query_string ='INSERT INTO codes SET ?'; 
   	const payload = {
        code : random(),
        usertype : req.body.usertype,
    }
      
    db.query(query_string, payload, (err, data) => {
        if(!err) {
            console.log('CODE SUCCESSFULLY GENERATED!');
        } else {
            console.log(err);
        }
    });
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

function random() {
  var rand = "";
  for(var i=0; i<6; i++) {
    var category = Math.floor((Math.random() * 3) + 1);
    if (category == 1) {
      rand = rand + Math.floor((Math.random() * 9));
    } else if (category == 2) {
      rand = rand + String.fromCharCode(Math.floor((Math.random() * 26) + 65));
    } else {
      rand = rand + String.fromCharCode(Math.floor((Math.random() * 26) + 97));
    }
  }
  return rand;
}
