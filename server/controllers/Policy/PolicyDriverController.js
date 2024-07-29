const PolicyDriver = require('../../models/Policy/policyDriver');

// Get all policy drivers
exports.getAllDrivers = async (req, res) => {
  try {
    const drivers = await PolicyDriver.find().populate('Nationality');
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single policy driver by ID
exports.getDriverById = async (req, res) => {
  try {
    const driver = await PolicyDriver.findById(req.params.id).populate('Nationality');
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new policy driver
exports.createDriver = async (req, res) => {
  const { AdditionalNumber, ArabicName, BirthDate, BuildingNumber, DistrictName, DriverEducation, DriverName, Gender, Lessee, LicenseNo, LicenseType, LicenseYear, Mobile, Nationality, StreetName, Usage, ZipCode } = req.body;

  const newDriver = new PolicyDriver({
    AdditionalNumber,
    ArabicName,
    BirthDate,
    BuildingNumber,
    DistrictName,
    DriverEducation,
    DriverName,
    Gender,
    Lessee,
    LicenseNo,
    LicenseType,
    LicenseYear,
    Mobile,
    Nationality,
    StreetName,
    Usage,
    ZipCode
  });

  try {
    const driver = await newDriver.save();
    res.status(201).json(driver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a policy driver by ID
exports.updateDriverById = async (req, res) => {
  try {
    const driver = await PolicyDriver.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('Nationality');

    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.status(200).json(driver);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a policy driver by ID
exports.deleteDriverById = async (req, res) => {
  try {
    const driver = await PolicyDriver.findByIdAndDelete(req.params.id);
    if (!driver) return res.status(404).json({ message: 'Driver not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
