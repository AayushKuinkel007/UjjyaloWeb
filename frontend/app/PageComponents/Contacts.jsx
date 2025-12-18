import { ArrowRight, Clock, Envelope, Lock, Phone } from "phosphor-react";
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
    value: "24h",
    desc: "Quick turnaround guaranteed",
    icon: Clock,
  },
];

const inputFields = [
  {
    label: "Name",
    id: "name",
    type: "text",
    placeholder: "John Doe",
    required: true,
  },
  {
    label: "Work Email",
    id: "email",
    type: "text",
    placeholder: "johndoe@example.com",
    required: true,
  },
  {
    label: "Company/Brand Name",
    id: "company",
    type: "text",
    placeholder: "Your company",
    optional: true,
  },
];

const services = [
  "Web Design",
  "Web Development",
  "App Design",
  "App Development",
  "Ghostwriting",
  "Not sure yet",
];

const budgets = [
  "Under $1000",
  "$1000-$3000",
  "$3000-$7000",
  "$7000+",
  "Not sure yet",
];

const timelines = ["ASAP", "2-4 weeks", "1-3 months", "Flexible"];

const Contacts = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  return (
    <section id="contact" className="mb-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-[60px] font-bold text-center">
          Let's Illuminate Your Next Project
        </h1>
        <p className="text-gray-500 text-[20px] text-center w-full mx-auto">
          Tell us a bit about what you're building — we'll take it from there.
        </p>
      </div>

      <div className="flex justify-between gap-10 px-[200px]">
        {/* Left Cards */}
        <div className="flex flex-col gap-4 w-90 max-h-[1370px]">
          {contactCards.map(({ title, value, desc, icon: Icon }, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 py-4 px-6 hover:border-[#f48c25]"
            >
              <div className="flex items-start gap-8">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 group-hover:bg-[#f48c25]/10">
                  <Icon
                    size={24}
                    className="text-white group-hover:text-[#f48c25]"
                  />
                </div>

                <div className="flex flex-col">
                  <h1 className="text-white text-xl font-semibold">{title}</h1>
                  <p className="text-white/75 text-base">{value}</p>
                  <span className="text-white/50 text-sm mt-1">{desc}</span>
                </div>
              </div>
            </div>
          ))}

          {/* FAQ SCROLL AREA */}
          <div
            className="flex-1 px-8 py-6 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 overflow-y-auto scrollbar-thin"
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

        {/* Form */}
        <div className="rounded-2xl w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 ">
          {/* Inputs */}
          {inputFields.map(
            ({ label, id, type, placeholder, required, optional }) => (
              <div key={id} className="flex flex-col mb-4">
                <div className="mb-2">
                  <label htmlFor={id} className="label-form">
                    {label}
                  </label>
                  {required && <span className="ms-1 text-red-500">*</span>}
                  {optional && (
                    <span className="ms-1 text-gray-700 text-xs">
                      (optional)
                    </span>
                  )}
                </div>
                <input
                  type={type}
                  id={id}
                  className="w-full border border-white/20 rounded-lg p-3 bg-transparent text-white outline-none focus:border-[#f48c25] focus:ring-1 focus:ring-[#f48c25]/40 focus:shadow-[0_0_20px_#f48c25]"
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
            cols="md:grid-cols-2"
          />

          {/* Budget */}
          <FormOptions
            label="Project Budget"
            items={budgets}
            helper="This helps us suggest the best approach for your project."
            cols="md:grid-cols-3"
          />

          {/* Timeline */}
          <FormOptions
            label="Project Timeline"
            items={timelines}
            cols="md:grid-cols-4"
          />

          {/* Message */}
          <div className="flex flex-col mb-6">
            <label className="mb-3 text-white font-medium">
              Tell us About your project
              <span className="ml-1 text-[#f48c25]">*</span>
            </label>
            <textarea
              rows={4}
              className="w-full resize-none rounded-xl border border-white/15 p-4 text-white placeholder:text-white/40 outline-none transition-all duration-200 focus:border-[#f48c25] focus:ring-1 focus:ring-[#f48c25]/40 focus:shadow-[0_0_25px_#f48c25]/20"
              placeholder="Tell us about your project..."
            />
          </div>

          {/* Radio */}
          <label className="flex items-center gap-4 cursor-pointer select-none">
            <input type="radio" className="peer sr-only" defaultChecked />
            <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center peer-checked:border-[#f48c25]">
              <div className="w-3 h-3 rounded-full bg-[#f48c25] scale-0 peer-checked:scale-100 transition-transform duration-200" />
            </div>
            <span className="text-white text-sm">
              I'm ready to start within the next 30 days
            </span>
          </label>

          {/* Submit */}
          <div className="w-full mt-5 mb-5">
            <button className="relative flex justify-center items-center gap-2 p-3 rounded-xl text-black bg-[#f48c25] hover:shadow-[0_0_20px_#f48c25] hover:scale-105 duration-500 w-full">
              Illuminate My Project
              <ArrowRight size={22} weight="bold" />
            </button>
          </div>

          <p className="text-center text-gray-300 mb-5">
            we usually respond within 24 hours.
          </p>

          <hr className="mb-5" />

          <p className="text-center text-gray-300 flex justify-center items-center gap-2">
            <Lock size={15} />
            Your information is safe and will never be shared.
          </p>
        </div>
      </div>
    </section>
  );
};

/* -------------------- REUSABLE OPTIONS -------------------- */

const FormOptions = ({ label, items, helper, cols }) => (
  <div className="flex flex-col mb-6">
    <label className="mb-3 text-white font-medium">
      {label}
      <span className="ml-1 text-[#f48c25]">*</span>
    </label>

    <div className={`grid grid-cols-1 ${cols} gap-4`}>
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          className="group w-full rounded-xl border border-white/15 px-6 py-4 text-left text-white font-medium transition-all duration-200 hover:border-[#f48c25] hover:bg-[#f48c25]/10 focus:border-[#f48c25] focus:outline-none"
        >
          {item}
        </button>
      ))}
    </div>

    {helper && <p className="mt-3 text-sm text-white/50">{helper}</p>}
  </div>
);

export default Contacts;
