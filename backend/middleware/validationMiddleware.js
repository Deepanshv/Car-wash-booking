const { body, validationResult } = require('express-validator');

const validateBooking = [
    body('customerName').notEmpty().withMessage('Customer name is required'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('carDetails.make').notEmpty().withMessage('Car make is required'),
    body('carDetails.model').notEmpty().withMessage('Car model is required'),
    body('carDetails.year').isInt({ min: 1900, max: new Date().getFullYear() + 1 }).withMessage('Invalid car year'),
    body('serviceType').isIn(['Basic Wash', 'Deluxe Wash', 'Full Detailing']).withMessage('Invalid service type'),
    body('date').isISO8601().withMessage('Invalid date format'),
    body('timeSlot').notEmpty().withMessage('Time slot is required'),
    body('duration').isInt({ min: 0 }).withMessage('Duration must be a positive number'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('status').isIn(['Pending', 'Confirmed', 'Completed', 'Cancelled']).withMessage('Invalid status'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

module.exports = { validateBooking };
