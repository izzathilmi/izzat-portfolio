"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_MS = 1400;
const SEEN_KEY = "boot-seen";
const LINES = ["> booting izzathilmii.my", "> loading build lab", "> waking oyen... (he refused)"];

function alreadySeen(): boolean {
  try {
    return sessionStorage.getItem(SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(SEEN_KEY, "1");
  } catch {
    /* private mode: boot again next visit, harmless */
  }
}

/** Short boot overlay, once per session. Never blocks: auto-dismisses and any click/key skips it. */
export default function BootScreen() {
  const [show, setShow] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (alreadySeen() || reduce) return;
    setShow(true);
    const started = performance.now();
    const timer = setInterval(() => {
      const p = Math.min(100, Math.round(((performance.now() - started) / BOOT_MS) * 100));
      setPct(p);
      if (p >= 100) {
        clearInterval(timer);
        setTimeout(() => setShow(false), 250);
      }
    }, 40);
    const skip = () => setShow(false);
    window.addEventListener("keydown", skip, { once: true });
    window.addEventListener("pointerdown", skip, { once: true });
    markSeen();
    return () => {
      clearInterval(timer);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  const visibleLines = LINES.slice(0, Math.ceil((pct / 100) * LINES.length) || 1);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="boot"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05070a] font-mono"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-72 text-xs text-[#9fb7c4]">
            <p className="mb-4 text-4xl tabular-nums text-[#f3e6d0]">{pct}%</p>
            {visibleLines.map((l) => (
              <p key={l} className="leading-6">{l}</p>
            ))}
            <div className="mt-4 h-px w-full bg-white/10">
              <div className="h-px bg-[#f0a43a]" style={{ width: `${pct}%` }} />
            </div>
            <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/30">tap to skip</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
