const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes/dataset-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/', routes);

mongoose
  .connect(`mongodb+srv://anton:Xp5DeRtXzxGbML10@cluster0.7wr4e67.mongodb.net/datasets?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });