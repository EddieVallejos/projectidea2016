'use strict';

const db = require(__dirname + '/../lib/mysql');
const config    = require(__dirname + '/../config/config');

exports.create_account = (req, res, next) => {
    const query_string ='INSERT INTO recruit values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'; 
   	const payload = {
        studno : req.body.studno,
        username : req.body.username,
        password : req.body.password,
        surname : req.body.surname,
        givenname : req.body.givenname,
        middlename : req.body.middlename,
        suffix : req.body.suffix,
        emailadd : req.body.emailadd,
        contactnum : req.body.contactnum,
        degreeprog: req.body.degreeprog,
        adviser: req.body.adviser,
        year: req.body.year,
        gwa: req.body.gwa,
        prefproglang: req.body.prefproglang,
        essay1: req.body.essay1,
        essay2: req.body.essay2,
        sched: req.body.sched,
        progress: req.body.progress
    }


      
    db.query(
        query_string, 
        payload, (err, data) => {
        if(!err) {
            console.log('ACCOUNT SUCCESSFULLY CREATED!');
        } else {
            console.log(err);
        }
    });
};

exports.login = (req, res, next) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    function start(){
       const query = "select * from user where username = ? and password = ?";

       db.query(
            query,
            [data.username,data.password],
            send_response
        );
    }

    function send_response(err, result, args, last_query){
        if(err){
            next(err);
            return res.status(500).send(err);
        }
        else if(!result.length) {
            return res.status(404).send({message: 'Wrong username or password.'});
        }
        else {
            req.session.user = {
                username: result[0].username,
                fname: result[0].fname,
                lname: result[0].lname
            }

            return res.send(result[0]);
            }
        }
        start();
    }

exports.whoami = function(req, res, next) {
    const data = {
        username: req.session.user.username
    }

    //what to do at the start of the query
    function start() {
        //Do not append the user inputs to string. This eliminates SQL Injection.
        const queryString = 'SELECT * FROM user WHERE username = ?';

        db.query(
            queryString,
            [data.username],
            send_response
        )
    }

    //what to do after the query is done
    function send_response(err, result, args, last_query) {
        if(err) {
            next(err);
            return res.status(500).send(err);
        } else {
            return res.send({message: 'You are ' + result[0].fname + ' ' + result[0].lname});
        }
    }

    start();
}

exports.logout = function(req, res, next) {
    function start() {
        req.session.destroy();
        return res.send({message: 'Logout success!'});
    }

    start();
}