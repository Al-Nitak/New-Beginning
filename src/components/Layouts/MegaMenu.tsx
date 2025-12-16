"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MegaMenu: React.FC = () => {
  const currentRoute = usePathname();

  return (
    <>
      <li className="nav-item">
        <Link href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
          Home <i className="fa-solid fa-angle-down"></i>
        </Link>

        <ul className="dropdown-menu mega-dropdown-menu">
          <li className="nav-item">
            <Link
              href="/"
              className={`nav-link ${currentRoute == "/" && "active"}`}
            >
              Default Home
            </Link>

            <Link
              href="/creative-agency/"
              className={`nav-link ${
                currentRoute == "/creative-agency/" && "active"
              }`}
            >
              Creative Agency
            </Link>

            <Link
              href="/it-agency/"
              className={`nav-link ${
                currentRoute == "/it-agency/" && "active"
              }`}
            >
              IT Agency
            </Link>

            <Link
              href="/marketing-agency/"
              className={`nav-link ${
                currentRoute == "/marketing-agency/" && "active"
              }`}
            >
              Marketing Agency
            </Link>

            <Link
              href="/portfolio-agency/"
              className={`nav-link ${
                currentRoute == "/portfolio-agency/" && "active"
              }`}
            >
              Portfolio Agency
            </Link>

            <Link
              href="/studio-agency/"
              className={`nav-link ${
                currentRoute == "/studio-agency/" && "active"
              }`}
            >
              Studio Agency
            </Link>

            <Link
              href="/business-agency/"
              className={`nav-link ${
                currentRoute == "/business-agency/" && "active"
              }`}
            >
              Business Agency
            </Link>

            <Link
              href="/startup-agency/"
              className={`nav-link ${
                currentRoute == "/startup-agency/" && "active"
              }`}
            >
              Startup Agency
            </Link>

            <Link
              href="/software-startup/"
              className={`nav-link ${
                currentRoute == "/software-startup/" && "active"
              }`}
            >
              Software Startup <span className="new">New</span>
            </Link>

            <Link
              href="/digital-marketing/"
              className={`nav-link ${
                currentRoute == "/digital-marketing/" && "active"
              }`}
            >
              Digital Marketing <span className="new">New</span>
            </Link>

            <Link
              href="/business-consulting/"
              className={`nav-link ${
                currentRoute == "/business-consulting/" && "active"
              }`}
            >
              Business Consulting <span className="new">New</span>
            </Link>

            <Link
              href="/freelancer-portfolio/"
              className={`nav-link ${
                currentRoute == "/freelancer-portfolio/" && "active"
              }`}
            >
              Freelancer Portfolio <span className="new">New</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href="/default-home-2/"
              className={`nav-link ${
                currentRoute == "/default-home-2/" && "active"
              }`}
            >
              Default Home Two
            </Link>

            <Link
              href="/creative-agency-2/"
              className={`nav-link ${
                currentRoute == "/creative-agency-2/" && "active"
              }`}
            >
              Creative Agency Two
            </Link>

            <Link
              href="/it-agency-2/"
              className={`nav-link ${
                currentRoute == "/it-agency-2/" && "active"
              }`}
            >
              IT Agency Two
            </Link>

            <Link
              href="/marketing-agency-2/"
              className={`nav-link ${
                currentRoute == "/marketing-agency-2/" && "active"
              }`}
            >
              Marketing Agency Two
            </Link>

            <Link
              href="/portfolio-agency-2/"
              className={`nav-link ${
                currentRoute == "/portfolio-agency-2/" && "active"
              }`}
            >
              Portfolio Agency Two
            </Link>

            <Link
              href="/studio-agency-2/"
              className={`nav-link ${
                currentRoute == "/studio-agency-2/" && "active"
              }`}
            >
              Studio Agency Two
            </Link>

            <Link
              href="/business-agency-2/"
              className={`nav-link ${
                currentRoute == "/business-agency-2/" && "active"
              }`}
            >
              Business Agency Two
            </Link>

            <Link
              href="/startup-agency-2/"
              className={`nav-link ${
                currentRoute == "/startup-agency-2/" && "active"
              }`}
            >
              Startup Agency Two
            </Link>

            <Link
              href="/app-showcase/"
              className={`nav-link ${
                currentRoute == "/app-showcase/" && "active"
              }`}
            >
              App Showcase <span className="new">New</span>
            </Link>

            <Link
              href="/personal-portfolio/"
              className={`nav-link ${
                currentRoute == "/personal-portfolio/" && "active"
              }`}
            >
              Personal Portfolio <span className="new">New</span>
            </Link>

            <Link
              href="/saas-startup/"
              className={`nav-link ${
                currentRoute == "/saas-startup/" && "active"
              }`}
            >
              SaaS Startup <span className="new">New</span>
            </Link>

            <Link
              href="/cyber-security-agency/"
              className={`nav-link ${
                currentRoute == "/cyber-security-agency/" && "active"
              }`}
            >
              Cyber Security Agency <span className="new">New</span>
            </Link>
          </li>
        </ul>
      </li>
    </>
  );
};

export default MegaMenu;
