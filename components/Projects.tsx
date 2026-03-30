"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Machine Downtime Alert System",
    description: "Self-initiated real-time monitoring system that detects machine status changes and instantly notifies teams via Telegram and Microsoft Teams. Built without a software background — recognized by management for measurable impact on response time.",
    tags: ["Python", "Telegram API", "Teams Webhooks", "Automation"],
    github: null,
    status: "completed",
  },
  {
    title: "Jetson Humanoid Robot Prototype",
    description: "Personal project building a prototype humanoid robot using NVIDIA Jetson Orin Nano as the edge AI computer. Integrated RPLidar A1 for spatial awareness. Exploring real-time AI inference for robotics applications.",
    tags: ["NVIDIA Jetson", "RPLidar", "Python", "Edge AI"],
    github: null,
    status: "in-progress",
  },
  {
    title: "Personal AI Memory System (Aurora)",
    description: "Persistent AI knowledge partner built on Claude Code + Obsidian. Features cross-session memory, Telegram bot interface, Syncthing vault sync across devices, and always-on deployment on Jetson Orin Nano.",
    tags: ["Claude Code", "TypeScript", "Obsidian", "Syncthing"],
    github: null,
    status: "in-progress",
  },
];

const statusLabel: Record<string, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  learning: "Learning",
  planned: "Planned",
};

const statusColor: Record<string, string> = {
  completed: "text-[#76b900]",
  "in-progress": "text-blue-400",
  learning: "text-blue-400",
  planned: "text-gray-600",
};

export default function Projects() {
  return (
    <section id="projects">
      <div className="space-y-12">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group"
          >
            <div className="flex items-start justify-between mb-2 gap-4">
              <h3 className="text-white font-semibold text-base group-hover:text-[#76b900] transition-colors duration-200">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 shrink-0 pt-0.5">
                <span className={`text-xs tracking-wider ${statusColor[project.status]}`}>
                  {statusLabel[project.status]}
                </span>
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#76b900] transition-colors duration-200">
                    <Github size={15} />
                  </a>
                ) : (
                  <ArrowUpRight size={15} className="text-gray-800" />
                )}
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm text-[#76b900] border border-[#76b900]/50 bg-[#76b900]/10 px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
