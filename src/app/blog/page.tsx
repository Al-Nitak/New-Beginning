import React from "react";
import PageBanner from "../../components/Common/PageBanner";
import BlogGridThree from "../../components/Blog/BlogGridThree";

export default function Page() {
  return (
    <>
      <PageBanner pageTitle="Blogs" BGImage="/images/page-banner3.jpg" />

      <BlogGridThree />
    </>
  );
}
