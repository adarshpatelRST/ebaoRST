const PolicyLine = require('../../models/Policy/PolicyLine');

// Get all policy lines
exports.getAllPolicyLines = async (req, res) => {
  try {
    const policyLines = await PolicyLine.find();
    res.status(200).json(policyLines);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single policy line by ID
exports.getPolicyLineById = async (req, res) => {
  try {
    const policyLine = await PolicyLine.findById(req.params.id);
    if (!policyLine) return res.status(404).json({ message: 'Policy Line not found' });
    res.status(200).json(policyLine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new policy line
exports.createPolicyLine = async (req, res) => {
  const { AgeLimitForAgency, AgeLimitForNonAgency, LoyaltyDiscountApplicable, RenewalBusiness, TowingLimitOfHeavyCommercialVehicles, TowingLimitOfLightVehicle } = req.body;

  const newPolicyLine = new PolicyLine({
    AgeLimitForAgency,
    AgeLimitForNonAgency,
    LoyaltyDiscountApplicable,
    RenewalBusiness,
    TowingLimitOfHeavyCommercialVehicles,
    TowingLimitOfLightVehicle
  });

  try {
    const policyLine = await newPolicyLine.save();
    res.status(201).json(policyLine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a policy line by ID
exports.updatePolicyLineById = async (req, res) => {
  try {
    const policyLine = await PolicyLine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!policyLine) return res.status(404).json({ message: 'Policy Line not found' });
    res.status(200).json(policyLine);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a policy line by ID
exports.deletePolicyLineById = async (req, res) => {
  try {
    const policyLine = await PolicyLine.findByIdAndDelete(req.params.id);
    if (!policyLine) return res.status(404).json({ message: 'Policy Line not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
