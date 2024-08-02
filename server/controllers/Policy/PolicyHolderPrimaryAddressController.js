const PolicyHolderPrimaryAddress = require('../../models/Policy/policyHolderPrimaryAddress');

// Get all policy holder primary addresses
exports.getAllPolicyHolderPrimaryAddresses = async (req, res) => {
  try {
    const policyHolderPrimaryAddresses = await PolicyHolderPrimaryAddress.find().populate('City Country PolicyHolderId');
    res.json(policyHolderPrimaryAddresses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single policy holder primary address by ID
exports.getPolicyHolderPrimaryAddressById = async (req, res) => {
  try {
    const policyHolderPrimaryAddress = await PolicyHolderPrimaryAddress.findById(req.params.id).populate('City Country PolicyHolderId');
    if (!policyHolderPrimaryAddress) return res.status(404).json({ message: 'Policy holder primary address not found' });
    res.json(policyHolderPrimaryAddress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new policy holder primary address
exports.createPolicyHolderPrimaryAddress = async (req, res) => {
  const policyHolderPrimaryAddress = new PolicyHolderPrimaryAddress(req.body);
  try {
    const newPolicyHolderPrimaryAddress = await policyHolderPrimaryAddress.save();
    res.status(201).json(newPolicyHolderPrimaryAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a policy holder primary address by ID
exports.updatePolicyHolderPrimaryAddress = async (req, res) => {
  try {
    const policyHolderPrimaryAddress = await PolicyHolderPrimaryAddress.findById(req.params.id);
    if (!policyHolderPrimaryAddress) return res.status(404).json({ message: 'Policy holder primary address not found' });

    Object.assign(policyHolderPrimaryAddress, req.body);
    const updatedPolicyHolderPrimaryAddress = await policyHolderPrimaryAddress.save();
    res.json(updatedPolicyHolderPrimaryAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a policy holder primary address by ID
exports.deletePolicyHolderPrimaryAddress = async (req, res) => {
  try {
    const policyHolderPrimaryAddress = await PolicyHolderPrimaryAddress.findById(req.params.id);
    if (!policyHolderPrimaryAddress) return res.status(404).json({ message: 'Policy holder primary address not found' });

    await policyHolderPrimaryAddress.remove();
    res.json({ message: 'Policy holder primary address deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
