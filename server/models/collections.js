var models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    title: { type: String, required: true },
    posts: [{type: ObjectId, ref: models.post.name}],
    created: { type: Number, default: Date.now() },
    creatorId: {type: ObjectId, ref: models.user.name},
  });
  
  module.exports = mongoose.model(models.collection.name, schema);