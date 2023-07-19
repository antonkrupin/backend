const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datasetSchema = new Schema({
  name: { type: String, required: true },
  coordinates: { type: Array, required: true },
  labels: { type: Array, required: true }
});

module.exports = mongoose.model('Dataset', datasetSchema);