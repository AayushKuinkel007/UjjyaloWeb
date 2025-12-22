const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  // Basic Info
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  company: {
    type: String,
    trim: true,
    maxlength: [200, 'Company name cannot exceed 200 characters'],
  },
  
  // Project Details
  services: {
    type: [String],
    required: [true, 'At least one service must be selected'],
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: 'Please select at least one service',
    },
  },
  budget: {
    type: String,
    required: [true, 'Budget is required'],
  },
  timeline: {
    type: String,
    required: [true, 'Timeline is required'],
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters'],
    maxlength: [2000, 'Message cannot exceed 2000 characters'],
  },
  
  // Additional Info
  isReady: {
    type: Boolean,
    default: false,
  },
  
  // Metadata
  status: {
    type: String,
    enum: ['New', 'Contacted', 'Quoted', 'Converted', 'Lost'],
    default: 'New',
  },
  source: {
    type: String,
    default: 'Website',
  },
  ipAddress: String,
  userAgent: String,
  emailSent: {
    type: Boolean,
    default: false,
  },
  emailSentAt: Date,
  notes: String,
}, {
  timestamps: true, 
});

// Indexes for faster queries
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });
contactSchema.index({ status: 1 });

module.exports = mongoose.model('Contact', contactSchema);