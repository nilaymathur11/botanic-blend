const mongoose = require('mongoose');

module.exports = async function createMongoConnection(){
    return mongoose.connect('mongodb://0.0.0.0:27017/botanic_blend')
}