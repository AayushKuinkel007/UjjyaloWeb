// utils/emailService.js
const nodemailer = require('nodemailer');

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify email configuration
const verifyEmailConfig = () => {
  return new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.error('Email configuration error:', error);
        reject(error);
      } else {
        console.log('Email server ready to send messages');
        resolve(success);
      }
    });
  });
};

// Generate notification email HTML (to UjjaloWeb team)
const getNotificationEmailHTML = (contact) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f48c25 0%, #ff9933 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; border-top: none; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #f48c25; display: block; margin-bottom: 5px; }
        .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #ddd; }
        .services-list { list-style: none; padding: 0; }
        .services-list li { background: white; padding: 8px 12px; margin: 4px 0; border-radius: 4px; border-left: 3px solid #f48c25; }
        .button { display: inline-block; background: #f48c25; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
        .ready-badge { display: inline-block; background: #10b981; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 New Contact Form Submission!</h1>
        </div>
        <div class="content">
          ${contact.isReady ? '<div style="text-align: center; margin-bottom: 20px;"><span class="ready-badge">⚡ READY TO START IN 30 DAYS</span></div>' : ''}
          
          <div class="field">
            <span class="label">Name:</span>
            <div class="value">${contact.name}</div>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <div class="value"><a href="mailto:${contact.email}">${contact.email}</a></div>
          </div>
          
          ${contact.company ? `
          <div class="field">
            <span class="label">Company:</span>
            <div class="value">${contact.company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <span class="label">Services Interested In:</span>
            <ul class="services-list">
              ${contact.services.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
          
          <div class="field">
            <span class="label">Budget:</span>
            <div class="value">${contact.budget}</div>
          </div>
          
          <div class="field">
            <span class="label">Timeline:</span>
            <div class="value">${contact.timeline}</div>
          </div>
          
          <div class="field">
            <span class="label">Message:</span>
            <div class="value">${contact.message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="field">
            <span class="label">Submitted At:</span>
            <div class="value">${new Date(contact.createdAt).toLocaleString('en-US', { 
              dateStyle: 'full', 
              timeStyle: 'short',
              timeZone: 'Asia/Kathmandu' 
            })} NPT</div>
          </div>
          
          <div style="text-align: center;">
            <a href="mailto:${contact.email}?subject=Re: Your inquiry to UjjaloWeb" class="button">
              Reply to ${contact.name}
            </a>
          </div>
        </div>
        <div class="footer">
          <p>This is an automated notification from UjjaloWeb contact form.</p>
          <p>Contact ID: ${contact._id}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Generate auto-reply email HTML (to customer)
const getAutoReplyEmailHTML = (contact) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #f48c25 0%, #ff9933 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #ddd; border-top: none; }
        .footer { background: #1a1a1a; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; }
        .button { display: inline-block; background: #f48c25; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 20px 0; }
        .info-box { background: #f9f9f9; padding: 15px; border-left: 4px solid #f48c25; margin: 20px 0; }
        .steps { counter-reset: step; list-style: none; padding: 0; }
        .steps li { counter-increment: step; margin: 15px 0; padding-left: 35px; position: relative; }
        .steps li::before { content: counter(step); position: absolute; left: 0; top: 0; background: #f48c25; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✨ Thank You for Contacting UjjaloWeb!</h1>
        </div>
        <div class="content">
          <p>Hi ${contact.name},</p>
          
          <p>Thank you for reaching out! We've received your inquiry about <strong>${contact.services.join(', ')}</strong> and we're excited to help bring your vision to life.</p>
          
          <div class="info-box">
            <strong>📋 Your Submission Summary:</strong><br>
            <strong>Services:</strong> ${contact.services.join(', ')}<br>
            <strong>Budget:</strong> ${contact.budget}<br>
            <strong>Timeline:</strong> ${contact.timeline}<br>
            ${contact.isReady ? '<strong>Status:</strong> ⚡ Ready to start within 30 days<br>' : ''}
            <strong>Message:</strong> ${contact.message.substring(0, 100)}${contact.message.length > 100 ? '...' : ''}
          </div>
          
          <h3>⚡ What Happens Next?</h3>
          <ol class="steps">
            <li><strong>We'll review your requirements</strong> within 24 hours</li>
            <li><strong>Our team will reach out</strong> via email to discuss your project in detail</li>
            <li><strong>We'll send you a custom proposal</strong> with pricing and timeline</li>
            <li><strong>Once approved</strong>, we'll start bringing your vision to life!</li>
          </ol>
          
          <h3>🎁 Holiday Special Reminder</h3>
          <p>Don't forget - we're currently offering our <strong>"You Set The Price"</strong> promotion! Only 10 spots available, and they're filling fast.</p>
          
          <div style="text-align: center;">
            <a href="https://wa.me/9779745347065?text=Hi%20UjjaloWeb%2C%20I%20just%20submitted%20a%20contact%20form" class="button">
              💬 Chat on WhatsApp
            </a>
          </div>
          
          <p>Need immediate assistance? Feel free to reach out directly:</p>
          <p>
            📞 <strong>Phone:</strong> +977 9745347065<br>
            📧 <strong>Email:</strong> ujjyaloweb@gmail.com<br>
            💼 <strong>Instagram:</strong> @ujjaloweb
          </p>
          
          <p>Looking forward to working with you!</p>
          
          <p>
            Best regards,<br>
            <strong>The UjjaloWeb Team</strong><br>
            <em>Bringing Your Brand Into Light</em>
          </p>
        </div>
        <div class="footer">
          <p><strong>UjjaloWeb</strong></p>
          <p>Kathmandu, Nepal</p>
          <p>ujjyaloweb.com | @ujjaloweb</p>
          <p style="font-size: 12px; margin-top: 15px;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Send notification email to UjjaloWeb team
const sendNotificationEmail = async (contact) => {
  try {
    const info = await transporter.sendMail({
      from: `"UjjaloWeb" <${process.env.GMAIL_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER,
      subject: `🔔 New Contact: ${contact.name} - ${contact.services[0]}`,
      html: getNotificationEmailHTML(contact),
    });

    console.log('Notification email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Notification email error:', error);
    return { success: false, error: error.message };
  }
};

// Send auto-reply email to customer
const sendAutoReplyEmail = async (contact) => {
  try {
    const info = await transporter.sendMail({
      from: `"UjjaloWeb" <${process.env.GMAIL_USER}>`,
      to: contact.email,
      subject: '✨ Thank You for Contacting UjjaloWeb - We\'ll Be In Touch Soon!',
      html: getAutoReplyEmailHTML(contact),
    });

    console.log('Auto-reply email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Auto-reply email error:', error);
    return { success: false, error: error.message };
  }
};

module.exports = {
  verifyEmailConfig,
  sendNotificationEmail,
  sendAutoReplyEmail,
};