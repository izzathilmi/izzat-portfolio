"use client";

import { useEffect, useState } from "react";

const TICK_MS = 1200;
const BARS = 5;
const HEX_LEN = 10;

function randomHex() {
  return Array.from({ length: HEX_LEN }, () => "0123456789ABCDEF"[Math.floor(Math.random() * 16)]).join(" ");
}

function mytTime() {
  return new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Kuala_Lumpur", hour: "2-digit", minute: "2-digit" });
}

type State = { up: number; down: number; signal: number; hex: string; time: string };

/** Decorative uplink HUD: a link to the Jetson node on the desk. Numbers wander; reduced motion freezes them. */
export default function HudPanel() {
  const [s, setS] = useState<State>({ up: 812, down: 137, signal: 4, hex: "4 B 7 6 E 2 0 2 D B", time: "--:--" });

  useEffect(() => {
    const tick = () =>
      setS({
        up: 780 + Math.floor(Math.random() * 120),
        down: 120 + Math.floor(Math.random() * 40),
        signal: 3 + Math.floor(Math.random() * 3),
        hex: randomHex(),
        time: mytTime(),
      });
    tick();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(tick, TICK_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col items-end gap-2 font-pixel text-[10px] uppercase tracking-[0.2em] text-white/55">
      <p className="mb-1 font-sans text-xl font-semibold normal-case tracking-[0.15em] text-[#f3e6d0]">MEMBINA</p>
      <div className="h-px w-48 bg-white/15" />
      <div className="flex items-end gap-3">
        <span className="flex items-end gap-[3px]" aria-hidden>
          {Array.from({ length: BARS }, (_, i) => (
            <span
              key={i}
              className={i < s.signal ? "bg-[#f0a43a]" : "bg-white/15"}
              style={{ width: 4, height: 5 + i * 4 }}
            />
          ))}
        </span>
        <span>uplink</span>
      </div>
      <p className="tabular-nums">↑ {s.up} &nbsp; ↓ {s.down}</p>
      <p className="flex items-center gap-2">
        kbps <span className="h-1.5 w-1.5 rounded-full bg-[#76b900]" /> connected
      </p>
      <div className="h-px w-48 bg-white/15" />
      <p className="tracking-[0.35em] text-white/35">{s.hex}</p>
      <p className="flex items-center gap-2 text-white/45">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/50" /> syncing node // jetson · {s.time} myt
      </p>
    </div>
  );
}
