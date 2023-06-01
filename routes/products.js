const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const authMiddleware = require('../middleware/authentication');

router.get('/', productsController.listProducts);
router.post('/', authMiddleware.authenticate, productsController.createProduct);

module.exports = router;
