import React from "react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "../data/Transition";
import { Envelope, Location, Phone } from "@boxicons/react";

function Contact() {
  return (
    <section
      id="contact"
      /* Added flex and items-center to center content vertically in the viewport */
      className="min-h-screen flex items-center justify-center py-20 overflow-hidden bg-transparent text-slate-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-7xl w-full mx-auto px-6">
        {/* Title */}
        <motion.div {...fadeUp()} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-white tracking-tight">
            Get In Touch!
          </h1>
          <p className="text-slate-500 dark:text-gray-400 mt-4 max-w-lg mx-auto text-lg">
            Have any recommendations or projects in mind? I'd love to hear from
            you.
          </p>
        </motion.div>

        {/* Responsive Grid - ensure items-stretch for equal card heights */}
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-stretch">
          {/* Contact Info Cards */}
          <motion.div
            {...slideLeft()}
            className="flex flex-col justify-between gap-6"
          >
            {[
              {
                title: "Location",
                icon: <Location className="text-3xl" />,
                value: "Phnom Penh, Cambodia",
                link: "https://maps.google.com/?q=Phnom+Penh",
              },
              {
                title: "Email",
                icon: <Envelope className="text-3xl" />,
                value: "andy.heng@example.com",
                link: "mailto:andy.heng@example.com",
              },
              {
                title: "Phone",
                icon: <Phone className="text-3xl" />,
                value: "+855 00 000 000",
                link: "tel:+85500000000",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp(index * 0.1)}
                className="group flex items-center gap-6 bg-white dark:bg-gray-900/40 backdrop-blur-xl border border-slate-200 dark:border-gray-800 p-7 rounded-[2rem] shadow-sm hover:shadow-indigo-500/10 transition-all duration-500"
              >
                <div className="flex-shrink-0 p-5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-bold text-xl text-slate-800 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <a
                    href={item.link}
                    className="text-slate-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-colors block truncate"
                  >
                    {item.value}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...slideRight()}
            className="bg-white dark:bg-gray-900/40 backdrop-blur-xl border border-slate-200 dark:border-gray-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div {...fadeUp(0.2)}>
                  <label className="block text-sm font-bold mb-2 ml-1 text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </motion.div>

                <motion.div {...fadeUp(0.3)}>
                  <label className="block text-sm font-bold mb-2 ml-1 text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                  />
                </motion.div>
              </div>

              <motion.div {...fadeUp(0.4)}>
                <label className="block text-sm font-bold mb-2 ml-1 text-slate-700 dark:text-gray-300 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full bg-slate-50 dark:bg-gray-800/50 border border-slate-200 dark:border-gray-700 text-slate-900 dark:text-white placeholder-slate-400 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                ></textarea>
              </motion.div>

              <motion.button
                {...fadeUp(0.5)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-indigo-600 text-white font-black text-lg py-4 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-500/30 transition-all uppercase tracking-widest"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
