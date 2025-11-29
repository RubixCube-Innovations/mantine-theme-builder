import images from "./images";
import { CategoriesGroup, Category } from "./types";

export const CATEGORIES: CategoriesGroup[] = [
  // {
  //   name: "Application UI",
  //   categories: [
  //     { slug: "navbars", name: "Navbars", images: images.navbars },
  //     { slug: "headers", name: "Headers", images: images.headers },
  //     { slug: "footers", name: "Footers", images: images.footers },
  //     { slug: "grids", name: "Grids", images: images.grids },
  //     { slug: "users", name: "User info and controls", images: images.users },
  //     { slug: "inputs", name: "Inputs", images: images.inputs },
  //     { slug: "buttons", name: "Buttons", images: images.buttons },
  //     { slug: "sliders", name: "Sliders", images: images.sliders },
  //     { slug: "dropzones", name: "Dropzones", images: images.dropzones },
  //     { slug: "app-cards", name: "Application cards", images: images["app-cards"] },
  //     { slug: "stats", name: "Stats", images: images.stats },
  //     { slug: "tables", name: "Tables", images: images.tables },
  //     { slug: "dnd", name: "Drag'n'Drop", images: images.dnd },
  //     { slug: "carousels", name: "Carousels", images: images.carousels },
  //   ],
  // },
  {
    name: "Page sections",
    categories: [
      { slug: "hero", name: "Hero", images: images.hero },
      { slug: "feature", name: "Features", images: images.features },
      { slug: "team", name: "Team" },
      { slug: "testimonials", name: "Testimonials" },
      { slug: "faq", name: "FAQ", images: images.faq },
      { slug: "pricing", name: "Pricing" },
      { slug: "newsletter", name: "Newsletter" },
      { slug: "blogs", name: "Blogs", comingSoon: true },
      { slug: "contact", name: "Contact", images: images.contact, comingSoon: true },
      { slug: "cta", name: "CTA", images: images["error-pages"], comingSoon: true },
      // { slug: "coming-soon", name: "Coming soon" },
      // { slug: "authentication", name: "Authentication", images: images.authentication },
      // { slug: "error-pages", name: "Error pages", images: images["error-pages"] },
      // { slug: "banners", name: "Banners", images: images.banners },
    ],
  },
  // {
  //   name: "Blog UI",
  //   categories: [
  //     { slug: "article-cards", name: "Article cards", images: images["article-cards"] },
  //     { slug: "toc", name: "Table of contents", images: images.toc },
  //     { slug: "comments", name: "Comments", images: images.comments },
  //   ],
  // },
];

const ALL_CATEGORIES = CATEGORIES.reduce<Category[]>((acc, group) => {
  acc.push(...group.categories);
  return acc;
}, []);

export const CATEGORIES_SLUGS = ALL_CATEGORIES.map((item) => item.slug);

export const getCategoryData = (category: string) => ALL_CATEGORIES.find((item) => item.slug === category);
