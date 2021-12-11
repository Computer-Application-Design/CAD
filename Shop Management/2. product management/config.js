// 2021.12.06 2017154003 고현석 (.env파일과 config파일 연동)

'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    DB_HOST,
    DB_NAME,
    DB_USER,
    DB_PASS
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    db_host: DB_HOST,
    db_name: DB_NAME,
    db_user: DB_USER,
    db_pass: DB_PASS
}