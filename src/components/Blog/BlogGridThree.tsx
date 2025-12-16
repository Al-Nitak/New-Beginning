"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DoctorBlogAPI, type Article } from "@/services/api";

const BlogGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const [posts, setPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const articles = await DoctorBlogAPI.getArticles({
          limit: postsPerPage,
        });
        setPosts(articles);
      } catch (e) {
        setError(e instanceof Error ? e.message : "Failed to load posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.max(1, Math.ceil(posts.length / postsPerPage));

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <div className="blog-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            {loading && (
              <div className="col-lg-12 col-md-12">
                <p>Loading posts…</p>
              </div>
            )}

            {error && (
              <div className="col-lg-12 col-md-12">
                <p>{error}</p>
              </div>
            )}

            {!loading && !error && posts &&
              posts.map((post, i) => (
                <div
                  className="col-lg-4 col-md-6"
                  key={post.id ?? i}
                  data-aos="fade-in"
                  data-aos-duration="1000"
                  data-aos-delay={(100 * ((i % postsPerPage) + 1)).toString()}
                >
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href={`/blog/blog-details/${post.slug || post.id}`}>
                        <Image
                          src={post.featured_image || "/images/blog/blog1.jpg"}
                          alt={post.title}
                          width={510}
                          height={383}
                        />
                      </Link>

                      <div className="post-tag">
                        <Link href={`/blog/${post.category?.slug || post.category?.name?.toLowerCase().replace(/\s+/g, '-') || "blog"}`}>
                          {post.category?.name || "Blog"}
                        </Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">
                        {new Date(post.published_at).toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "short",
                          day: "2-digit",
                        })}
                      </span>
                      <h3>
                        <Link href={`/blog/blog-details/${post.slug || post.id}`}>{post.title}</Link>
                      </h3>

                      <p>{post.excerpt || post.content?.substring(0, 150) + "..."}</p>

                      <Link href={`/blog/blog-details/${post.slug || post.id}`} className="read-more-btn">
                        Read More
                        <i className="fa-solid fa-angles-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <button
                  type="button"
                  className={`prev page-numbers ${currentPage === 1 ? "disabled" : ""}`}
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  <i className="fa-solid fa-angles-left"></i>
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    type="button"
                    className={`page-numbers ${currentPage === index + 1 ? "current" : ""}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  type="button"
                  className={`next page-numbers ${currentPage === totalPages ? "disabled" : ""}`}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <i className="fa-solid fa-angles-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogGrid;
