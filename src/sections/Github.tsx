import RepoCard from "../components/RepoCard";
import { getRepos } from "../lib/github";

const GITHUB_USERNAME = "codepro233";

export default async function Github() {
  const repos = await getRepos();

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold mb-12">
          GitHub Activity
        </h2>

        {/* Contribution graph */}
        <div className="flex justify-center mb-20 overflow-x-auto">
          <img
            src={`https://ghchart.rshah.org/06b6d4/${GITHUB_USERNAME}`}
            alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
            className="max-w-full rounded-2xl"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {repos.slice(0, 6).map((repo: any) => (
            <RepoCard
              key={repo.id}
              name={repo.name}
              language={repo.language}
              url={repo.html_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
