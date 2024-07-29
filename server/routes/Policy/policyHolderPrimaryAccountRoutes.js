const express = require('express');
const router = express.Router();
const policyHolderPrimaryAccountController = require('../../controllers/Policy/policyHolderPrimaryAccountController');

router.get('/', policyHolderPrimaryAccountController.getAllPolicyHolderPrimaryAccounts);
router.get('/:id', policyHolderPrimaryAccountController.getPolicyHolderPrimaryAccountById);
router.post('/', policyHolderPrimaryAccountController.createPolicyHolderPrimaryAccount);
router.put('/:id', policyHolderPrimaryAccountController.updatePolicyHolderPrimaryAccount);
router.delete('/:id', policyHolderPrimaryAccountController.deletePolicyHolderPrimaryAccount);

module.exports = router;