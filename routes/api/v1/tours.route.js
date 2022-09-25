const express = require('express');
const router = express.Router();
const toursController = require('../../../controllers/tours.controller');

// http://localhost:5000/api/v1/tours/
router.route('/')
    .post(toursController.createTours)
    .get(toursController.getTours)

router.route("/:id").get(toursController.getSingleTour)


module.exports = router;