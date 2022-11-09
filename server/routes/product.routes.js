const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
  app.get('/api', ProductController.index);
  app.get('/api/products', ProductController.findAllProduct);
  app.post('/api/products', ProductController.createProduct);
  app.get('/api/product/:id([0-9a-f]{24})', ProductController.getProduct);
  app.put('/api/product/:id([0-9a-f]{24})', ProductController.updateProduct);
  app.delete('/api/product/:id([0-9a-f]{24})', ProductController.deleteProduct);
}