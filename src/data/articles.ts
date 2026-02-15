// data/articles.ts

export interface Article {
    num: number;
    title: string;
    desc: string;
    tags: string[];
    year: string;
  }
  
  export const articles: Article[] = [
    {
      num: 1,
      title: "Enterprise BPM Platform",
      desc: "End-to-end business process management system handling 50K+ daily workflows with real-time monitoring and adaptive case management.",
      tags: ["Camunda", "Spring Boot", "Angular"],
      year: "2024"
    },
    {
      num: 2,
      title: "Distributed Microservices",
      desc: "Event-driven architecture powering financial transactions across 12 microservices with 99.99% uptime and sub-100ms latency.",
      tags: ["Kafka", "Kubernetes", "PostgreSQL"],
      year: "2023"
    },
    {
      num: 3,
      title: "Real-time Analytics Engine",
      desc: "High-performance data pipeline processing 2M+ events per minute with live dashboards and predictive insights.",
      tags: ["Apache Flink", "Elasticsearch", "React"],
      year: "2023"
    }
  ];