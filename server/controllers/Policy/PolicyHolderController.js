const PolicyHolder = require('../../models/Policy/policyHolder');

// Get all policy holders
exports.getAllPolicyHolders = async (req, res) => {
  try {
    const policyHolders = await PolicyHolder.find().populate('GeneralManagerID Nationality');
    res.json(policyHolders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single policy holder by ID
exports.getPolicyHolderById = async (req, res) => {
  try {
    const policyHolder = await PolicyHolder.findById(req.params.id).populate('GeneralManagerID Nationality');
    if (!policyHolder) return res.status(404).json({ message: 'Policy holder not found' });
    res.json(policyHolder);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new policy holder
exports.createPolicyHolder = async (req, res) => {
  const policyHolder = new PolicyHolder(req.body);
  try {
    const newPolicyHolder = await policyHolder.save();
    res.status(201).json(newPolicyHolder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a policy holder by ID
exports.updatePolicyHolder = async (req, res) => {
  try {
    const policyHolder = await PolicyHolder.findById(req.params.id);
    if (!policyHolder) return res.status(404).json({ message: 'Policy holder not found' });

    Object.assign(policyHolder, req.body);
    const updatedPolicyHolder = await policyHolder.save();
    res.json(updatedPolicyHolder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a policy holder by ID
exports.deletePolicyHolder = async (req, res) => {
  try {
    const policyHolder = await PolicyHolder.findById(req.params.id);
    if (!policyHolder) return res.status(404).json({ message: 'Policy holder not found' });

    await policyHolder.remove();
    res.json({ message: 'Policy holder deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
