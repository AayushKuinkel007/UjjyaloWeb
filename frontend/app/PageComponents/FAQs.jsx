import React from "react";

const FAQs = () => {
  return (
    <section className="w-full">
      {/* Title */}
      <h2 className="text-xl font-semibold text-white mb-6 text-center">
        FAQ's
      </h2>

      {/* FAQ LIST */}
      <div className="space-y-8">
        {[
          {
            q: "What website design and development services do you offer?",
            a: "We provide end-to-end website design and website development services, including UI/UX design, custom web development, responsive layouts, performance optimization, and deployment.",
          },
          {
            q: "How long does it take to design and develop a website?",
            a: "Most standard websites take 2 to 4 weeks, while complex or custom web applications may take longer. We define clear milestones before starting.",
          },
          {
            q: "Do you build custom websites or use templates?",
            a: "We build 100% custom websites tailored to your brand, audience, and business goals.",
          },
          {
            q: "Are your websites mobile-friendly?",
            a: "Yes. All websites are fully responsive and mobile-first across all devices.",
          },
          {
            q: "Can you redesign an existing website?",
            a: "Yes. We modernize existing websites to improve UI, UX, performance, and SEO.",
          },
          {
            q: "Is SEO included?",
            a: "Yes. We follow SEO best practices including clean code, fast load times, and Core Web Vitals compliance.",
          },
          {
            q: "Will my website be fast and secure?",
            a: "Absolutely. Performance and security are top priorities in all our projects.",
          },
          {
            q: "Can I update content myself?",
            a: "Yes. We provide CMS or simple setups so you can manage content easily.",
          },
          {
            q: "Do you offer post-launch support?",
            a: "Yes. We provide ongoing maintenance, updates, and monitoring after launch.",
          },
          {
            q: "How do I get started?",
            a: "Simply contact us through our website and we’ll guide you through the next steps.",
          },
        ].map((item, i) => (
          <details
            key={i}
            className="
              group
              bg-white/10
              backdrop-blur-xl
              border border-white/20
              rounded-xl
              p-4

              transition-all
              duration-300
              ease-[cubic-bezier(.34,1.56,.64,1)]

              hover:-translate-y-0.5
              hover:shadow-xl
              open:shadow-xl
              active:scale-[0.98]
            "
          >
            {/* Question */}
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-white">
              <span className="pr-4">{item.q}</span>

              <span className="relative w-6 h-6 flex items-center justify-center text-lg">
                <span className="absolute transition-all duration-300 group-open:scale-0 group-open:opacity-0">
                  +
                </span>
                <span className="absolute transition-all duration-300 scale-0 opacity-0 group-open:scale-100 group-open:opacity-100">
                  −
                </span>
              </span>
            </summary>

            {/* Answer */}
            <div
              className="
                overflow-hidden
                transition-all
                duration-500
                ease-[cubic-bezier(.34,1.56,.64,1)]
                opacity-0
                max-h-0
                group-open:opacity-100
                group-open:max-h-96
              "
            >
              <p className="mt-3 text-sm text-white/75 leading-relaxed">
                {item.a}
              </p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
