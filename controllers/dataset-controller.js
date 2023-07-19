let DYMMY_DATA = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC'], id: '1'},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC'], id: '2'},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC'], id: '3'},
];

const Dataset = require('../models/dataset');

const getData = async (req, res, next) => {
  let dataSets;
  try {
    dataSets = await Dataset.find();
  } catch (err) {
    console.log(err);
  }
  res.json({dataSets});
}

const getDataById = async (req, res, next) => {
  const dataId = req.params.dataId;
  let data;
  try {
    data = await Dataset.findById(dataId);
  } catch (err) {
    console.log(err);
  }
  //add return error;
  res.json({data: data.toObject( {getters: true} )});
};

const addDataSet = async (req, res, next) => {
  const { name, coordinates, labels, id } = req.body;
  const createdDataSet = new Dataset({
    name,
    coordinates,
    labels
  })

  try {
    await createdDataSet.save();
  } catch (err) {
    console.log(err);
  }
  //add return error;
  res.json(createdDataSet);
}

const updateDataById = async (req, res, next) => {
  const dataId = req.params.dataId;
  const { name, coordinates, labels } = req.body;

  let dataSet;
  try {
    dataSet = await Dataset.findById(dataId);
  } catch (err) {
    console.log(err);
  }

  dataSet.name = name;
  dataSet.coordinates = coordinates;
  dataSet.labels = labels;

  try {
    await dataSet.save();
  } catch (err) {
    console.log(err);
  }

  res.json({dataSet: dataSet.toObject({ getters: true })});
};

const deleteDataById = async (req, res, next) => {
  const dataId = req.params.dataId;
  let dataSet;
  try {
    dataSet = await Dataset.findById(dataId);
  } catch (err) {
    console.log(err);
  }

  try {
    await dataSet.deleteOne();
  } catch (err) {
    console.log(err);
  }

  res.json('dataSet deleted');
}

exports.getData = getData;
exports.getDataById = getDataById;
exports.addDataSet = addDataSet;
exports.updateDataById = updateDataById;
exports.deleteDataById = deleteDataById;

