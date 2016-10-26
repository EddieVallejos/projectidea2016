'use strict';
const path 	= require('path');

const config =  {
	PORT: 8000,
	IP: '127.0.0.1',

	ASSETS_DIR: path.normalize(__dirname + '/../front-end'),
    DEVELOPMENT: {
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'recruitment_management_system'
    },

    COOKIE_SECRET: '1LUVC4TS'
}

module.exports = config;