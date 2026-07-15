"use client";

interface Props {
  title: string;
  frontText: string;
  backText: string;
}

export default function FlipCard({ title, frontText, backText }: Props) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">

        {/* FRONT */}
        <div className="flip-front card">
          <div className="text-center px-6">
            <h3 className="text-3xl font-bold" style={{ color: "var(--fg)" }}>
              {title}
            </h3>
            <p className="mt-4 text-muted">
              {frontText}
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-back bg-cyan-500/20 border border-cyan-400 backdrop-blur-xl">
          <div className="text-center px-6">
            <p style={{ color: "var(--fg)" }}>{backText}</p>
          </div>
        </div>

      </div>
    </div>
  );
}