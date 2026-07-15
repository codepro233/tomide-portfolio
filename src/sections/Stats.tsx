import { getRepos } from "../lib/github";

export default async function Stats() {
  const repos = await getRepos();

  const stats = [
    {
      value: "5",
      title: "Live Projects",
    },
    {
      value: "2024",
      title: "Building Since",
    },
    {
      value: `${repos.length}`,
      title: "Public Repos",
    },
    {
      value: "3",
      title: "AI-Powered Apps",
    },
  ];

  return (
    <section className="py-32">
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        grid-cols-2
        lg:grid-cols-4
        gap-10
        "
      >
        {stats.map((item) => (
          <div
            key={item.title}
            className="
            p-10
            rounded-3xl
            bg-white/10
            text-center
            "
          >
            <h3
              className="
              text-5xl
              font-bold
              text-cyan-400
              "
            >
              {item.value}
            </h3>

            <p className="mt-4">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
