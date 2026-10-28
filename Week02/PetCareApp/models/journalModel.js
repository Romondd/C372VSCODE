const connection = require('../config/db');

module.exports = {
  findByOwnerAndPet(ownerId, petId, callback) {
    const sql = `
      SELECT journal.*, pets.name, pets.species, pets.breed, pets.age, pets.image 
      FROM journal 
      JOIN pets ON journal.pet_id = pets.id 
      WHERE pets.owner_id = ? AND pets.id = ?
    `;
    connection.query(sql, [ownerId, petId], callback);
  },
  create(petId, activity, notes, entryDate, callback) {
    connection.query('INSERT INTO journal (pet_id, activity, notes, entry_date) VALUES (?, ?, ?, ?)', [petId, activity, notes, entryDate], callback);
  },
  findById(id, callback) {
    connection.query('SELECT * FROM journal WHERE id = ?', [id], callback);
  },
  update(id, entryDate, activity, notes, petId, callback) {
    connection.query('UPDATE journal SET entry_date = ?, activity = ?, notes = ?, pet_id = ? WHERE id = ?', [entryDate, activity, notes, petId, id], callback);
  },
  findPetIdByJournalId(id, callback) {
    connection.query('SELECT pet_id FROM journal WHERE id = ?', [id], callback);
  },
  deleteById(id, callback) {
    connection.query('DELETE FROM journal WHERE id = ?', [id], callback);
  },
  findByOwner(ownerId, callback) {
    connection.query(`
      SELECT journal.*, pets.id AS pet_id
      FROM journal
      JOIN pets ON journal.pet_id = pets.id
      WHERE pets.owner_id = ?
    `, [ownerId], callback);
  },
  search(ownerId, searchQuery, selectedPetId, callback) {
    let sql = `
      SELECT journal.*, pets.name, pets.species, pets.breed, pets.age, pets.image 
      FROM journal 
      JOIN pets ON journal.pet_id = pets.id 
      WHERE pets.owner_id = ? AND (journal.activity LIKE ? OR journal.notes LIKE ?)`;
    const params = [ownerId, searchQuery, searchQuery];
    if (selectedPetId) {
      sql += ' AND pets.id = ?';
      params.push(selectedPetId);
    }
    connection.query(sql, params, callback);
  }
};
