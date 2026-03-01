import { personal } from "../data/resume";
import ScrollReveal from "./ScrollReveal";
import GlowBorder from "./GlowBorder";
import BGPattern from "./BGPattern";

const funFacts = [
  { cmd: "cat interests.txt", output: "Football fanatic - Kevin de Bruyne is the GOAT" },
  { cmd: "cat watching.txt", output: "Binge-watching shows & anime - always accepting recommendations" },
  { cmd: "cat music.txt", output: "R&B and pop on repeat" },
  { cmd: "cat travels.log", output: "Exploring new cities whenever I can - collecting memories, not souvenirs" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-start justify-center pt-36 md:pt-44 dot-grid overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900/90 to-dark-900" />

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl orb-float" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl orb-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl orb-float-slow" />

      <div className="relative z-10 text-center px-6">
        {/* Terminal-style intro */}
        <div className="hero-stagger inline-block mb-6 px-4 py-2 rounded-lg bg-dark-700/50 border border-dark-600/50" style={{ animationDelay: "0.2s" }}>
          <span className="font-mono text-sm text-gray-500">
            <span className="text-accent">$</span> whoami
          </span>
        </div>

        <h1 className="hero-stagger font-mono font-bold text-5xl md:text-7xl text-white mb-4" style={{ animationDelay: "0.4s" }}>
          N C Sathya
        </h1>

        <div className="hero-stagger h-8 mb-8" style={{ animationDelay: "0.6s" }}>
          <span className="typing-effect font-mono text-xl md:text-2xl text-accent">
            Software Engineer
          </span>
        </div>

        <p className="hero-stagger text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed" style={{ animationDelay: "0.8s" }}>
          Full-stack engineer with experience building production SaaS at Oracle,
          designing AI agents, and shipping data-driven systems
        </p>

        {/* Social links */}
        <div className="hero-stagger flex gap-5 justify-center" style={{ animationDelay: "1s" }}>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-gray-400 hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>

        {/* Fun facts + Spotify — below the fold */}
        <div className="mt-16 max-w-3xl mx-auto">
          <ScrollReveal>
            <GlowBorder>
            <div className="relative overflow-hidden bg-dark-700/50 border border-dark-600/50 rounded-lg">
              <BGPattern variant="dots" mask="fade-edges" />
              <div className="relative z-1 flex items-center gap-2 px-4 py-2 bg-dark-700/80 border-b border-dark-600/50">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-500 font-mono">~/about-me</span>
              </div>
              <div className="p-4 space-y-3 font-mono text-sm text-left">
                {funFacts.map((fact, i) => (
                  <div key={i}>
                    <p className="text-gray-500">
                      <span className="text-accent">$</span> {fact.cmd}
                    </p>
                    <p className="text-gray-300 pl-2">{fact.output}</p>
                  </div>
                ))}
              </div>
            </div>
            </GlowBorder>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-8 flex justify-center">
              <GlowBorder className="max-w-md w-full">
              <div className="relative overflow-hidden bg-dark-700/50 border border-dark-600/50 rounded-lg p-4">
                <BGPattern variant="dots" mask="fade-edges" />
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg shrink-0 bg-gradient-to-br from-accent/30 via-purple-500/20 to-cyan-500/30 flex items-center justify-center">
                    <svg className="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Now vibing to</p>
                    <p className="text-white font-medium truncate">R&B & Pop</p>
                    <p className="text-gray-400 text-sm truncate">Mostly on repeat, no shame</p>
                  </div>
                  <div className="shrink-0">
                    <div className="flex items-end gap-0.5 h-4">
                      <span className="w-1 bg-accent rounded-full music-bar" style={{ animationDelay: "0s" }} />
                      <span className="w-1 bg-accent rounded-full music-bar" style={{ animationDelay: "0.2s" }} />
                      <span className="w-1 bg-accent rounded-full music-bar" style={{ animationDelay: "0.4s" }} />
                      <span className="w-1 bg-accent rounded-full music-bar" style={{ animationDelay: "0.1s" }} />
                      <span className="w-1 bg-accent rounded-full music-bar" style={{ animationDelay: "0.3s" }} />
                    </div>
                  </div>
                </div>
                <div className="mt-3 h-0.5 bg-dark-600/50 rounded-full overflow-hidden">
                  <div className="h-full bg-accent/60 rounded-full spotify-progress" />
                </div>
              </div>
              </GlowBorder>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
