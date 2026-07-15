import Link from "next/link";

interface BlogCardProps {
  slug: string;
  title: string;
  date: string;
  summary: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ slug, title, date, summary }) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="p-6 rounded-3xl card hover:scale-105 transition h-full flex flex-col justify-between gap-6">
        <div>
          <p className="text-cyan-500 text-sm mb-3">{date}</p>
          <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--fg)" }}>{title}</h3>
          <p className="text-muted leading-7">{summary}</p>
        </div>
        <span className="text-cyan-500 font-semibold text-sm">
          Read More →
        </span>
      </div>
    </Link>
  );
};

export default BlogCard;