const express = require('express');
const router = express.Router();
const { sendmail } = require('../controller/sendmail_controller');

router.get('/', sendmail); // Use router.get() instead of router.route().get()

module.exports = router;
