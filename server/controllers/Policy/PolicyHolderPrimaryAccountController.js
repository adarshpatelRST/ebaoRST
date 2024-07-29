const PolicyHolderPrimaryAccount = require('../../models/Policy/PolicyHolderPrimaryAccount');

// Get all policy holder primary accounts
exports.getAllPolicyHolderPrimaryAccounts = async (req, res) => {
  try {
    const policyHolderPrimaryAccounts = await PolicyHolderPrimaryAccount.find().populate('PolicyHolderId');
    res.json(policyHolderPrimaryAccounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single policy holder primary account by ID
exports.getPolicyHolderPrimaryAccountById = async (req, res) => {
  try {
    const policyHolderPrimaryAccount = await PolicyHolderPrimaryAccount.findById(req.params.id).populate('PolicyHolderId');
    if (!policyHolderPrimaryAccount) return res.status(404).json({ message: 'Policy holder primary account not found' });
    res.json(policyHolderPrimaryAccount);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new policy holder primary account
exports.createPolicyHolderPrimaryAccount = async (req, res) => {
  const policyHolderPrimaryAccount = new PolicyHolderPrimaryAccount(req.body);
  try {
    const newPolicyHolderPrimaryAccount = await policyHolderPrimaryAccount.save();
    res.status(201).json(newPolicyHolderPrimaryAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a policy holder primary account by ID
exports.updatePolicyHolderPrimaryAccount = async (req, res) => {
  try {
    const policyHolderPrimaryAccount = await PolicyHolderPrimaryAccount.findById(req.params.id);
    if (!policyHolderPrimaryAccount) return res.status(404).json({ message: 'Policy holder primary account not found' });

    Object.assign(policyHolderPrimaryAccount, req.body);
    const updatedPolicyHolderPrimaryAccount = await policyHolderPrimaryAccount.save();
    res.json(updatedPolicyHolderPrimaryAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a policy holder primary account by ID
exports.deletePolicyHolderPrimaryAccount = async (req, res) => {
  try {
    const policyHolderPrimaryAccount = await PolicyHolderPrimaryAccount.findById(req.params.id);
    if (!policyHolderPrimaryAccount) return res.status(404).json({ message: 'Policy holder primary account not found' });

    await policyHolderPrimaryAccount.remove();
    res.json({ message: 'Policy holder primary account deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
