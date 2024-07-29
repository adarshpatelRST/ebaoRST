const express = require('express');
const router = express.Router();
const policyPlanController = require('../../controllers/Policy/policyPlanController');

router.get('/', policyPlanController.getAllPlans);
router.get('/:id', policyPlanController.getPlanById);
router.post('/', policyPlanController.createPlan);
router.put('/:id', policyPlanController.updatePlanById);
router.delete('/:id', policyPlanController.deletePlanById);

module.exports = router;
