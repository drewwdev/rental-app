const express = require('express');
const router = express.Router();
const truckController = require('../controllers/truckController');

// Define truck routes
router.get('/', truckController.listTrucks);
router.get('/:truckId', truckController.getTruckDetails);
router.post('/', truckController.createTruck);
router.put('/:truckId', truckController.updateTruck);
router.delete('/:truckId', truckController.deleteTruck);

module.exports = router;
