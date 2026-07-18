interface Props {
  name: string;
  language: string;
  url?: string;
}

export default function RepoCard({ name, language, url }: Props) {
  const content = (
    <div
      className="
      p-6
      rounded-3xl
      bg-white/10
      border
      border-white/20
      hover:border-cyan-400/50
      transition-colors
      "
    >
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="mt-3 text-gray-400">{language}</p>
    </div>
  );

  if (!url) return content;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  );
}
