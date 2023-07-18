const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/dataset-routes');

const app = express();

app.use(bodyParser.json());

app.use('/api/', routes);

app.listen(5000);