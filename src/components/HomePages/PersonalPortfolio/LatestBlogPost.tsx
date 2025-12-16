"use client";

import React from "react";
import Link from "next/link";

const communityResourcesData = [
  {
    title: "Understanding Menopause: A Holistic Approach",
    shortText:
      "Learn about natural approaches to managing menopause symptoms and maintaining your well-being during this important life transition.",
    date: "Dec 02, 2024",
    author: "Dr. Noha",
    authorLink: "/about-dr/",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "100",
  },
  {
    title: "Spiritual Reflections: Finding Peace Through Quran Study",
    shortText:
      "Discover how regular Quran study and reflection can bring peace and guidance to your daily life and spiritual journey.",
    date: "Dec 03, 2024",
    author: "Dr. Noha",
    authorLink: "/about-dr/",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "200",
  },
  {
    title: "Arabic Learning Tips: Building Confidence in Language Study",
    shortText:
      "Practical tips for learning Arabic as an adult, including study techniques and ways to stay motivated in your language journey.",
    date: "Dec 04, 2024",
    author: "Dr. Noha",
    authorLink: "/about-dr/",
    blogDetailsLink: "/blog/blog-details/",
    aosDelay: "300",
  },
];

const LatestBlogPost: React.FC = () => {
  return (
    <>
      <div className="pt-100 pb-70">
        <div className="container">
          <div className="section-title style-two">
            <h2>Blog & Resources</h2>
            <p>Free knowledge sharing for our community</p>
          </div>

          <div className="row justify-content-center">
            {communityResourcesData &&
              communityResourcesData.map((value, i) => (
                <div className="col-lg-4 col-md-6" key={i}>
                  <div
                    className="pp-post-item"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={value.aosDelay}
                  >
                    <div className="post-content">
                      <ul className="meta">
                        <li>
                          <i className="far fa-calendar-alt"></i> {value.date}
                        </li>
                        <li>
                          <i className="far fa-user-circle"></i>{" "}
                          <a href={value.authorLink}>{value.author}</a>
                        </li>
                      </ul>
                      <h3>
                        <Link href={value.blogDetailsLink}>{value.title}</Link>
                      </h3>
                      <p>{value.shortText}</p>
                      <Link href={value.blogDetailsLink} className="link-btn">
                        Read More <i className="fas fa-chevron-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestBlogPost;
