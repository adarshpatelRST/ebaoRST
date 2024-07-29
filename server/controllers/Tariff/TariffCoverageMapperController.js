const TariffCoverageMapper = require('../../models/Tariff/TariffCoverageMapper');

// @route   POST /api/tariff-coverage-mappers
// @desc    Create a new tariff coverage mapper
// @access  Public
exports.createTariffCoverageMapper = async (req, res) => {
  const { TariffId, CoverageId, CreatedBy } = req.body;

  try {
    const newMapper = new TariffCoverageMapper({
      TariffId,
      CoverageId,
      CreatedBy
    });

    const mapper = await newMapper.save();
    res.status(201).json(mapper);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/tariff-coverage-mappers
// @desc    Get all tariff coverage mappers
// @access  Public
exports.getAllTariffCoverageMappers = async (req, res) => {
  try {
    const mappers = await TariffCoverageMapper.find().populate('TariffId CoverageId CreatedBy UpdatedBy');
    res.status(200).json(mappers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// @route   GET /api/tariff-coverage-mappers/:id
// @desc    Get a tariff coverage mapper by ID
// @access  Public
exports.getTariffCoverageMapperById = async (req, res) => {
  try {
    const mapper = await TariffCoverageMapper.findById(req.params.id).populate('TariffId CoverageId CreatedBy UpdatedBy');
    if (!mapper) {
      return res.status(404).json({ msg: 'Tariff coverage mapper not found' });
    }
    res.status(200).json(mapper);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Tariff coverage mapper not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   PUT /api/tariff-coverage-mappers/:id
// @desc    Update a tariff coverage mapper
// @access  Public
exports.updateTariffCoverageMapperById = async (req, res) => {
  const { TariffId, CoverageId, UpdatedBy, IsActive } = req.body;

  const updatedFields = {
    TariffId,
    CoverageId,
    UpdatedBy,
    IsActive,
    UpdatedOn: Date.now()
  };

  try {
    let mapper = await TariffCoverageMapper.findById(req.params.id);

    if (!mapper) {
      return res.status(404).json({ msg: 'Tariff coverage mapper not found' });
    }

    mapper = await TariffCoverageMapper.findByIdAndUpdate(
      req.params.id,
      { $set: updatedFields },
      { new: true }
    );

    res.status(200).json(mapper);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Tariff coverage mapper not found' });
    }
    res.status(500).send('Server Error');
  }
};

// @route   DELETE /api/tariff-coverage-mappers/:id
// @desc    Delete a tariff coverage mapper
// @access  Public
exports.deleteTariffCoverageMapperById = async (req, res) => {
  try {
    const mapper = await TariffCoverageMapper.findByIdAndDelete(req.params.id);

    if (!mapper) {
      return res.status(404).json({ msg: 'Tariff coverage mapper not found' });
    }
    
    res.status(200).json({ msg: 'Tariff coverage mapper removed' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Tariff coverage mapper not found' });
    }
    res.status(500).send('Server Error');
  }
};
