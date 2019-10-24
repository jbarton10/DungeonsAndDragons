const playerDB = require("../models/playerModel");

module.exports = {
  findAll: function(req, res) {
    playerDB.players
      .find(req.query)
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    playerDB.players
      .findById(req.params.id)
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    playerDB.players
      .create(req.body)
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    playerDB.players
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  },
  delete: function(req, res) {
    playerDB.Players.findById(req.params.id)
      .then(dbPlayer => dbPlayer.remove())
      .then(dbPlayer => res.json(dbPlayer))
      .catch(err => res.status(422).json(err));
  }
};
