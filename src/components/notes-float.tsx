const NOTES = [
  { glyph: "♪", top: "6%", left: "4%", size: "1.4rem", delay: "0s", duration: "6s" },
  { glyph: "♫", top: "14%", left: "88%", size: "1.7rem", delay: "1.2s", duration: "7s" },
  { glyph: "♩", top: "58%", left: "-2%", size: "1.2rem", delay: "2.4s", duration: "5.5s" },
  { glyph: "♬", top: "72%", left: "92%", size: "1.5rem", delay: "0.6s", duration: "6.5s" },
  { glyph: "♪", top: "38%", left: "98%", size: "1.1rem", delay: "3s", duration: "5s" },
];

export function NotesFloat({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
    >
      {NOTES.map((n, i) => (
        <span
          key={i}
          className="note-float absolute select-none font-display text-coral-bright/70"
          style={{
            top: n.top,
            left: n.left,
            fontSize: n.size,
            animationDelay: n.delay,
            animationDuration: n.duration,
          }}
        >
          {n.glyph}
        </span>
      ))}
    </div>
  );
}
