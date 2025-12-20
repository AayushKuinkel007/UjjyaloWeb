import React from "react";

const Privacy = () => {
  return (
    <main className="bg-[#0b0d1a] text-gray-300 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Privacy Policy
          </h1>
          <div className="text-sm text-gray-400 space-y-1">
            <p className="text-lg font-semibold text-white">UjjyaloWeb</p>
            <p>
              <span className="font-medium">Effective Date:</span> December 21,
              2024
            </p>
            <p>
              <span className="font-medium">Last Updated:</span> December 21,
              2024
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Section 1: Introduction */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              1. INTRODUCTION
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Welcome to UjjyaloWeb (&quot;we,&quot; &quot;us,&quot;
                &quot;our&quot;). We are committed to protecting your privacy
                and personal information. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website, use our services, or communicate with us.
              </p>
              <p className="font-semibold text-white bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded">
                By engaging our services, you agree to the collection and use of
                information in accordance with this policy.
              </p>
            </div>
          </section>

          {/* Section 2: Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              2. INFORMATION WE COLLECT
            </h2>

            <div className="space-y-8">
              {/* 2.1 */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  2.1 Information You Provide Directly
                </h3>
                <p className="mb-4">
                  When you contact us or engage our services, we may collect:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                      Personal Identification Information:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Business/company name (if applicable)</li>
                      <li>Mailing address</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                      Project Information:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Project requirements and specifications</li>
                      <li>Website content (text, images, videos, documents)</li>
                      <li>Design preferences</li>
                      <li>Business information relevant to the project</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                      Payment Information:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Billing name and address</li>
                      <li>
                        Payment method details (handled by third-party
                        processors)
                      </li>
                      <li>Transaction records</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                      Communication Data:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>
                        Messages sent via email, social media, WhatsApp, or our
                        contact forms
                      </li>
                      <li>Feedback, reviews, and testimonials</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2.2 */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  2.2 Information Collected Automatically
                </h3>
                <p className="mb-4">
                  When you visit our website, we may automatically collect:
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                      Technical Information:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Device information</li>
                      <li>Pages visited and time spent</li>
                      <li>Referring website</li>
                      <li>Date and time of visit</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                      Cookies and Tracking Technologies:
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>
                        We may use cookies, web beacons, and similar
                        technologies to enhance user experience and analyze
                        website traffic
                      </li>
                      <li>
                        You can control cookie preferences through your browser
                        settings
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2.3 */}
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  2.3 Information from Third Parties
                </h3>
                <p className="mb-3">
                  We may receive information about you from:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Payment processors (eSewa, Khalti, Fonepay, PayPal, Wise,
                    bank transfers)
                  </li>
                  <li>
                    Social media platforms (if you contact us via Instagram,
                    Facebook, etc.)
                  </li>
                  <li>
                    Hosting providers (Vercel, Netlify, Render, Heroku) when
                    setting up your project
                  </li>
                  <li>Third-party services you authorize us to access</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              3. HOW WE USE YOUR INFORMATION
            </h2>
            <p className="mb-6">
              We use collected information for the following purposes:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  3.1 Service Delivery
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    To provide, maintain, and improve our web development
                    services
                  </li>
                  <li>To communicate with you about your project</li>
                  <li>To deliver websites and applications as contracted</li>
                  <li>To provide technical support and maintenance</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  3.2 Business Operations
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>To process payments and manage invoices</li>
                  <li>
                    To send project updates, notifications, and confirmations
                  </li>
                  <li>To respond to your inquiries and requests</li>
                  <li>To maintain business records</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  3.3 Legal and Security
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>To comply with legal obligations under Nepalese law</li>
                  <li>To enforce our Terms of Service</li>
                  <li>
                    To protect against fraud, abuse, or illegal activities
                  </li>
                  <li>To resolve disputes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  3.4 Marketing (With Consent)
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    To send newsletters, updates, or promotional materials (you
                    may opt out anytime)
                  </li>
                  <li>
                    To showcase completed projects in our portfolio (with your
                    explicit permission)
                  </li>
                  <li>To request testimonials or reviews</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  3.5 Analytics and Improvement
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>To analyze website usage and improve user experience</li>
                  <li>To understand client needs and preferences</li>
                  <li>To develop new services and features</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4: How We Share Your Information */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              4. HOW WE SHARE YOUR INFORMATION
            </h2>
            <p className="mb-6 font-semibold text-white">
              We do NOT sell, rent, or trade your personal information. We may
              share your information only in the following circumstances:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  4.1 Service Providers
                </h3>
                <p className="mb-3">
                  We may share information with trusted third parties who assist
                  us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Payment processors:
                    </span>{" "}
                    eSewa, Khalti, Fonepay, PayPal, Wise, banks
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Hosting providers:
                    </span>{" "}
                    Vercel, Netlify, Render, Heroku (when setting up your
                    website)
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Email services:
                    </span>{" "}
                    Gmail, Resend, or other email providers
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Analytics tools:
                    </span>{" "}
                    Google Analytics (if implemented)
                  </li>
                </ul>
                <p className="mt-3 text-gray-300">
                  These providers are contractually obligated to protect your
                  information and use it only for specified purposes.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  4.2 Legal Requirements
                </h3>
                <p className="mb-3">
                  We may disclose information if required by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Nepalese law or legal process</li>
                  <li>Court orders, subpoenas, or government requests</li>
                  <li>
                    Investigation of fraud, illegal activities, or Terms
                    violations
                  </li>
                  <li>Protection of our rights, property, or safety</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  4.3 Business Transfers
                </h3>
                <p className="text-gray-300">
                  If UjjyaloWeb is involved in a merger, acquisition, or sale of
                  assets, your information may be transferred. We will notify
                  you of any such change.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  4.4 With Your Consent
                </h3>
                <p className="text-gray-300">
                  We may share information for purposes not listed here if we
                  obtain your explicit consent.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Data Retention */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              5. DATA RETENTION
            </h2>
            <p className="mb-6">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Fulfill the purposes described in this Privacy Policy</li>
              <li>
                Comply with legal obligations (typically 7 years for financial
                records under Nepalese law)
              </li>
              <li>Resolve disputes and enforce agreements</li>
            </ul>

            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Project-related data:
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Active projects:
                    </span>{" "}
                    Duration of project + 30 days (maintenance period)
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Completed projects:
                    </span>{" "}
                    Up to 2 years for reference and support
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Payment records:
                    </span>{" "}
                    7 years (legal requirement)
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <p>
                <span className="font-semibold text-white">
                  After retention period:
                </span>{" "}
                We securely delete or anonymize your data unless legally
                required to retain it longer.
              </p>
              <p>
                <span className="font-semibold text-white">Your right:</span>{" "}
                You may request deletion of your data at any time (subject to
                legal retention requirements).
              </p>
            </div>
          </section>

          {/* Section 6: Data Security */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              6. DATA SECURITY
            </h2>
            <p className="mb-6">
              We implement reasonable security measures to protect your
              information:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Technical Safeguards:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Secure servers and encrypted connections (HTTPS)</li>
                  <li>Password-protected accounts and files</li>
                  <li>Regular security updates and patches</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Administrative Safeguards:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Limited access to personal data (only authorized personnel)
                  </li>
                  <li>Confidentiality agreements with team members</li>
                  <li>Regular security training</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  Physical Safeguards:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Secure storage of physical documents (if any)</li>
                  <li>Restricted access to work devices</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
              <p className="font-semibold text-yellow-200">
                However, please note:{" "}
                <span className="font-normal text-gray-300">
                  No method of transmission over the internet or electronic
                  storage is 100% secure. While we strive to protect your
                  information, we cannot guarantee absolute security.
                </span>
              </p>
            </div>
          </section>

          {/* Section 7: Your Rights and Choices */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              7. YOUR RIGHTS AND CHOICES
            </h2>
            <p className="mb-6">
              You have the following rights regarding your personal information:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  7.1 Access and Correction
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to access:
                    </span>{" "}
                    Request a copy of your personal data we hold
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to correction:
                    </span>{" "}
                    Update or correct inaccurate information
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      How to exercise:
                    </span>{" "}
                    Contact us at ujjyaloweb@gmail.com
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  7.2 Deletion and Restriction
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to deletion:
                    </span>{" "}
                    Request deletion of your data (subject to legal
                    requirements)
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to restriction:
                    </span>{" "}
                    Limit how we use your data
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      How to exercise:
                    </span>{" "}
                    Email ujjyaloweb@gmail.com with your request
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  7.3 Data Portability
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to portability:
                    </span>{" "}
                    Receive your data in a structured, commonly used format
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      How to exercise:
                    </span>{" "}
                    Contact ujjyaloweb@gmail.com
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  7.4 Objection and Withdrawal
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to object:
                    </span>{" "}
                    Object to processing of your data for marketing purposes
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to withdraw consent:
                    </span>{" "}
                    Withdraw consent for data processing anytime
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      How to exercise:
                    </span>{" "}
                    Unsubscribe from emails or contact ujjyaloweb@gmail.com
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  7.5 Complaints
                </h3>
                <p className="mb-3">
                  If you believe your privacy rights have been violated, you
                  may:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Contact us directly at ujjyaloweb@gmail.com</li>
                  <li>File a complaint with relevant Nepalese authorities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Cookies and Tracking Technologies */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              8. COOKIES AND TRACKING TECHNOLOGIES
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  8.1 What Are Cookies?
                </h3>
                <p className="text-gray-300">
                  Cookies are small text files stored on your device when you
                  visit our website. They help us understand how you use our
                  site and improve your experience.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  8.2 Types of Cookies We Use
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Essential Cookies:
                    </span>{" "}
                    Required for website functionality (e.g., session
                    management)
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Analytics Cookies:
                    </span>{" "}
                    Help us understand website traffic and user behavior (Google
                    Analytics, if implemented)
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Preference Cookies:
                    </span>{" "}
                    Remember your settings and preferences
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  8.3 Managing Cookies
                </h3>
                <p className="mb-3">
                  You can control cookies through your browser settings:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Accept all cookies:
                    </span>{" "}
                    For full website functionality
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Reject cookies:
                    </span>{" "}
                    May limit website features
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Delete cookies:
                    </span>{" "}
                    Clear stored cookies anytime
                  </li>
                </ul>
                <p className="mt-3 text-gray-300">
                  <span className="font-semibold text-white">
                    Third-party cookies:
                  </span>{" "}
                  Some cookies may be set by third-party services (e.g., Google
                  Analytics). We do not control these cookies.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: International Data Transfers */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              9. INTERNATIONAL DATA TRANSFERS
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  9.1 For International Clients
                </h3>
                <p className="mb-3">
                  If you are located outside Nepal, please note:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>
                    Your data may be transferred to and processed in Nepal
                  </li>
                  <li>
                    We ensure adequate safeguards for international data
                    transfers
                  </li>
                  <li>
                    We comply with applicable data protection laws (including
                    GDPR for EU clients)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  9.2 GDPR Compliance (For EU Clients)
                </h3>
                <p className="mb-3">
                  If you are in the European Union, you have additional rights
                  under GDPR:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to be forgotten:
                    </span>{" "}
                    Request complete data deletion
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to data portability:
                    </span>{" "}
                    Receive data in machine-readable format
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to object:
                    </span>{" "}
                    Object to data processing
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to restrict processing:
                    </span>{" "}
                    Limit how we use your data
                  </li>
                  <li>
                    <span className="font-semibold text-gray-200">
                      Right to lodge a complaint:
                    </span>{" "}
                    File complaint with your local data protection authority
                  </li>
                </ul>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <p className="font-semibold text-white mb-2">
                    Legal basis for processing:
                  </p>
                  <p className="text-gray-300 mb-2">
                    We process your data based on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>
                      <span className="font-semibold text-gray-200">
                        Contract performance:
                      </span>{" "}
                      To deliver services you requested
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Legitimate interests:
                      </span>{" "}
                      To improve our services and prevent fraud
                    </li>
                    <li>
                      <span className="font-semibold text-gray-200">
                        Consent:
                      </span>{" "}
                      For marketing communications (opt-in required)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Children's Privacy */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              10. CHILDREN&apos;S PRIVACY
            </h2>
            <p className="mb-4">
              Our services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal information from
              children.
            </p>

            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">
                  If you are under 18:
                </span>{" "}
                <span className="text-gray-300">
                  Do not use our services or provide any personal information.
                </span>
              </p>
              <p>
                <span className="font-semibold text-white">
                  If we discover:
                </span>{" "}
                <span className="text-gray-300">
                  We have collected information from a child under 18, we will
                  delete it immediately.
                </span>
              </p>
              <p>
                <span className="font-semibold text-white">
                  Parents/Guardians:
                </span>{" "}
                <span className="text-gray-300">
                  If you believe your child has provided us information, contact
                  ujjyaloweb@gmail.com immediately.
                </span>
              </p>
            </div>
          </section>

          {/* Section 11: Third-Party Links and Services */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              11. THIRD-PARTY LINKS AND SERVICES
            </h2>
            <p className="mb-4">
              Our website or services may contain links to third-party websites
              or integrate third-party services (e.g., payment processors,
              hosting platforms, social media).
            </p>

            <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded mb-4">
              <p className="font-semibold text-white mb-2">
                We are NOT responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Privacy practices of third-party websites</li>
                <li>Content or services provided by third parties</li>
                <li>Data collected by third-party services</li>
              </ul>
            </div>

            <p className="text-gray-300">
              <span className="font-semibold text-white">We recommend:</span>{" "}
              Review the privacy policies of any third-party services you use.
            </p>
          </section>

          {/* Section 12: Changes to This Privacy Policy */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              12. CHANGES TO THIS PRIVACY POLICY
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time to reflect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>Changes in our practices</li>
              <li>Legal or regulatory requirements</li>
              <li>New features or services</li>
            </ul>

            <div className="space-y-3">
              <p>
                <span className="font-semibold text-white">
                  When we update:
                </span>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                <li>We will post the new policy on our website</li>
                <li>
                  We will update the &quot;Last Updated&quot; date at the top
                </li>
                <li>For material changes, we may notify you via email</li>
              </ul>

              <p className="text-gray-300">
                <span className="font-semibold text-white">
                  Your continued use
                </span>{" "}
                of our services after changes constitutes acceptance of the
                updated policy.
              </p>
            </div>
          </section>

          {/* Section 13: Contact Us */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              13. CONTACT US
            </h2>
            <p className="mb-6">
              If you have questions, concerns, or requests regarding this
              Privacy Policy or your personal data:
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4">UjjyaloWeb</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="font-semibold text-white">Email:</span>{" "}
                  <a
                    href="mailto:ujjyaloweb@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    ujjyaloweb@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Phone:</span>{" "}
                  <a
                    href="tel:+9779745347065"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    +977 9745347065
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  Kathmandu, Nepal
                </p>
                <p>
                  <span className="font-semibold text-white">
                    Social Media:
                  </span>{" "}
                  @Ujjyaloweb (Instagram, Facebook)
                </p>
              </div>
            </div>

            <p className="mt-6 text-gray-300">
              <span className="font-semibold text-white">Response Time:</span>{" "}
              We will respond to privacy requests within 30 days.
            </p>
          </section>

          {/* Section 14: Consent */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">14. CONSENT</h2>
            <p className="mb-4">By using our services, you acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
              <li>You have read and understood this Privacy Policy</li>
              <li>
                You consent to the collection, use, and disclosure of your
                information as described
              </li>
              <li>
                You are at least 18 years of age or have parental/guardian
                consent
              </li>
            </ul>

            <div className="bg-gray-800/50 border-l-4 border-red-500 p-4 rounded">
              <p className="font-semibold text-white">
                If you do NOT agree{" "}
                <span className="font-normal text-gray-300">
                  with this Privacy Policy, please do not use our services.
                </span>
              </p>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-12 border-t border-gray-700">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Last Updated:</span> December
                21, 2024
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Effective Date:</span> December
                21, 2024
              </p>
              <p className="text-sm text-gray-500 pt-4">
                © 2024 UjjyaloWeb. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;
