const Contact = require('../models/Contact');
const { sendNotificationEmail, sendAutoReplyEmail } = require('../utils/emailService');

const submitContact = async (req, res) => {
  try {
      const { 
          name, 
          email, 
          company, 
          services, 
          budget, 
          timeline, 
          message, 
          isReady 
        } = req.body;

    // Validate required fields
    if (!name || !email || !services || !budget || !timeline || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
      });
    }

    // Validate services array
    if (!Array.isArray(services) || services.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please select at least one service',
      });
    }

    // Get client info
    const ipAddress = req.headers['x-forwarded-for'] || 
                     req.headers['x-real-ip'] || 
                     req.ip || 
                     'unknown';
    const userAgent = req.headers['user-agent'] || 'unknown';

    // Create contact in database
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company?.trim() || null,
      services,
      budget,
      timeline,
      message: message.trim(),
      isReady: isReady || false,
      ipAddress,
      userAgent,
      status: 'New',
      source: 'Website',
    });

    // Send notification email to ujjyalo web
    sendNotificationEmail(contact).catch(err => 
      console.error('Email notification failed:', err)
    );

    // Send auto-reply to customer 
    sendAutoReplyEmail(contact)
      .then(result => {
        if (result.success) {
          // Update contact with email status
          contact.emailSent = true;
          contact.emailSentAt = new Date();
          contact.save();
        }
      })
      .catch(err => console.error('Auto-reply failed:', err));

    res.status(201).json({
      success: true,
      message: 'Thank you! We\'ll be in touch within 24 hours.',
      contactId: contact._id,
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // Mongoose validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors,
      });
    }

    // Duplicate email error (if unique index exists)
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: 'This email has already submitted a contact form recently',
      });
    }

    // Generic error
    res.status(500).json({
      success: false,
      error: 'Something went wrong. Please try again or contact us directly.',
    });
  }
};


const getAllContacts = async (req, res) => {
  try {
    const { status, limit = 10, page = 1 } = req.query;
    
    const query = status ? { status } : {};
    const skip = (page - 1) * parseInt(limit);

    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .skip(skip)
      .select('-userAgent -ipAddress'); 

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit)),
      },
    });

  } catch (error) {
    console.error('GET contacts error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch contacts',
    });
  }
};

const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found',
      });
    }

    res.json({
      success: true,
      data: contact,
    });

  } catch (error) {
    console.error('GET contact by ID error:', error);
    
    // Invalid ObjectId format
    if (error.kind === 'ObjectId') {
      return res.status(404).json({
        success: false,
        error: 'Contact not found',
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to fetch contact',
    });
  }
};

const updateContactStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;

    // Validate status
    const validStatuses = ['New', 'Contacted', 'Quoted', 'Converted', 'Lost'];
    if (status && !validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid status value',
      });
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found',
      });
    }

    // Update fields
    if (status) contact.status = status;
    if (notes !== undefined) contact.notes = notes;

    await contact.save();

    res.json({
      success: true,
      message: 'Contact updated successfully',
      data: contact,
    });

  } catch (error) {
    console.error('Update contact error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update contact',
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found',
      });
    }

    await contact.deleteOne();

    res.json({
      success: true,
      message: 'Contact deleted successfully',
    });

  } catch (error) {
    console.error('Delete contact error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete contact',
    });
  }
};


const getContactStats = async (req, res) => {
  try {
    const total = await Contact.countDocuments();
    const newCount = await Contact.countDocuments({ status: 'New' });
    const contactedCount = await Contact.countDocuments({ status: 'Contacted' });
    const quotedCount = await Contact.countDocuments({ status: 'Quoted' });
    const convertedCount = await Contact.countDocuments({ status: 'Converted' });
    const lostCount = await Contact.countDocuments({ status: 'Lost' });

    // Get recent contacts (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentCount = await Contact.countDocuments({
      createdAt: { $gte: sevenDaysAgo }
    });

    res.json({
      success: true,
      data: {
        total,
        byStatus: {
          new: newCount,
          contacted: contactedCount,
          quoted: quotedCount,
          converted: convertedCount,
          lost: lostCount,
        },
        recent: {
          last7Days: recentCount,
        },
      },
    });

  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch statistics',
    });
  }
};

module.exports = {
  submitContact,
  getAllContacts,
  getContactById,
  updateContactStatus,
  deleteContact,
  getContactStats,
};