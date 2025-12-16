import React from "react";
import "../../public/styles/bootstrap.min.css";
import "../../public/styles/animate.min.css";
import "animate.css";
import "../../public/styles/fontawesome.min.css";
import "../../public/styles/pe-icon-7-stroke.css";
import "swiper/css";
import "swiper/css/bundle";

// Software Startup Home Style
import "../../public/styles/software-home-page.css";
// App Showcase Home Style
import "../../public/styles/app-home-page.css";
// Digital Marketing Home Page Style
import "../../public/styles/digital-marketing-home-page.css";
// Personal Portfolio Home Style
import "../../public/styles/personal-portfolio-home-page.css";
// Business Consulting Home Page Style
import "../../public/styles/business-consulting-home-page.css";
// SaaS Startup Home Page Style
import "../../public/styles/saas-startup-home-page.css";
// Freelancer Portfolio Home Page Style
import "../../public/styles/freelancer-portfolio-home-page.css";
// Cyber Security Agency Home Page Style
import "../../public/styles/cyber-security-agency-home-page.css";

// Global Style
import "../../public/styles/style.css";
import "../../public/styles/responsive.css";
// Global RTL Style
import "../../public/styles/rtl.css";

import type { Metadata } from "next";
import { Inter, Saira } from "next/font/google";
import AosAnimation from "@/components/Layouts/AosAnimation";
import GoTop from "@/components/Layouts/GoTop";
import RtlMode from "@/components/Layouts/RtlMode";

// For all body text font
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// For all heading font
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "new-beginning - React Nextjs Multipurpose Startup & Digital Agency Template",
  description: "React Nextjs Multipurpose Startup & Digital Agency Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${saira.variable}`}>
        {children}

        <AosAnimation />

        <GoTop />

        <RtlMode />
      </body>
    </html>
  );
}
