const express = require('express');
const router = express.Router();
const policyHolderPrimaryContactController = require('../../controllers/Policy/policyHolderPrimaryContactController');

router.get('/', policyHolderPrimaryContactController.getAllContacts);
router.get('/:id', policyHolderPrimaryContactController.getContactById);
router.post('/', policyHolderPrimaryContactController.createContact);
router.put('/:id', policyHolderPrimaryContactController.updateContactById);
router.delete('/:id', policyHolderPrimaryContactController.deleteContactById);

module.exports = router;
