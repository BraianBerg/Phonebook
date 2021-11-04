const express = require('express');
const taskController = require('../controllers/mainController');
const router = express.Router({ mergeParams: true });

router.get('/', taskController.getMainPage);

router.post('/', taskController.postNewTask);

router.post('/delete', taskController.deleteTask);

module.exports = router;
