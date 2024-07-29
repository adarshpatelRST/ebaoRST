const PolicyRisk = require('../../models/Policy/PolicyRisk');

// Get all policy risks
exports.getAllPolicyRisks = async (req, res) => {
  try {
    const policyRisks = await PolicyRisk.find().populate('PolicyLineID');
    res.json(policyRisks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single policy risk by ID
exports.getPolicyRiskById = async (req, res) => {
  try {
    const policyRisk = await PolicyRisk.findById(req.params.id).populate('PolicyLineID');
    if (!policyRisk) return res.status(404).json({ message: 'Policy risk not found' });
    res.json(policyRisk);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new policy risk
exports.createPolicyRisk = async (req, res) => {
  const policyRisk = new PolicyRisk(req.body);
  try {
    const newPolicyRisk = await policyRisk.save();
    res.status(201).json(newPolicyRisk);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a policy risk by ID
exports.updatePolicyRisk = async (req, res) => {
  try {
    const policyRisk = await PolicyRisk.findById(req.params.id);
    if (!policyRisk) return res.status(404).json({ message: 'Policy risk not found' });

    Object.assign(policyRisk, req.body);
    const updatedPolicyRisk = await policyRisk.save();
    res.json(updatedPolicyRisk);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a policy risk by ID
exports.deletePolicyRisk = async (req, res) => {
  try {
    const policyRisk = await PolicyRisk.findById(req.params.id);
    if (!policyRisk) return res.status(404).json({ message: 'Policy risk not found' });

    await policyRisk.remove();
    res.json({ message: 'Policy risk deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
