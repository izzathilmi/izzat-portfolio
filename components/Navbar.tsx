"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = ["About", "Journey", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#76b900]/10" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-[#76b900] font-bold text-xl tracking-tight text-glow">
          IH<span className="text-white">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-[#76b900] transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="/resume.pdf"
          className="text-xs border border-[#76b900] text-[#76b900] px-4 py-2 rounded hover:bg-[#76b900] hover:text-black transition-all duration-200 tracking-wider"
        >
          RESUME
        </a>
      </div>
    </motion.nav>
  );
}
