import { ArrowRight, Clock, Envelope, Lock, Phone } from "phosphor-react";
import React from "react";

const Contacts = () => {
  return (
    <>
      <section id="contact" className="mb-10">
        <div className="mb-10">
          <h1 className="text-[60px] font-bold text-center">
            Let's Illuminate Your Next Project
          </h1>
          <p className="text-gray-500 text-[20px] text-center w-full mx-auto">
            Tell us a bit about what you're building — we'll take it from there.
          </p>
        </div>

        <div className="flex justify-between gap-10 px-[200px]">
          <div className="flex flex-col gap-4">
            <div className="group w-90 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 py-4 px-6 hover:border-[#f48c25]">
              <div className="flex items-start gap-8">
                {/* Icon bubble */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 group-hover:bg-[#f48c25]/10">
                  <Envelope
                    size={24}
                    className="text-white group-hover:text-[#f48c25]"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h1 className="text-white text-xl font-semibold">Email Us</h1>
                  <p className="text-white/75 text-base">
                    ujjyaloweb@gmail.com
                  </p>
                  <span className="text-white/50 text-sm mt-1">
                    Get in touch for project inquiries
                  </span>
                </div>
              </div>
            </div>
            <div className="group w-90 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 py-4 px-6 hover:border-[#f48c25]">
              <div className="flex items-start gap-8">
                {/* Icon bubble */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 group-hover:bg-[#f48c25]/10">
                  <Phone
                    size={24}
                    className="text-white group-hover:text-[#f48c25]"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h1 className="text-white text-xl font-semibold">Call Us</h1>
                  <p className="text-white/75 text-base">+977 9745347065</p>
                  <span className="text-white/50 text-sm mt-1">
                    Sun-Fri 9AM - 5PM NPT
                  </span>
                </div>
              </div>
            </div>
            <div className="group w-90 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 py-4 px-6 hover:border-[#f48c25]">
              <div className="flex items-start gap-8">
                {/* Icon bubble */}
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 group-hover:bg-[#f48c25]/10">
                  <Clock
                    size={24}
                    className="text-white group-hover:text-[#f48c25]"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col">
                  <h1 className="text-white text-xl font-semibold">Email Us</h1>
                  <p className="text-white/75 text-base">-24h</p>
                  <span className="text-white/50 text-sm mt-1">
                    Quick turnaround guaranteed
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl w-full max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6">
            <div className="form">
              {/* Normal Form */}

              <div className="flex flex-col mb-4">
                <div className="mb-2">
                  <label htmlFor="name" className="label-form">
                    Name
                  </label>
                  <span className="ms-1 text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full
                            border border-white/20
                            rounded-lg
                            p-3
                            bg-transparent
                            text-white
                            outline-none
                            focus:border-[#f48c25]
                            focus:ring-1 focus:ring-[#f48c25]/40
                            focus:shadow-[0_0_20px_#f48c25] "
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col mb-4">
                <div className="mb-2">
                  <label htmlFor="name" className="label-form">
                    Work Email
                  </label>
                  <span className="ms-1 text-red-500">*</span>
                </div>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full
                            border border-white/20
                            rounded-lg
                            p-3
                            bg-transparent
                            text-white
                            outline-none
                            focus:border-[#f48c25]
                            focus:ring-1 focus:ring-[#f48c25]/40
                            focus:shadow-[0_0_20px_#f48c25] "
                  placeholder="johndoe@example.com"
                />
              </div>
              <div className="flex flex-col mb-4">
                <div className="mb-2">
                  <label htmlFor="name" className="label-form">
                    Company/Brand Name
                  </label>
                  <span className="ms-1 text-gray-700 text-xs">(optional)</span>
                </div>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full
                            border border-white/20
                            rounded-lg
                            p-3
                            bg-transparent
                            text-white
                            outline-none
                            focus:border-[#f48c25]
                            focus:ring-1 focus:ring-[#f48c25]/40
                            focus:shadow-[0_0_20px_#f48c25] "
                  placeholder="John Doe"
                />
              </div>

              {/* Choose Services */}

              <div className="flex flex-col mb-6">
                {/* Label */}
                <label className="mb-3 text-white font-medium">
                  What service are you looking for?
                  <span className="ml-1 text-[#f48c25]">*</span>
                </label>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Web Design",
                    "Web Development",
                    "App Design",
                    "App Development",
                    "Ghostwriting",
                    "Not sure yet",
                  ].map((service, index) => (
                    <button
                      key={index}
                      type="button"
                      className="
          group
          w-full
          rounded-xl
          border border-white/15
          px-6 py-4
          text-left
          text-white
          font-medium
          transition-all duration-200
          hover:border-[#f48c25]
          hover:bg-[#f48c25]/10
          focus:border-[#f48c25]
          focus:outline-none
        "
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {/* Helper text */}
                <p className="mt-3 text-sm text-white/50">
                  You can select more than one.
                </p>
              </div>

              {/* Project Budget */}

              <div className="flex flex-col mb-6">
                {/* Label */}
                <label className="mb-3 text-white font-medium">
                  Project Budget
                  <span className="ml-1 text-[#f48c25]">*</span>
                </label>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    "Under $1000",
                    "$1000-$3000",
                    "$3000-$7000",
                    "$7000+",
                    "Not sure yet",
                  ].map((service, index) => (
                    <button
                      key={index}
                      type="button"
                      className="
          group
          w-full
          rounded-xl
          border border-white/15
          px-6 py-4
          text-left
          text-white
          font-medium
          transition-all duration-200
          hover:border-[#f48c25]
          hover:bg-[#f48c25]/10
          focus:border-[#f48c25]
          focus:outline-none
        "
                    >
                      {service}
                    </button>
                  ))}
                </div>

                {/* Helper text */}
                <p className="mt-3 text-sm text-white/50">
                  This helps us suggest the best approach for your project.
                </p>
              </div>

              {/* Project Timeline */}

              <div className="flex flex-col mb-6">
                {/* Label */}
                <label className="mb-3 text-white font-medium">
                  Project Budget
                  <span className="ml-1 text-[#f48c25]">*</span>
                </label>

                {/* Options */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {["ASAP", "2-4 weeks", "1-3 months", "Flexible"].map(
                    (service, index) => (
                      <button
                        key={index}
                        type="button"
                        className="
          group
          w-full
          rounded-xl
          border border-white/15
          px-6 py-4
          text-left
          text-white
          font-medium
          transition-all duration-200
          hover:border-[#f48c25]
          hover:bg-[#f48c25]/10
          focus:border-[#f48c25]
          focus:outline-none
        "
                      >
                        {service}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* About the project */}
              <div className="flex flex-col mb-6">
                {/* Label */}
                <label className="mb-3 text-white font-medium">
                  Tell us About your project
                  <span className="ml-1 text-[#f48c25]">*</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="
    w-full
    resize-none
    rounded-xl
    border border-white/15
    p-4
    text-white
    placeholder:text-white/40
    outline-none
    transition-all duration-200
    focus:border-[#f48c25]
    focus:ring-1 focus:ring-[#f48c25]/40
    focus:shadow-[0_0_25px_#f48c25]/20
  "
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* radio */}
              <label className="flex items-center gap-4 cursor-pointer select-none">
                {/* Hidden radio (MUST be peer) */}
                <input
                  type="radio"
                  name="timeline"
                  className="peer sr-only"
                  defaultChecked
                />

                {/* Outer circle */}
                <div className="w-5 h-5 rounded-full border border-white/30 flex items-center justify-center peer-checked:border-[#f48c25]">
                  {/* Inner dot */}
                  <div className="w-3 h-3 rounded-full bg-[#f48c25] scale-0 peer-checked:scale-100 transition-transform duration-200" />
                </div>

                {/* Text */}
                <span className="text-white text-sm">
                  I'm ready to start within the next 30 days
                </span>
              </label>

              <div className="w-full mt-5 flex mb-5">
                <button className="relative flex justify-center items-center gap-2 p-3 rounded-xl text-black bg-[#f48c25] hover:shadow-[0_0_20px_#f48c25] hover:scale-105 duration-500 w-full ">
                  Illuminate My Project <ArrowRight size={22} weight="bold" />
                </button>
              </div>
              <p className="text-center text-gray-300 mb-5">
                we usually respond within 24 hours.
              </p>
              <hr className="mb-5"/>
              <p className="text-center text-gray-300 mb-1 flex justify-center items-center gap-2">
               <Lock size={15}/> Your information is safe and will never be shared.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
