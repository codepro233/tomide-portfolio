import { timeline } from "../data/timeline";

export default function Timeline() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-20">Journey</h2>

        <div className="space-y-12">
          {timeline.map((item) => (
            <div key={item.year} className="border-l-2 border-cyan-400 pl-10">
              <h3 className="text-cyan-400 font-semibold">{item.year}</h3>

              <p className="text-2xl mt-2 font-bold" style={{ color: "var(--fg)" }}>
                {item.title}
              </p>

              <p className="mt-3 text-muted leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
