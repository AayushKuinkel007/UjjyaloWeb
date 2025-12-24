"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Envelope,
  Lock,
  Phone,
  Check,
} from "phosphor-react";
import React, { useState } from "react";

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
  // Form state
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedTimeline, setSelectedTimeline] = useState("");
  const [isReady, setIsReady] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    // Frontend validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields");
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (selectedServices.length === 0) {
      setSubmitStatus("error");
      setErrorMessage("Please select at least one service");
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!selectedBudget) {
      setSubmitStatus("error");
      setErrorMessage("Please select your project budget");
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!selectedTimeline) {
      setSubmitStatus("error");
      setErrorMessage("Please select your project timeline");
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // Prepare data for API
    const submitData = {
      name: formData.name,
      email: formData.email,
      company: formData.company || null,
      services: selectedServices,
      budget: selectedBudget,
      timeline: selectedTimeline,
      message: formData.message,
      isReady: isReady,
    };

    try {
      // Call backend API
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001";
      
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Success!
        setSubmitStatus("success");

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
        setSelectedServices([]);
        setSelectedBudget("");
        setSelectedTimeline("");
        setIsReady(false);

        // Scroll to top to show success message
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Auto-hide success message after 10 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 10000);
      } else {
        // Error from backend
        setSubmitStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again. Make sure the backend is running on port 5001."
      );
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-12 md:py-16 px-4">
      {/* Success/Error Message */}
      {submitStatus && (
        <div
          className={`max-w-4xl mx-auto mb-6 p-4 rounded-lg border ${
            submitStatus === "success"
              ? "bg-green-500/10 border-green-500/50 text-green-400"
              : "bg-red-500/10 border-red-500/50 text-red-400"
          }`}
        >
          <div className="flex items-start gap-3">
            {submitStatus === "success" ? (
              <Check size={24} weight="bold" className="flex-shrink-0 mt-0.5" />
            ) : (
              <span className="text-2xl flex-shrink-0">❌</span>
            )}
            <div>
              <p className="font-semibold mb-1">
                {submitStatus === "success"
                  ? "✨ Thank You!"
                  : "Oops! Something went wrong"}
              </p>
              <p className="text-sm opacity-90">
                {submitStatus === "success"
                  ? "We've received your message and will get back to you within 24 hours. Check your email for confirmation!"
                  : errorMessage}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8 md:mb-12 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
          Let&apos;s Build Something Amazing
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400">
          Tell us about your project and let&apos;s bring your vision to life
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {contactCards.map(({ title, value, desc, icon: Icon }, i) => (
            <div
              key={i}
              className="group rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 md:p-5 hover:border-[#f48c25] transition-all duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#252525] group-hover:bg-[#f48c25]/10 transition-colors duration-300 flex-shrink-0">
                  <Icon
                    size={20}
                    weight="regular"
                    className="text-gray-400 group-hover:text-[#f48c25] transition-colors duration-300 md:w-[22px] md:h-[22px]"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-white text-xs md:text-sm font-semibold mb-1">
                    {title}
                  </h3>
                  <p className="text-white text-sm md:text-base font-medium mb-0.5 truncate">
                    {value}
                  </p>
                  <span className="text-gray-500 text-xs">{desc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 sm:p-6 md:p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-4 md:gap-y-5">
            {/* Left Column */}
            <div className="space-y-4 md:space-y-5">
              {/* Input Fields */}
              {inputFields.map(
                ({ label, id, type, placeholder, required, optional }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-white text-xs md:text-sm font-medium mb-2"
                    >
                      {label}
                      {required && (
                        <span className="text-[#f48c25] ml-1">*</span>
                      )}
                      {optional && (
                        <span className="text-gray-500 text-xs ml-2">
                          (optional)
                        </span>
                      )}
                    </label>
                    <input
                      type={type}
                      id={id}
                      value={formData[id] || ""}
                      onChange={handleInputChange}
                      required={required}
                      className="w-full border border-[#2a2a2a] rounded-lg px-3 md:px-4 py-2 md:py-2.5 bg-[#0f0f0f] text-sm md:text-base text-white placeholder:text-gray-600 outline-none focus:border-[#f48c25] focus:ring-1 focus:ring-[#f48c25]/20 transition-all duration-200"
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
                cols="grid-cols-1"
                selected={selectedServices}
                onToggle={toggleService}
                multiple
                showCheck={true}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-4 md:space-y-5">
              {/* Budget */}
              <FormOptions
                label="Project Budget"
                items={budgets}
                helper="This helps us suggest the best approach for your project."
                cols="grid-cols-2"
                selected={selectedBudget}
                onToggle={setSelectedBudget}
                showCheck={false}
              />

              {/* Timeline */}
              <FormOptions
                label="Project Timeline"
                items={timelines}
                cols="grid-cols-2"
                selected={selectedTimeline}
                onToggle={setSelectedTimeline}
                showCheck={false}
              />

              {/* Message */}
              <div>
                <label className="block text-white text-xs md:text-sm font-medium mb-2">
                  Tell us about your project
                  <span className="text-[#f48c25] ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full resize-none rounded-lg border border-[#2a2a2a] px-3 md:px-4 py-2 md:py-2.5 bg-[#0f0f0f] text-sm md:text-base text-white placeholder:text-gray-600 outline-none focus:border-[#f48c25] focus:ring-1 focus:ring-[#f48c25]/20 transition-all duration-200"
                  placeholder="What are you building?
What problem are you trying to solve?
Who is it for?"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-5 md:mt-6">
            {/* Ready Checkbox */}
            <label className="flex items-center justify-center gap-3 cursor-pointer mb-5 md:mb-6 group">
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
              <span className="text-gray-300 text-xs sm:text-sm">
                I&apos;m ready to start within the next 30 days
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto md:min-w-[280px] lg:min-w-[300px] flex justify-center items-center gap-2 px-6 md:px-8 py-3 md:py-3.5 rounded-lg text-sm md:text-base text-black font-semibold bg-[#f48c25] hover:bg-[#ff9933] hover:shadow-[0_0_30px_rgba(244,140,37,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mx-auto disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  Illuminate My Project
                  <ArrowRight
                    size={18}
                    weight="bold"
                    className="md:w-5 md:h-5"
                  />
                </>
              )}
            </button>

            <p className="text-center text-gray-400 text-xs sm:text-sm mt-5 md:mt-6">
              We usually respond within 24 hours.
            </p>

            {/* Divider and Privacy Notice */}
            <hr className="border-[#2a2a2a] my-4 md:my-5" />

            <p className="text-center text-gray-400 text-xs sm:text-sm flex justify-center items-center gap-2 mb-3">
              <Lock size={14} weight="regular" />
              Your information is safe and will never be shared.
            </p>
            <Link href="/">
              <p className="text-center text-white text-xs sm:text-sm flex justify-center items-center gap-1 hover:text-[#f48c25] transition-colors cursor-pointer">
                <ArrowLeft size={14} weight="regular" />
                Back To Home
              </p>
            </Link>
          </div>
        </form>
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
  showCheck = true,
}) => (
  <div>
    <label className="block text-white text-xs md:text-sm font-medium mb-2">
      {label}
      <span className="text-[#f48c25] ml-1">*</span>
    </label>

    <div className={`grid ${cols} gap-2`}>
      {items.map((item, i) => {
        const isSelected = multiple
          ? selected.includes(item)
          : selected === item;

        return (
          <button
            key={i}
            type="button"
            onClick={() => onToggle(item)}
            className={`flex items-center justify-center gap-2 rounded-full px-3 md:px-4 py-2 text-[10px] sm:text-xs font-medium transition-all duration-200 ${
              isSelected
                ? "bg-[#ff9a1f] text-black"
                : "border border-[#2a2a2a] bg-[#0f0f0f] text-gray-300 hover:bg-[#1a1a1a]"
            }`}
          >
            {/* Tick */}
            {showCheck && isSelected && (
              <Check
                size={12}
                weight="bold"
                className="text-black md:w-[14px] md:h-[14px]"
              />
            )}

            {/* Label */}
            <span className="whitespace-nowrap leading-tight">{item}</span>
          </button>
        );
      })}
    </div>

    {helper && (
      <p className="mt-2 text-[10px] sm:text-xs text-gray-500">{helper}</p>
    )}
  </div>
);

export default Contacts;