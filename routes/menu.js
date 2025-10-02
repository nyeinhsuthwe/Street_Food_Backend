const express = require('express');
const MenuController = require('../controller/menuController');

const router = express.Router();

router.get('/get-menu-list', MenuController.getMenu);
router.post('/create-menu', MenuController.createMenu);
router.patch('/update-menu', MenuController.updateMenu);
router.delete('/delete-menu', MenuController.deleteMenu);

module.exports = router