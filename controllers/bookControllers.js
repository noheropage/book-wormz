const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(data => res.json(data))
      .catch(err => res.status(404).json(err));
  },
  
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(404).json(err));
  },

  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
  },

  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err));
  },
  
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(404).json(err));
  }
};