const Truck = require('../models/truck');

// Get a list of all trucks
async function listTrucks(req, res) {
  try {
    const trucks = await Truck.find();
    res.json(trucks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Get details of a specific truck
async function getTruckDetails(req, res) {
  const truckId = req.params.truckId;

  try {
    const truck = await Truck.findById(truckId);
    if (truck) {
      res.json(truck);
    } else {
      res.status(404).json({ error: 'Truck not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Create a new truck
async function createTruck(req, res) {
  const truckData = req.body;

  try {
    const newTruck = await Truck.create(truckData);
    res.json(newTruck);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Update details of a truck
async function updateTruck(req, res) {
  const truckId = req.params.truckId;
  const updatedTruckData = req.body;

  try {
    const updatedTruck = await Truck.findByIdAndUpdate(truckId, updatedTruckData, { new: true });
    res.json(updatedTruck);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Delete a truck
async function deleteTruck(req, res) {
  const truckId = req.params.truckId;

  try {
    await Truck.findByIdAndDelete(truckId);

    // Fetch the updated list of trucks (optional)
    const updatedTrucks = await Truck.find();

    res.json(updatedTrucks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  listTrucks,
  getTruckDetails,
  createTruck,
  updateTruck,
  deleteTruck,
};
