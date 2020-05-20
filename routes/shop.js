const express = require('express');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('shop', {prods: adminData.products, pageTitle: 'My Online Shopping', path: '/'});
});

module.exports = router;