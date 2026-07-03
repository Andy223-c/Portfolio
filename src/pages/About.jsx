import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp, slideLeft, slideRight } from "../data/Transition";

function About() {
  const paragraph =
    "UI/UX Designer & Frontend Developer with a keen eye for modern, user-centric interfaces based in Phnom Penh.";

  // State
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // Realistic typing speed
  const getSpeed = (char) => {
    if (char === " ") return 80;
    if ([".", ","].includes(char)) return 250;
    return Math.random() * 60 + 30;
  };

  useEffect(() => {
    let timeout;

    if (index < paragraph.length) {
      // Typing forward
      const char = paragraph[index];
      timeout = setTimeout(() => {
        setText((prev) => prev + char);
        setIndex((prev) => prev + 1);
      }, getSpeed(char));
    } else {
      // Once finished, pause for 3 seconds then reset to start over
      timeout = setTimeout(() => {
        setText("");
        setIndex(0);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section
      id="about"
      className="relative min-h-fit bg-transparent text-slate-900 dark:text-white flex items-center transition-colors duration-500 overflow-hidden py-10 lg:py-12"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4 text-center lg:text-left">
            <motion.div
              {...slideLeft(0.2)}
              className="bg-indigo-600 dark:bg-indigo-500/20 px-4 py-1 rounded-full w-fit mx-auto lg:mx-0 shadow-sm border border-indigo-500/20"
            >
              <h2 className="text-[10px] font-black uppercase tracking-widest text-white dark:text-indigo-300">
                About me
              </h2>
            </motion.div>

            <div className="space-y-3">
              <motion.p
                {...fadeUp(0.3)}
                className="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100 leading-tight"
              >
                Hi, I'm{" "}
                <span className="text-indigo-600 dark:text-indigo-400">
                  Heng Andy.
                </span>
              </motion.p>

              <div className="min-h-[4rem] md:min-h-[3rem] lg:min-h-[2.5rem]">
                <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 font-medium inline-block">
                  {text}

                  {/* Blinking Cursor */}
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.3 }}
                    className="inline-block w-[2px] h-[1em] bg-indigo-600 ml-1 translate-y-1"
                  />
                </p>
              </div>

              <motion.p
                {...fadeUp(0.5)}
                className="text-[13px] md:text-sm text-slate-500 dark:text-gray-400 leading-relaxed italic border-l-2 border-indigo-500 pl-4 bg-slate-100/50 dark:bg-white/5 py-3 pr-4 rounded-r-lg max-w-lg mx-auto lg:mx-0"
              >
                My approach to web development is unique: I don’t just write
                code; I think about the end-user experience from the first line
                of CSS. Though I am looking for my first professional
                internship, I have developed a strong technical command of the
                React ecosystem and modern styling tools. I am eager to leverage
                my skills in building interactive, high-contrast interfaces to
                support your team’s vision while developing my expertise in a
                professional, collaborative environment.
              </motion.p>
            </div>
          </div>

          <motion.div
            {...slideRight(0.3)}
            className="hidden lg:col-span-5 lg:flex justify-center lg:justify-end"
          >
            <div className="relative group p-2 overflow-hidden rounded-[30px] bg-slate-200 dark:bg-gray-800">
              {/* 1. The "Snake" Border Effect */}
              <div className="absolute inset-0 z-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 
                   bg-[conic-gradient(from_0deg,transparent_70%,#38bdf8_80%,#a3e635_90%,transparent_100%)]"
                />
              </div>

              <div className="relative z-10 bg-white dark:bg-gray-900 p-2 rounded-[28px] shadow-xl">
                <img
                  src="https://i.pinimg.com/736x/f9/11/a5/f911a5937a5e1704539a0fe78ad79874.jpg"
                  alt="profile"
                  className="rounded-[22px] w-56 h-72 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
