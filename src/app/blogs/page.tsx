"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "@/components/SharedComponent/Blog/blogCard";

export default function BlogsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <section className="min-h-screen pt-44 bg-darkmode text-white py-16 px-6">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Blogs & News
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Insights, stories, and updates from NepByte. Explore our latest articles and stay informed on tech, design, and innovation.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
} 