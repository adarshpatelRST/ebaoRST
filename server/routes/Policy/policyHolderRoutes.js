const express = require('express');
const router = express.Router();
const policyHolderController = require('../../controllers/Policy/policyHolderController');

router.get('/', policyHolderController.getAllPolicyHolders);
router.get('/:id', policyHolderController.getPolicyHolderById);
router.post('/', policyHolderController.createPolicyHolder);
router.put('/:id', policyHolderController.updatePolicyHolder);
router.delete('/:id', policyHolderController.deletePolicyHolder);

module.exports = router;
