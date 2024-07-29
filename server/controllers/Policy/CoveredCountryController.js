const CoveredCountry = require('../../models/Policy/coveredCountry');

// Get all covered countries
exports.getAllCoveredCountries = async (req, res) => {
  try {
    const coveredCountries = await CoveredCountry.find();
    res.status(200).json(coveredCountries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single covered country by ID
exports.getCoveredCountryById = async (req, res) => {
  try {
    const coveredCountry = await CoveredCountry.findById(req.params.id);
    if (!coveredCountry) return res.status(404).json({ message: 'Covered Country not found' });
    res.status(200).json(coveredCountry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new covered country
exports.createCoveredCountry = async (req, res) => {
  const { ActualPremium, CoveredCountry, Deductible, IsActive, To } = req.body;

  const newCoveredCountry = new CoveredCountry({
    ActualPremium,
    CoveredCountry,
    Deductible,
    IsActive,
    To
  });

  try {
    const coveredCountry = await newCoveredCountry.save();
    res.status(201).json(coveredCountry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a covered country by ID
exports.updateCoveredCountryById = async (req, res) => {
  try {
    const coveredCountry = await CoveredCountry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!coveredCountry) return res.status(404).json({ message: 'Covered Country not found' });
    res.status(200).json(coveredCountry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a covered country by ID
exports.deleteCoveredCountryById = async (req, res) => {
  try {
    const coveredCountry = await CoveredCountry.findByIdAndDelete(req.params.id);
    if (!coveredCountry) return res.status(404).json({ message: 'Covered Country not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
