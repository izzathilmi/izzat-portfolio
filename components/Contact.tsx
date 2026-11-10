import { ArrowUpRight, FileText } from "lucide-react";
import Section, { Panel } from "./sections/Section";

const LINKS = [
  { label: "Email", value: "izzathilmi54321@gmail.com", href: "mailto:izzathilmi54321@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/izzathilmi98", href: "https://www.linkedin.com/in/izzathilmi98/" },
  { label: "GitHub", value: "github.com/izzathilmi", href: "https://github.com/izzathilmi" },
  { label: "Shop", value: "izzatbuilds.gumroad.com", href: "https://izzatbuilds.gumroad.com" },
];

export default function Contact() {
  return (
    <Section id="contact" index="05" label="contact" title="Say hi">
      <Panel className="lg:!p-12">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-[15px] leading-relaxed text-white/70">
              Open to process and automation conversations, AI-for-manufacturing ideas, and side-project collabs. If
              you&apos;re fixing something on a production line, I probably want to hear about it.
            </p>
            <a
              href="/muhammad_izzat_hilmi_resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#f3e6d0] transition hover:border-[#f0a43a]/60"
            >
              <FileText size={14} aria-hidden /> Resume
            </a>
          </div>
          <ul className="divide-y divide-white/10">
            {LINKS.map(({ label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4"
                >
                  <span className="w-20 font-pixel text-[10px] uppercase tracking-[0.25em] text-white/40">{label}</span>
                  <span className="flex-1 truncate text-sm text-white/75 transition group-hover:text-[#f3e6d0]">{value}</span>
                  <ArrowUpRight size={15} className="text-white/30 transition group-hover:text-[#f0a43a]" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Panel>
    </Section>
  );
}
