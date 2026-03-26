import React from "react";
import { heroData } from "../data/AllData";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsTelegram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Hero() {
  const { name, role, description, image } = heroData;
  const navigate = useNavigate();
  return (
    <section className="w-full h-screen bg-linear-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center">
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-6">
          {/* Name */}
          <div>
            <h1 className="text-3xl md:text-5xl font-light tracking-wide">
              {name.split(" ")[0]}
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold">
              {name.split(" ")[1] || ""}
            </h2>
            <p className="text-gray-300 mt-2 tracking-widest">{role}</p>
          </div>

          {/* Description */}
          <p className="max-w-md text-gray-400 text-sm md:text-base leading-relaxed">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <div className="flex justify-between gap-3.5">
              <button
                onClick={() => navigate("/about")}
                className="btn"
              >
                About Me
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="btn"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 pt-4 text-gray-400 text-3xl ">
            <div className="flex justify-between gap-5">
              <a className="hover:text-white cursor-pointer hover:scale-90 transition duration-200" href="#">
                {" "}
                <BsFacebook />{" "}
              </a>
              <a className="hover:text-white cursor-pointer hover:scale-90 transition duration-200" href="">
                {" "}
                <BsTelegram />{" "}
              </a>
              <a className="hover:text-white cursor-pointer hover:scale-90 transition duration-200" href="">
                {" "}
                <FaLinkedin />{" "}
              </a>
              <a className="hover:text-white cursor-pointer hover:scale-90 transition duration-200" href="">
                {" "}
                <FaGithub />{" "}
              </a>
              <a className="hover:text-white cursor-pointer hover:scale-90 transition duration-200" href=""> <MdEmail /> </a>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-center w-full h-[450px]">
          <img
            src={image}
            alt="hero"
            className="h-full w-auto max-w-sm md:max-w-md rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
