const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      // fileContent.toString() ? cb(JSON.parse(fileContent)) : cb([]);
      fileContent.length > 0 ? cb(JSON.parse(fileContent)) : cb([]);
    }
  });
};

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), err => {});
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
