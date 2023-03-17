const models = require("../models");

const browse = (req, res) => {
  const id = req.params.emmaus_id;
  models.phone
    .findQrCode(id)
    .then(([rows]) => {
      res.send(rows[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
};
