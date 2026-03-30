"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#journey" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const roles = [
  "Technical Support Engineer",
  "AI Workflow Builder",
  "Document Controller (aspiring)",
  "Humanoid Robotics Builder",
];

export default function Sidebar() {
  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <aside className="fixed left-0 top-0 h-screen w-[38%] flex flex-col justify-between pl-28 pr-14 pt-36 pb-20">
      {/* Top */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl font-bold text-white tracking-tight mb-3">
          Izzat Hilmi
        </h1>

        <div className="flex items-center gap-1 h-6 mb-4">
          <span className="text-[#76b900] text-sm">{displayed}</span>
          <span className="w-px h-4 bg-[#76b900] animate-pulse" />
        </div>

        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
          From Automation to Autonomy — engineering systems, learning vision, building the future.
        </p>
      </motion.div>

      {/* Nav */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="space-y-4"
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="flex items-center gap-4 group"
          >
            <span className="w-6 h-px bg-gray-700 group-hover:w-10 group-hover:bg-[#76b900] transition-all duration-300" />
            <span className="text-xs tracking-[0.2em] uppercase text-gray-500 group-hover:text-[#76b900] transition-colors duration-200">
              {label}
            </span>
          </a>
        ))}
      </motion.nav>

      {/* Resume download */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.45 }}
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-gray-500 border border-gray-700 hover:border-[#76b900] hover:text-[#76b900] transition-all duration-200 px-4 py-2"
        >
          <FileText size={13} />
          Resume
        </a>
      </motion.div>

      {/* Bottom — social */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="flex items-center gap-5"
      >
        <a href="https://github.com/izzathilmi" target="_blank" rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#76b900] transition-colors duration-200">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/izzathilmi98/" target="_blank" rel="noopener noreferrer"
          className="text-gray-600 hover:text-[#76b900] transition-colors duration-200">
          <Linkedin size={18} />
        </a>
        <a href="mailto:izzathilmi54321@gmail.com"
          className="text-gray-600 hover:text-[#76b900] transition-colors duration-200">
          <Mail size={18} />
        </a>
      </motion.div>
    </aside>
  );
}
