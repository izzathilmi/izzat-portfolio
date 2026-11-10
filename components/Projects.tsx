import Section, { Tag } from "./sections/Section";

type Status = "shipped" | "building";

const projects: { title: string; kind: string; description: string; tags: string[]; status: Status }[] = [
  {
    title: "Machine Downtime Alert System",
    kind: "Shop floor",
    description:
      "Detects machine status changes in real time and notifies the team on Telegram and Microsoft Teams. Self-initiated, recognised by management for cutting response time to production stoppages.",
    tags: ["Python", "Telegram API", "Teams Webhooks"],
    status: "shipped",
  },
  {
    title: "HMI Monitor Dashboard",
    kind: "Shop floor",
    description:
      "Live web view of machine HMI states across the production floor, so nobody has to walk the line to check status.",
    tags: ["Next.js", "Python", "Real-time"],
    status: "shipped",
  },
  {
    title: "AI Coworker",
    kind: "Edge AI",
    description:
      "Engineers ask questions about SOPs and machine history in plain language. Phase 1 RAG prototype runs on a Jetson with local models so proprietary data never leaves the site. Submitted to the Greatech Innovation Council.",
    tags: ["RAG", "Local LLM", "FAISS + BM25", "Jetson"],
    status: "building",
  },
  {
    title: "Jetson Edge AI Platform",
    kind: "Lab",
    description:
      "Always-on NVIDIA Jetson Orin Nano at home running automation agents, bots and edge inference experiments. The bench where most of my ideas get tested first.",
    tags: ["NVIDIA Jetson", "Linux", "Edge AI"],
    status: "building",
  },
  {
    title: "Oyen Live Wallpaper",
    kind: "Side build",
    description:
      "Android live wallpaper of my cat Oyen: AI video clips generated locally with Wan 2.2, tap him for a reaction, he sleeps 11 pm to 7 am. Adapts to foldable inner screens.",
    tags: ["Kotlin", "Wan 2.2", "ComfyUI"],
    status: "shipped",
  },
];

const STATUS_STYLE: Record<Status, string> = {
  shipped: "border-[#76b900]/30 bg-[#76b900]/10 text-[#9fd35a]",
  building: "border-[#f0a43a]/30 bg-[#f0a43a]/10 text-[#f0a43a]",
};

export default function Projects() {
  return (
    <Section id="projects" index="03" label="projects" title="Things I built after hours">
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`group flex flex-col rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.015] p-6 transition hover:-translate-y-0.5 hover:border-[#f0a43a]/35 lg:p-7 ${
              i === projects.length - 1 && projects.length % 2 === 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">{p.kind}</p>
              <span className={`rounded-full border px-2.5 py-0.5 font-pixel text-[10px] uppercase tracking-[0.2em] ${STATUS_STYLE[p.status]}`}>
                {p.status}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#f3e6d0] transition group-hover:text-[#f0a43a]">{p.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{p.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
