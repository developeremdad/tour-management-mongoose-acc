const express = require('express');
const router = express.Router();
const tourController = require('../../../controllers/tour.controller');

router.route('/trending').get(tourController.getTrendingTours)
router.route("/:id").get(tourController.getCheapestTours)
router.route("/:id").patch(tourController.updateSingleTour)


module.exports = router;