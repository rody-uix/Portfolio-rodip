export interface ShowcaseFrame {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  aspectRatio?: string;
}

export interface CaseStudy {
  id: string | number;
  title: string;
  description: string; // Subtitle / Overview
  client?: string;
  year?: string;
  role?: string;
  heroImageUrl?: string;
  sidebarTitle?: string;
  sidebarSubtitle?: string;
  showcaseFrames: ShowcaseFrame[];
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "1",
    title: "Helped Busy Executives Consume Business Insights Faster",
    description: "UX Revamp of Entrepreneur Magazine's Daily Newsletter",
    client: "Entrepreneur Magazine",
    year: "2026",
    role: "Lead UX & Product Designer",
    sidebarTitle: "UX Revamp of Entrepreneur Magazine's Daily Newsletter",
    sidebarSubtitle: "UX Revamp of Entrepreneur Magazine's Daily Newsletter",
    showcaseFrames: [
      {
        id: 1,
        title: "Executive Summary & Information Architecture",
        description: "Redesigned content visual hierarchy to allow 30-second skimming of daily business briefs.",
      },
      {
        id: 2,
        title: "Typography & High-Contrast Reading Mode",
        description: "Custom font pairing with optimized line heights for seamless reading across desktop and mobile email clients.",
      },
      {
        id: 3,
        title: "Interactive Data Cards & Visual Pull-Quotes",
        description: "Bite-sized data visualizers designed for high retention and quick decision-making.",
      },
      {
        id: 4,
        title: "Personalized Newsletter Sections & Curator Highlights",
        description: "Dynamic layout blocks matching reader preferences and industry topics.",
      },
      {
        id: 5,
        title: "Conversion Flow & Subscriber Engagement Metrics",
        description: "Streamlined referral links, quick feedback loops, and multi-platform share actions.",
      },
    ],
  },
  {
    id: "2",
    title: "Designing Converting Digital Agency Experience",
    description: "Strategic brand direction and interactive agency landing platform for enterprise clients.",
    client: "Studio Vertex",
    year: "2026",
    role: "Digital Design Director",
    sidebarTitle: "Strategic Brand Direction & Interactive Agency Landing",
    sidebarSubtitle: "High-impact digital presence driving 45% increase in high-ticket client inquiries.",
    showcaseFrames: [
      { id: 1, title: "Hero Landing & Interactive Canvas" },
      { id: 2, title: "Interactive Portfolio Grid" },
      { id: 3, title: "Client ROI Calculator & Proposal Request" },
      { id: 4, title: "Micro-Animations & Smooth Transitions" },
      { id: 5, title: "Responsive Layout & Mobile Adaptation" },
    ],
  },
  {
    id: "3",
    title: "Scalable UI Component System & Micro-Interactions",
    description: "Modular design system unifying multi-brand e-commerce stores with accessible tokens.",
    client: "Nexus E-Commerce Group",
    year: "2025",
    role: "Design System Lead",
    sidebarTitle: "Unified Design System & Accessible Component Library",
    sidebarSubtitle: "Standardizing 120+ components across web and mobile platforms with dark mode parity.",
    showcaseFrames: [
      { id: 1, title: "Token Architecture & Color Hierarchy" },
      { id: 2, title: "Accessible Button & Form Primitives" },
      { id: 3, title: "Interactive Modal & Toast Systems" },
      { id: 4, title: "Figma Component Library & Code Sync" },
      { id: 5, title: "Accessibility (WCAG AAA) Audit Report" },
    ],
  },
  {
    id: "4",
    title: "SaaS Analytics & High-Frequency Performance Dashboard",
    description: "Simplifying complex data visualization into real-time drag-and-drop widgets.",
    client: "Pulse Analytics",
    year: "2025",
    role: "Senior Product Designer",
    sidebarTitle: "Real-Time Data Visualization & Analytics Suite",
    sidebarSubtitle: "Reducing cognitive load for financial analysts monitoring high-frequency telemetry.",
    showcaseFrames: [
      { id: 1, title: "Real-Time Telemetry Grid" },
      { id: 2, title: "Customizable Widget Builder" },
      { id: 3, title: "Filter & Time-Range Picker" },
      { id: 4, title: "Dark Mode High-Contrast Mode" },
      { id: 5, title: "Export & Automated Reporting Tool" },
    ],
  },
  {
    id: "5",
    title: "AI-Powered Workspace & Knowledge Graph Synthesis",
    description: "High-focus note-taking assistant with automated cross-document intelligence.",
    client: "Cognitive AI",
    year: "2024",
    role: "Product Designer",
    sidebarTitle: "AI Workspace & Connected Knowledge Architecture",
    sidebarSubtitle: "Connecting unstructured research into auto-generating mindmaps and summaries.",
    showcaseFrames: [
      { id: 1, title: "Infinite Canvas & Node Visualizer" },
      { id: 2, title: "AI Prompt Bar & Contextual Suggestions" },
      { id: 3, title: "Split-View Reader & Graph Inspector" },
      { id: 4, title: "Collaborative Editing & Mentions" },
      { id: 5, title: "Search & Semantic Filter Drawer" },
    ],
  },
  {
    id: "6",
    title: "Fintech Mobile Banking & Payment Ecosystem",
    description: "Next-generation mobile finance platform delivering seamless global wire transfers.",
    client: "Aura Pay",
    year: "2024",
    role: "Lead Mobile UX Designer",
    sidebarTitle: "Cross-Border Payments & Modern Mobile Wallet",
    sidebarSubtitle: "Simplifying multi-currency exchange rates and micro-transfers with sub-second feedback.",
    showcaseFrames: [
      { id: 1, title: "Dashboard & Card Overview" },
      { id: 2, title: "Instant International Transfer Flow" },
      { id: 3, title: "Biometric Security & Passcode Step" },
      { id: 4, title: "Spending Analytics & Budget Goals" },
      { id: 5, title: "Virtual Cards & Multi-Currency Accounts" },
    ],
  },
  {
    id: "7",
    title: "E-Commerce Checkout Optimization & Conversion UX",
    description: "Streamlining multi-step transaction flows to boost checkout completion rates.",
    client: "Moda Fashion",
    year: "2024",
    role: "Conversion UX Specialist",
    sidebarTitle: "One-Click Checkout & Reduced Friction Architecture",
    sidebarSubtitle: "Boosting checkout conversion by 28% through address autocomplete and guest flows.",
    showcaseFrames: [
      { id: 1, title: "Express Slide-Out Cart Drawer" },
      { id: 2, title: "Address Auto-Complete & Validation" },
      { id: 3, title: "Apple Pay & One-Tap Payment Gateway" },
      { id: 4, title: "Order Summary & Upsell Cards" },
      { id: 5, title: "Post-Purchase Tracking Screen" },
    ],
  },
  {
    id: "8",
    title: "Healthcare Telemedicine App & Patient Portal",
    description: "Human-centered digital health platform facilitating effortless virtual consultations.",
    client: "CarePulse Health",
    year: "2024",
    role: "Product Designer",
    sidebarTitle: "Human-Centered Telehealth & Patient Care",
    sidebarSubtitle: "Connecting patients with specialists through encrypted video and instant prescription tracking.",
    showcaseFrames: [
      { id: 1, title: "Patient Appointment Booking Matrix" },
      { id: 2, title: "HD Video Consultation Interface" },
      { id: 3, title: "Digital Prescription & Pharmacy Order" },
      { id: 4, title: "Vitals History & Wearable Sync" },
      { id: 5, title: "Doctor Notes & Follow-Up Reminders" },
    ],
  },
  {
    id: "9",
    title: "Creative Studio Web Motion & Interactive Design",
    description: "Immersive web graphics and interactive canvas experiences for brand storytelling.",
    client: "Kinetic Motion Lab",
    year: "2023",
    role: "Interactive Designer",
    sidebarTitle: "3D WebGL Motion & Immersive Storytelling",
    sidebarSubtitle: "Blending smooth scroll animations with interactive canvas shaders.",
    showcaseFrames: [
      { id: 1, title: "3D Interactive Hero Canvas" },
      { id: 2, title: "Scroll-Triggered Brand Story" },
      { id: 3, title: "Interactive Product Showcase" },
      { id: 4, title: "Custom Physics Particle Effects" },
      { id: 5, title: "Case Study Grid & Project Modal" },
    ],
  },
  {
    id: "10",
    title: "AI Content Editor & Automated Document Workflow",
    description: "Enhancing publishing efficiency with real-time AI writing assistant and smart suggestions.",
    client: "Scribe AI",
    year: "2023",
    role: "UI/UX Designer",
    sidebarTitle: "Real-Time AI Co-Writer & Content Studio",
    sidebarSubtitle: "Accelerating editorial workflows with context-aware grammar, tone, and formatting tools.",
    showcaseFrames: [
      { id: 1, title: "Distraction-Free Editor Layout" },
      { id: 2, title: "AI Tone Adjustment & Summarizer" },
      { id: 3, title: "Version History & Revision Diff" },
      { id: 4, title: "Multi-Format Export Options" },
      { id: 5, title: "Team Collaboration & Comments" },
    ],
  },
  {
    id: "11",
    title: "Smart Home IoT Mobile App & Device Control",
    description: "Intuitive interface for managing connected smart home hardware and automation scenes.",
    client: "OmniHome Systems",
    year: "2023",
    role: "Mobile App Designer",
    sidebarTitle: "Unified Smart Home Controller & Scene Automations",
    sidebarSubtitle: "Single-tap control over lighting, climate, security sensors, and custom routines.",
    showcaseFrames: [
      { id: 1, title: "Home Dashboard & Room Cards" },
      { id: 2, title: "Interactive Thermostat & Lighting Dial" },
      { id: 3, title: "Automation Routine Builder" },
      { id: 4, title: "Security Camera Live Feed" },
      { id: 5, title: "Energy Usage Analytics" },
    ],
  },
  {
    id: "12",
    title: "Cybersecurity Threat Monitoring & Incident Response",
    description: "Enterprise security dashboard visualizing real-time network threats and automated alerts.",
    client: "Aegis Security",
    year: "2023",
    role: "Lead UI Designer",
    sidebarTitle: "Enterprise Threat Intelligence & SOC Dashboard",
    sidebarSubtitle: "Empowering security operation teams to identify and neutralize cyber threats in seconds.",
    showcaseFrames: [
      { id: 1, title: "Global Threat Map Visualizer" },
      { id: 2, title: "Incident Severity Triage Desk" },
      { id: 3, title: "Automated Containment Playbooks" },
      { id: 4, title: "Log Analyzer & Query Terminal" },
      { id: 5, title: "Executive Security Audit Report" },
    ],
  },
];

export function getCaseStudyById(id: string | number): CaseStudy {
  const found = caseStudiesData.find((cs) => String(cs.id) === String(id));
  if (found) return found;
  // Default fallback is case study 1
  return caseStudiesData[0];
}
