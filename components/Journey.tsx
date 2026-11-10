import Section from "./sections/Section";

type Status = "current" | "active" | "past" | "planned";

const timeline: { period: string; title: string; company: string; points: string[]; status: Status }[] = [
  {
    period: "Sep 2026 — Now",
    title: "Process Engineer",
    company: "Greatech Technology Berhad · Engineering · Penang",
    points: [
      "In charge of fabrication and assembly processes for a mass-production line, from fabricated parts to high-level assembly",
      "Builds the process documentation, work instructions and issue tracking that keep fabrication and assembly running to spec",
      "Industrial engineering: plans and edits production layouts in ZWCAD",
    ],
    status: "current",
  },
  {
    period: "Apr 2025 — Aug 2026",
    title: "Technical Support Engineer E2",
    company: "Greatech Technology Berhad · Penang",
    points: [
      "Authored and maintained FMEA documentation to identify hardware risks early, reducing post-installation failures",
      "Developed standard work instructions and assembly briefings so technicians follow precise alignment protocols",
      "Managed full lifecycle documentation from in-house assembly and I/O checking through to onsite commissioning",
    ],
    status: "past",
  },
  {
    period: "Jan 2022 — Apr 2025",
    title: "Technical Support Engineer E1",
    company: "Greatech Technology Berhad · Penang",
    points: [
      "Commissioned and installed high-precision automation machinery onsite for EV production lines",
      "Optimised machine process tools and mechanical alignments, cutting cycle time by 15%",
      "Developed standardised alignment checklists and work instructions adopted across the team",
    ],
    status: "past",
  },
  {
    period: "2024 — Now",
    title: "AI Tools for Manufacturing",
    company: "Self-directed · Work & personal",
    points: [
      "Machine downtime alert + HMI dashboard: live machine status for the floor, Telegram and Teams alerts on stoppages, recognised by management",
      "Edge AI and automation experiments on an always-on NVIDIA Jetson at home",
    ],
    status: "active",
  },
];

const BADGE: Partial<Record<Status, string>> = { current: "current", active: "ongoing" };

export default function Journey() {
  return (
    <Section id="journey" index="02" label="experience" title="From commissioning to process">
      <ol className="relative space-y-6 border-l border-white/10 pl-6 lg:pl-10">
        {timeline.map((item) => (
          <li key={item.title} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[29px] top-2 h-2.5 w-2.5 rounded-full lg:-left-[45px] ${
                item.status === "current" ? "bg-[#76b900] shadow-[0_0_12px_#76b900]" : item.status === "active" ? "bg-[#f0a43a]" : "bg-white/25"
              }`}
            />
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/20 hover:bg-white/[0.05] lg:p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">{item.period}</p>
                {BADGE[item.status] && (
                  <span className="rounded-full border border-[#76b900]/30 bg-[#76b900]/10 px-2.5 py-0.5 font-pixel text-[10px] uppercase tracking-[0.2em] text-[#9fd35a]">
                    {BADGE[item.status]}
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-[#f3e6d0]">{item.title}</h3>
              <p className="mt-1 text-xs tracking-wide text-white/40">{item.company}</p>
              <ul className="mt-4 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-white/65">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#f0a43a]/70" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
