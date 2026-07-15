interface Props {
  title: string;
  issuer: string;
}

export default function CertificateCard({
  title,
  issuer,
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
        {title}
      </h3>

      <p className="mt-4 text-gray-400">
        {issuer}
      </p>
    </div>
  );
}