"use client";

import React, { useState } from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";
import Image from "next/image";

const blogPostData = [
  {
    image: "/images/blog/blog1.jpg",
    title: "The Most Popular New top Business Apps",
    date: "Feb 15, 2025",
    category: "Technology",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog2.jpg",
    title: "The Best Marketing top use Management Tools",
    date: "Feb 16, 2025",
    category: "Agency",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog3.jpg",
    title: "3 WooCommerce Plugins to Boost Sales",
    date: "Feb 17, 2025",
    category: "IT Agency",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "300",
  },
  {
    image: "/images/blog/blog4.jpg",
    title: "Top 21 Must-Read Blogs For Creative Agencies",
    date: "Feb 18, 2025",
    category: "Development",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "400",
  },
  {
    image: "/images/blog/blog5.jpg",
    title: "The Most Popular New top Business Apps",
    date: "Feb 19, 2025",
    category: "Apps",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "500",
  },
  {
    image: "/images/blog/blog6.jpg",
    title: "The Best Marketing top use Management Tools",
    date: "Feb 20, 2025",
    category: "Marketing",
    shortText:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "600",
  },
  {
    image: "/images/blog/blog7.jpg",
    title: "10 SaaS Strategies You Should Be Using",
    date: "Feb 21, 2025",
    category: "SaaS",
    shortText:
      "Discover the latest SaaS trends and techniques that can boost your product and user engagement in 2025.",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    image: "/images/blog/blog8.jpg",
    title: "How AI Is Changing Creative Marketing",
    date: "Feb 22, 2025",
    category: "AI",
    shortText:
      "From generating content to analyzing data, AI is revolutionizing the way creative marketing works today.",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    image: "/images/blog/blog9.jpg",
    title: "5 Tips for Better Remote Team Collaboration",
    date: "Feb 23, 2025",
    category: "Remote Work",
    shortText:
      "Master remote communication, build trust, and use the right tools to improve your distributed team workflow.",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "300",
  },
  {
    image: "/images/blog/blog10.jpg",
    title: "Top UX Mistakes That Hurt Conversions",
    date: "Feb 24, 2025",
    category: "UX Design",
    shortText:
      "Learn which common UX issues prevent users from converting—and how to fix them with simple tweaks.",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "400",
  },
  {
    image: "/images/blog/blog1.jpg",
    title: "Boosting Mobile App Engagement in 2025",
    date: "Feb 25, 2025",
    category: "Mobile Apps",
    shortText:
      "Keep your users coming back to your mobile app with these proven strategies and UI enhancements.",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "500",
  },
  {
    image: "/images/blog/blog2.jpg",
    title: "Why Every Startup Needs a Growth Plan",
    date: "Feb 26, 2025",
    category: "Startup",
    shortText:
      "Avoid startup stagnation by building a clear, actionable growth roadmap tailored to your market and goals.",
    readMoreLink: "/blog/blog-details/",
    aosDelay: "600",
  },
];

const BlogRightSidebar: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Number of posts per page

  // Calculate pagination data
  const totalPages = Math.ceil(blogPostData.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPostData.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page navigation
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
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row justify-content-center">
                {currentPosts &&
                  currentPosts.map((value, i) => (
                    <div
                      className="col-lg-6 col-md-6"
                      key={i}
                      data-aos="fade-in"
                      data-aos-duration="1000"
                      data-aos-delay={value.aosDelay}
                    >
                      <div className="single-blog-item">
                        <div className="blog-image">
                          <Link href={value.readMoreLink}>
                            <Image
                              src={value.image}
                              alt="image"
                              width={510}
                              height={383}
                            />
                          </Link>

                          <div className="post-tag">
                            <Link href={value.readMoreLink}>
                              {value.category}
                            </Link>
                          </div>
                        </div>

                        <div className="blog-post-content">
                          <span className="date">{value.date}</span>
                          <h3>
                            <Link href={value.readMoreLink}>{value.title}</Link>
                          </h3>

                          <p>{value.shortText}</p>

                          <Link
                            href={value.readMoreLink}
                            className="read-more-btn"
                          >
                            Read More
                            <i className="fa-solid fa-angles-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                <div className="col-lg-12 col-md-12">
                  {/* Pagination */}
                  <div className="pagination-area">
                    <button
                      type="button"
                      className={`prev page-numbers ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                      onClick={handlePrevPage}
                      disabled={currentPage === 1}
                    >
                      <i className="fa-solid fa-angles-left"></i>
                    </button>

                    {Array.from({ length: totalPages }, (_, index) => (
                      <button
                        key={index + 1}
                        type="button"
                        className={`page-numbers ${
                          currentPage === index + 1 ? "current" : ""
                        }`}
                        onClick={() => handlePageChange(index + 1)}
                      >
                        {index + 1}
                      </button>
                    ))}

                    <button
                      type="button"
                      className={`next page-numbers ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      <i className="fa-solid fa-angles-right"></i>
                    </button>
                  </div>
                </div>
              </div>
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

export default BlogRightSidebar;
