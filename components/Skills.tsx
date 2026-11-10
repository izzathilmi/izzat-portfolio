import Section, { Panel, Tag } from "./sections/Section";

const groups = [
  {
    label: "Process & industrial eng.",
    items: ["Fabrication processes", "Assembly / HLA", "Layout planning (ZWCAD)", "Work instructions & SOP", "FMEA", "Root cause analysis", "Process improvement"],
  },
  {
    label: "Machines & floor",
    items: ["Machine commissioning", "Onsite installation", "Mechanical alignment", "Troubleshooting", "I/O checking"],
  },
  {
    label: "AI & automation",
    items: ["Local LLMs", "LLM workflows", "Telegram / Teams bots", "OpenCV", "ComfyUI"],
  },
  {
    label: "Code & data",
    items: ["Python", "TypeScript", "Next.js", "Pandas", "Advanced Excel", "Log & trend analysis"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "Linux", "NVIDIA Jetson", "VS Code", "Obsidian"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" index="04" label="skills" title="Floor skills, plus a toolbox">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g) => (
          <Panel key={g.label} className="!p-6">
            <p className="mb-4 font-pixel text-[11px] uppercase tracking-[0.25em] text-[#f0a43a]">{g.label}</p>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <Tag key={i}>{i}</Tag>
              ))}
            </div>
          </Panel>
        ))}
      </div>
    </Section>
  );
}
