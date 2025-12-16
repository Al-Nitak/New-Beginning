import React from "react";
import PageBanner from "../../../../components/Common/PageBanner";
import BlogDetailsContent from "../../../../components/Blog/BlogDetailsContent";

interface PageProps {
  params: Promise<{
    id: string; // This will be the slug
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  return (
    <>
      <PageBanner pageTitle="Blog Details" BGImage="/images/page-banner2.jpg" />

      <BlogDetailsContent articleSlug={id} />
    </>
  );
}

