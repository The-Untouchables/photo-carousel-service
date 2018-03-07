const Promise = require('bluebird');
const descriptionSample = require('../data/description_sample.js');


function __getMockDescriptionAsync() {
  return new Promise((resolve, reject) => {
    resolve(descriptionSample)
  });
}

function findOne(roomId) {
  return __getMockDescriptionAsync();
}

module.exports.findOne = findOne;
