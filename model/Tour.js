const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
    place: {
        type: String,
        required: [true, 'Please provide a valid name'],
        unique: [true, "Place must be unique"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [150, "Name is too larger."]
    },
    description: {
        type: String,
        required: [true, "Description is required."]
    },
    image: {
        type: String,
        required: [true, "Image is required."]
    },
    location: {
        type: String,
        required: [true, "Location is required."]
    },
    price: {
        type: Number,
        required: [true, "Price is required."]
    },
    status: {
        type: String,
        enum: {
            values: ["continue", "discontinued"],
            message: "status can't be {VALUE}"
        }
    },
    viewer: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true,
})

// Tour model 
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;