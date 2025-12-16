"use server";
import Image from "next/image";
import Link from "next/link";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://new-beginning-admin.alnitak.app/api/v1";

type Article = {
  id: number;
  title: string;
  excerpt: string;
  featured_image: string;
  published_at: string;
  category?: { name: string; slug: string };
  // Optional fields that may exist
  slug?: string;
};

async function fetchArticlesByCategory(category: string): Promise<Article[]> {
  const res = await fetch(`${API_BASE_URL}/articles?category=${encodeURIComponent(category)}`, {
    // Ensure fresh data on navigation; adjust if caching desired
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return [];
  }
  return res.json();
}

export default async function Page({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params;
  const articles = await fetchArticlesByCategory(category);

  return (
    <div className="blog-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          {articles.length === 0 && (
            <div className="col-lg-12 col-md-12">
              <p>No articles found for this category.</p>
            </div>
          )}

          {articles.map((article, i) => (
            <div
              className="col-lg-4 col-md-6"
              key={article.id}
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-delay={(100 * ((i % 6) + 1)).toString()}
            >
              <div className="single-blog-item">
                <div className="blog-image">
                  <Link href={`/blog/blog-details/${article.slug || article.id}`}>
                    <Image
                      src={article.featured_image || "/images/blog/blog1.jpg"}
                      alt={article.title}
                      width={510}
                      height={383}
                    />
                  </Link>

                  <div className="post-tag">
                    <Link href={`/blog/${article.category?.slug || category}`}>
                      {article.category?.name || category}
                    </Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">
                    {new Date(article.published_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    })}
                  </span>
                  <h3>
                    <Link href={`/blog/blog-details/${article.slug || article.id}`}>{article.title}</Link>
                  </h3>

                  <p>{article.excerpt}</p>

                  <Link href={`/blog/blog-details/${article.slug || article.id}`} className="read-more-btn">
                    Read More
                    <i className="fa-solid fa-angles-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

