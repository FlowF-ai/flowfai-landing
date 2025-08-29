import Timeline from "@/shared/components/Timeline";

const roadmapData = [
  {
    quarter: "Q1 2024",
    title: "Foundation & Infrastructure Development",
    items: [
      "Platform Architecture Design",
      "Low-Code/No-Code Interface Prototyping",
      "AI Integration Setup",
      "Community Building Initiatives",
    ],
  },
  {
    quarter: "Q2 2024",
    title: "Alpha Release & Feature Expansion",
    items: [
      "Launch of Alpha Version",
      "DeFi Integration",
      "Early Node Operator Program",
      "Documentation & Tutorials",
    ],
  },
  {
    quarter: "Q3 2024",
    title: "Beta Release & Ecosystem Growth",
    items: [
      "Beta Launch",
      "Expanded Workflow Library",
      "Node Marketplace Expansion",
      "Community & Developer Incentives",
    ],
  },
  {
    quarter: "Q4 2024",
    title: "Full Platform Launch & Scalability",
    items: [
      "Official Platform Launch",
      "Advanced AI Workflows",
      "Scalability & Performance Improvements",
      "Global Node Network",
    ],
  },
  {
    quarter: "2025 and Beyond",
    title: "Continuous Innovation & Ecosystem Maturity",
    items: [
      "Enterprise Adoption",
      "Cross-Chain Interoperability",
      "AI and Workflow Marketplace",
      "Sustainability and Social Impact",
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
          FlowFai Roadmap
        </h2>
        <Timeline items={roadmapData} />
      </div>
    </section>
  );
}
