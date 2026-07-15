import { blogs } from "@/data/blog";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) return notFound();

  return (
    <main className="py-32 px-6 max-w-3xl mx-auto">
      <p className="text-cyan-400 text-sm mb-4">{post.date}</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
      <p className="text-gray-400 text-lg mb-12">{post.summary}</p>

      <div className="border-t border-white/10 pt-10">
        <Markdown
          components={{
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold mt-10 mb-4 text-white">{children}</h2>
            ),
            p: ({ children }) => (
              <p className="text-gray-300 leading-8 mb-6">{children}</p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="leading-7">{children}</li>
            ),
            strong: ({ children }) => (
              <strong className="text-white font-semibold">{children}</strong>
            ),
            code: ({ children }) => (
              <code className="bg-white/10 px-2 py-1 rounded text-cyan-400 text-sm">{children}</code>
            ),
          }}
        >
          {post.content.trim()}
        </Markdown>
      </div>
    </main>
  );
}