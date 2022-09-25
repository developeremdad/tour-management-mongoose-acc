const Tour = require("../model/Tour")

// POST /tours 
// http://localhost:5000/api/v1/tours
module.exports.createTourService = async (data) =>{
    const tour = new Tour(data);
    const result = await tour.save({ runValidators: true });
    return result;
}

// GET /tours with full flexibility.
// http://localhost:5000/api/v1/tours
module.exports.getToursServices = async (filters, queries) =>{
    const tours = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy)
    const total = await Tour.countDocuments(filters)
    const page = Math.ceil(total / queries.limit)
    return {total, page, tours};
}

// GET /tours/:id --> get a single tour details.
// http://localhost:5000/api/v1/tours/632f22b00035c134ce82712c
module.exports.getSingleTourServices = async (id) =>{
    // console.log(id);
    const result = await Tour.findOne({_id:id});
    result.viewer = result.viewer + 1;
    await result.save();
    return result;
}

