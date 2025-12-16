"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import BlogComments from "./BlogComments";
import Image from "next/image";
import { DoctorBlogAPI, type Article } from "@/services/api";

interface BlogDetailsContentProps {
  articleSlug: string;
}

const BlogDetailsContent: React.FC<BlogDetailsContentProps> = ({ articleSlug }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await DoctorBlogAPI.getArticleBySlug(articleSlug);
        setArticle(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    if (articleSlug) {
      fetchArticle();
    }
  }, [articleSlug]);

  if (loading) {
    return (
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="text-center">
            <p>Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="text-center">
            <p>Error: {error || "Article not found"}</p>
            <Link href="/blog" className="default-btn">
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                {article.featured_image && (
                  <div className="article-img">
                    <Image
                      src={article.featured_image}
                      alt={article.title}
                      width={800}
                      height={600}
                    />
                  </div>
                )}

                <div className="article-content">
                  <ul className="entry-meta">
                    {article.author_info && (
                      <li>
                        <i className="fa-solid fa-user"></i>
                        <Link href="/blog">{article.author_info.name}</Link>
                      </li>
                    )}
                    <li>
                      <i className="fa-solid fa-calendar-days"></i>{" "}
                      {new Date(article.published_at).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </li>
                    {article.reading_time && (
                      <li>
                        <i className="fa-solid fa-clock"></i> {article.reading_time}
                      </li>
                    )}
                  </ul>

                  <h1>{article.title}</h1>

                  <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    className="article-body"
                  />

                  {/* Tags */}
                  {article.tags && article.tags.length > 0 && (
                    <ul className="category">
                      <li>
                        <span>Tags:</span>
                      </li>
                      {article.tags.map((tag, index) => (
                        <li key={index}>
                          <Link href={`/blog?tag=${tag}`}>{tag}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* Post controls */}
              <div className="post-controls-buttons">
                <div>
                  <Link href="/blog">Prev Post</Link>
                </div>
                <div>
                  <Link href="/blog">Next Post</Link>
                </div>
              </div>

              <BlogComments articleIdOrSlug={articleSlug} />
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="pl-20">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
