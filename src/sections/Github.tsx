import RepoCard from "../components/RepoCard";
import { getRepos } from "../lib/github";

export default async function Github() {

  const repos = await getRepos();

  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <h2
          className="
          text-center
          text-5xl
          font-bold
          mb-20
          "
        >
          GitHub Activity
        </h2>

        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-10
          "
        >
          {repos.slice(0, 6).map(
            (repo: any) => (
              <RepoCard
                key={repo.id}
                name={repo.name}
                language={
                  repo.language
                }
              />
            )
          )}
        </div>

      </div>

    </section>
  );
}