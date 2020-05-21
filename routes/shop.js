const express = require('express');
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res) => {
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'My Online Shopping',
    path: '/',
    hasProducts: products.length > 0,
    shopActive: true,
    addProductCss: true,
  });
});

module.exports = router;