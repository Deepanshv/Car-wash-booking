const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    carDetails: {
        make: { type: String, trim: true },
        model: { type: String, trim: true },
        year: { type: Number },
        type: { type: String, trim: true }
    },
    serviceType: {
        type: String,
        required: true,
        enum: ['Basic Wash', 'Deluxe Wash', 'Full Detailing']
    },
    date: {
        type: Date,
        required: true
    },
    timeSlot: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // in minutes
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    addOns: {
        type: [String]
    }
}, { timestamps: true }); // timestamps will add createdAt and updatedAt

module.exports = mongoose.model('Booking', bookingSchema);