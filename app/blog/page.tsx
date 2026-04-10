import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "MES Yazılımı Blog | Üretim Yürütme Sistemi Yazıları",
  description:
    "MES yazılımı, üretim yürütme sistemi, OEE, Endüstri 4.0 ve üretim verimliliği hakkında kapsamlı blog yazıları ve rehberler.",
  keywords: [
    "mes blog",
    "üretim yazılımı blog",
    "mes yazıları",
    "üretim yürütme sistemi",
    "mes rehber",
  ],
  alternates: {
    canonical: "https://mesyazilimi.com/blog",
  },
  openGraph: {
    title: "MES Yazılımı Blog | Üretim Yürütme Sistemi Yazıları",
    description:
      "MES yazılımı, üretim yürütme sistemi, OEE, Endüstri 4.0 ve üretim verimliliği hakkında kapsamlı blog yazıları ve rehberler.",
    url: "https://mesyazilimi.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-cyan-950/30 via-gray-950 to-gray-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Ana Sayfa
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              MES Yazılımı{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl">
              MES yazılımı, üretim yürütme sistemleri, OEE, Endüstri 4.0 ve
              üretim verimliliği hakkında kapsamlı rehberler ve analizler.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24 lg:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1 animate-fade-in-up opacity-0"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "forwards",
                  }}
                >
                  {/* Category */}
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full mb-4">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200 font-heading">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-200"
                  >
                    Devamını Oku →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
