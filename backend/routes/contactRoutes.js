const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
} = require('../controllers/contactController');

//Rate limit - max 5 submissions per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, 
  max: 5, 
  message: { 
    success: false, 
    error: 'Too many contact form submissions. Please try again later.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/contact', contactLimiter, submitContact);

// Admin routes, authentication is yet to be added 
router.get('/contacts', getAllContacts);
router.get('/contacts/stats', getContactStats);
router.get('/contacts/:id', getContactById);
router.put('/contacts/:id/status', updateContactStatus);
router.delete('/contacts/:id', deleteContact);

module.exports = router;