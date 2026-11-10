"use client";

import { useEffect, useState } from "react";
import { Home, User, Briefcase, FolderGit2, Cpu, Mail, Maximize2, Minimize2 } from "lucide-react";
import SoundToggle from "./SoundToggle";

const NAV = [
  { label: "Home", href: "#top", Icon: Home },
  { label: "About", href: "#about", Icon: User },
  { label: "Experience", href: "#journey", Icon: Briefcase },
  { label: "Projects", href: "#projects", Icon: FolderGit2 },
  { label: "Skills", href: "#skills", Icon: Cpu },
  { label: "Contact", href: "#contact", Icon: Mail },
];

type BatteryLike = { level: number; addEventListener: (e: string, cb: () => void) => void; removeEventListener: (e: string, cb: () => void) => void };

/** Visitor's real battery where the Battery API exists (Chrome/Android), otherwise a full battery. */
function useBattery() {
  const [level, setLevel] = useState(100);
  useEffect(() => {
    const nav = navigator as Navigator & { getBattery?: () => Promise<BatteryLike> };
    if (!nav.getBattery) return;
    let battery: BatteryLike | null = null;
    const update = () => battery && setLevel(Math.round(battery.level * 100));
    nav
      .getBattery()
      .then((b) => {
        battery = b;
        update();
        b.addEventListener("levelchange", update);
      })
      .catch(() => {
        /* blocked by permissions policy: keep 100% */
      });
    return () => battery?.removeEventListener("levelchange", update);
  }, []);
  return level;
}

export function TopBar() {
  const level = useBattery();
  const cells = Math.max(1, Math.round(level / 20));
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 lg:px-10 lg:py-5">
      <div className="flex items-center gap-2 font-pixel text-[10px] text-white/55" aria-label={`Battery ${level}%`}>
        <span className="flex h-3.5 w-8 gap-[2px] rounded-[3px] border border-white/50 p-[2px]">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`flex-1 rounded-[1px] ${i < cells ? "bg-white/70" : ""}`} />
          ))}
        </span>
        {level}%
      </div>
      <nav className="flex gap-1.5 lg:gap-2.5" aria-label="Sections">
        {NAV.map(({ label, href, Icon }, i) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            className={`grid h-8 w-8 place-items-center rounded-full border transition lg:h-11 lg:w-11 ${
              i === 0 ? "border-white/40 bg-white/10 text-white" : "border-white/15 text-white/60 hover:border-white/40 hover:text-white"
            }`}
          >
            <Icon size={15} aria-hidden />
          </a>
        ))}
      </nav>
    </div>
  );
}

export function BottomBar() {
  const [full, setFull] = useState(false);
  useEffect(() => {
    const onChange = () => setFull(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);
  const toggle = () => {
    const req = full ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
    req?.catch(() => {
      /* fullscreen not allowed (e.g. iOS Safari): ignore */
    });
  };
  const Icon = full ? Minimize2 : Maximize2;
  return (
    <div className="flex items-center justify-between border-t border-white/10 px-4 py-3 text-white/50 lg:px-10 lg:py-5">
      <div className="flex items-center gap-4">
        <SoundToggle />
        <button type="button" onClick={toggle} aria-label={full ? "Exit fullscreen" : "Fullscreen"} className="hover:text-white">
          <Icon size={15} aria-hidden />
        </button>
      </div>
      <p className="text-[11px]">© {new Date().getFullYear()} Designed and built by Izzat Hilmi.</p>
    </div>
  );
}
