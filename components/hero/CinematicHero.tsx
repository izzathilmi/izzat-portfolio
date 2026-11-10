"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ShoppingBag, LayoutGrid } from "lucide-react";
import scene from "@/assets/buildlab.webp";
import RainCanvas from "./RainCanvas";
import HudPanel from "./HudPanel";
import Typewriter from "./Typewriter";
import { TopBar, BottomBar } from "./FrameBars";

const PARALLAX_PX = 14;

const ACTIONS = [
  { label: "Projects", href: "#projects", Icon: LayoutGrid },
  { label: "GitHub", href: "https://github.com/izzathilmi", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/izzathilmi98/", Icon: Linkedin },
  { label: "Shop", href: "https://izzatbuilds.gumroad.com", Icon: ShoppingBag },
  { label: "Email", href: "mailto:izzathilmi54321@gmail.com", Icon: Mail },
];

const STATUS_LINES = ["Building on a Jetson tonight", "Open to automation + AI projects", "Oyen is on night shift"];

/** Moves the scene a few px against the pointer (fine pointers only, not for reduced motion). */
function useParallax(target: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = target.current;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!el || !finePointer || reduce) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * -PARALLAX_PX;
        const y = (e.clientY / window.innerHeight - 0.5) * -PARALLAX_PX;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(1.04)`;
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, [target]);
}

function NameCard() {
  return (
    <div className="hero-rise w-full max-w-xl rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl lg:p-12">
      <p className="font-pixel text-[11px] uppercase tracking-[0.25em] text-white/55 lg:text-xs">Automation &amp; AI Builder</p>
      <h1 className="mt-4 font-pixel text-3xl text-[#f3e6d0] lg:mt-6 lg:text-5xl">Izzat Hilmi</h1>
      <p className="mt-4 font-pixel text-[10px] uppercase leading-5 tracking-[0.2em] text-white/50 lg:text-[11px]">
        Technical Support Engineer
        <br />
        Industrial Automation · Edge AI ·
        <br />
        AI Tools for Manufacturing
      </p>
      <p className="mt-5 text-sm text-white/80 lg:mt-7 lg:text-base">AI that runs on real machines. Oyen supervises.</p>
      <nav className="mt-6 flex flex-wrap gap-2.5 lg:mt-8" aria-label="Links">
        {ACTIONS.map(({ label, href, Icon }, i) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`grid h-10 w-10 place-items-center rounded-full border transition lg:h-11 lg:w-11 ${
              i === 0 ? "border-white/35 bg-white/15 text-white" : "border-white/15 text-white/65 hover:border-[#f0a43a]/60 hover:text-[#f3e6d0]"
            }`}
          >
            <Icon size={16} aria-hidden />
          </a>
        ))}
      </nav>
      <p className="mt-6 font-pixel text-[11px] text-white/55 lg:mt-8 lg:text-xs">
        &gt; <Typewriter lines={STATUS_LINES} />
      </p>
    </div>
  );
}

export default function CinematicHero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  useParallax(sceneRef);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-[#05070a]">
      {/* Phones: scene fills the top 62% so Oyen and the arm sit above the card */}
      <div ref={sceneRef} className="absolute inset-x-0 top-0 h-[62%] scale-[1.04] transition-transform duration-300 ease-out lg:inset-0 lg:h-full">
        <Image
          src={scene}
          alt="Late-night build lab: monitors with code and a factory dashboard, an orange robot arm, and Oyen the cat asleep on the desk while it rains outside"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-center"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05070a] to-transparent lg:hidden" />
        <div className="lamp-flicker pointer-events-none absolute left-[28%] top-[13%] h-[45%] w-[30%] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(255,180,90,0.35),transparent)] mix-blend-screen" />
      </div>

      <RainCanvas />

      {/* Darken for readability, like a dim room */}
      <div className="pointer-events-none absolute inset-0 bg-black/25 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/30 lg:to-black/20" />
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Window frame */}
      <div className="absolute inset-2 z-10 flex flex-col rounded-2xl border border-white/15 lg:inset-6 lg:rounded-[28px]">
        <TopBar />
        <div className="relative flex flex-1 items-end p-3 pb-4 lg:items-center lg:px-12">
          <NameCard />
          <div className="absolute bottom-8 right-10 hidden lg:block">
            <HudPanel />
          </div>
        </div>
        <BottomBar />
      </div>
    </section>
  );
}
