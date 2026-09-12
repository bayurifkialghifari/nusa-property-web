import type { ProjectImage } from "./media";
import { projectImages } from "./media";

export const houseVariants = ["cozy", "superimposed", "ebony", "blok-q"] as const;

export type HouseVariant = (typeof houseVariants)[number];

export type HousingOption = {
  readonly slug: string;
  readonly title: string;
  readonly eyebrow: string;
  readonly summary: string;
  readonly image: ProjectImage;
  readonly modelVariant: HouseVariant;
  readonly visualNotes: readonly string[];
};

export const housingOptions = [
  {
    slug: "blok-p-cozy-level",
    title: "Blok P Cozy Level",
    eyebrow: "Pilihan hunian",
    summary:
      "Fasad bertingkat dengan komposisi bukaan vertikal dan aksen gelap, disajikan sebagai satu unit konseptual dari deretan hunian.",
    image: projectImages.cozy,
    modelVariant: "cozy",
    visualNotes: [
      "Komposisi fasad bertingkat",
      "Bukaan jendela vertikal",
      "Kontras bidang terang dan gelap",
    ],
  },
  {
    slug: "blok-p-superimposed",
    title: "Blok P Superimposed",
    eyebrow: "Pilihan hunian",
    summary:
      "Interpretasi tiga tingkat dengan bingkai fasad tegas dan area masuk yang terlindungi.",
    image: projectImages.superimposed,
    modelVariant: "superimposed",
    visualNotes: [
      "Bingkai fasad berulang",
      "Jendela tinggi pada lantai atas",
      "Kanopi memanjang di area masuk",
    ],
  },
  {
    slug: "cluster-ebony",
    title: "Cluster Ebony",
    eyebrow: "Pilihan hunian",
    summary:
      "Fasad dua tingkat bernuansa terang dengan kanopi linear dan bidang kisi sebagai aksen depan.",
    image: projectImages.ebony,
    modelVariant: "ebony",
    visualNotes: [
      "Kanopi linear di lantai dasar",
      "Bidang kisi pada sisi masuk",
      "Bukaan besar pada lantai atas",
    ],
  },
  {
    slug: "blok-q",
    title: "Blok Q",
    eyebrow: "Pilihan hunian",
    summary:
      "Massa geometris dua tingkat dengan parapet terbuka, bidang jendela lebar, dan lapisan pagar depan.",
    image: projectImages.blokQ,
    modelVariant: "blok-q",
    visualNotes: [
      "Parapet terbuka pada atap",
      "Bidang jendela horizontal",
      "Pagar berbilah pada area depan",
    ],
  },
] as const satisfies readonly HousingOption[];
