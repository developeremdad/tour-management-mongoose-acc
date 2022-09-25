const {createTourService, getToursServices, getSingleTourServices, updateSingleTourServices, getTrendingToursServices, getCheapestToursServices} = require('../services/tours.services');

// http://localhost:5000/api/v1/tours
module.exports.createTours = async (req, res, _next) =>{
    try {
        const result = await createTourService(req.body);
        res.status(200).json({
            success: true,
            message: "Data successfully stored.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Data can't store. error message: ${error.message}`
        })
    }
}

// http://localhost:5000/api/v1/tours
module.exports.getTours = async (_req, res, _next) =>{
    try {
        const result = await getToursServices()
        res.status(200).json({
            success: true,
            message: "Data successfully founded.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Data can't get. error message: ${error.message}`
        })
    }
}


// http://localhost:5000/api/v1/tour/trending
module.exports.getTrendingTours = async (_req, res, _next) =>{
    try {
        const result = await getTrendingToursServices()
        res.status(200).json({
            success: true,
            message: "Data successfully founded.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Data can't get. error message: ${error.message}`
        })
    }
}


//  http://localhost:5000/api/v1/tour/cheapest
module.exports.getCheapestTours = async (_req, res, _next) =>{
    try {
        const result = await getCheapestToursServices()
        res.status(200).json({
            success: true,
            message: "Data successfully founded.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Data can't get. error message: ${error.message}`
        })
    }
}

// http://localhost:5000/api/v1/tours/632f22b00035c134ce82712c
module.exports.getSingleTour = async (req, res, _next) =>{
    const id = req.params.id;
    try {
        const result = await getSingleTourServices(id)
        res.status(200).json({
            success: true,
            message: "Data successfully founded.",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Data can't get. error message: ${error.message}`
        })
    }
}

// http://localhost:5000/api/v1/tours/632f22b00035c134ce82712c
module.exports.updateSingleTour = async (req, res, _next) =>{
    const id = req.params.id;
    const data = req.body;
    try {
        const result = await updateSingleTourServices(id, data)
        res.status(200).json({
            success: true,
            message: "Data successfully updated",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: `Data can't update. error message: ${error.message}`
        })
    }
}