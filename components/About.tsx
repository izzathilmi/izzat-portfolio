"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <blockquote className="text-white text-lg font-medium leading-relaxed mb-10 italic">
          &ldquo;Build things. Break things. Learn fast. Repeat.&rdquo;
        </blockquote>

        <div className="space-y-5 text-gray-400 text-sm leading-loose">
          <p>
            I&apos;m a <span className="text-white">Technical Support Engineer</span> with 4 years in
            industrial automation based in Penang, Malaysia. Day to day, I handle equipment commissioning,
            technical documentation, and process support — keeping machines running and properly documented.
          </p>
          <p>
            I also build things on the side. I self-initiated a{" "}
            <span className="text-[#76b900]">real-time machine downtime alert system</span> at work —
            no software background, just a problem worth solving. Now I use{" "}
            <span className="text-[#76b900]">AI tools</span> daily to accelerate documentation workflows
            and knowledge management.
          </p>
          <p>
            My bigger goal: <span className="text-[#76b900]">humanoid robotics</span>. I&apos;m learning
            Computer Vision and building a prototype with NVIDIA Jetson Orin Nano. I believe the future
            of intelligent machines starts with engineers who understand both the hardware and the software.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
