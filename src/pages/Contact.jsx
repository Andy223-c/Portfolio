import React from 'react'
import { motion } from "framer-motion";

import { fadeUp, slideLeft, slideRight } from '../data/Transition';
import { Envelope, Location, Phone } from '@boxicons/react';

function Contact() {
  return (
    <section className="pt-6 pb-12 overflow-hidden min-h-screen bg-linear-to-br from-[#0f172a] to-[#1e293b] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <motion.div {...fadeUp()} className="text-center mb-14">
          <h1 className="text-4xl font-bold text-white">Get In tuch!</h1>
          <p className="text-gray-400 mt-3">
            Have any Recomenation? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <motion.div {...slideLeft()} className="space-y-6 p-6">
            {[
              { title: <><Location /> Location</>, value: "Phnom Penh, Cambodia" },
              { title: <><Envelope /> Email</>, value: "support@elearning.com" },
              { title: <><Phone /> Phone</>, value: "+855 00 000 000" },
            ].map((item, index) => (
              <motion.div
                key={index}
                {...fadeUp(index * 0.2)}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-xl shadow hover:scale-105 transition duration-300"
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-white">
                  {item.title}
                </h3>
                <a href='#' className="text-gray-300">{item.value}</a>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            {...slideRight()}
            className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl shadow"
          >
            <form className="space-y-5">

              <motion.div {...fadeUp(0.2)}>
                <label className="block text-sm mb-1 text-gray-300">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </motion.div>

              <motion.div {...fadeUp(0.4)}>
                <label className="block text-sm mb-1 text-gray-300">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </motion.div>

              <motion.div {...fadeUp(0.6)}>
                <label className="block text-sm mb-1 text-gray-300">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full bg-transparent border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
                ></textarea>
              </motion.div>

              <motion.button
                {...fadeUp(0.8)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
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