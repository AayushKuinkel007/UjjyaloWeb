// server.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const connectDB = require('./config/database');
const { verifyEmailConfig } = require('./utils/emailService');
const contactRoutes = require('./routes/contactRoutes');
const { notFound, errorHandler } = require('./middleware/errorHandler');

const app = express();

// Security
app.use(helmet());

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}


// Connect to MongoDB
connectDB();

// Verify email configuration
verifyEmailConfig().catch(err => {
  console.warn('Email configuration issue:', err.message);
  console.warn('Contact form will save to database but emails may not send');
});


// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'ok', 
    message: 'UjjaloWeb Contact API',
    version: '1.0.0',
    timestamp: new Date().toISOString() 
  });
});

app.use('/api', contactRoutes);


app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Client URL: ${process.env.CLIENT_URL || 'http://localhost:3000'}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM received. Closing server gracefully...');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('\nSIGINT received. Closing server gracefully...');
  await mongoose.connection.close();
  process.exit(0);
});