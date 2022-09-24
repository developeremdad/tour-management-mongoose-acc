const {createTourService} = require('../services/tour.services');
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