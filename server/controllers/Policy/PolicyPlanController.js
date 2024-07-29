const PolicyPlan = require('../../models/Policy/PolicyPlan');

// Get all policy plans
exports.getAllPlans = async (req, res) => {
  try {
    const plans = await PolicyPlan.find();
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single policy plan by ID
exports.getPlanById = async (req, res) => {
  try {
    const plan = await PolicyPlan.findById(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Policy Plan not found' });
    res.status(200).json(plan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new policy plan
exports.createPlan = async (req, res) => {
  const { ActualPremium, CommissionRate, MinDeductibleForPartialLoss, ProductionYear, SequenceNo, SumInsured, UseOfVehicle, VehicleMake, VehicleRegion, VehicleType, VehicleUsage } = req.body;

  const newPlan = new PolicyPlan({
    ActualPremium,
    CommissionRate,
    MinDeductibleForPartialLoss,
    ProductionYear,
    SequenceNo,
    SumInsured,
    UseOfVehicle,
    VehicleMake,
    VehicleRegion,
    VehicleType,
    VehicleUsage
  });

  try {
    const plan = await newPlan.save();
    res.status(201).json(plan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a policy plan by ID
exports.updatePlanById = async (req, res) => {
  try {
    const plan = await PolicyPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!plan) return res.status(404).json({ message: 'Policy Plan not found' });
    res.status(200).json(plan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a policy plan by ID
exports.deletePlanById = async (req, res) => {
  try {
    const plan = await PolicyPlan.findByIdAndDelete(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Policy Plan not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
