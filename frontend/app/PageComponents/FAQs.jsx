import React from "react";

const FAQs = () => {
  return (
    <>
      <section className="w-full max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Questions & Answers
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "What website design and development services do you offer?",
              a: "We provide end-to-end website design and website development services, including UI/UX design, custom web development, responsive layouts, performance optimization, and deployment. Our focus is on building modern, fast, and scalable websites tailored to business goals.",
            },
            {
              q: "How long does it take to design and develop a website?",
              a: "The timeline depends on project scope. Most standard websites take 2 to 4 weeks, while complex or custom web applications may take longer. We provide a clear timeline and milestones before starting the project.",
            },
            {
              q: "Do you build custom websites or use pre-made templates?",
              a: "We build 100% custom websites. Every design and development decision is made specifically for your brand, audience, and requirements. We do not rely on generic templates.",
            },
                        {
              q: "Are your websites mobile-friendly and responsive?",
              a: "Yes. All our websites are fully responsive and mobile-first, ensuring smooth performance and consistent design across desktops, tablets, and smartphones.",
            },
                        {
              q: "Can you redesign an existing website?",
              a: "Yes. We offer website redesign services to improve visual design, usability, performance, and SEO. We can modernize outdated websites while preserving important content and brand identity.",
            },
                        {
              q: "Is SEO included in your website development process?",
              a: "Yes. Our websites follow SEO best practices, including clean code, fast loading speed, optimized structure, and Core Web Vitals compliance. Advanced SEO strategies can be added if required.",
            },
                        {
              q: "Will my website be fast and secure?",
              a: "Absolutely. We prioritize website speed, performance, and security by using modern frameworks, optimized assets, and secure deployment practices to ensure reliable performance.",
            },
                        {
              q: "Will I be able to update content on my website?",
              a: "Yes. We can integrate a content management system (CMS) or provide a simple setup that allows you to update text, images, and content without technical knowledge.",
            },
                        {
              q: "Do you offer support and maintenance after launch?",
              a: "Yes. We provide post-launch website support and maintenance, including updates, performance monitoring, bug fixes, and security checks..",
            },
                        {
              q: "How can I get started with your web design services?",
              a: "You can get started by contacting us through our website. We’ll discuss your project requirements, goals, and timeline, then provide a clear plan and next steps.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="
    group
    bg-gray-800
    rounded-2xl
    p-6

    transition-all
    transition-transform
    duration-300
    ease-[cubic-bezier(.34,1.56,.64,1)]

    hover:-translate-y-1
    hover:shadow-2xl
    open:shadow-2xl

    active:scale-[0.97]
                  transition-all
              duration-500
              ease-[cubic-bezier(.34,1.56,.64,1)]
  "
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold text-white">
                {item.q}
                <span
                  className="
              text-2xl font-bold
              group-open:rotate-45
              group-open:scale-110
            "
                >
                  +
                </span>
              </summary>

              <div
                className="
            overflow-hidden
            transition-all
            duration-500
            ease-[cubic-bezier(.34,1.56,.64,1)]
            opacity-0
            scale-95
            max-h-0
            group-open:opacity-100
            group-open:scale-100
            group-open:max-h-40
          "
              >
                <p className="mt-4 text-white/80 leading-relaxed">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQs;
