import { projects } from "../data/resume";
import ScrollReveal from "./ScrollReveal";
import GlowBorder from "./GlowBorder";
import BGPattern from "./BGPattern";
import ProjectCarousel from "./ProjectCarousel";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 noise-grain">
      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal>
          <h2 className="font-mono text-4xl font-bold text-accent mb-12">
            <span className="text-accent">{"#"}</span> Projects
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <ProjectCarousel>
            {projects.map((project, i) => (
              <div key={i} className="w-[320px] md:w-[480px] shrink-0">
                <GlowBorder className="h-full">
                  <div
                    className="relative overflow-hidden bg-dark-700/30 border border-dark-600/30 rounded-lg p-6
                      flex flex-col h-[520px] transition-transform duration-200 hover:-translate-y-1"
                  >
                    <BGPattern variant="dots" mask="fade-edges" />
                    {/* Header */}
                    <div className="relative z-1 flex items-start justify-between mb-4">
                      <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                      </svg>
                      <div className="flex gap-3">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-accent transition-colors"
                            aria-label="Live demo"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-accent transition-colors"
                          aria-label="GitHub repo"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <h3 className="relative z-1 font-mono text-lg font-semibold text-white mb-3">{project.title}</h3>

                    <ul className="relative z-1 space-y-2 mb-6 flex-grow">
                      {project.bullets.map((bullet, j) => (
                        <li key={j} className="text-gray-300 text-sm leading-relaxed flex gap-2">
                          <span className="text-accent mt-1 shrink-0">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech badges */}
                    <div className="relative z-1 flex flex-wrap gap-2 mt-auto pt-4 border-t border-dark-600/30">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-accent/80 bg-accent/10 px-2 py-1 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlowBorder>
              </div>
            ))}
          </ProjectCarousel>
        </ScrollReveal>
      </div>
    </section>
  );
}
