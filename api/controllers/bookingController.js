const Booking = require('../models/booking');

// Get a list of all bookings
async function listBookings(req, res) {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Get details of a specific booking
async function getBookingDetails(req, res) {
  const bookingId = req.params.bookingId;

  try {
    const booking = await Booking.findById(bookingId);
    if (booking) {
      res.json(booking);
    } else {
      res.status(404).json({ error: 'Booking not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Create a new booking
async function createBooking(req, res) {
  const bookingData = req.body;

  try {
    const newBooking = await Booking.create(bookingData);
    res.json(newBooking);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Update details of a booking
async function updateBooking(req, res) {
  const bookingId = req.params.bookingId;
  const updatedBookingData = req.body;

  try {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, updatedBookingData, { new: true });
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Cancel a booking
async function cancelBooking(req, res) {
  const bookingId = req.params.bookingId;

  try {
    await Booking.findByIdAndDelete(bookingId);

    // Fetch the updated list of bookings (optional)
    const updatedBookings = await Booking.find();

    res.json(updatedBookings);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  listBookings,
  getBookingDetails,
  createBooking,
  updateBooking,
  cancelBooking,
};
