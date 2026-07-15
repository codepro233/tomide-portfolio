import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blog";

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl text-center font-bold mb-20">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
}