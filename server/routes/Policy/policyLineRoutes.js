const express = require('express');
const router = express.Router();
const policyLineController = require('../../controllers/Policy/policyLineController');

router.get('/', policyLineController.getAllPolicyLines);
router.get('/:id', policyLineController.getPolicyLineById);
router.post('/', policyLineController.createPolicyLine);
router.put('/:id', policyLineController.updatePolicyLineById);
router.delete('/:id', policyLineController.deletePolicyLineById);

module.exports = router;
