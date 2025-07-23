import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { format } from "date-fns";
import Link from "next/link";
import { getImagePrefix } from "@/utils/utils";

const BlogCard = ({ blog }: { blog: Blog }) => {
    const { title, coverImage, excerpt, date, slug } = blog;
    return (
        <div className="bg-white/10 dark:bg-darkmode border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col h-full group">
            <Link href={`/blogs/${slug}`} className="block">
                <div className="relative w-full h-56 overflow-hidden">
                    <Image 
                        src={`${getImagePrefix()}${coverImage}`}
                        alt={`${title} - NepByte Blog Post`}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <span className="text-xs text-blue-400 font-semibold mb-2">
                        {format(new Date(date), "MMM dd, yyyy")}
                    </span>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-6 flex-1">
                        {excerpt}
                    </p>
                    <span className="inline-block mt-auto text-blue-400 font-semibold hover:underline">Read More →</span>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;