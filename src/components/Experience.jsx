import { experience, education } from "../data/resume";
import ScrollReveal from "./ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-dark-800/30 radial-mesh">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="font-mono text-3xl font-bold text-white mb-2">
            <span className="text-accent">{"#"}</span> Experience
          </h2>
          <div className="w-20 h-0.5 bg-accent mb-12" />
        </ScrollReveal>

        {/* Work Experience Timeline */}
        <div className="relative pl-10 space-y-12">
          <div className="timeline-line" />

          {experience.map((job, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="relative">
                {/* Dot */}
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-accent border-4 border-dark-900" />

                <div className="bg-dark-700/30 border border-dark-600/30 rounded-lg p-6 glow-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="font-mono text-lg font-semibold text-white">{job.role}</h3>
                      <p className="text-accent">{job.company}</p>
                    </div>
                    <div className="text-sm text-gray-400 mt-1 md:mt-0 md:text-right">
                      <p>{job.dates}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="text-gray-300 text-sm leading-relaxed flex gap-2">
                        <span className="text-accent mt-1 shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Education */}
        <ScrollReveal delay={100}>
          <h3 className="font-mono text-2xl font-bold text-white mt-16 mb-2">
            <span className="text-accent">{"#"}</span> Education
          </h3>
          <div className="w-20 h-0.5 bg-accent mb-8" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 150 + 200}>
              <div className="bg-dark-700/30 border border-dark-600/30 rounded-lg p-6 glow-hover flex gap-4 items-start h-full">
                <img
                  src={edu.logo}
                  alt={edu.school}
                  className="w-14 h-14 object-contain rounded-lg bg-white/10 p-1 shrink-0"
                />
                <div>
                  <h4 className="font-mono text-lg font-semibold text-white">{edu.school}</h4>
                  <p className="text-accent text-sm">{edu.degree}</p>
                  {edu.gpa && <p className="text-gray-300 text-sm">{edu.gpa}</p>}
                  <div className="text-sm text-gray-400 mt-1">
                    <span>{edu.dates}</span> · <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
