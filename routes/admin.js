const express = require('express');
const router = express.Router();

router.get('/product', (req, res) => {
  res.status(200).send('<html><title><head>Products</head></title><body><form method="POST" action="/admin/product"><input type="text" name="product"/><br/><button type="submit">Add Product</button></form></body></html>');
});

router.post('/product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;