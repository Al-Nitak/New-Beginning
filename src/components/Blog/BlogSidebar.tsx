"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DoctorBlogAPI, type Article } from "@/services/api";

const BlogSidebar: React.FC = () => {
  const [categories, setCategories] = useState<Array<{
    id: number;
    name: string;
    slug: string;
    description?: string;
    posts_count: number;
  }>>([]);
  const [popularPosts, setPopularPosts] = useState<Article[]>([]);
  const [recentPosts, setRecentPosts] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await DoctorBlogAPI.getCategories();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPostsLoading(true);
        // Fetch articles - we'll get popular ones by sorting by views
        const allArticles = await DoctorBlogAPI.getArticles({ limit: 20 });

        // Sort by views (most viewed first) for popular posts
        const sortedByViews = [...allArticles].sort((a, b) => {
          const viewsA = a.views || 0;
          const viewsB = b.views || 0;
          return viewsB - viewsA;
        });

        // Get top 3 most viewed articles for popular posts
        setPopularPosts(sortedByViews.slice(0, 3));

        // Sort by published_at (most recent first) for recent posts
        const sortedByDate = [...allArticles].sort((a, b) => {
          const dateA = new Date(a.published_at).getTime();
          const dateB = new Date(b.published_at).getTime();
          return dateB - dateA;
        });

        // Get top 5 most recent articles
        setRecentPosts(sortedByDate.slice(0, 5));
      } catch (error) {
        console.error("Failed to fetch posts:", error);
        setPopularPosts([]);
        setRecentPosts([]);
      } finally {
        setPostsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Dynamic data for tags
  const tags = [
    { name: "IT", count: 3, link: "/blog" },
    { name: "React", count: 3, link: "/blog" },
    { name: "Games", count: 2, link: "/blog" },
    { name: "Development", count: 2, link: "/blog" },
    { name: "Design", count: 1, link: "/blog" },
    { name: "Apps", count: 1, link: "/blog" },
    { name: "Marketing", count: 1, link: "/blog" },
    { name: "Tips", count: 2, link: "/blog" },
  ];

  return (
    <>
      <div className="widget-area" id="secondary">
        {/* Search form */}
        <div className="widget widget_search">
          <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit" className="search-submit">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        {/* Popular posts */}
        <div className="widget widget_posts_thumb">
          <h3 className="widget-title">Popular posts</h3>

          {postsLoading ? (
            <p>Loading popular posts...</p>
          ) : popularPosts.length > 0 ? (
            popularPosts.map((post, index) => (
              <article className="item" key={post.id || index}>
                <Link href={`/blog/blog-details/${post.slug || post.id}`} className="thumb">
                  <span
                    className={`fullimage cover ${index === 0 ? "bg1" : ""}`}
                    role="img"
                    style={{
                      backgroundImage: `url(${post.featured_image || "/images/blog/blog1.jpg"})`
                    }}
                  ></span>
                </Link>
                <div className="info">
                  <time>
                    {new Date(post.published_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h4 className="title usmall">
                    <Link href={`/blog/blog-details/${post.slug || post.id}`}>
                      {post.title}
                    </Link>
                  </h4>
                </div>

                <div className="clear"></div>
              </article>
            ))
          ) : (
            <p>No popular posts available.</p>
          )}
        </div>

        {/* Recent posts */}
        <div className="widget widget_recent_entries">
          <h3 className="widget-title">Recent posts</h3>

          {postsLoading ? (
            <p>Loading recent posts...</p>
          ) : recentPosts.length > 0 ? (
            <ul>
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/blog-details/${post.slug || post.id}`}>
                    {post.title}
                  </Link>
                  <span className="post-date">
                    {new Date(post.published_at).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No recent posts available.</p>
          )}
        </div>

        {/* Categories */}
        <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          {loading ? (
            <p>Loading categories...</p>
          ) : (
            <ul>
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={`/blog/${category.slug}`}>
                    {category.name} <span className="post-count">({category.posts_count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Tags */}
        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            {tags.map((tag, index) => (
              <Link href={tag.link} key={index}>
                {tag.name} <span className="tag-link-count">({tag.count})</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSidebar;
