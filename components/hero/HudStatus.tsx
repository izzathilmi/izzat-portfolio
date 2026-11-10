"use client";

import { useEffect, useState } from "react";

const TZ = "Asia/Kuala_Lumpur";
const NIGHT_FROM = 23;
const NIGHT_TO = 7;

function mytNow() {
  const now = new Date();
  const time = now.toLocaleTimeString("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const hour = Number(now.toLocaleString("en-GB", { timeZone: TZ, hour: "2-digit", hour12: false }));
  return { time, hour };
}

/** Bottom-right HUD: live Malaysia time and Oyen's status (same night window as the phone wallpaper). */
export default function HudStatus() {
  const [now, setNow] = useState<{ time: string; hour: number } | null>(null);

  useEffect(() => {
    setNow(mytNow());
    const t = setInterval(() => setNow(mytNow()), 1000);
    return () => clearInterval(t);
  }, []);

  const night = now ? now.hour >= NIGHT_FROM || now.hour < NIGHT_TO : true;
  const rows: [string, string][] = [
    ["local", now ? `${now.time} MYT` : "--:--:-- MYT"],
    ["oyen", night ? "asleep (night shift)" : "asleep (nap)"],
    ["arm", "idle · homed"],
    ["weather", "rain"],
  ];

  return (
    <dl className="grid grid-cols-[auto_auto] gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-white/35">{k}</dt>
          <dd className="text-right text-[#f3e6d0]/80 tabular-nums">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
