const PolicyHolderPrimaryContact = require('../../models/Policy/policyHolderPrimaryContact');

// Get all policy holder primary contacts
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await PolicyHolderPrimaryContact.find().populate('PolicyHolderId');
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single policy holder primary contact by ID
exports.getContactById = async (req, res) => {
  try {
    const contact = await PolicyHolderPrimaryContact.findById(req.params.id).populate('PolicyHolderId');
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new policy holder primary contact
exports.createContact = async (req, res) => {
  const { ContactPerson, Mobile, PrimaryContact, PolicyHolderId } = req.body;
  const newContact = new PolicyHolderPrimaryContact({
    ContactPerson,
    Mobile,
    PrimaryContact,
    PolicyHolderId
  });

  try {
    const contact = await newContact.save();
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a policy holder primary contact by ID
exports.updateContactById = async (req, res) => {
  try {
    const contact = await PolicyHolderPrimaryContact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('PolicyHolderId');

    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a policy holder primary contact by ID
exports.deleteContactById = async (req, res) => {
  try {
    const contact = await PolicyHolderPrimaryContact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
