"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <p className="text-gray-400 text-sm leading-loose max-w-md">
          Open to career opportunities, freelance work, and collaborations. If you need
          automation expertise, a technical problem solver, or want to build something
          together — reach out.
        </p>

        <div className="space-y-3">
          {[
            { label: "Email", value: "izzathilmi98@gmail.com", href: "mailto:izzathilmi98@gmail.com" },
            { label: "LinkedIn", value: "linkedin.com/in/izzathilmi98", href: "https://www.linkedin.com/in/izzathilmi98/" },
            { label: "GitHub", value: "github.com/izzathilmi", href: "https://github.com/izzathilmi" },
          ].map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <span className="text-xs text-gray-600 w-16 tracking-wide">{label}</span>
              <span className="text-gray-400 text-sm group-hover:text-[#76b900] transition-colors duration-200">
                {value}
              </span>
              <ArrowUpRight size={13} className="text-gray-700 group-hover:text-[#76b900] transition-colors duration-200" />
            </a>
          ))}
        </div>

        <p className="text-gray-800 text-xs pt-8">
          Designed & built by Izzat Hilmi · {new Date().getFullYear()}
        </p>
      </motion.div>
    </section>
  );
}
