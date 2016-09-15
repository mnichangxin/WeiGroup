const mongoose = require('mongoose');
const config = require('../config/mongo-config');

const db = mongoose.connect("mongodb://" + "uuH4Qidf3BomjEnx:pagRYxTpD16LeqJmZ@host:" + config.HOST + ":" + config.PORT + "/" + config.NAME);

module.exports = db;