const {getTourService} = require('../services/tour.services');
module.exports.getTours = async (req, res, _next) =>{
    const result = getTourService()
    res.send(result)
}