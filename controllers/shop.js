const Product = require('../models/product');

exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Your Shopping World',
      path: '/',
    });
  });
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
    });
  });
};

exports.getCart = (req, res) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart'
  })
};

exports.getCheckout = (req, res) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'checkout'
  })
};

exports.getOrders = (req, res) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders'
  })
};