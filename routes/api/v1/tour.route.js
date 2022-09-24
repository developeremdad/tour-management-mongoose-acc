const express = require('express');
const router = express.Router();
// const productController = require('../controllers/product.controller');
const tourController = require('../../../controllers/tour.controller');

router.route('/').get(tourController.getTours)

// router
//     .route("/")
//     .post(productController.createProduct)
//     .get(productController.getProducts)

//     // Bulk product 
// router.route("/bulk-update")
//     .patch(productController.bulkUpdateProduct)
// router.route("/bulk-delete")
//     .delete(productController.bulkDeleteProduct)


// // Using by id 
// router.route("/:id")
//     .get(productController.getSingleProducts)
// router.route("/:id")
//     .patch(productController.updateProduct)
// router.route("/:id")
//     .delete(productController.deleteProduct)


module.exports = router;