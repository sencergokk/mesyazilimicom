"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function BlogPreview() {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog" className="py-24 lg:py-32 bg-gray-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
            Blog
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            MES Hakkında
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Güncel Yazılar
            </span>
          </h2>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {latestPosts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1 h-full"
              >
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200 font-heading">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
          >
            Tüm Yazıları Gör
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
