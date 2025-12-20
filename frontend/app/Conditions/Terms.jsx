"use client";

import React from "react";

const TermsOfService = () => {
  return (
    <main className="bg-[#0b0d1a] text-gray-300 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terms of Service
          </h1>
          <div className="text-sm text-gray-400 space-y-1">
            <p className="text-lg font-semibold text-white">UjjaloWeb</p>
            <p>
              <span className="font-medium">Effective Date:</span> December 21, 2024
            </p>
            <p>
              <span className="font-medium">Last Updated:</span> December 21, 2024
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {/* Section 1: Agreement to Terms */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              1. AGREEMENT TO TERMS
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Welcome to UjjaloWeb. These Terms of Service (&quot;Terms&quot;) govern 
                your use of our services and constitute a legally binding agreement between 
                you (&quot;Client,&quot; &quot;you,&quot; &quot;your&quot;) and UjjaloWeb 
                (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;).
              </p>
              
              <div className="bg-gray-800/50 border-l-4 border-blue-500 p-4 rounded">
                <p className="font-semibold text-white mb-3">By engaging our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Be bound by these Terms</li>
                  <li>Comply with all applicable laws</li>
                  <li>Be at least 18 years of age or have parental/guardian consent</li>
                </ul>
              </div>

              <p className="font-semibold text-red-400 bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                If you do NOT agree with these Terms, do not use our services.
              </p>
            </div>
          </section>

          {/* Section 2: Services Provided */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              2. SERVICES PROVIDED
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  2.1 What We Offer
                </h3>
                <p className="mb-3">
                  UjjaloWeb provides web development services, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Custom website design and development</li>
                  <li>E-commerce website development</li>
                  <li>Web application development</li>
                  <li>Mobile-responsive web design</li>
                  <li>Website setup and configuration assistance</li>
                  <li>Website maintenance and support (as contracted)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  2.2 What We DO NOT Provide
                </h3>
                <p className="mb-3">
                  Unless explicitly agreed in writing, we do NOT provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Web hosting services (we assist with third-party setup)</li>
                  <li>Domain registration services (we assist with third-party registration)</li>
                  <li>Content creation or copywriting</li>
                  <li>Graphic design (beyond website design)</li>
                  <li>SEO services (unless explicitly contracted)</li>
                  <li>Legal or business consulting</li>
                  <li>Guarantees of specific business results or outcomes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  2.3 Third-Party Services
                </h3>
                <p className="mb-3">
                  We may assist you in setting up accounts with third-party providers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li><span className="font-semibold text-gray-200">Hosting:</span> Vercel, Netlify, Render, Heroku, or others</li>
                  <li><span className="font-semibold text-gray-200">Payments:</span> eSewa, Khalti, Fonepay, PayPal, Wise, Stripe, or others</li>
                  <li><span className="font-semibold text-gray-200">Email:</span> Gmail, Resend, or other email services</li>
                  <li><span className="font-semibold text-gray-200">Other tools:</span> As required by your project</li>
                </ul>

                <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">You are responsible for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Creating accounts with these services</li>
                    <li>Paying fees charged by third-party providers</li>
                    <li>Complying with third-party terms of service</li>
                    <li>Managing and maintaining third-party accounts</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Project Process */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              3. PROJECT PROCESS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  3.1 Discovery and Proposal
                </h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                  <li>You contact us with your project requirements</li>
                  <li>We discuss your needs, budget, and timeline</li>
                  <li>
                    We provide a project proposal with:
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Scope of work</li>
                      <li>Timeline and milestones</li>
                      <li>Pricing and payment terms</li>
                      <li>Deliverables</li>
                    </ul>
                  </li>
                  <li>You review and approve the proposal</li>
                </ol>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  3.2 Contract Execution
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Upon proposal acceptance, we send a formal contract</li>
                  <li>Contract includes specific project details, terms, and payment schedule</li>
                  <li>Project begins only after contract signing and initial payment</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  3.3 Project Stages
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      Stage 1: Planning & Discovery (0-25%)
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Requirements gathering</li>
                      <li>Information architecture</li>
                      <li>Technical planning</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">
                      Stage 2: Design (25-50%)
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Visual design mockups</li>
                      <li>User interface design</li>
                      <li>Client review and feedback</li>
                      <li>Design revisions (as agreed)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">
                      Stage 3: Development (50-75%)
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Front-end development</li>
                      <li>Back-end development (if applicable)</li>
                      <li>Feature implementation</li>
                      <li>Integration of third-party services</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                      Stage 4: Testing & Launch (75-100%)
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Quality assurance testing</li>
                      <li>Bug fixes and refinements</li>
                      <li>Client review and approval</li>
                      <li>Final deployment</li>
                      <li>Handover and training (if included)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  3.4 Client Responsibilities
                </h3>
                <p className="mb-3">You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>Provide accurate project information and requirements</li>
                  <li>Provide all necessary content (text, images, videos, etc.)</li>
                  <li>Respond to feedback requests within <span className="font-semibold text-white">5 business days</span></li>
                  <li>Review deliverables within specified timeframes</li>
                  <li>Make timely payments as agreed</li>
                  <li>Secure necessary licenses for content you provide</li>
                  <li>Designate a primary point of contact for project communications</li>
                </ul>

                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <p className="font-semibold text-white mb-2">Client Delays:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>If you delay responses beyond 5 business days, project timeline extends accordingly</li>
                    <li>Project may be paused after 14 days of no response</li>
                    <li>We reserve the right to terminate after 30 days of no communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Pricing and Payment */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              4. PRICING AND PAYMENT
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  4.1 Pricing Structure
                </h3>
                <p className="mb-3">
                  Pricing is determined on a per-project basis and specified in your contract. 
                  Factors include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Project scope and complexity</li>
                  <li>Timeline requirements</li>
                  <li>Features and functionality</li>
                  <li>Number of pages/screens</li>
                  <li>Third-party integrations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  4.2 Currency
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><span className="font-semibold text-gray-200">International Clients:</span> Prices quoted in USD</li>
                  <li><span className="font-semibold text-gray-200">Nepal Clients:</span> Prices quoted in NPR (negotiable based on discussion)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  4.3 Payment Terms
                </h3>
                <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-6 mb-4">
                  <p className="font-semibold text-white mb-4">Standard payment schedule:</p>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-blue-300 mb-2">30% Deposit:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-300">
                        <li>Due within <span className="font-semibold text-white">3 business days</span> of contract signing</li>
                        <li>Project does NOT start until deposit received</li>
                        <li>Deposit is non-refundable once work begins</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-300 mb-2">70% Final Payment:</p>
                      <ul className="list-disc pl-6 space-y-1 text-gray-300">
                        <li>Due within <span className="font-semibold text-white">7 business days</span> of project completion notice</li>
                        <li>Final files and access transferred upon full payment</li>
                        <li>Late payments may incur access restrictions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300">
                  <span className="font-semibold text-white">Payment can be adjusted based on project size:</span>
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-2">
                  <li>Larger projects may have milestone-based payments (e.g., 30% / 40% / 30%)</li>
                  <li>Specific payment schedule will be detailed in your contract</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  4.4 Payment Methods
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Nepal Clients:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>Bank Transfer (NPR)</li>
                      <li>eSewa</li>
                      <li>Khalti</li>
                      <li>Fonepay</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                    <h4 className="text-lg font-semibold text-blue-400 mb-3">International Clients:</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>Bank Transfer (USD) - <span className="font-semibold text-white">Preferred</span></li>
                      <li>PayPal (USD) - Client pays processing fees</li>
                      <li>Wise (USD) - Client pays processing fees</li>
                      <li>Cryptocurrency (if mutually agreed) - Client pays fees</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 text-yellow-300 bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                  <span className="font-semibold">Important:</span>{" "}
                  <span className="text-gray-300">
                    Payment processor fees (if applicable) are added to your invoice and paid by you.
                  </span>
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  4.5 Late Payments
                </h3>
                <p className="mb-3">If payment is not received by the due date:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><span className="font-semibold text-gray-200">3 days overdue:</span> Project work paused, gentle reminder sent</li>
                  <li><span className="font-semibold text-gray-200">7 days overdue:</span> Access to staging/development site revoked</li>
                  <li><span className="font-semibold text-gray-200">14 days overdue:</span> We reserve the right to terminate the contract and retain all work completed</li>
                </ul>
                <p className="mt-3 text-gray-300">
                  <span className="font-semibold text-white">No late fees</span> are charged 
                  at this time (subject to change for future projects).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  4.6 Taxes
                </h3>
                <p className="mb-3">
                  Prices quoted do NOT include any applicable taxes, levies, or duties.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>If we become registered for VAT/taxes in the future, applicable taxes will be added</li>
                  <li>You are responsible for any taxes in your jurisdiction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5: Timelines and Deadlines */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              5. TIMELINES AND DEADLINES
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  5.1 Estimated Timeline
                </h3>
                <p className="mb-3">
                  We provide estimated project timelines based on:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>Project scope and complexity</li>
                  <li>Your responsiveness and content provision</li>
                  <li>Third-party dependencies</li>
                </ul>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                  <p className="font-semibold text-white mb-3">Typical timelines:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Small websites: 2-3 weeks</li>
                    <li>Medium websites: 3-4 weeks</li>
                    <li>E-commerce sites: 4-6 weeks</li>
                    <li>Complex applications: 6+ weeks</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-400">
                    <span className="font-semibold">Note:</span> These are estimates. 
                    Actual timeline specified in your contract.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  5.2 Our Commitment
                </h3>
                <p className="text-gray-300">
                  If we miss the agreed deadline:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mt-2">
                  <li>We incur a <span className="font-semibold text-white">10% penalty per 3-day delay</span> (deducted from final payment)</li>
                  <li>Maximum penalty: 30% of total project cost</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  5.3 Timeline Extensions
                </h3>
                <p className="mb-3">
                  Deadlines may be extended without penalty if delays caused by:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><span className="font-semibold text-gray-200">Client delays:</span> Late feedback, content provision, decision-making (&gt;2 business days)</li>
                  <li><span className="font-semibold text-gray-200">Scope changes:</span> Additional features or significant changes requested</li>
                  <li><span className="font-semibold text-gray-200">Third-party issues:</span> Hosting downtime, service outages, API changes</li>
                  <li><span className="font-semibold text-gray-200">Force majeure:</span> Natural disasters, pandemics, war, government actions</li>
                  <li><span className="font-semibold text-gray-200">Mutual agreement:</span> Both parties agree to extension</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  5.4 Rush Projects
                </h3>
                <p className="text-gray-300">
                  Expedited timelines may be available for additional fees (typically 25-50% surcharge).
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Revisions and Changes */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              6. REVISIONS AND CHANGES
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  6.1 Included Revisions
                </h3>
                <p className="mb-3">
                  Each project includes a specified number of revision rounds (detailed in contract):
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><span className="font-semibold text-gray-200">Design phase:</span> Typically 2-3 revision rounds</li>
                  <li><span className="font-semibold text-gray-200">Development phase:</span> Typically 1-2 rounds of minor adjustments</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  6.2 Scope Changes
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-green-400 mb-2">
                      Minor changes (≤10% additional effort):
                    </p>
                    <p className="text-gray-300">Included at no extra cost</p>
                  </div>

                  <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-semibold text-yellow-200 mb-2">
                      Major changes (&gt;10% additional effort):
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Project paused for re-scoping</li>
                      <li>We provide revised quote and timeline</li>
                      <li>Additional payment required before resuming work</li>
                      <li>Timeline extended accordingly</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Examples of major changes:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>Adding e-commerce to a static site</li>
                      <li>Changing from 5 pages to 15 pages</li>
                      <li>Complete design overhaul after approval</li>
                      <li>Adding complex features not in original scope</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  6.3 Post-Launch Changes
                </h3>
                <p className="mb-3">After project completion and final payment:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Minor tweaks during 30-day maintenance period: Free (bug fixes, broken links, etc.)</li>
                  <li>Content updates, new features, design changes: Billed hourly or per request</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Cancellation and Refunds */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              7. CANCELLATION AND REFUNDS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  7.1 Cancellation by Client
                </h3>
                <p className="mb-4">
                  You may cancel the project at any time. Fees retained based on project stage:
                </p>

                <div className="grid gap-4">
                  <div className="bg-gray-800/30 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-semibold text-blue-400 mb-2">0-25% Complete (Planning Phase):</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>We retain 30% of total project cost</li>
                      <li>Refund 70% of any payments made</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-semibold text-green-400 mb-2">25-50% Complete (Design Phase):</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>We retain 50% of total project cost</li>
                      <li>Refund 50% of any payments made</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border-l-4 border-yellow-500 p-4 rounded">
                    <p className="font-semibold text-yellow-400 mb-2">50-75% Complete (Development Phase):</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>We retain 70% of total project cost</li>
                      <li>Refund 30% of any payments made</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-semibold text-red-400 mb-2">75-100% Complete (Final Phase):</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>We retain 100% of total project cost</li>
                      <li>No refund</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 text-gray-300">
                  <span className="font-semibold text-white">Refunds processed within 14 business days</span>{" "}
                  to original payment method.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  7.2 Cancellation by UjjaloWeb
                </h3>
                <p className="mb-3">We may cancel the project and refund your payment if:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>You fail to pay within 14 days of due date</li>
                  <li>You provide illegal, fraudulent, or inappropriate content</li>
                  <li>You are abusive or harassing to our team</li>
                  <li>Project becomes illegal or violates our values</li>
                  <li>Force majeure makes completion impossible</li>
                </ul>

                <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                  <p className="font-semibold text-white mb-2">In such cases:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Full refund of payments received</li>
                    <li>We retain any work completed for our portfolio (with anonymization)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  7.3 No Refunds After Delivery
                </h3>
                <p className="mb-3">
                  Once the project is completed, delivered, and accepted, all sales are final.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>30-day maintenance period covers bug fixes, NOT refunds</li>
                  <li>Dissatisfaction with project scope you approved is NOT grounds for refund</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Intellectual Property Rights */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              8. INTELLECTUAL PROPERTY RIGHTS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  8.1 Your Content
                </h3>
                <p className="mb-3">
                  You retain all rights to content you provide:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>Text, images, videos, logos, brand assets</li>
                  <li>Business information and data</li>
                  <li>Any materials you own or license</li>
                </ul>

                <div className="bg-gray-800/50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="font-semibold text-white mb-2">You represent and warrant that:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>You own or have rights to all provided content</li>
                    <li>Your content does not infringe third-party rights</li>
                    <li>You indemnify us against any claims arising from your content</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  8.2 Our Work Product
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-red-400 mb-2">Before Full Payment:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>We retain all rights to designs, code, and work product</li>
                      <li>You receive limited license to review work-in-progress</li>
                      <li>You may not use, copy, or distribute unfinished work</li>
                    </ul>
                  </div>

                  <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded">
                    <p className="font-semibold text-green-400 mb-2">After Full Payment (100%):</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-300">
                      <li>You own the final website, design, and custom code we created</li>
                      <li>We transfer all rights, title, and interest to you</li>
                      <li>You may modify, distribute, or commercialize the website</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  8.3 Open-Source and Third-Party Components
                </h3>
                <p className="mb-3">
                  The website may include open-source libraries and frameworks:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>React, Next.js, Tailwind CSS, Framer Motion, Spline, etc.</li>
                  <li>These components remain under their original licenses (MIT, GPL, etc.)</li>
                  <li>You receive rights to OUR custom code, not to open-source components</li>
                </ul>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 border border-green-700/50 rounded-lg p-4">
                    <p className="font-semibold text-green-400 mb-2">You may:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Use these components as part of your website</li>
                      <li>Modify and extend the functionality</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border border-red-700/50 rounded-lg p-4">
                    <p className="font-semibold text-red-400 mb-2">You may NOT:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Remove or violate open-source licenses</li>
                      <li>Claim ownership of open-source components</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  8.4 Our Retained Rights
                </h3>
                <p className="mb-3">We retain rights to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>Our development methodologies and processes</li>
                  <li>Reusable code components and templates we created before your project</li>
                  <li>General knowledge and expertise gained</li>
                </ul>

                <p className="font-semibold text-white mb-2">We may:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Reuse design patterns, code structures, and methodologies in future projects</li>
                  <li>Create similar websites for other clients (not exact copies)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  8.5 Portfolio and Marketing
                </h3>
                <p className="mb-3 font-semibold text-white">
                  Default: We request permission to showcase your project in our portfolio.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 border border-red-700/50 rounded-lg p-4">
                    <p className="font-semibold text-red-400 mb-2">We will NOT:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Use your project without explicit written permission</li>
                      <li>Share confidential business information</li>
                      <li>Misrepresent our involvement in your project</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border border-green-700/50 rounded-lg p-4">
                    <p className="font-semibold text-green-400 mb-2">You may:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Grant or deny portfolio rights at any time</li>
                      <li>Request anonymization (show design but not brand)</li>
                      <li>Revoke permission with 30 days&apos; notice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Warranties and Disclaimers */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              9. WARRANTIES AND DISCLAIMERS
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  9.1 Our Warranties
                </h3>
                <p className="mb-3">We warrant that:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Services will be performed professionally and competently</li>
                  <li>Website will function as specified in approved scope</li>
                  <li>We have rights to deliver work to you</li>
                  <li>We will make reasonable efforts to meet deadlines</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  9.2 Maintenance Period
                </h3>
                <p className="mb-3">
                  For <span className="font-semibold text-white">30 days after project delivery</span>{" "}
                  (or longer if specified in contract):
                </p>

                <div className="bg-green-900/20 border-l-4 border-green-500 p-4 rounded mb-4">
                  <p className="font-semibold text-green-400 mb-2">We provide FREE bug fixes for:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Broken links or functionality</li>
                    <li>Layout issues on standard devices/browsers</li>
                    <li>Code errors or crashes</li>
                    <li>Performance issues we caused</li>
                  </ul>
                </div>

                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <p className="font-semibold text-red-400 mb-2">NOT covered during maintenance:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>New features or functionality changes</li>
                    <li>Content updates or additions</li>
                    <li>Design modifications or tweaks</li>
                    <li>Third-party service issues (hosting, APIs, etc.)</li>
                    <li>Issues caused by your modifications</li>
                    <li>Browser updates or new device compatibility (beyond initial scope)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  9.3 Limitations and Disclaimers
                </h3>
                <p className="mb-4 font-semibold text-white">
                  We do NOT warrant or guarantee:
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Business Results:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Specific revenue, sales, or conversions</li>
                      <li>Search engine rankings or SEO results</li>
                      <li>Social media engagement or traffic</li>
                      <li>Business success or profitability</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Technical Perfection:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>100% bug-free code (though we strive for quality)</li>
                      <li>Compatibility with ALL browsers and devices (we test common ones)</li>
                      <li>Future compatibility with browser/technology updates</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Third-Party Services:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Uptime or reliability of hosting providers</li>
                      <li>Performance of payment gateways, APIs, or integrations</li>
                      <li>Continued availability of third-party services</li>
                      <li>Third-party service fees or pricing</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Security:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Complete immunity from hacking or security breaches</li>
                      <li>Prevention of all malicious attacks</li>
                      <li>User error or weak passwords</li>
                      <li>Third-party vulnerabilities</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 bg-gray-800/50 border-l-4 border-gray-500 p-4 rounded">
                  <p className="font-semibold text-gray-200 uppercase tracking-wide">
                    THE WEBSITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; 
                    WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
                    LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, 
                    OR NON-INFRINGEMENT.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 10: Limitation of Liability */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              10. LIMITATION OF LIABILITY
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  10.1 Maximum Liability
                </h3>
                <p className="mb-3">
                  <span className="font-semibold text-white">Our total liability</span>{" "}
                  to you for any claims arising from our services is limited to:
                </p>
                <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded mb-4">
                  <p className="text-blue-300 font-semibold">
                    The total amount you paid for the specific project in question
                  </p>
                </div>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                  <p className="font-semibold text-white mb-3">Example:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm">
                    <li>You paid NPR 50,000 for a website</li>
                    <li>Website gets hacked (not our hosting, not our fault)</li>
                    <li>Maximum we could owe you: NPR 50,000 (refund)</li>
                    <li>NOT: NPR 500,000 in &quot;business damages&quot; or &quot;lost profits&quot;</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  10.2 Excluded Damages
                </h3>
                <p className="mb-3 font-semibold text-white">We are NOT liable for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><span className="font-semibold text-gray-200">Indirect damages:</span> Lost profits, business interruption, lost data</li>
                  <li><span className="font-semibold text-gray-200">Consequential damages:</span> Reputational harm, opportunity costs</li>
                  <li><span className="font-semibold text-gray-200">Special damages:</span> Punitive or exemplary damages</li>
                  <li><span className="font-semibold text-gray-200">Third-party claims:</span> Claims by your customers or users</li>
                  <li><span className="font-semibold text-gray-200">Force majeure:</span> Acts of God, war, terrorism, pandemics, government actions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  10.3 Client&apos;s Content and Use
                </h3>
                <p className="mb-3 font-semibold text-white">You are solely responsible for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>Content you provide or publish on your website</li>
                  <li>Legal compliance of your business and website</li>
                  <li>Copyright or trademark infringement by your content</li>
                  <li>Defamation, privacy violations, or illegal content</li>
                  <li>Misuse of the website for illegal purposes</li>
                </ul>

                <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                  <p className="font-semibold text-red-400 mb-2">
                    You agree to indemnify us (defend and hold us harmless) against any 
                    claims, lawsuits, or damages arising from:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Your content or business activities</li>
                    <li>Your violation of these Terms</li>
                    <li>Your violation of third-party rights</li>
                    <li>Your illegal or fraudulent activities</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  10.4 Third-Party Services
                </h3>
                <p className="mb-3 font-semibold text-white">We are NOT responsible for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Hosting provider downtime or data loss</li>
                  <li>Payment processor fees, delays, or failures</li>
                  <li>Email service deliverability issues</li>
                  <li>API changes or service discontinuation</li>
                  <li>Third-party security breaches</li>
                </ul>
                <p className="mt-3 text-gray-300">
                  <span className="font-semibold text-white">These are beyond our control.</span>{" "}
                  We assist with setup but cannot guarantee third-party performance.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11: Client Conduct and Prohibited Uses */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              11. CLIENT CONDUCT AND PROHIBITED USES
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  11.1 Acceptable Use
                </h3>
                <p className="text-gray-300">
                  You agree to use our services and the website we create for lawful purposes only.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  11.2 Prohibited Content and Activities
                </h3>
                <p className="mb-4 font-semibold text-red-400">
                  We will NOT create websites or provide services for:
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-white mb-2">Illegal Activities:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Drug trafficking, illegal weapons, or contraband</li>
                      <li>Money laundering, fraud, or scams</li>
                      <li>Hacking, phishing, or malware distribution</li>
                      <li>Piracy or copyright infringement</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Harmful Content:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Hate speech, racism, or discrimination</li>
                      <li>Violence or terrorism</li>
                      <li>Child exploitation or abuse</li>
                      <li>Pornography or adult content (case-by-case for legal adult businesses)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Deceptive Practices:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Pyramid schemes or MLM scams</li>
                      <li>False advertising or misleading claims</li>
                      <li>Impersonation or identity theft</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-white mb-2">Other:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Gambling (unless licensed)</li>
                      <li>Activities violating Nepalese law</li>
                      <li>Activities we deem unethical or harmful</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
                  <p className="font-semibold text-yellow-200 mb-2">We reserve the right to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Refuse service for prohibited content</li>
                    <li>Terminate projects involving prohibited activities</li>
                    <li>Report illegal activities to authorities</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  11.3 Your Conduct
                </h3>
                <p className="mb-3">You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Harass, abuse, or threaten our team members</li>
                  <li>Make unreasonable demands or excessive requests</li>
                  <li>Interfere with our operations or other clients</li>
                  <li>Use our services to harm others</li>
                  <li>Violate any applicable laws or regulations</li>
                </ul>
                <p className="mt-3 text-red-300">
                  <span className="font-semibold">Violation of conduct standards</span>{" "}
                  may result in immediate termination without refund.
                </p>
              </div>
            </div>
          </section>

          {/* Section 12: Confidentiality */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              12. CONFIDENTIALITY
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  12.1 Mutual Confidentiality
                </h3>
                <p className="mb-3">
                  Both parties agree to keep confidential information private:
                </p>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5 mb-4">
                  <p className="font-semibold text-white mb-2">Confidential Information includes:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Business strategies, plans, and financial information</li>
                    <li>Trade secrets and proprietary methods</li>
                    <li>Client lists and contact information</li>
                    <li>Project details (unless publicly available)</li>
                  </ul>
                </div>

                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                  <p className="font-semibold text-white mb-2">Exceptions (NOT confidential):</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Information already public</li>
                    <li>Information independently developed</li>
                    <li>Information disclosed with permission</li>
                    <li>Information required by law to disclose</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  12.2 Use of Confidential Information
                </h3>
                <p className="mb-3">Confidential information may ONLY be used for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>Fulfilling obligations under the contract</li>
                  <li>Providing contracted services</li>
                </ul>

                <p className="mb-3 font-semibold text-red-400">
                  Confidential information may NOT be:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Shared with unauthorized third parties</li>
                  <li>Used for personal gain or competitive advantage</li>
                  <li>Disclosed publicly without consent</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  12.3 Duration
                </h3>
                <p className="text-gray-300">
                  Confidentiality obligations continue for{" "}
                  <span className="font-semibold text-white">2 years</span>{" "}
                  after project completion or termination.
                </p>
              </div>
            </div>
          </section>

          {/* Section 13: Termination */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              13. TERMINATION
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  13.1 Termination by Client
                </h3>
                <p className="text-gray-300">
                  You may terminate the contract at any time. See Section 7 (Cancellation 
                  and Refunds) for financial terms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  13.2 Termination by UjjaloWeb
                </h3>
                <p className="mb-3">We may terminate the contract immediately if:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                  <li>You fail to pay within 14 days of due date</li>
                  <li>You provide illegal, prohibited, or fraudulent content</li>
                  <li>You are abusive, harassing, or threatening</li>
                  <li>You materially breach these Terms</li>
                  <li>The project becomes illegal or violates our values</li>
                </ul>

                <div className="bg-gray-800/50 border-l-4 border-purple-500 p-4 rounded">
                  <p className="font-semibold text-white mb-2">Upon termination:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>We stop all work immediately</li>
                    <li>We invoice for work completed to date (based on stage: 30/50/70/100%)</li>
                    <li>We may retain completed work for portfolio (with anonymization)</li>
                    <li>All confidential information remains protected</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  13.3 Effect of Termination
                </h3>
                <p className="mb-3">Upon termination (by either party):</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>All outstanding payments become immediately due</li>
                  <li>We provide work completed to date (upon payment)</li>
                  <li>Maintenance period does not begin</li>
                  <li>Licenses and access are revoked (until payment)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 14: Dispute Resolution */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              14. DISPUTE RESOLUTION
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  14.1 Governing Law
                </h3>
                <p className="mb-3">
                  These Terms are governed by the <span className="font-semibold text-white">laws of Nepal</span>.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <p className="font-semibold text-green-400 mb-2">For Nepal Clients:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>All disputes subject to Nepalese law</li>
                      <li>Jurisdiction: Courts of Kathmandu, Nepal</li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <p className="font-semibold text-blue-400 mb-2">For International Clients:</p>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                      <li>Disputes subject to Nepalese law OR mutually agreed jurisdiction</li>
                      <li>We will attempt to resolve amicably before legal action</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  14.2 Resolution Process
                </h3>
                <div className="space-y-4">
                  <div className="bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
                    <p className="font-semibold text-blue-400 mb-2">Step 1: Informal Resolution (14 days)</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>Contact us with your concern: ujjyaloweb@gmail.com</li>
                      <li>We will attempt to resolve via email, phone, or video call</li>
                      <li>Good faith efforts to reach mutual agreement</li>
                    </ul>
                  </div>

                  <div className="bg-purple-900/20 border-l-4 border-purple-500 p-4 rounded">
                    <p className="font-semibold text-purple-400 mb-2">Step 2: Mediation (30 days)</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>If Step 1 fails, both parties agree to mediation</li>
                      <li>Neutral third-party mediator (costs split 50/50)</li>
                      <li>Non-binding recommendations</li>
                    </ul>
                  </div>

                  <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                    <p className="font-semibold text-red-400 mb-2">Step 3: Legal Action</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                      <li>If Steps 1-2 fail, either party may pursue legal action</li>
                      <li>Venue: Kathmandu District Court (Nepal clients) or mutually agreed (international)</li>
                      <li>Each party bears own legal costs unless court orders otherwise</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  14.3 Small Claims
                </h3>
                <p className="text-gray-300">
                  For disputes under NPR 100,000 (Nepal clients): May be resolved through 
                  small claims court process (faster, less expensive)
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  14.4 Injunctive Relief
                </h3>
                <p className="mb-3">Either party may seek injunctive relief (court order) for:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Breach of confidentiality obligations</li>
                  <li>Intellectual property violations</li>
                  <li>Imminent harm or irreparable damage</li>
                </ul>
                <p className="mt-3 text-yellow-300">
                  <span className="font-semibold">This does NOT require waiting for Steps 1-2.</span>
                </p>
              </div>
            </div>
          </section>

          {/* Section 15: General Provisions */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              15. GENERAL PROVISIONS
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.1 Entire Agreement
                </h3>
                <p className="text-gray-300">
                  These Terms, together with your signed contract and project proposal, 
                  constitute the entire agreement between you and UjjaloWeb. They supersede 
                  all prior discussions, proposals, or agreements.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.2 Amendments
                </h3>
                <p className="mb-3">
                  We may update these Terms from time to time. Changes effective upon posting 
                  to our website.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li><span className="font-semibold text-gray-200">Minor changes:</span> No notification required</li>
                  <li><span className="font-semibold text-gray-200">Material changes:</span> We will notify you via email</li>
                  <li><span className="font-semibold text-gray-200">Your continued use:</span> = acceptance of updated Terms</li>
                </ul>
                <p className="mt-3 text-gray-300">
                  <span className="font-semibold text-white">For active contracts:</span>{" "}
                  Original Terms at contract signing apply (unless mutually agreed to updates).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.3 Severability
                </h3>
                <p className="text-gray-300">
                  If any provision of these Terms is found invalid or unenforceable: That 
                  provision is modified to be enforceable or removed. Remaining provisions 
                  remain in full effect.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.4 Waiver
                </h3>
                <p className="text-gray-300">
                  Our failure to enforce any provision does NOT waive our right to enforce 
                  it later. Waiver of one breach does NOT waive future breaches.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.5 Assignment
                </h3>
                <p className="mb-3">
                  <span className="font-semibold text-red-400">You may NOT</span>{" "}
                  <span className="text-gray-300">
                    transfer or assign your rights/obligations under these Terms without our 
                    written consent.
                  </span>
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-green-400">We may</span>{" "}
                  <span className="text-gray-300">assign these Terms to:</span>
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Business successors (merger, acquisition, sale)</li>
                  <li>Affiliated companies</li>
                  <li>Subcontractors (under confidentiality agreements)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.6 Force Majeure
                </h3>
                <p className="mb-3">
                  Neither party is liable for delays or failures caused by events beyond 
                  reasonable control:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Natural disasters (earthquakes, floods, fires)</li>
                  <li>War, terrorism, or civil unrest</li>
                  <li>Pandemics or epidemics</li>
                  <li>Government actions or regulations</li>
                  <li>Internet or utility outages</li>
                  <li>Strikes or labor disputes</li>
                </ul>
                <p className="mt-3 text-gray-300">
                  <span className="font-semibold text-white">If force majeure lasts &gt;60 days:</span>{" "}
                  Either party may terminate without penalty.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.7 Independent Contractors
                </h3>
                <p className="mb-3">
                  You and UjjaloWeb are independent contractors. These Terms do NOT create:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Partnership or joint venture</li>
                  <li>Employment or agency relationship</li>
                  <li>Authority to bind the other party</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.8 Notices
                </h3>
                <p className="mb-3">All notices must be in writing and sent to:</p>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <p className="font-semibold text-blue-400 mb-2">To UjjaloWeb:</p>
                    <p className="text-sm text-gray-300">
                      Email: ujjyaloweb@gmail.com<br />
                      Phone: +977 9745347065
                    </p>
                  </div>
                  <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                    <p className="font-semibold text-green-400 mb-2">To You:</p>
                    <p className="text-sm text-gray-300">
                      Email or contact information provided in your contract
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  Notices effective upon receipt (or 3 business days after sending).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.9 Survival
                </h3>
                <p className="mb-3">The following provisions survive termination or expiration:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Payment obligations</li>
                  <li>Intellectual property rights</li>
                  <li>Confidentiality</li>
                  <li>Limitation of liability</li>
                  <li>Indemnification</li>
                  <li>Dispute resolution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.10 Language
                </h3>
                <p className="text-gray-300">
                  These Terms are written in English. Any translations are for convenience 
                  only. English version governs in case of conflicts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  15.11 Headings
                </h3>
                <p className="text-gray-300">
                  Section headings are for convenience only and do not affect interpretation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 16: Contact Information */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              16. CONTACT INFORMATION
            </h2>
            <p className="mb-6">
              For questions, concerns, or notices regarding these Terms:
            </p>

            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-6">
              <h3 className="text-2xl font-bold text-white mb-4">UjjaloWeb</h3>
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
                  <span className="font-semibold text-white">Location:</span> Kathmandu, Nepal
                </p>
                <p>
                  <span className="font-semibold text-white">Social Media:</span> @ujjaloweb 
                  (Instagram, Facebook)
                </p>
                <p className="pt-2 border-t border-gray-700">
                  <span className="font-semibold text-white">Business Hours:</span> Sunday - Friday, 
                  9 AM - 6 PM (Nepal Time)
                </p>
                <p>
                  <span className="font-semibold text-white">Response Time:</span> Within 24-48 hours 
                  for non-urgent inquiries
                </p>
              </div>
            </div>
          </section>

          {/* Section 17: Acknowledgment */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-6">
              17. ACKNOWLEDGMENT
            </h2>
            <div className="space-y-4">
              <p className="mb-3">By engaging our services, you acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-6">
                <li>You have read and understood these Terms of Service</li>
                <li>You agree to be bound by these Terms</li>
                <li>You are at least 18 years of age or have parental/guardian consent</li>
                <li>You have authority to enter into this agreement</li>
                <li>You will comply with all applicable laws and regulations</li>
              </ul>

              <div className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded">
                <p className="font-semibold text-red-400">
                  If you do NOT agree{" "}
                  <span className="font-normal text-gray-300">
                    with any part of these Terms, please do not use our services.
                  </span>
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-12 border-t border-gray-700">
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Effective Date:</span> December 21, 2024
              </p>
              <p className="text-sm text-gray-400">
                <span className="font-semibold">Last Updated:</span> December 21, 2024
              </p>
              <p className="text-sm text-gray-500 pt-4">
                © 2024 UjjaloWeb. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfService;