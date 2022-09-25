const {createTourService, getToursServices, getSingleTourServices} = require('../services/tours.services');

// POST /tours 
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

// GET /tours with full flexibility.
// http://localhost:5000/api/v1/tours
module.exports.getTours = async (req, res, _next) =>{
    try {
        let filters = { ...req.query };

        // sort, page, limit --> exclude
        const excludeFields = ['sort', 'page', 'limit'];
        excludeFields.forEach(field => delete filters[field]);

        // gt, lt, gte, lte
        //Convert {price:{ gt:'50'}} to {price:{$ gt:50}}
        // http://localhost:5000/api/v1/tours/?price[lt]=150
        let filterString = JSON.stringify(req.query)
        filterString = filterString.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`)
        // filterString = filterString.replace(/\b(gt|gte|lt|lte|in)\b/g , '$$' + "$1");
        filters = JSON.parse(filterString);

        let queries = {};

        // http://localhost:5000/api/v1/tours/?page=1&limit=2
        if(req.query.page || req.query.limit){
            const {page = 1, limit = 4} = req.query;   // "3" "10"
            const skip = (page -1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        // price, quantity -> 'price quantity'
        // http://localhost:5000/api/v1/tours/?sort=-price,viewer
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }

        //fields: 'name,description' -> fields: 'place,description'
        //http://localhost:5000/api/v1/tours/?fields=place,price,-_id
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
        }

        const result = await getToursServices(filters, queries)
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

// GET /tours/:id --> get a single tour details.
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
