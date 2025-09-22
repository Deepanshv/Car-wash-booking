const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking.js');

// CREATE
exports.createBooking = asyncHandler(async (req, res) => {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
});

// GET ALL
exports.getAllBookings = asyncHandler(async (req, res) => {
    const { status, serviceType, startDate, endDate, sortBy, page = 1, limit = 8 } = req.query;
    let query = {};

    if (status) {
        query.status = status;
    }

    if (serviceType) {
        query.serviceType = serviceType;
    }

    if (startDate && endDate) {
        query.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
    } else if (startDate) {
        query.date = { $gte: new Date(startDate) };
    } else if (endDate) {
        query.date = { $lte: new Date(endDate) };
    }

    let sort = { date: -1 }; // Default sort by newest
    if (sortBy) {
        switch (sortBy) {
            case 'price':
                sort = { price: 1 };
                break;
            case 'duration':
                sort = { duration: 1 };
                break;
            case 'status':
                sort = { status: 1 };
                break;
            default:
                sort = { date: -1 };
        }
    }

    const count = await Booking.countDocuments(query);
    const bookings = await Booking.find(query)
        .sort(sort)
        .limit(parseInt(limit))
        .skip((page - 1) * parseInt(limit));

    res.status(200).json({ bookings, totalPages: Math.ceil(count / limit), currentPage: parseInt(page) });
});

// GET ONE
exports.getBookingById = asyncHandler(async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
        res.status(404);
        throw new Error('Booking not found');
    }
    res.status(200).json(booking);
});

// UPDATE
exports.updateBooking = asyncHandler(async (req, res) => {
    const updatedBooking = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    if (!updatedBooking) {
        res.status(404);
        throw new Error('Booking not found');
    }
    res.status(200).json(updatedBooking);
});

// DELETE
exports.deleteBooking = asyncHandler(async (req, res) => {
    const deletedBooking = await Booking.findByIdAndDelete(req.params.id);
    if (!deletedBooking) {
        res.status(404);
        throw new Error('Booking not found');
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
});
