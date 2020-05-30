const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getIndex = (req, res) => {
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/index', {
      prods: rows,
      pageTitle: 'Your Shopping World',
      path: '/',
    });
  }).catch((err) => { console.log(err) })
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll().then(([rows, fieldData]) => {
    res.render('shop/product-list', {
      prods: rows,
      pageTitle: 'Shop',
      path: '/products',
    });
  }).catch((err) => { console.log(err)} )
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;

  Product.findById(productId).then(([product]) => {
    console.log('......', product[0])
    res.render('shop/product-detail', {
      pageTitle: product.title,
      path: '/product-detail',
      product: product[0]
    })
  }).catch((err) => { console.log(err)})
};

exports.getCart = (req, res) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart'
  })
};

exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};

exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
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