const express = require('express');
const router = express.Router();
const policyRiskController = require('../../controllers/Policy/policyRiskController');

router.get('/', policyRiskController.getAllPolicyRisks);
router.get('/:id', policyRiskController.getPolicyRiskById);
router.post('/', policyRiskController.createPolicyRisk);
router.put('/:id', policyRiskController.updatePolicyRisk);
router.delete('/:id', policyRiskController.deletePolicyRisk);

module.exports = router;
