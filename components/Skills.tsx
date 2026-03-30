"use client";

import { motion } from "framer-motion";

const groups = [
  {
    label: "Work & Industry",
    items: ["Industrial Automation", "Mechanical Design Support", "Technical Troubleshooting", "FMEA Documentation", "Work Instructions & SOP"],
  },
  {
    label: "Programming",
    items: ["Python", "TypeScript / JavaScript", "Jupyter / Pandas", "Next.js"],
  },
  {
    label: "AI & Integrations",
    items: ["Claude Code", "LLM Workflows", "Telegram Bot API", "Microsoft Teams Webhooks", "PyTorch", "OpenCV"],
  },
  {
    label: "Learning",
    items: ["Computer Vision", "Deep Learning", "Machine Learning"],
  },
  {
    label: "Tools",
    items: ["VS Code", "Docker", "Git", "Linux", "Obsidian"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="space-y-10">
        {groups.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="grid grid-cols-[120px_1fr] gap-8"
          >
            <p className="text-xs text-gray-600 uppercase tracking-widest pt-0.5">{group.label}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {group.items.map((item) => (
                <span key={item} className="text-gray-400 text-sm">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
