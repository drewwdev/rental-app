const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const truckRoutes = require('./routes/truckRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables from .env
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

// Handle MongoDB connection events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// CORS middleware
app.use(cors());

// Middleware to parse JSON in the request body
app.use(express.json());

// Serve static files from the 'client/build' directory
app.use(express.static(path.join(__dirname, 'client', 'build')));

// Use truck routes
app.use('/trucks', truckRoutes);

// Use booking routes
app.use('/bookings', bookingRoutes);

// Catch-all route to serve 'index.html'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
