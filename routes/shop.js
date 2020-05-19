const express = require('express');
const router = express.Router();
const path = require('path');
const { rootDir } = require('../utils/helpers');

router.get('/', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;