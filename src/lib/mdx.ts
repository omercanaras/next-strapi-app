import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "src/content/articles");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readTime?: string;
}

// Tüm article'ları listele
export function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(articlesDirectory);

  const articles = files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(".mdx", "");
      const filePath = path.join(articlesDirectory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        tags: data.tags || [],
        readTime: data.readTime,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles;
}

// Tek bir article'ı getir
export async function getArticleBySlug(slug: string) {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags || [],
      readTime: data.readTime,
    },
    content,
  };
}