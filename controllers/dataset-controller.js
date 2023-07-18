let DYMMY_DATA = [
	{name: 'Entity1', coordinates: [-5, 10], labels: ['labelF', 'labelB', 'labelC'], id: '1'},
	{name: 'Entity2', coordinates: [3, 6], labels: ['labelA', 'labelC'], id: '2'},
	{name: 'Entity3', coordinates: [4, -1], labels: ['labelD', 'labelC'], id: '3'},
];

const getData = (req, res, next) => {
  res.json(DYMMY_DATA);
}

const getDataById = (req, res, next) => {
  const dataId = req.params.dataId;
  const data = DYMMY_DATA.filter(d => d.id === dataId);
  res.json({data});
};

const addDataSet = (req, res, next) => {
  const { name, coordinates, labels, id } = req.body;
  const createdData = {
    name,
    coordinates,
    labels,
    id
  };

  DYMMY_DATA.push(createdData);
  res.json(createdData);
}

const updateDataById = (req, res, next) => {
  const dataId = req.params.dataId;
  const { name, coordinates, labels } = req.body;

  const data = { ...DYMMY_DATA.find(d => d.id === dataId) };
  const dataIndex = DYMMY_DATA.findIndex(d => d.id === dataId);

  data.name = name;
  data.coordinates = coordinates;
  data.labels = labels;

  DYMMY_DATA[dataIndex] = data;
  res.json(data);
};

const deleteDataById = (req, res, next) => {
  const dataId = req.params.dataId;
  DYMMY_DATA = DYMMY_DATA.filter(data => data.id !== dataId);
  res.json('good');
}

exports.getData = getData;
exports.getDataById = getDataById;
exports.addDataSet = addDataSet;
exports.updateDataById = updateDataById;
exports.deleteDataById = deleteDataById;

