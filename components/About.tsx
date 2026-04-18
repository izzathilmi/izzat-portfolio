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
            I&apos;m a <span className="text-white">Technical Support Engineer</span> with 4+ years
            at a precision custom machine builder in Penang. My work spans machine commissioning, FMEA,
            root cause analysis, and full lifecycle technical documentation — from in-house build through
            to onsite installation at EV and semiconductor production lines.
          </p>
          <p>
            I don&apos;t just maintain systems — I improve them. I self-initiated a{" "}
            <span className="text-[#76b900]">real-time machine downtime alert system</span>, built an{" "}
            <span className="text-[#76b900]">HMI monitoring dashboard</span> for live floor visibility, and
            developed an{" "}
            <span className="text-[#76b900]">AI Coworker platform</span> that lets engineers query technical
            documents through a conversational interface — all without a software team behind me.
          </p>
          <p>
            I believe the best engineers combine deep domain knowledge with the ability to build tools that
            make the whole team faster. That&apos;s the kind of engineer I&apos;m becoming.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
