const Policy = require('../../models/Policy/policy');

// Get all policies
exports.getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json(policies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single policy by ID
exports.getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });
    res.json(policy);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new policy
exports.createPolicy = async (req, res) => {
  const policy = new Policy(req.body);
  try {
    const newPolicy = await policy.save();
    res.status(201).json(newPolicy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a policy by ID
exports.updatePolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });

    Object.assign(policy, req.body);
    const updatedPolicy = await policy.save();
    res.json(updatedPolicy);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a policy by ID
exports.deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });

    await policy.remove();
    res.json({ message: 'Policy deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
