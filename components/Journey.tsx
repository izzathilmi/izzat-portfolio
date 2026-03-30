"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "Apr 2025 — Present",
    title: "Technical Support Engineer E2",
    company: "Greatech Technology Berhad · Penang, Malaysia",
    points: [
      "Authored and maintained FMEA documentation to identify hardware risks early, reducing post-installation failures",
      "Developed standard work instructions and assembly briefings ensuring technicians follow precise alignment protocols",
      "Managed full lifecycle documentation from in-house assembly and I/O checking through to onsite commissioning",
    ],
    status: "current",
  },
  {
    period: "Jan 2022 — Apr 2025",
    title: "Technical Support Engineer E1",
    company: "Greatech Technology Berhad · Penang, Malaysia",
    points: [
      "Commissioned and installed high-precision automation machinery onsite for EV production lines",
      "Optimized machine process tools and mechanical alignments — achieved 15% reduction in cycle time",
      "Developed standardized alignment checklists and work instructions adopted across the team",
    ],
    status: "past",
  },
  {
    period: "2025 — Now",
    title: "Learning Computer Vision",
    company: "Self-directed · Personal",
    points: [
      "Studying image processing, object detection, and deep learning fundamentals",
      "Working with OpenCV and PyTorch toward robotics applications",
    ],
    status: "active",
  },
  {
    period: "2025 — Now",
    title: "AI & Automation Workflows",
    company: "Self-directed · Personal",
    points: [
      "Built real-time machine downtime alert system using Python, Telegram Bot API, and Microsoft Teams webhooks",
      "Developing personal AI memory and knowledge management system with Claude Code and Obsidian",
    ],
    status: "active",
  },
  {
    period: "Future",
    title: "Humanoid Robotics",
    company: "The Goal",
    points: [
      "Converging automation expertise, computer vision, and AI",
      "Contributing to intelligent humanoid robotic systems",
    ],
    status: "planned",
  },
];

export default function Journey() {
  return (
    <section id="journey">
      <div className="space-y-14">
        {timeline.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-[120px_1fr] gap-8 rounded-xl p-5 -mx-5 transition-all duration-300 hover:bg-[#76b900]/10 hover:shadow-[0_0_40px_rgba(118,185,0,0.18)] hover:border hover:border-[#76b900]/20 border border-transparent group"
          >
            {/* Date */}
            <div className="pt-0.5">
              <span className={`text-xs tracking-wider font-mono ${
                item.status === "current" ? "text-[#76b900]" :
                item.status === "active" ? "text-[#76b900]/50" :
                item.status === "past" ? "text-gray-500" :
                "text-gray-700"
              }`}>
                {item.period}
              </span>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-start justify-between mb-1 flex-wrap gap-2">
                <h3 className="text-white font-semibold text-base">{item.title}</h3>
                {item.status === "current" && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#76b900]/10 text-[#76b900] border border-[#76b900]/20 tracking-widest">
                    CURRENT
                  </span>
                )}
                {item.status === "planned" && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full border border-white/10 text-gray-600 tracking-widest">
                    PLANNED
                  </span>
                )}
              </div>
              <p className="text-gray-600 text-xs mb-4 tracking-wide">{item.company}</p>
              <ul className="space-y-2">
                {item.points.map((point, j) => (
                  <li key={j} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                    <span className="text-[#76b900]/40 mt-1.5 shrink-0">·</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
