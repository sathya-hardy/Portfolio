export default function GlowBorder({ children, className = "" }) {
  return (
    <div className={`glow-border h-full ${className}`}>
      <span className="glow-border__glow" />
      <div className="glow-border__content h-full">{children}</div>
    </div>
  );
}
