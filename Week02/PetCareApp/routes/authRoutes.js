const express = require('express');
const router = express.Router();
const upload = require('../config/upload');
const controller = require('../controllers/authController');

router.get('/signup', controller.showSignup);
router.post('/signup', upload.single('pet_image'), controller.signup);
router.get('/login', controller.showLogin);
router.post('/login', controller.login);
router.get('/logout', controller.logout);
router.get('/', controller.index);

module.exports = router;
