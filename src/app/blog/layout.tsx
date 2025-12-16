import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarTwo />

      {children}
      <Footer />
    </>
  );
}

