var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  imgUrl: {type: String},
  created: { type: Number, default: Date.now() },
  creatorId: {type: ObjectId, ref: models.user.name},
  collectionIds: { type: Array, default: [] },
  collectionUserIds: { type: Array, default: [] },
  postCount: { type: Number, default: 0},
  shareCount: { type: Number, default: 0},
  viewCount: { type: Number, default: 0},
  savedBy: { type: Array, default: [] },
  author: { type: String, default: ''},
  public: {type: Boolean, default: true}
});

module.exports = mongoose.model(models.post.name, schema);