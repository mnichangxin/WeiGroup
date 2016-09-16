const mongoose = require('mongoose');
const config = require('../config/mongo-config');

/* 生产环境 */
const db = mongoose.connect("mongodb://" + config.USERNAME + ":" +  config.PASSWORD + "@" + config.HOST + ":" + config.PORT + "/" + config.NAME);

/* 开发环境 */
// const db = mongoose.connect("mongodb://" + config.HOST + ":" + config.PORT + "/" + config.NAME);

module.exports = db;