const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/auth');
const controller = require('../controllers/adminController');

router.get('/admin/dashboard', isAdmin, controller.dashboard);
router.get('/admin/users', isAdmin, controller.listUsers);
router.get('/admin/users/:id', isAdmin, controller.userDetails);
router.get('/admin/users/delete/:id', isAdmin, controller.deleteUser);

module.exports = router;
