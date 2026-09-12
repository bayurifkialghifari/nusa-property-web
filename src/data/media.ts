export type ProjectImage = {
  readonly file: string;
  readonly title: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

export const projectImages = {
  gate: {
    file: "gate",
    title: "Gerbang utama kawasan hunian",
    alt: "Visualisasi gerbang masuk kawasan hunian dengan papan nama proyek",
    width: 1200,
    height: 583,
  },
  cozy: {
    file: "cozy",
    title: "Blok P Cozy Level",
    alt: "Visualisasi tampak depan hunian Blok P Cozy Level",
    width: 1200,
    height: 669,
  },
  superimposed: {
    file: "superimposed",
    title: "Blok P Superimposed",
    alt: "Visualisasi tampak depan hunian Blok P Superimposed",
    width: 1200,
    height: 675,
  },
  ebony: {
    file: "ebony",
    title: "Cluster Ebony",
    alt: "Visualisasi tampak depan hunian Cluster Ebony",
    width: 1200,
    height: 668,
  },
  blokQ: {
    file: "blok-q",
    title: "Blok Q",
    alt: "Visualisasi tampak depan hunian Blok Q",
    width: 1200,
    height: 675,
  },
  environment1: {
    file: "environment-1",
    title: "Deretan hunian",
    alt: "Visualisasi deretan hunian dengan fasad berwarna hangat dan jalan lingkungan di depannya",
    width: 1200,
    height: 675,
  },
  environment2: {
    file: "environment-2",
    title: "Detail tampak depan",
    alt: "Visualisasi fasad hunian dengan jendela tinggi, balkon, dan tangga menuju pintu masuk",
    width: 1200,
    height: 675,
  },
  environment3: {
    file: "environment-3",
    title: "Sudut lingkungan hunian",
    alt: "Visualisasi deretan fasad hunian dengan aksen batu gelap dan tanaman di halaman depan",
    width: 1200,
    height: 675,
  },
} as const satisfies Record<string, ProjectImage>;

export const galleryImages = [
  projectImages.gate,
  projectImages.environment1,
  projectImages.environment2,
  projectImages.environment3,
] as const;

export const cardImageSizes =
  "(min-width: 1280px) 584px, (min-width: 1024px) calc(50vw - 56px), (min-width: 768px) calc(50vw - 48px), calc(100vw - 40px)";

export const heroImageSizes =
  "(min-width: 1280px) 605px, (min-width: 1024px) calc((100vw - 128px) * 0.525), (min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)";

export const galleryImageSizes =
  "(min-width: 1280px) 588px, (min-width: 1024px) calc(50vw - 52px), (min-width: 768px) calc(50vw - 44px), calc(100vw - 40px)";
