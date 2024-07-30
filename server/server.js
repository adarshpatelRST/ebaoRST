const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db'); // Import the database configuration
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// User Routes
const userRoutes = require('./routes/User/userRoutes');
const loginRoutes = require('./routes/User/loginRoutes');

app.use('/api/users', userRoutes);
app.use('/api/auth', loginRoutes);

// Tariff Routes
const tariffRoutes = require('./routes/Tariff/tariffRoutes');
const agreementRoutes = require('./routes/Tariff/agreementRoutes');
const agreementCategoryRoutes = require('./routes/Tariff/agreementCategoryRoutes');
const coverageRoutes = require('./routes/Tariff/coverageRoutes');
const tariffCoverageMapperRoutes = require('./routes/Tariff/tariffCoverageMapperRoutes');

app.use('/api/tariffs', tariffRoutes);
app.use('/api/agreements', agreementRoutes);
app.use('/api/agreementCategories', agreementCategoryRoutes);
app.use('/api/coverages', coverageRoutes);
app.use('/api/tariffCoverageMappers', tariffCoverageMapperRoutes);

// Policy Routes
const policyRoutes = require('./routes/Policy/policyRoutes');
const policyHolderRoutes = require('./routes/Policy/policyHolderRoutes');
const policyRiskRoutes = require('./routes/Policy/policyRiskRoutes');
const policyHolderPrimaryAccountRoutes = require('./routes/Policy/policyHolderPrimaryAccountRoutes');
const policyHolderPrimaryAddressRoutes = require('./routes/Policy/policyHolderPrimaryAddressRoutes');
const policyHolderPrimaryContactRoutes = require('./routes/Policy/policyHolderPrimaryContactRoutes');
const policyLineRoutes = require('./routes/Policy/policyLineRoutes');
const policyPlanRoutes = require('./routes/Policy/policyPlanRoutes');
const policyCoverageRoutes = require('./routes/Policy/policyCoverageRoutes');
const coveredCountryRoutes = require('./routes/Policy/coveredCountryRoutes');

app.use('/api/policies', policyRoutes);
app.use('/api/policyHolders', policyHolderRoutes);
app.use('/api/policyRisks', policyRiskRoutes);
app.use('/api/policyHolderPrimaryAccounts', policyHolderPrimaryAccountRoutes);
app.use('/api/policyHolderPrimaryAddresses', policyHolderPrimaryAddressRoutes);
app.use('/api/policyHolderPrimaryContacts', policyHolderPrimaryContactRoutes);
app.use('/api/policyLines', policyLineRoutes);
app.use('/api/policyPlans', policyPlanRoutes);
app.use('/api/policyCoverages', policyCoverageRoutes);
app.use('/api/coveredCountries', coveredCountryRoutes);


// Expose Auto Lease API's
const autoLeaseRoutes = require('./routes/autoLeaseRoutes');
app.use('/api/autoLease', autoLeaseRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
