let mongoose = require('mongoose');
let Photos = require('./model.js');
let Promise = require('bluebird');
let data = JSON.parse(require('./data/listings.json'));
mongoose.Promise = Promise;


const seedDb = function(data) {
  debugger;
  let conn;
  let connection = mongoose.connect('mongodb://localhost/airbnb_photos')
    .then(c => {
      conn = c;
      Promise.map(data, (photos) => {
        return Photos.insertOne(photos.listing);
      })
      .then(() => {
        return conn.disconnect();
      })
      .catch(err => console.log('Error inserting data ', err));
    })
    .catch(err => {
      console.log('Error opening the connection ', err);
    });
};

seedDb(data);
