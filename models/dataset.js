const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const datasetSchema = new Schema({
  name: { type: String, required: true },
  coordinates: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  labels: { type: String, required: true }
});

module.exports = mongoose.model('Dataset', datasetSchema);