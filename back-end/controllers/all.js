'use strict';           

const crypto = require('crypto');
const db = require(__dirname + '/../lib/mysql');

exports.create_account = (req, res, next) => {
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

    const queryRecruit = 'INSERT INTO recruit SET ?';
    const payload2 = {
       username: req.body.username,
       password: req.body.password,
       studno: req.body.studno,
       surname: req.body.surname,
       givenname: req.body.givenname,
       middlename: req.body.middlename,
       suffix: req.body.suffix,
       emailadd: req.body.emailadd,
       degreeprog: req.body.degreeprog,
       adviser: req.body.adviser,
       year: req.body.year,
       gwa: req.body.gwa,
       prefproglang: req.body.prefproglang,
       essay1: req.body.essay1,
       essay2 : req.body.essay2,
       sched : req.body.sched
    }

    db.query(queryAccount, payload1);
    db.query(queryRecruit, payload2);
};


exports.login = (req, res, next) => {
    const data = {
        username: req.body.username,
        password: req.body.password
    }

    function start(){
       const query = "select * from account where username = ? and password = ?";

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
                givenname: result[0].givenname,
                surname: result[0].surname
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
        const queryString = 'SELECT * FROM acount WHERE username = ?';

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
            return res.send({message: 'You are ' + result[0].givenname + ' ' + result[0].surname});
        }
    }

    start();
}

exports.logout = function(req, res, next) {
    function start() {
        console.log(2);
        req.session.destroy();
        console.log(1);
        return res.send({message: 'Logout success!'});
    }
    start();
}