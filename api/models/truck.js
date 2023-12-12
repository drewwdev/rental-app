const mongoose = require('mongoose');

const truckSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  capacity: {
    type: String,
    required: true,
  },
});

const Truck = mongoose.model('Truck', truckSchema);

module.exports = Truck;
