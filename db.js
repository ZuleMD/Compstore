const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://Mariem:ArVqKVRtPoElni3i@cluster0.7rayday.mongodb.net/mern-ecommerce'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log('mongodb connection successfull');
})

db.on('error', () => {
    console.log('mongodb connection failed');

})

module.exports = mongoose