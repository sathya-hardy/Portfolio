import { skills } from "../data/resume";
import ScrollReveal from "./ScrollReveal";

const categoryColors = {
  Languages: "border-blue-500/30 text-blue-400",
  Frameworks: "border-purple-500/30 text-purple-400",
  "Cloud & Infra": "border-orange-500/30 text-orange-400",
  Databases: "border-green-500/30 text-green-400",
  Tools: "border-yellow-500/30 text-yellow-400",
  Expertise: "border-accent/30 text-accent",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <ScrollReveal key={category} delay={catIndex * 100}>
              <div className="space-y-3">
                <h3 className="font-mono text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  {category}
                </h3>
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
