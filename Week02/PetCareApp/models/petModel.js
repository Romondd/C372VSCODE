const connection = require('../config/db');

module.exports = {
  create(ownerId, name, species, breed, age, image, callback) {
    connection.query('INSERT INTO pets (owner_id, name, species, breed, age, image) VALUES (?, ?, ?, ?, ?, ?)', [ownerId, name, species, breed, age, image], callback);
  },
  findByOwner(ownerId, callback) {
    connection.query('SELECT * FROM pets WHERE owner_id = ?', [ownerId], callback);
  }
};
