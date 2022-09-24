const Tour = require("../model/Tour")

module.exports.createTourService = async (data) =>{
    const tour = new Tour(data);
    const result = await tour.save();
    return result;
}


module.exports.getToursServices = async () =>{
    const result = await Tour.find({})
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