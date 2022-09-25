const express = require('express');
const router = express.Router();
const tourController = require('../../../controllers/tour.controller');

// http://localhost:5000/api/v1/tour/
router.route('/trending').get(tourController.getTrendingTours)
router.route("/:id").get(tourController.getCheapestTours)
router.route("/:id").patch(tourController.updateSingleTour)


module.exports = router;