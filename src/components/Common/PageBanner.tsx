"use client";

interface PageBannerProps {
  pageTitle: string;
  BGImage: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ pageTitle, BGImage, homePageUrl, homePageText, activePageText }) => {
  return (
    <>
      <div
        className="page-title-area"
        style={{ backgroundImage: `url(${BGImage})` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <h2>{pageTitle}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
