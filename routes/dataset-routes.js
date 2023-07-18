const express = require('express');

const dataControllers = require('../controllers/dataset-controller');

const router = express.Router();

router.get('/', dataControllers.getData);

router.get('/dataset/:dataId', dataControllers.getDataById);

router.post('/addDataset', dataControllers.addDataSet);

router.patch('/dataset/:dataId', dataControllers.updateDataById);

router.delete('/dataset/:dataId', dataControllers.deleteDataById);

module.exports = router;