const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).send('<html><title><head>Online Shopping</head></title><body><h1>Hola Iam coming from Express routing!!!</h1><br/><a href="/admin/product">Go to form</a></body></html>')
});

module.exports = router;