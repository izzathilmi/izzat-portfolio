"use client";

import { motion } from "framer-motion";

/** Shared section shell: HUD-style index label, title, and a soft reveal on scroll. */
export default function Section({
  id,
  index,
  label,
  title,
  children,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-8 flex items-center gap-4 font-pixel text-[11px] uppercase tracking-[0.3em] text-white/45">
          <span className="text-[#f0a43a]">{index}</span>
          <span>// {label}</span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
        </div>
        <h2 className="mb-10 font-pixel text-2xl text-[#f3e6d0] lg:text-3xl">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}

/** Frosted panel matching the hero name card. */
export function Panel({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-6 lg:p-8 ${className}`}>
      {children}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-white/65">
      {children}
    </span>
  );
}
