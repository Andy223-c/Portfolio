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
      className="relative min-h-fit flex items-start lg:items-center justify-center py-10 mb-16 lg:py-12 overflow-hidden bg-transparent text-slate-900 dark:text-white transition-colors duration-500"
    >
      <div className="max-w-4xl w-full mx-auto px-6">
        {" "}
        <motion.div {...fadeUp()} className="text-center mb-6 lg:mb-8">
          <h1 className="text-2xl md:text-3xl font-black tracking-tight">
            Get In{" "}
            <span className="text-indigo-600 dark:text-indigo-400">Touch!</span>
          </h1>
          <p className="text-slate-500 dark:text-gray-400 mt-1 max-w-xs mx-auto text-[12px] md:text-sm">
            I'd love to hear from you.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 items-center">
          {" "}
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
                value: "heng.andy.1223@gmail.com",
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
        </div>
      </div>
    </section>
  );
}

export default Contact;
