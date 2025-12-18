import {
  ArrowRight,
  Clock,
  Envelope,
  Lock,
  Phone,
  Check,
} from "phosphor-react";
import React, { useState } from "react";
import FAQs from "./FAQs";

/* -------------------- DATA -------------------- */

const contactCards = [
  {
    title: "Email Us",
    value: "ujjyaloweb@gmail.com",
    desc: "Get in touch for project inquiries",
    icon: Envelope,
  },
  {
    title: "Call Us",
    value: "+977 9745347065",
    desc: "Sun-Fri 9AM - 5PM NPT",
    icon: Phone,
  },
  {
    title: "Response Time",
    value: "<24h",
    desc: "Quick turnaround guaranteed",
    icon: Clock,
  },
];

const inputFields = [
  {
    label: "Full Name",
    id: "name",
    type: "text",
    placeholder: "e.g. Alex Johnson",
    required: true,
  },
  {
    label: "Work Email",
    id: "email",
    type: "email",
    placeholder: "e.g. alex@company.com",
    required: true,
  },
  {
    label: "Company / Brand Name",
    id: "company",
    type: "text",
    placeholder: "Your company or brand (if applicable)",
    optional: true,
  },
];

const services = [
  "Custom Website Development",
  "Website UI/UX Design",
  "Responsive Web Design",
  "Website Redesign & Optimization",
  "Website Performance & SEO",
  "Landing Page Design & Development",
  "Not sure yet",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,000",
  "$2,000+",
  "Not sure yet",
];

const timelines = ["ASAP", "2-4 weeks", "1-3 months", "Flexible"];

const Contacts = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [isReady, setIsReady] = useState(false);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="contact" className="min-h-screen py-1 px-4">
      {/* Header */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-white mb-4">
          Let's Illuminate Your Next Project
        </h1>
        <p className="text-gray-400 text-lg md:text-xl text-center">
          Tell us a bit about what you're building & we'll take it from there.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
          {/* Contact Cards */}
          {contactCards.map(({ title, value, desc, icon: Icon }, i) => (
            <div
              key={i}
              className="group rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-5 hover:border-[#f48c25] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#252525] group-hover:bg-[#f48c25]/10 transition-colors duration-300">
                  <Icon
                    size={22}
                    weight="regular"
                    className="text-gray-400 group-hover:text-[#f48c25] transition-colors duration-300"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-white text-sm font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-white text-base font-medium mb-0.5">
                    {value}
                  </p>
                  <span className="text-gray-500 text-xs">{desc}</span>
                </div>
              </div>
            </div>
          ))}

          <div>
            <div
              className="flex-1 h-[86.8%] px-8 py-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-y-auto scrollbar-thin"
              onClick={(e) => e.stopPropagation()}
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "#454443 transparent",
              }}
            >
              <FAQs />
            </div>
            <style jsx>{`
              div::-webkit-scrollbar {
                width: 6px;
                height: 6px;
              }
              div::-webkit-scrollbar-track {
                background: transparent;
              }
              div::-webkit-scrollbar-thumb {
                background-color: rgba(218, 165, 32, 0.5);
                border-radius: 9999px;
              }
              div::-webkit-scrollbar-thumb:hover {
                background-color: rgba(218, 165, 32, 0.7);
              }
              div::-ms-scrollbar-button {
                display: none;
              }
            `}</style>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 h-[90%] rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-8">
          {/* Input Fields */}
          {inputFields.map(
            ({ label, id, type, placeholder, required, optional }) => (
              <div key={id} className="mb-6">
                <label
                  htmlFor={id}
                  className="block text-white text-sm font-medium mb-2"
                >
                  {label}
                  {required && <span className="text-[#f48c25] ml-1">*</span>}
                  {optional && (
                    <span className="text-gray-500 text-xs ml-2">
                      (optional)
                    </span>
                  )}
                </label>
                <input
                  type={type}
                  id={id}
                  className="w-full border border-[#2a2a2a] rounded-lg px-4 py-3 bg-[#0f0f0f] text-white placeholder:text-gray-600 outline-none focus:border-[#f48c25] focus:ring-1 focus:ring-[#f48c25]/20 transition-all duration-200"
                  placeholder={placeholder}
                />
              </div>
            )
          )}

          {/* Services */}
          <FormOptions
            label="What service are you looking for?"
            items={services}
            helper="You can select more than one."
            cols="grid-cols-2"
            selected={selectedServices}
            onToggle={toggleService}
            multiple
          />

          {/* Budget */}
          <FormOptions
            label="Project Budget"
            items={budgets}
            helper="This helps us suggest the best approach for your project."
            cols="grid-cols-3"
            selected={selectedBudget}
            onToggle={setSelectedBudget}
          />

          {/* Timeline */}
          <FormOptions
            label="Project Timeline"
            items={timelines}
            cols="grid-cols-4"
            selected={selectedTimeline}
            onToggle={setSelectedTimeline}
          />

          {/* Message */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Tell us about your project
              <span className="text-[#f48c25] ml-1">*</span>
            </label>
            <textarea
              rows={5}
              className="w-full resize-none rounded-lg border border-[#2a2a2a] px-4 py-3 bg-[#0f0f0f] text-white placeholder:text-gray-600 outline-none focus:border-[#f48c25] focus:ring-1 focus:ring-[#f48c25]/20 transition-all duration-200"
              placeholder="What are you building?
                          What problem are you trying to solve?
                          Who is it for?"
            />
          </div>

          {/* Ready Checkbox */}
          <label className="flex items-center gap-3 cursor-pointer mb-6 group">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isReady}
                onChange={(e) => setIsReady(e.target.checked)}
              />
              <div className="w-5 h-5 rounded-full border-2 border-[#2a2a2a] bg-[#0f0f0f] peer-checked:border-[#f48c25] peer-checked:bg-[#f48c25] transition-all duration-200 flex items-center justify-center">
                {isReady && (
                  <Check size={14} weight="bold" className="text-black" />
                )}
              </div>
            </div>
            <span className="text-gray-300 text-sm">
              I'm ready to start within the next 30 days
            </span>
          </label>

          {/* Submit Button */}
          <button className="w-full flex justify-center items-center gap-2 px-6 py-4 rounded-lg text-black font-semibold bg-[#f48c25] hover:bg-[#ff9933] hover:shadow-[0_0_30px_rgba(244,140,37,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
            Illuminate My Project
            <ArrowRight size={20} weight="bold" />
          </button>

          <p className="text-center text-gray-400 text-sm mt-6 mb-4">
            We usually respond within 24 hours.
          </p>

          <hr className="border-[#2a2a2a] mb-3" />

          <p className="text-center text-gray-400 text-sm flex justify-center items-center gap-2">
            <Lock size={14} weight="regular" />
            Your information is safe and will never be shared.
          </p>
        </div>
      </div>
    </section>
  );
};

/* -------------------- REUSABLE OPTIONS -------------------- */

const FormOptions = ({
  label,
  items,
  helper,
  cols,
  selected,
  onToggle,
  multiple = false,
}) => (
  <div className="mb-6">
    <label className="block text-white text-sm font-medium mb-3">
      {label}
      <span className="text-[#f48c25] ml-1">*</span>
    </label>

    <div className={`grid ${cols} gap-3`}>
      {items.map((item, i) => {
        const isSelected = multiple
          ? selected.includes(item)
          : selected === item;

        return (
<button
  key={i}
  type="button"
  onClick={() => onToggle(item)}
  className={`flex items-center gap-3 rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 ${
    isSelected
      ? "bg-[#ff9a1f] text-black"
      : "border border-[#2a2a2a] bg-[#0f0f0f] text-gray-300 hover:bg-[#1a1a1a]"
  }`}
>
  {/* Tick */}
  {isSelected && (
    <Check size={16} weight="bold" className="text-black" />
  )}

  {/* Label */}
  <span>{item}</span>
</button>


        );
      })}
    </div>

    {helper && <p className="mt-3 text-xs text-gray-500">{helper}</p>}
  </div>
);

export default Contacts;
