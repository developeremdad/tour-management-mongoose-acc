const Tour = require("../model/Tour")

module.exports.createTourService = async (data) =>{
    const tour = new Tour(data);
    const result = tour.save();
    return result;
}