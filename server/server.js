const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); // Adjust the path as needed

const app = express();
const port = 5000;

app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from React app
}));

app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb://localhost:27017/PACKAGEnDELEVERY'; // Adjust with your database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);  // Exit if MongoDB connection fails
  });

// Use the auth routes
app.use('/api', authRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
