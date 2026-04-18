"use client";

import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Machine Downtime Alert System",
    description: "Self-initiated real-time monitoring system that detects machine status changes and instantly notifies teams via Telegram and Microsoft Teams. Built without a software background — recognized by management and awarded for measurable impact on response time to production stoppages.",
    tags: ["Python", "Telegram API", "Teams Webhooks", "Automation"],
    github: null,
    status: "completed",
  },
  {
    title: "HMI Monitor Dashboard",
    description: "Real-time web dashboard providing live visibility into machine HMI states across the production floor. Eliminates manual floor walks for status checks and enables faster intervention when equipment goes down.",
    tags: ["Next.js", "Python", "Real-time", "Dashboard"],
    github: null,
    status: "completed",
  },
  {
    title: "AI Coworker System",
    description: "AI-powered assistant for engineering teams that enables conversational querying of technical documents, SOPs, and machine history. Submitted to Greatech Innovation Council (EXCO review, April 2026). Built on local LLMs to protect proprietary data.",
    tags: ["Python", "Ollama", "LLM", "RAG", "Engineering Tools"],
    github: null,
    status: "in-progress",
  },
  {
    title: "Jetson Edge AI Platform",
    description: "Personal R&D platform built on NVIDIA Jetson Orin Nano. Running always-on AI services, automation agents, and edge inference experiments. Foundation for future intelligent systems work.",
    tags: ["NVIDIA Jetson", "Edge AI", "Linux", "Automation"],
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
