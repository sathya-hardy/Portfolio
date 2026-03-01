export default function GlowBorder({ children, className = "" }) {
  return (
    <div className={`glow-border ${className}`}>
      <span className="glow-border__glow" />
      <div className="glow-border__content">{children}</div>
    </div>
  );
}
