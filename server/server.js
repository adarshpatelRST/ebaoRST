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

// Routes
const userRoutes = require('./routes/userRoutes');
const loginRoutes = require('./routes/loginRoutes');
const tariffRoutes = require('./routes/tariffRoutes');
const agreementRoutes = require('./routes/agreementRoutes');
const agreementCategoryRoutes = require('./routes/agreementCategoryRoutes');
const coverageRoutes = require('./routes/coverageRoutes');
const tariffCoverageMapperRoutes = require('./routes/tariffCoverageMapperRoutes');


app.use('/api/users', userRoutes);
app.use('/api/auth', loginRoutes);
app.use('/api/tariffs', tariffRoutes);
app.use('/api/agreements', agreementRoutes);
app.use('/api/agreementCategories', agreementCategoryRoutes);
app.use('/api/coverages', coverageRoutes);
app.use('/api/tariffCoverageMappers', tariffCoverageMapperRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
