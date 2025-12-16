// This file is kept for backward compatibility
// For dynamic menus with categories from API, use the useMenus hook from ./useMenus.tsx

export interface MenuItem {
  label: string;
  link: string;
  submenu?: { label: string; link: string }[];
}

export const menus: MenuItem[] = [
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
