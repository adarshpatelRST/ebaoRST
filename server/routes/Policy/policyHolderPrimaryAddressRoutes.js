const express = require('express');
const router = express.Router();
const policyHolderPrimaryAddressController = require('../../controllers/Policy/policyHolderPrimaryAddressController');

router.get('/', policyHolderPrimaryAddressController.getAllPolicyHolderPrimaryAddresses);
router.get('/:id', policyHolderPrimaryAddressController.getPolicyHolderPrimaryAddressById);
router.post('/', policyHolderPrimaryAddressController.createPolicyHolderPrimaryAddress);
router.put('/:id', policyHolderPrimaryAddressController.updatePolicyHolderPrimaryAddress);
router.delete('/:id', policyHolderPrimaryAddressController.deletePolicyHolderPrimaryAddress);

module.exports = router;
