'use strict';

const mysql  = require('mysql');
const config = require(__dirname + '/../config/config');

const ENV = 'DEVELOPMENT';

module.exports = mysql.createConnection({
    host     : config[ENV].HOST,
    user     : config[ENV].USER,
    password : config[ENV].PASSWORD,
    database : config[ENV].DATABASE
});