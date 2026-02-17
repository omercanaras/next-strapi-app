// data/destinations.ts

export interface Destination {
  num: number;
  title: string;
  desc: string;
  image: string;
  location: string;
  year: string;
}

export const destinations: Destination[] = [
  {
    num: 1,
    title: "Colorful Liguria",
    desc: "Pastel-colored buildings and cobblestone streets after the rain.",
    image: "/travel/1.jpg",
    location: "Italy",
    year: "2024"
  },
  {
    num: 2,
    title: "Ligurian Coast",
    desc: "Misty mountains meeting the Mediterranean on a quiet winter day.",
    image: "/travel/2.jpg",
    location: "Italy",
    year: "2024"
  },
  {
    num: 3,
    title: "Camogli Carousel",
    desc: "A nostalgic carousel by the sea, captured in timeless black and white.",
    image: "/travel/3.jpg",
    location: "Italy",
    year: "2024"
  }
];