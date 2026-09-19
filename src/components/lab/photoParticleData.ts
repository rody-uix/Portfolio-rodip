export interface PhotoParticleConfig {
  images: string[];
  desktopParticleCount: number;
  tabletParticleCount: number;
  mobileParticleCount: number;
}

export const photoParticleConfig: PhotoParticleConfig = {
  images: [
    "/Frame 91.png",
    "/Head (rasterized).svg",
    "/books (rasterized).svg",
    "/god (rasterized).svg",
    "/horse (rasterized).svg",
    "/queen (rasterized).svg",
    "/Group 5 (rasterized).svg",
    "/Heaven cannot brook two suns, nor earth two masters - Alexander The Great_ 1.svg",
  ],
  desktopParticleCount: 3000,
  tabletParticleCount: 1500,
  mobileParticleCount: 800,
};
