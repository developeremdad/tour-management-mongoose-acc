const Tour = require("../model/Tour");

// PATCH /tour/:id
// http://localhost:5000/api/v1/tour/632f22b00035c134ce82712c
module.exports.updateSingleTourServices = async (id, data) =>{
    const result = await Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true })
    return result;
}

// GET /tour/trending --> Get top 3 viewed tour
// http://localhost:5000/api/v1/tour/trending
module.exports.getTrendingToursServices = async () =>{
    const tours = await Tour.find({}).sort("-viewer")
    const result = tours.slice(0, 3);
    return result;
}

// GET /tour/cheapest --> Get top 3 cheapest tours
//  http://localhost:5000/api/v1/tour/cheapest
module.exports.getCheapestToursServices = async () =>{
    const tours = await Tour.find({}).sort("price")
    const result = tours.slice(0, 3);
    return result;
}
