'use strict';
const path 	= require('path');

const config =  {
	PORT: 3000,
	IP: '127.0.0.1',

	ASSETS_DIR: path.normalize(__dirname + '/../front-end'),
    DEVELOPMENT: {
        host: 'localhost',
        user: 'root',
        password: 'a5390040597',
        database: 'recruitment_management_system'
    },

    COOKIE_SECRET: '1LUVC4TS'
}

module.exports = config;