import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import CinematicHero from "@/components/hero/CinematicHero";
import BootScreen from "@/components/hero/BootScreen";

export default function Home() {
  return (
    <>
      <BootScreen />
      <CinematicHero />
      <main className="relative bg-[#0a0a0a]">
        {/* Faint teal/amber wash so the sections feel like the same room as the hero */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_40%_at_85%_0%,rgba(40,90,110,0.18),transparent),radial-gradient(50%_30%_at_10%_60%,rgba(240,164,58,0.06),transparent)]"
        />
        <div className="relative mx-auto max-w-5xl space-y-28 px-5 py-24 lg:space-y-36 lg:px-8 lg:py-32">
          <About />
          <Journey />
          <Projects />
          <Skills />
          <Contact />
        </div>
        <footer className="relative border-t border-white/10 py-8 text-center font-pixel text-[10px] uppercase tracking-[0.3em] text-white/30">
          izzathilmii.my · built at night · oyen approved
        </footer>
      </main>
    </>
  );
}
