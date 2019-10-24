roomDB = require("./../models/roomModel");

module.exports = {
  findAll: function(req, res) {
    roomDB.players
      .find(req.query)
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    roomDB.players
      .findById(req.params.id)
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    roomDB.players
      .create(req.body)
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    roomDB.players
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    roomDB.Players.findById(req.params.id)
      .then(dbRoom => dbRoom.remove())
      .then(dbRoom => res.json(dbRoom))
      .catch(err => res.status(422).json(err));
  }
};
