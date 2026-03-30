import CursorGlow from "@/components/CursorGlow";
import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-gray-700 uppercase tracking-[0.3em] mb-10">{children}</p>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] flex">
      <CursorGlow />
      <Sidebar />

      {/* Spacer matching the fixed sidebar width */}
      <div className="w-[38%] shrink-0" />

      {/* Right scrollable content */}
      <div className="flex-1 px-14 pt-36 pb-20 space-y-32">
        <div id="about" className="scroll-mt-36">
          <SectionLabel>About</SectionLabel>
          <About />
        </div>

        <div id="journey" className="scroll-mt-36">
          <SectionLabel>Experience</SectionLabel>
          <Journey />
        </div>

        <div id="projects" className="scroll-mt-36">
          <SectionLabel>Projects</SectionLabel>
          <Projects />
        </div>

        <div id="skills" className="scroll-mt-36">
          <SectionLabel>Skills</SectionLabel>
          <Skills />
        </div>

        <div id="contact" className="scroll-mt-36">
          <SectionLabel>Contact</SectionLabel>
          <Contact />
        </div>
      </div>
    </main>
  );
}
