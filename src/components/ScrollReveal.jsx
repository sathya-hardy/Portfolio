import useInView from "../hooks/useInView";

const directions = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
};

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const translate = directions[direction] || directions.up;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${translate}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
