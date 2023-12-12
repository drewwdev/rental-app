const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Define booking routes
router.get('/', bookingController.listBookings);
router.get('/:bookingId', bookingController.getBookingDetails);
router.post('/', bookingController.createBooking);
router.put('/:bookingId', bookingController.updateBooking);
router.delete('/:bookingId', bookingController.cancelBooking);

module.exports = router;
