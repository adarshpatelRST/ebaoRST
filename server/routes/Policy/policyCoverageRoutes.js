const express = require('express');
const router = express.Router();
const policyCoverageController = require('../../controllers/Policy/policyCoverageController');

router.get('/', policyCoverageController.getAllCoverages);
router.get('/:id', policyCoverageController.getCoverageById);
router.post('/', policyCoverageController.createCoverage);
router.put('/:id', policyCoverageController.updateCoverageById);
router.delete('/:id', policyCoverageController.deleteCoverageById);

module.exports = router;
