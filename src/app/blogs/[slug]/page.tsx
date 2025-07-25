import fs from "fs";
import path from "path";
import BlogCard from "@/components/SharedComponent/Blog/blogCard";
import markdownToHtml from "@/utils/markdownToHtml";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const filePath = path.join(process.cwd(), "public/api/blogs.json");
  const blogs: any[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return blogs.map((blog: any) => ({ slug: blog.slug }));
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "public/api/blogs.json");
  const blogs: any[] = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const post = blogs.find((b: any) => b.slug === params.slug);
  if (!post) return notFound();
  const related = blogs.filter((b: any) => b.slug !== post.slug).slice(0, 3);
  const contentHtml = await markdownToHtml(post.content || "");
  const tags: string[] = post.tags || [];

  return (
    <section className="min-h-screen pt-44 bg-darkmode text-white py-16 px-6">
      <div className="container mx-auto lg:max-w-screen-md px-4">
        {/* Blog Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center gap-4 text-slate-400 text-sm mb-2">
              <span>{post.date}</span>
              {post.author && (
                <span className="flex items-center gap-2">
                  <Image src={post.authorImage || "/images/blogdetail-page/default.png"} alt={post.author} width={32} height={32} className="rounded-full" />
                  <span>{post.author}</span>
                </span>
              )}
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag: string, i: number) => (
                  <span key={i} className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">{tag}</span>
                ))}
              </div>
            )}
          </div>
          {/* Share Buttons */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <a href="#" className="bg-blue-600/80 hover:bg-blue-700 text-white rounded-full p-2 transition" title="Share on Facebook"><svg width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"/></svg></a>
            <a href="#" className="bg-blue-400/80 hover:bg-blue-500 text-white rounded-full p-2 transition" title="Share on Twitter"><svg width="20" height="20" fill="currentColor"><path d="M20 3a8.1 8.1 0 0 1-2.36.65A4.1 4.1 0 0 0 19.45.3a8.19 8.19 0 0 1-2.6 1A4.1 4.1 0 0 0 9.85 5.1a11.65 11.65 0 0 1-8.45-4.3A4.1 4.1 0 0 0 2.7 7.1a4.07 4.07 0 0 1-1.85-.5v.05a4.1 4.1 0 0 0 3.3 4A4.1 4.1 0 0 1 2 10.6a4.1 4.1 0 0 0 3.85 2.85A8.23 8.23 0 0 1 0 16.1a11.62 11.62 0 0 0 6.29 1.85c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.18 8.18 0 0 0 20 3z"/></svg></a>
            <a href="#" className="bg-blue-800/80 hover:bg-blue-900 text-white rounded-full p-2 transition" title="Share on LinkedIn"><svg width="20" height="20" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-4 0v6h-4v-6a6 6 0 0 1 6-6zM2 8h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg></a>
          </div>
        </div>
        {/* Cover Image */}
        <img src={post.coverImage} alt={post.title} className="rounded-xl mb-8 w-full max-h-96 object-cover" />
        {/* Blog Content */}
        <article className="blog-details prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <hr className="my-12 border-dark_border" />
        <h2 className="text-2xl font-bold mb-6">Related Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((blog: any, i: number) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
} 