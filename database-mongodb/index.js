const mongoose = require('mongoose');
//carousel: name of the database
const mongoUri = 'mongodb://localhost/carousel';

const db = mongoose.connect(mongoUri);


// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

module.exports = db;
