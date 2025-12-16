import React from "react";
import NavbarTwo from "../../../components/Layouts/NavbarTwo";
import PageBanner from "../../../components/Common/PageBanner";
import BlogRightSidebar from "../../../components/Blog/BlogRightSidebar";
import Footer from "../../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <PageBanner
        pageTitle="Blog With Right Sidebar"
        BGImage="/images/page-banner4.jpg"
      />

      <BlogRightSidebar />

      <Footer />
    </>
  );
}
