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
      title: "Tokyo Streets",
      desc: "Neon lights and ancient temples coexisting in perfect harmony.",
      image: "/travel/japan.jpg",
      location: "Japan",
      year: "2024"
    },
    {
      num: 2,
      title: "Amalfi Coast",
      desc: "Cliffside villages painted in pastel colors overlooking the Mediterranean.",
      image: "/travel/italy.jpg",
      location: "Italy",
      year: "2023"
    },
    {
      num: 3,
      title: "Northern Lights",
      desc: "Dancing auroras across volcanic black sand beaches.",
      image: "/travel/iceland.jpg",
      location: "Iceland",
      year: "2023"
    }
  ];