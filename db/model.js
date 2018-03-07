var mongoose = require('mongoose');
var Promise = require('bluebird');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/airbnb_photos');

const PhotoSchema = mongoose.Schema (
  {
    "id": Number,
    "picture": String,
    "sort_order": Number,
    "caption": String,
    "large": String,
    "large_cover": String,
    "medium": String,
    "mini_square": String,
    "scrim_color": String,
    "small": String,
    "thumbnail": String,
    "preview_encoded_png": String,
    "x_large": String,
    "x_large_cover": String,
    "x_medium": String,
    "x_small": String,
    "xl_picture": String,
    "xx_large": String
  }
);

const PhotosSchema = mongoose.Schema(
  {
    "id": Number,
    "thumbnail_urls": [String],
    "photos": [PhotoSchema]
  }
);

var PhotosModel = mongoose.model('photos', PhotosSchema);

function findOne(roomId) {
  return PhotosModel
    .findOne({id: roomId})
    .lean()
    .exec();
}

function insertOne(photos) {
  return PhotosModel.create(photos);
}

exports.insertOne = insertOne;
exports.findOne = findOne;
