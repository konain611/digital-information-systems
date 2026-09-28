import { ArrowRight } from "lucide-react";
import LocalizedLink from "@/components/localized-link";
import { ContentPage, ImagePanel } from "@/components/content-page";

type Section = {
  title: string;
  items: string[];
};

type SitePageData = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Section[];
};

const pages: Record<string, SitePageData> = {
  about: {
    eyebrow: "About",
    title: "Built for secure, resilient growth",
    intro:
      "We help governments, enterprises and digital-first organizations navigate risk, scale technology and convert innovation into measurable business value.",
    sections: [
      {
        title: "What we do",
        items: [
          "Strategic technology consulting across cybersecurity, cloud, data and modernization.",
          "Program design and delivery for resilient digital transformation initiatives.",
          "Research-led product evaluation and market enablement with measurable outcomes.",
        ],
      },
      {
        title: "Why clients choose us",
        items: [
          "Deep operational experience across regulated and high-risk sectors.",
          "Structured execution from advisory through delivery and support.",
          "Clear governance, accountability and stakeholder alignment at every stage.",
        ],
      },
    ],
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Leadership that bridges vision and execution",
    intro:
      "Our teams combine executive direction, domain expertise and product understanding to turn strategic intent into operational momentum.",
    sections: [
      {
        title: "Leadership model",
        items: [
          "Strategic direction for business, digital and security priorities.",
          "Cross-functional governance across product, operations and risk teams.",
          "Hands-on support for executive decision-making and growth planning.",
        ],
      },
      {
        title: "Operating principles",
        items: [
          "Build with accountability and measurable outcomes in mind.",
          "Align technology investments with enterprise resilience and value.",
          "Empower local teams through insight, systems and practical enablement.",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about your next digital priority",
    intro:
      "Whether you need advisory support, operational assurance or product acceleration, our team is available to help shape the right next step.",
    sections: [
      {
        title: "Connect with us",
        items: [
          "Email: info@diginfo.net",
          "Phone: +92 343 255 05",
          "Locations: Karachi, Riyadh and aligned regional delivery partners",
        ],
      },
      {
        title: "Engagement paths",
        items: [
          "Advisory and strategy engagements.",
          "Security and resilience programs.",
          "Research, product evaluation and capability building.",
        ],
      },
    ],
  },
  solutions: {
    eyebrow: "Solutions",
    title: "Practical solutions for modern enterprise risk",
    intro:
      "We build secure and scalable programs that help organizations manage complexity, reduce risk and create lasting digital advantage.",
    sections: [
      {
        title: "Core capability areas",
        items: [
          "Security architecture, transformation and assurance programs.",
          "Governance, risk and compliance frameworks designed for real execution.",
          "Cloud modernization, operations and platform resilience planning.",
        ],
      },
      {
        title: "Delivery focus",
        items: [
          "Outcome-based implementation across business and technology teams.",
          "Continuous improvement support from assessment through optimization.",
          "Clear reporting and executive-ready insight for stakeholders.",
        ],
      },
    ],
  },
  "security-assessment": {
    eyebrow: "Security Assessment",
    title: "Security assessment and maturity diagnostics",
    intro:
      "We review your security posture, operational controls and digital architecture to highlight gaps, prioritize action and inform executive decisions.",
    sections: [
      {
        title: "Assessment focus",
        items: [
          "Architecture reviews and control coverage across core systems.",
          "Identity, access, segmentation and policy maturity analysis.",
          "Risk prioritization aligned to business criticality and operating model.",
        ],
      },
      {
        title: "Outcome",
        items: [
          "Actionable remediation roadmaps.",
          "Board-ready risk insight and objective reporting.",
          "Clear prioritization for short, medium and long-term investment.",
        ],
      },
    ],
  },
  "cyber-advisory": {
    eyebrow: "Cyber Advisory",
    title: "Cyber advisory for strategic decision-making",
    intro:
      "Our advisory services help leaders understand threat exposure, align technology decisions and establish the governance needed for resilient operations.",
    sections: [
      {
        title: "Advisory scope",
        items: [
          "Security strategy and transformation planning.",
          "Executive risk workshops and digital resilience planning.",
          "Technology and operating model guidance for secure growth.",
        ],
      },
      {
        title: "Value delivered",
        items: [
          "Clear security roadmaps and decision support.",
          "Improved prioritization with stronger business alignment.",
          "More confident execution in regulated and complex environments.",
        ],
      },
    ],
  },
  "governance-risk-compliance": {
    eyebrow: "Governance & Compliance",
    title: "Governance, risk and compliance programs that work in practice",
    intro:
      "We help organizations build governance frameworks, risk control structures and compliance programs that are operationally realistic and easy to maintain.",
    sections: [
      {
        title: "Program design",
        items: [
          "Policy architecture and operating model alignment.",
          "Risk register design, ownership and escalation paths.",
          "Evidence, assurance and governance routines for internal teams.",
        ],
      },
      {
        title: "Typical outcomes",
        items: [
          "Stronger accountability across leadership and technical teams.",
          "Fewer control gaps and less operational friction.",
          "Better readiness for audits, assurance and growth decisions.",
        ],
      },
    ],
  },
  "managed-security": {
    eyebrow: "Managed Security",
    title: "Managed security support for continuous operations",
    intro:
      "We provide structured monitoring, threat insight and operational support to help organizations maintain resilience without overstretching internal teams.",
    sections: [
      {
        title: "Services",
        items: [
          "Monitoring, alert triage and operational response support.",
          "Threat-informed security operations and escalation pathways.",
          "Partnered management for evolving digital risk environments.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "Sustained security coverage across digital operations.",
          "Lower dependence on fragmented, ad hoc response models.",
          "Better continuity and confidence for business stakeholders.",
        ],
      },
    ],
  },
  "cloud-modernization": {
    eyebrow: "Cloud Modernization",
    title: "Cloud modernization with security and throughput in mind",
    intro:
      "Our modernization programs help organizations design cloud environments that are efficient, governable and secure by default.",
    sections: [
      {
        title: "Modernization priorities",
        items: [
          "Platform modernization and cloud architecture reviews.",
          "Secure landing zones, automation and governance enablement.",
          "Application and data optimization aligned to business operations.",
        ],
      },
      {
        title: "Business impact",
        items: [
          "Faster delivery and reduced technology friction.",
          "Improved resilience, scalability and operational control.",
          "Better alignment with long-term digital strategy.",
        ],
      },
    ],
  },
  ecosystem: {
    eyebrow: "Ecosystem",
    title: "A connected ecosystem for digital capability",
    intro:
      "Our ecosystem brings strategy, research, product enablement and platform delivery together in a practical, connected model.",
    sections: [
      {
        title: "Ecosystem pillars",
        items: [
          "Advisory and transformation enablement.",
          "Research and evaluation across products and innovation.",
          "Platform-based delivery and shared digital infrastructure.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "Connected capability drives more coordinated execution.",
          "Shared infrastructure improves agility and product leverage.",
          "Decision-making becomes clearer with integrated insight.",
        ],
      },
    ],
  },
  platforms: {
    eyebrow: "Platforms",
    title: "Platform operations built around trust, capability and growth",
    intro:
      "Our platforms help organizations access research, knowledge, digital services and operational support in a structured environment.",
    sections: [
      {
        title: "Platform portfolio",
        items: [
          "Knowledge, media and learning experiences.",
          "Enterprise and innovation enablement environments.",
          "Security, assurance and research-driven digital services.",
        ],
      },
      {
        title: "Operating model",
        items: [
          "Built for accessibility, governance and strategic relevance.",
          "Designed to support both internal teams and external communities.",
          "Aligned with digital growth, compliance and resilience objectives.",
        ],
      },
    ],
  },
  dbrain: {
    eyebrow: "DGBRAIN",
    title: "DGBRAIN: intelligence and decision support",
    intro:
      "A digital intelligence environment focused on research, insight synthesis and informed decision-making across strategic priorities.",
    sections: [
      { title: "Core capabilities", items: ["Knowledge aggregation", "Decision support", "Strategic insight capture"] },
      { title: "Value", items: ["Faster understanding of change", "Better alignment across teams", "Clearer operational focus"] },
    ],
  },
  dgenterprise: {
    eyebrow: "DG Enterprise",
    title: "DG Enterprise: business enablement and system alignment",
    intro:
      "A business-oriented platform that supports enterprise modernization, operational clarity and digital capability planning.",
    sections: [
      { title: "Focus areas", items: ["Enterprise modernization", "Capability planning", "Operational alignment"] },
      { title: "Outcome", items: ["Connected execution", "Lower friction in business processes", "Improved governance and planning"] },
    ],
  },
  dgacademy: {
    eyebrow: "DG Academy",
    title: "DG Academy: learning for capability building",
    intro:
      "A structured learning environment that helps people build technical, strategic and operational confidence in a changing digital landscape.",
    sections: [
      { title: "Learning focus", items: ["Technology learning", "Risk and security awareness", "Professional capability building"] },
      { title: "Impact", items: ["Knowledge transfer", "Skill readiness", "Improved organizational confidence"] },
    ],
  },
  dgmagazine: {
    eyebrow: "DGMAGAZINE",
    title: "DGMAGAZINE: thought leadership and digital perspective",
    intro:
      "A media and knowledge platform that brings clarity to technology, security, transformation and innovation trends shaping business decisions.",
    sections: [
      { title: "Coverage", items: ["Industry analysis", "Technology commentary", "Executive thinking"] },
      { title: "Benefit", items: ["Sharper perspective", "Broader awareness", "Stronger digital understanding"] },
    ],
  },
  dgcloud: {
    eyebrow: "DGCLOUD",
    title: "DGCLOUD: secure and scalable digital infrastructure",
    intro:
      "Built for scalable operations, reliable service delivery and secure modernization across technology environments.",
    sections: [
      { title: "Focus", items: ["Cloud-ready architecture", "Data operations", "Resilience and scale"] },
      { title: "Outcome", items: ["Reduced friction", "Improved governance", "Operational continuity"] },
    ],
  },
  threatassurance: {
    eyebrow: "THREATASSURANCE",
    title: "THREATASSURANCE: risk intelligence and resilience planning",
    intro:
      "A practical assurance model that helps organizations understand risk, prepare response strategies and improve operational confidence.",
    sections: [
      { title: "Capabilities", items: ["Threat understanding", "Control validation", "Resilience planning"] },
      { title: "Business value", items: ["More informed decisions", "Reduced exposure", "Continuity ready operations"] },
    ],
  },
  dglabs: {
    eyebrow: "DGLABS",
    title: "DGLABS: experimentation and innovation engineering",
    intro:
      "A product and innovation environment focused on experimentation, secure engineering and iterative transformation.",
    sections: [
      { title: "Focus", items: ["Prototype development", "Innovation labs", "Emerging technology exploration"] },
      { title: "Value", items: ["Faster validation", "Risk-aware experimentation", "Higher-confidence delivery"] },
    ],
  },
  research: {
    eyebrow: "Research",
    title: "Research that sharpens product and strategy decisions",
    intro:
      "We combine technology analysis, product evaluation and market intelligence to help organizations move with more clarity and less uncertainty.",
    sections: [
      {
        title: "Research themes",
        items: [
          "Technology landscape analysis.",
          "Product suitability and capability evaluation.",
          "Innovation and adoption trends across ecosystems.",
        ],
      },
      {
        title: "Outcome",
        items: [
          "Prioritized investment and action.",
          "Better product fit and faster validation.",
          "Stronger strategic confidence across teams.",
        ],
      },
    ],
  },
  "cyber-research": {
    eyebrow: "Cyber Research",
    title: "Cyber research and security intelligence",
    intro:
      "We study digital risk and emerging threat patterns to help organizations understand what matters most for resilience and strategic security planning.",
    sections: [
      { title: "Research focus", items: ["Threat trends", "Security patterns", "Exposure analysis"] },
      { title: "Value", items: ["Better visibility", "Prioritized action", "Stronger resilience planning"] },
    ],
  },
  "product-evaluation": {
    eyebrow: "Product Evaluation",
    title: "Product evaluation and technology assessment",
    intro:
      "We assess technology options, product fit and operational readiness to support better investment and implementation decisions.",
    sections: [
      { title: "Typical review areas", items: ["Capability fit", "Security posture", "Operational readiness"] },
      { title: "Decision support", items: ["Shortlist quality", "Risk comparison", "Implementation clarity"] },
    ],
  },
  "innovation-pipeline": {
    eyebrow: "Innovation Pipeline",
    title: "Innovation pipeline and technology acceleration",
    intro:
      "We help organizations scan opportunities, validate promising ideas and move from experimentation into focused digital execution.",
    sections: [
      { title: "Pipeline focus", items: ["Concept validation", "Prototype readiness", "Growth planning"] },
      { title: "Execution", items: ["Measured rollout", "Operational integration", "Business continuity"] },
    ],
  },
};

export function SitePage({ slug, locale = "en" }: { slug: string; locale?: string }) {
  const page = pages[slug] ?? pages.about;
  const isRTL = locale === "ar" || locale === "ur";

  return (
    <main dir={isRTL ? "rtl" : "ltr"} className="bg-[var(--bg)] text-[var(--text)]">
      <ContentPage eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <ImagePanel label={page.eyebrow} />

          <div className="space-y-6">
            {page.sections.map((section) => (
              <div key={section.title} className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--text)]">{section.title}</h2>
                <ul className="mt-4 space-y-3 text-base leading-7 text-[var(--muted)]">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <p className="text-sm font-medium text-[var(--muted)]">Ready to move forward?</p>
              <LocalizedLink href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                Book a conversation
                <ArrowRight className="h-4 w-4" />
              </LocalizedLink>
            </div>
          </div>
        </div>
      </ContentPage>
    </main>
  );
}
