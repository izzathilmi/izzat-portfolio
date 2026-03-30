"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ChevronDown } from "lucide-react";

const roles = [
  "Technical Support Engineer",
  "Computer Vision Learner",
  "Humanoid Robotics Builder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#76b900 1px, transparent 1px), linear-gradient(90deg, #76b900 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-[#76b900] text-sm tracking-[0.3em] uppercase mb-6"
        >
          Hello, I am
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Izzat{" "}
          <span className="text-[#76b900] text-glow">Hilmi</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-400 mb-4 h-8 flex items-center justify-center gap-1"
        >
          <span>{displayed}</span>
          <span className="w-0.5 h-6 bg-[#76b900] animate-pulse inline-block" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-gray-500 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          From Automation to Autonomy — engineering systems, learning vision, building the future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="bg-[#76b900] text-black px-12 py-6 rounded font-semibold text-sm tracking-wider hover:bg-[#8fd400] transition-all duration-200 hover:shadow-[0_0_20px_rgba(118,185,0,0.4)]"
          >
            VIEW PROJECTS
          </a>
          <a
            href="#contact"
            className="border border-[#76b900]/50 text-[#76b900] px-12 py-6 rounded font-semibold text-sm tracking-wider hover:border-[#76b900] hover:bg-[#76b900]/10 transition-all duration-200"
          >
            HIRE ME
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-6 mt-16"
        >
          <a
            href="https://github.com/izzathilmi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#76b900] transition-colors duration-200"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/izzathilmi98/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#76b900] transition-colors duration-200"
          >
            <Linkedin size={22} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 flex flex-col items-center gap-1"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
