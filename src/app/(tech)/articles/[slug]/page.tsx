import { getArticleBySlug, getAllArticles } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  
  try {
    const { meta, content } = await getArticleBySlug(slug);

    return (
      <article className="max-w-5xl mx-auto py-20 px-6 lg:px-12">
        {/* Header */}
        <header className="mb-16 border-b border-white/10 pb-10">
          <div className="flex items-center gap-3 mb-6">
            {meta.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs font-medium uppercase tracking-wider text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">{meta.title}</h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">{meta.description}</p>
          
          {meta.readTime && (
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <span>📖</span>
              <span>{meta.readTime} okuma</span>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="article-content">
          <MDXRemote source={content} />
        </div>
      </article>
    );
  } catch {
    notFound();
  }
}