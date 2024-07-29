const PolicyCoverage = require('../../models/Policy/policyCoverage');

// Get all policy coverages
exports.getAllCoverages = async (req, res) => {
  try {
    const coverages = await PolicyCoverage.find().populate('PolicyPlanId');
    res.status(200).json(coverages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single policy coverage by ID
exports.getCoverageById = async (req, res) => {
  try {
    const coverage = await PolicyCoverage.findById(req.params.id).populate('PolicyPlanId');
    if (!coverage) return res.status(404).json({ message: 'Policy Coverage not found' });
    res.status(200).json(coverage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new policy coverage
exports.createCoverage = async (req, res) => {
  const { ActualPremium, AnnualPremiumBFD, AnnualPremiumRate, From, ODLlimit, TPLLimit, PolicyPlanId, FlatPremium, Deductible, FlatPremiumBFD, Limit, LimitPerDay, NumberOfDays } = req.body;

  const newCoverage = new PolicyCoverage({
    ActualPremium,
    AnnualPremiumBFD,
    AnnualPremiumRate,
    From,
    ODLlimit,
    TPLLimit,
    PolicyPlanId,
    FlatPremium,
    Deductible,
    FlatPremiumBFD,
    Limit,
    LimitPerDay,
    NumberOfDays
  });

  try {
    const coverage = await newCoverage.save();
    res.status(201).json(coverage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a policy coverage by ID
exports.updateCoverageById = async (req, res) => {
  try {
    const coverage = await PolicyCoverage.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('PolicyPlanId');

    if (!coverage) return res.status(404).json({ message: 'Policy Coverage not found' });
    res.status(200).json(coverage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a policy coverage by ID
exports.deleteCoverageById = async (req, res) => {
  try {
    const coverage = await PolicyCoverage.findByIdAndDelete(req.params.id);
    if (!coverage) return res.status(404).json({ message: 'Policy Coverage not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
