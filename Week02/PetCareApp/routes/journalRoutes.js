const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/auth');
const controller = require('../controllers/journalController');

router.get('/journals', isLoggedIn, controller.list);
router.get('/journals/new', isLoggedIn, controller.showNewJournal);
router.post('/journals/new', isLoggedIn, controller.createJournal);
router.get('/journals/edit/:id', isLoggedIn, controller.showEditJournal);
router.post('/journals/edit/:id', isLoggedIn, controller.editJournal);
router.get('/journals/delete/:id', isLoggedIn, controller.deleteJournal);
router.get('/journals/search', isLoggedIn, controller.search);

module.exports = router;
