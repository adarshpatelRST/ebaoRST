const express = require('express');
const router = express.Router();
const autoLeaseController = require('../controllers/autoLeaseController');

router.post('/compareQuote', autoLeaseController.compareQuote);
router.post('/draft', autoLeaseController.draftPolicy);
router.post('/issue', autoLeaseController.issuePolicy)

module.exports = router;
