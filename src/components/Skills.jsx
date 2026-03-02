import { skills } from "../data/resume";
import ScrollReveal from "./ScrollReveal";
import GlowBorder from "./GlowBorder";
import BGPattern from "./BGPattern";

const categoryColors = {
  Languages: "border-blue-500/30 text-blue-400",
  Frameworks: "border-purple-500/30 text-purple-400",
  "Cloud & Infra": "border-orange-500/30 text-orange-400",
  Databases: "border-green-500/30 text-green-400",
  Tools: "border-yellow-500/30 text-yellow-400",
  Expertise: "border-accent/30 text-accent",
};

const categoryIcons = {
  Languages: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  Frameworks: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  "Cloud & Infra": "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  Databases: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4",
  Tools: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  Expertise: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 noise-grain">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="font-mono text-4xl font-bold text-accent mb-12">
            <span className="text-accent">{"#"}</span> Skills
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <ScrollReveal key={category} delay={catIndex * 100}>
              <GlowBorder className="h-full">
                <div className="relative overflow-hidden bg-dark-700/30 border border-dark-600/50 rounded-lg p-5 h-full transition-transform duration-200 hover:-translate-y-1">
                  <BGPattern variant="dots" mask="fade-edges" />
                  <div className="relative z-1">
                    <div className="flex items-center gap-2 mb-4">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={categoryIcons[category] || categoryIcons.Tools} />
                      </svg>
                      <h3 className="font-mono text-sm font-semibold text-white uppercase tracking-wider">
                        {category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 text-sm rounded-full border bg-dark-800/50
                            hover:bg-dark-700/50 transition-all duration-200 cursor-default
                            ${categoryColors[category] || "border-gray-600 text-gray-300"}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowBorder>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
