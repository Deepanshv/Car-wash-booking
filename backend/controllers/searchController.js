const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking.js');

exports.searchBookings = asyncHandler(async (req, res) => {
    const { q } = req.query;
    let query = {};

    if (q) {
        query.$or = [
            { customerName: { $regex: q, $options: 'i' } },
            { phone: { $regex: q, $options: 'i' } },
            { 'carDetails.make': { $regex: q, $options: 'i' } },
            { 'carDetails.model': { $regex: q, $options: 'i' } },
        ];
    }

    const bookings = await Booking.find(query).sort({ date: -1 });
    res.status(200).json(bookings);
});
