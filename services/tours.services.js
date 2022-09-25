const Tour = require("../model/Tour")

module.exports.createTourService = async (data) =>{
    const tour = new Tour(data);
    const result = await tour.save({ runValidators: true });
    return result;
}


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



module.exports.getTrendingToursServices = async () =>{
    const tours = await Tour.find({}).sort("-viewer")
    const result = tours.slice(0, 3);
    return result;
}


module.exports.getCheapestToursServices = async () =>{
    const tours = await Tour.find({}).sort("price")
    const result = tours.slice(0, 3);
    return result;
}


module.exports.getSingleTourServices = async (id) =>{
    // console.log(id);
    const result = await Tour.findOne({_id:id});
    result.viewer = result.viewer + 1;
    await result.save();
    return result;
}


module.exports.updateSingleTourServices = async (id, data) =>{
    const result = await Tour.updateOne({ _id: id }, { $set: data }, { runValidators: true })
    return result;
}