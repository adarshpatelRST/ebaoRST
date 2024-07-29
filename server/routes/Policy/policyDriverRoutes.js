const express = require('express');
const router = express.Router();
const policyDriverController = require('../../controllers/Policy/policyDriverController');

router.get('/', policyDriverController.getAllDrivers);
router.get('/:id', policyDriverController.getDriverById);
router.post('/', policyDriverController.createDriver);
router.put('/:id', policyDriverController.updateDriverById);
router.delete('/:id', policyDriverController.deleteDriverById);

module.exports = router;
