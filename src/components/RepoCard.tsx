interface Props {
  name: string;
  language: string;
}

export default function RepoCard({
  name,
  language,
}: Props) {
  return (
    <div
      className="
      p-6
      rounded-3xl
      bg-white/10
      border
      border-white/20
      "
    >
      <h3 className="text-xl font-bold">
        {name}
      </h3>

      <p className="mt-3 text-gray-400">
        {language}
      </p>
    </div>
  );
}