"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ShoppingBag, ArrowDown } from "lucide-react";
import scene from "@/assets/buildlab.webp";
import RainCanvas from "./RainCanvas";
import HudStatus from "./HudStatus";

const PARALLAX_PX = 14;

const LINKS = [
  { label: "GitHub", href: "https://github.com/izzathilmi", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/izzathilmi98/", Icon: Linkedin },
  { label: "Shop", href: "https://izzatbuilds.gumroad.com", Icon: ShoppingBag },
  { label: "Email", href: "mailto:izzathilmi54321@gmail.com", Icon: Mail },
];

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

export default function CinematicHero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  useParallax(sceneRef);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-[#05070a]">
      {/* Scene */}
      {/* Phones: scene fills the top 70% so Oyen and the arm sit above the card */}
      <div ref={sceneRef} className="absolute inset-x-0 top-0 h-[70%] scale-[1.04] transition-transform duration-300 ease-out lg:inset-0 lg:h-full">
        <Image
          src={scene}
          alt="Late-night build lab: monitors with code and a factory dashboard, an orange robot arm, and Oyen the cat asleep on the desk while it rains outside"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[70%_center] lg:object-center"
        />
        {/* Desk lamp glow, flickers softly */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#05070a] to-transparent lg:hidden" />
        <div className="lamp-flicker pointer-events-none absolute left-[28%] top-[13%] h-[45%] w-[30%] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(255,180,90,0.35),transparent)] mix-blend-screen" />
      </div>

      <RainCanvas />

      {/* Readability gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-black/40 lg:bg-gradient-to-r lg:from-black/85 lg:via-black/35 lg:to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      <div className="grain pointer-events-none absolute inset-0" />

      {/* Top bar */}
      <header className="absolute inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 lg:px-10">
        <span>izzathilmii.my</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#76b900]" /> online
        </span>
      </header>

      {/* Glass card */}
      <div
        className="hero-rise absolute inset-x-4 bottom-14 z-10 rounded-2xl border border-white/10 bg-black/35 p-6 backdrop-blur-md sm:inset-x-auto sm:left-8 sm:max-w-md lg:bottom-auto lg:left-16 lg:top-1/2 lg:-translate-y-1/2 lg:p-8"
      >
        <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#f0a43a]">// builder · night shift</p>
        <h1 className="font-mono text-3xl font-semibold tracking-tight text-[#f3e6d0] lg:text-4xl">Izzat Hilmi</h1>
        <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/60">
          Applied AI · Industrial Automation
        </p>
        <p className="mt-5 text-sm leading-relaxed text-white/75">
          I build AI that runs on real machines, from factory HMIs to a Jetson on my desk. Oyen supervises.
        </p>
        <p className="mt-4 font-mono text-xs text-[#9fb7c4]">
          &gt; currently building<span className="cursor-blink">_</span>
        </p>
        <nav className="mt-6 flex flex-wrap gap-2" aria-label="Links">
          {LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-white/80 transition hover:border-[#f0a43a]/60 hover:text-[#f3e6d0]"
            >
              <Icon size={13} aria-hidden /> {label}
            </a>
          ))}
        </nav>
      </div>

      {/* HUD, desktop */}
      <div className="absolute right-10 top-16 z-10 hidden rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm lg:block">
        <HudStatus />
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white/70"
      >
        scroll <ArrowDown size={12} className="animate-bounce" />
      </a>
    </section>
  );
}
