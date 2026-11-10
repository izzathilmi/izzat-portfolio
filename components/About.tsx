import Section, { Panel } from "./sections/Section";

const STATS = [
  { value: "5 yrs", label: "at Greatech, Penang" },
  { value: "Sep '26", label: "Process Engineer" },
  { value: "15%", label: "cycle-time cut on EV line" },
  { value: "4", label: "self-built shop-floor tools" },
];

const hl = "text-[#f3e6d0]";
const accent = "text-[#f0a43a]";

export default function About() {
  return (
    <Section id="about" index="01" label="about" title="Process engineer who builds his own tools">
      <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
        <Panel>
          <div className="space-y-5 text-[15px] leading-relaxed text-white/70">
            <p>
              I&apos;m a <span className={hl}>Process Engineer</span> at Greatech, a precision custom machine builder in
              Penang. Since September 2026 I&apos;m in charge of <span className={hl}>fabrication and assembly</span>{" "}
              processes for mass production, from fabricated parts through to high-level assembly.
            </p>
            <p>
              Before that I spent four years as a Technical Support Engineer: commissioning machines onsite for EV and
              semiconductor lines, writing FMEA and work instructions, and chasing root causes on the floor.
            </p>
            <p>
              On the side I build the tools I wish the floor had: a{" "}
              <span className={accent}>machine downtime alert system</span>, an{" "}
              <span className={accent}>HMI monitoring dashboard</span>, and an{" "}
              <span className={accent}>AI Coworker</span> that answers questions from SOPs and machine history, all
              without a software team. Night shift in the build lab, Oyen supervising.
            </p>
          </div>
        </Panel>
        <div className="grid grid-cols-2 gap-4">
          {STATS.map(({ value, label }) => (
            <Panel key={label} className="flex flex-col justify-between !p-5">
              <p className="font-pixel text-2xl text-[#f3e6d0]">{value}</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">{label}</p>
            </Panel>
          ))}
        </div>
      </div>
    </Section>
  );
}
