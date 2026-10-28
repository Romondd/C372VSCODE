const connection = require('../config/db');

module.exports = {
  create(username, password, name, role, callback) {
    connection.query('INSERT INTO users (username, password, name, role) VALUES (?, ?, ?, ?)', [username, password, name, role], callback);
  },
  findByCredentials(username, password, callback) {
    connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], callback);
  },
  findAll(callback) {
    connection.query('SELECT id, name, username, role FROM users', callback);
  },
  findById(id, callback) {
    connection.query('SELECT id, name, username, role FROM users WHERE id = ?', [id], callback);
  },
  deleteById(id, callback) {
    connection.query('DELETE FROM users WHERE id = ?', [id], callback);
  }
};
