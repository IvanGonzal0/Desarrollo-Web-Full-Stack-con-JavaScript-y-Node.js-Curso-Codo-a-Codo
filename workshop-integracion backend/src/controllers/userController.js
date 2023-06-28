const service = require("../services/userService");

const index = async (req, res) => {
  const rows = await service.findAll();
  res.send(rows);
};

const show = async (req, res) => {
  const rows = await service.findOne(req.params);
  res.send(rows);
};

const store = async (req, res) => {
  //console.log(req.body);
  const rows = await service.store(req.body);
  res.send(rows);
};

module.exports = {
  index,
  show,
  store,
};
