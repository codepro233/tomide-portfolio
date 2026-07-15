const FEATURED_REPOS = [
  "BuildAi",
  "ai-land-inspection",
  "proposaliq ",
  "tomide-portfolio",
  "scrubunit",
  

];

export async function getRepos() {
  const response = await fetch(
    "https://api.github.com/users/codepro233/repos",
    {
      next: {
        revalidate: 3600, // 1 hour
      },
    }
  );

  if (!response.ok) {
    return [];
  }

  const repos = await response.json();

  const featuredLower = FEATURED_REPOS.map((name) => name.toLowerCase());

  // Only show curated, real project repos — filters out throwaway/tutorial repos
  const featured = repos.filter((repo: { name: string }) =>
    featuredLower.includes(repo.name.toLowerCase())
  );

  // Sort by the order defined in FEATURED_REPOS, so your best work leads
  featured.sort(
    (a: { name: string }, b: { name: string }) =>
      featuredLower.indexOf(a.name.toLowerCase()) -
      featuredLower.indexOf(b.name.toLowerCase())
  );

  return featured;
}
