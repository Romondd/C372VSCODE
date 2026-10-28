const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const { isLoggedIn } = require('../middleware/auth');
const controller = require('../controllers/petController');

router.get('/pets/new', isLoggedIn, controller.showNewPet);
router.post('/pets', upload.single('pet_image'), isLoggedIn, controller.createPet);

module.exports = router;
