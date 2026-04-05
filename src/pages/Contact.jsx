import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "../data/Transition";
import { Envelope, Location, Phone } from "@boxicons/react";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="relative min-h-fit flex items-start lg:items-center justify-center py-10 lg:py-12 overflow-hidden bg-transparent text-slate-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-4xl w-full mx-auto px-6">
        {" "}
        {/* Reduced max-w to 4xl */}
        {/* Header Section - More Compact */}
        <motion.div {...fadeUp()} className="text-center mb-6 lg:mb-8">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Get In{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Touch!</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 mt-1 max-w-xs mx-auto text-[12px] md:text-sm">
            I'd love to hear from you.
          </p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          {" "}
          {/* items-start and reduced gap */}
          {/* Left Side: Contact Info - Smaller Cards */}
          <motion.div {...slideLeft()} className="flex flex-col gap-3">
            {[
              {
                title: "Location",
                icon: <Location size={20} />,
                value: "Phnom Penh, Cambodia",
                link: "#",
              },
              {
                title: "Email",
                icon: <Envelope size={20} />,
                value: "andy.heng@example.com",
                link: "mailto:andy.heng@example.com",
              },
              {
                title: "Phone",
                icon: <Phone size={20} />,
                value: "+855 694 246 62",
                link: "tel:+85569424662",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp(index * 0.1)}
                className="group flex items-center gap-4 bg-white dark:bg-gray-900/40 backdrop-blur-md border border-slate-200 dark:border-gray-800 p-4 rounded-xl shadow-sm transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-bold text-sm text-slate-800 dark:text-white">
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    className="text-[11px] md:text-xs text-slate-500 dark:text-gray-400 hover:text-indigo-600 transition-colors block truncate"
                  >
                    {item.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Right Side: Contact Form - Smaller Padding & Inputs */}
          <motion.div
            {...slideRight()}
            className="bg-white dark:bg-gray-900/40 backdrop-blur-md border border-slate-200 dark:border-gray-800 p-5 md:p-6 rounded-[1.5rem] shadow-xl"
          >
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <motion.div {...fadeUp(0.2)}>
                  <label className="block text-[9px] font-bold mb-1 ml-1 text-slate-400 uppercase tracking-widest">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Name"
                    className="w-full bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white text-xs rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </motion.div>
                <motion.div {...fadeUp(0.3)}>
                  <label className="block text-[9px] font-bold mb-1 ml-1 text-slate-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white text-xs rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </motion.div>
              </div>
              <motion.div {...fadeUp(0.4)}>
                <label className="block text-[9px] font-bold mb-1 ml-1 text-slate-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  required
                  rows="2" // Reduced rows
                  placeholder="How can I help?"
                  className="w-full bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white text-xs rounded-lg px-3 py-2.5 outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
              </motion.div>

              <div className="relative pt-1">
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-x-0 -top-6 z-50 flex justify-center"
                    >
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full font-bold text-[8px] uppercase tracking-tighter shadow-lg">
                        Message Sent!
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  {...fadeUp(0.5)}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 text-white font-bold text-[11px] py-2.5 rounded-lg hover:bg-indigo-700 transition-all uppercase tracking-widest shadow-md"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
