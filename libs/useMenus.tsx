"use client";

import { useState, useEffect } from "react";
import { DoctorBlogAPI } from "@/services/api";

export interface MenuItem {
  label: string;
  link: string;
  submenu?: { label: string; link: string }[];
}

export const useMenus = () => {
  const [menus, setMenus] = useState<MenuItem[]>([
    {
      label: "Community Circles",
      link: "#",
      submenu: [
        {
          label: "Menopause Circle",
          link: "/community-circles/menopause/",
        },
        {
          label: "Quran Learning",
          link: "/community-circles/quran/",
        },
        {
          label: "Arabic Learning",
          link: "/community-circles/arabic/",
        },
      ],
    },
    {
      label: "About Dr.",
      link: "/about-dr/",
    },
    {
      label: "Blog & Resources",
      link: "#",
      submenu: [
        {
          label: "All Articles",
          link: "/blog/",
        },
      ],
    },
    {
      label: "Join Us",
      link: "#",
      submenu: [
        {
          label: "Join Our Community",
          link: "/join-us/",
        },
        {
          label: "Book Free Session",
          link: "/book-session/",
        },
      ],
    },
    {
      label: "Contact",
      link: "/contact-us/",
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const categories = await DoctorBlogAPI.getCategories();

        // Find the "Blog & Resources" menu item and update its submenu
        setMenus((prevMenus) => {
          return prevMenus.map((menu) => {
            if (menu.label === "Blog & Resources") {
              // Map categories to menu items
              const categoryMenuItems = categories.map((category) => ({
                label: category.name,
                link: `/blog/${category.slug}`,
              }));

              // Add "All Articles" at the beginning
              return {
                ...menu,
                submenu: [
                  {
                    label: "All Articles",
                    link: "/blog/",
                  },
                  ...categoryMenuItems,
                ],
              };
            }
            return menu;
          });
        });
      } catch (error) {
        console.error("Failed to fetch categories for menu:", error);
        // Keep the default menu structure on error
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { menus, loading };
};

// Export static menus for backward compatibility (fallback)
export const staticMenus: MenuItem[] = [
  {
    label: "Community Circles",
    link: "#",
    submenu: [
      {
        label: "Menopause Circle",
        link: "/community-circles/menopause/",
      },
      {
        label: "Quran Learning",
        link: "/community-circles/quran/",
      },
      {
        label: "Arabic Learning",
        link: "/community-circles/arabic/",
      },
    ],
  },
  {
    label: "About Dr.",
    link: "/about-dr/",
  },
  {
    label: "Blog & Resources",
    link: "#",
    submenu: [
      {
        label: "All Articles",
        link: "/blog/",
      },
    ],
  },
  {
    label: "Join Us",
    link: "#",
    submenu: [
      {
        label: "Join Our Community",
        link: "/join-us/",
      },
      {
        label: "Book Free Session",
        link: "/book-session/",
      },
    ],
  },
  {
    label: "Contact",
    link: "/contact-us/",
  },
];

