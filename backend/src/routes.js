const router = require('express').Router();

const ProductController = require('./controllers/ProductController');

router.get('/product', ProductController.index);
router.get('/product/:id', ProductController.show);
router.post('/product', ProductController.store);
router.put('/product/:id', ProductController.update);
router.delete('/product/:id', ProductController.delete);

module.exports = router;