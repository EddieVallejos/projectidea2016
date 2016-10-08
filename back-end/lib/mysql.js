'use strict';

const mysql  = require('mysql');
const config = require(__dirname + '/../config/config');

const ENV = 'DEVELOPMENT';
console.log(config.DEVELOPMENT);
module.exports = mysql.createConnection(config.DEVELOPMENT);