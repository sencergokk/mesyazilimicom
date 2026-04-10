import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://mesyazilimi.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://mesyazilimi.com/blog/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "MES Yazılımı",
    },
    publisher: {
      "@type": "Organization",
      name: "MES Yazılımı",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://mesyazilimi.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Article */}
        <article className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog&apos;a Dön
            </Link>

            {/* Header */}
            <header className="mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{post.date}</time>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} okuma</span>
                </div>
              </div>
            </header>

            {/* Content */}
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Posts */}
        <section className="pb-24 lg:pb-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
            <h2 className="font-heading text-2xl font-bold text-white mb-8">
              İlgili Yazılar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/30 hover:-translate-y-1"
                >
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full mb-3">
                    {relPost.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-200 font-heading">
                    {relPost.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    {relPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
