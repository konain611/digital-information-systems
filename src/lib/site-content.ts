export type SitePageContent = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: Array<{ title: string; items: string[] }>;
  cta?: { label: string; href: string };
};

export const siteContent: Record<string, SitePageContent> = {
  "who-we-are": {
    eyebrow: "Who We Are",
    title: "DIGINFO builds business, technology and trust together.",
    intro:
      "DIGINFO helps organizations solve business challenges, secure operations, build intelligence and modernize technology through a connected ecosystem of owned platforms, research, cloud, education and secure engineering.",
    sections: [
      {
        title: "Our story",
        items: [
          "DIGINFO began from a security and technology capability base and grew into a broader business, intelligence and platform company.",
          "Our work spans cyber resilience, digital transformation, enterprise assurance, AI intelligence, cloud modernization and product innovation.",
          "We partner with governments, enterprises and growth-focused businesses that need a more reliable path to digital progress.",
        ],
      },
      {
        title: "What guides us",
        items: [
          "Business understanding before technology decisions.",
          "Security, governance and trust integrated from the start.",
          "Long-term ownership, practical execution and measurable value.",
        ],
      },
    ],
    cta: { label: "Talk to DIGINFO", href: "/contact/request-consultation" },
  },
  "about-diginfo": {
    eyebrow: "About DIGINFO",
    title: "A technology company with business clarity and secure execution.",
    intro:
      "DIGINFO combines business understanding, secure engineering, research and platform capability to help organizations modernize without losing trust, continuity or focus.",
    sections: [
      {
        title: "Business-first approach",
        items: [
          "We align technology strategy with real business outcomes.",
          "We solve operational, risk and modernization challenges with practical delivery models.",
          "We help leaders make better decisions with a view across technology, security and growth.",
        ],
      },
      {
        title: "Connected ecosystem",
        items: [
          "Our owned ecosystem spans cloud, AI, learning, media, assurance, engineering and enterprise operations.",
          "Rather than isolated products, we design connected capabilities that reinforce trust and accelerate execution.",
        ],
      },
    ],
    cta: { label: "Explore our ecosystem", href: "/ecosystem" },
  },
  "vision-and-strategy": {
    eyebrow: "Vision & Strategy",
    title: "Strategy rooted in continuity, intelligence and secure growth.",
    intro:
      "DIGINFO’s strategy is simple: help organizations operate reliably, use technology wisely and grow without compromising trust.",
    sections: [
      {
        title: "Our strategic intent",
        items: [
          "Build trusted digital ecosystems that support resilient operations.",
          "Apply AI and intelligence responsibly, with human review and accountability in place.",
          "Turn research, engineering and platform ownership into practical business advantage.",
        ],
      },
      {
        title: "Business outcomes",
        items: [
          "Business continuity even under pressure.",
          "AI-powered intelligence for better decisions and faster action.",
          "Technology innovation shaped by real organizational needs.",
          "Secure growth grounded in governance, people and operational maturity.",
        ],
      },
    ],
    cta: { label: "View our capabilities", href: "/what-we-do" },
  },
  leadership: {
    eyebrow: "Leadership",
    title: "Leadership that connects business insight, security and technology execution.",
    intro:
      "Our leadership model combines strategic direction, operational accountability and technical depth so that digital change stays aligned with business reality.",
    sections: [
      {
        title: "Leadership focus",
        items: [
          "Set direction across cyber resilience, cloud modernization, innovation and enterprise trust.",
          "Support executive decisions with practical insight and operational discipline.",
          "Create accountability systems that help teams move faster with confidence.",
        ],
      },
      {
        title: "How we lead",
        items: [
          "We keep business outcomes central to every technology investment.",
          "We connect strategy, product thinking and security governance.",
          "We build sustainable capability rather than isolated project wins.",
        ],
      },
    ],
    cta: { label: "Meet the team", href: "/contact" },
  },
  "our-journey": {
    eyebrow: "Our Journey",
    title: "From cybersecurity foundations to a broader digital capability ecosystem.",
    intro:
      "DIGINFO’s journey reflects a steady expansion from cyber capability and assurance toward a connected platform model that supports technology, learning, research and growth.",
    sections: [
      {
        title: "Milestones",
        items: [
          "Built a strong foundation in digital security, systems trust and technology enablement.",
          "Expanded into product engineering, cloud services and research-led transformation.",
          "Created a wider ecosystem of owned platforms, education, intelligence and operational support.",
        ],
      },
      {
        title: "Today",
        items: [
          "DIGINFO operates at the intersection of cybersecurity, enterprise modernization and strategic digital growth.",
          "The ecosystem is designed to work together rather than as disconnected offerings.",
        ],
      },
    ],
    cta: { label: "See our innovation model", href: "/innovation" },
  },
  partnerships: {
    eyebrow: "Partnerships",
    title: "Partnerships that extend capability and trust.",
    intro:
      "We connect with technology leaders, academic institutions, community programs and enterprise stakeholders to build stronger capabilities and better digital outcomes.",
    sections: [
      {
        title: "Partnership model",
        items: [
          "Collaborate on technology modernization and secure delivery programs.",
          "Support research, learning and professional capability development.",
          "Build market-ready products, services and community programs with a focus on trust.",
        ],
      },
      {
        title: "Strategic value",
        items: [
          "Expand reach through shared capability and market access.",
          "Strengthen resilience through ecosystem coordination.",
          "Improve innovation by combining insight, delivery and governance.",
        ],
      },
    ],
    cta: { label: "Request a partnership discussion", href: "/contact/partnership-inquiry" },
  },
  careers: {
    eyebrow: "Careers",
    title: "Build your future with DIGINFO.",
    intro:
      "DIGINFO is building a workforce that can support digital trust, technology transformation and secure innovation across public and private sectors.",
    sections: [
      {
        title: "Why joinDIGINFO",
        items: [
          "Work on meaningful digital transformation and security programs.",
          "Contribute to product, research and learning ecosystems with real-world impact.",
          "Grow across architecture, engineering, assurance, research and strategy.",
        ],
      },
      {
        title: "Opportunity areas",
        items: [
          "Cybersecurity and digital resilience.",
          "AI, product engineering and research.",
          "Cloud, learning, operations and enterprise modernization.",
        ],
      },
    ],
    cta: { label: "View careers inquiry", href: "/contact/careers-inquiry" },
  },
  "experience": {
    eyebrow: "Experience",
    title: "Experience built across mission-critical digital environments.",
    intro:
      "DIGINFO has worked across sectors where trust, continuity and operational confidence matter most, from public infrastructure to enterprise technology modernization.",
    sections: [
      {
        title: "Value of our experience",
        items: [
          "We understand the operating realities of high-risk and regulated environments.",
          "We support organizations that need a practical and dependable path to resilient digital growth.",
          "We turn complexity into structured action and outcome-focused delivery.",
        ],
      },
      {
        title: "Representative results",
        items: [
          "Enterprise assurance and governance improvements.",
          "Digital modernization for secure, scalable operations.",
          "Research-backed platform, product and learning initiatives.",
        ],
      },
    ],
    cta: { label: "Request a consultation", href: "/contact/request-consultation" },
  },
  "what-we-do": {
    eyebrow: "What We Do",
    title: "We help organizations secure operations and grow with confidence.",
    intro:
      "DIGINFO combines advisory, engineering, intelligence and platform capability to help organizations navigate digital change with resilience, clarity and execution confidence.",
    sections: [
      {
        title: "Core capability groups",
        items: [
          "Cyber resilience and secure transformation.",
          "Cloud modernization and platform enablement.",
          "Risk governance, assurance and digital continuity.",
          "AI intelligence, education and product innovation.",
        ],
      },
      {
        title: "Delivery model",
        items: [
          "Business-focused advisory and strategic planning.",
          "Technology and platform design grounded in operational realities.",
          "Secure execution across change programs and long-term growth agendas.",
        ],
      },
    ],
    cta: { label: "Discuss your challenge", href: "/contact/request-consultation" },
  },
  "cyber-resilience": {
    eyebrow: "Cyber Resilience",
    title: "Cyber resilience built for continuity, detection and recovery.",
    intro:
      "We help organizations design resilient security programs that reduce disruption, improve confidence and support continuity under pressure.",
    sections: [
      {
        title: "What we focus on",
        items: [
          "Security posture assessment and practical remediation planning.",
          "Threat, vulnerability and control prioritization.",
          "Operational resilience strategies that keep business critical services moving.",
        ],
      },
      {
        title: "Outcome",
        items: [
          "Faster detection and response workflows.",
          "Stronger recovery preparedness and leadership visibility.",
          "Better confidence across risk, technology and operations teams.",
        ],
      },
    ],
    cta: { label: "Request a security assessment", href: "/contact/general-inquiry" },
  },
  "secure-digital-transformation": {
    eyebrow: "Secure Digital Transformation",
    title: "Transformation that balances speed, governance and trust.",
    intro:
      "Digital transformation moves faster when business priorities, operating constraints and security considerations work together rather than in isolation.",
    sections: [
      {
        title: "Our role",
        items: [
          "Translate strategic digital initiatives into practical operating models.",
          "Align architecture, governance and business value across transformation programs.",
          "Reduce friction by combining governance, continuity and execution discipline.",
        ],
      },
      {
        title: "Business impact",
        items: [
          "More strategic transformation decisions.",
          "Lower implementation risk and fewer siloed projects.",
          "Improved stakeholder trust and operating clarity.",
        ],
      },
    ],
    cta: { label: "Talk to our team", href: "/contact/request-consultation" },
  },
  "cloud-platform-modernization": {
    eyebrow: "Cloud & Platform Modernization",
    title: "Modernize cloud and platform foundations without losing control.",
    intro:
      "Cloud modernization is not only about migration; it is about building secure, governable and efficient platforms that support scale and continuity.",
    sections: [
      {
        title: "Modernization focus",
        items: [
          "Secure cloud architecture design and operating model planning.",
          "Platform modernization and governance for scalable digital services.",
          "Automation, resiliency and operating-clarity improvements across systems.",
        ],
      },
      {
        title: "Outcome",
        items: [
          "Faster, more controlled technology delivery.",
          "Reduced risk in multi-platform environments.",
          "Stronger alignment between infrastructure and business growth.",
        ],
      },
    ],
    cta: { label: "Discuss modernization", href: "/contact/product-inquiry" },
  },
  "governance-risk-assurance": {
    eyebrow: "Governance, Risk & Assurance",
    title: "Governance and assurance built to work in the real world.",
    intro:
      "We help organizations create governance models, risk controls and assurance routines that are realistic, measurable and useful to decision-makers.",
    sections: [
      {
        title: "Focus areas",
        items: [
          "Policy design, accountability and operating model maturity.",
          "Risk controls, assurance planning and governance reporting.",
          "Control validation aligned to business and operational priorities.",
        ],
      },
      {
        title: "Value delivered",
        items: [
          "Clear ownership and decision pathways.",
          "Improved audit readiness and stakeholder confidence.",
          "More robust governance of change, risk and digital operations.",
        ],
      },
    ],
    cta: { label: "Book a governance review", href: "/contact/request-consultation" },
  },
  "ai-intelligence-services": {
    eyebrow: "AI & Intelligence Services",
    title: "AI-powered intelligence with human governance and operational relevance.",
    intro:
      "DIGINFO brings together AI, intelligence, content analysis and expert oversight so organizations can turn signals into useful, accountable decision support.",
    sections: [
      {
        title: "Capabilities",
        items: [
          "DGBRAIN-enabled analysis and insight generation.",
          "Knowledge synthesis across internal and external contexts.",
          "Human review for material recommendations and operational decisions.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "Better visibility across complex decision environments.",
          "More structured intelligence from signals, content and operational data.",
          "Responsible AI adoption with trust and accountability built in.",
        ],
      },
    ],
    cta: { label: "Explore DGBRAIN", href: "/innovation/dgbrain-ai-intelligence-engine" },
  },
  "education-workforce-development": {
    eyebrow: "Education & Workforce Development",
    title: "Capability building for tomorrow’s digital and security workforce.",
    intro:
      "DIGINFO supports professional learning, workforce readiness and digital confidence through training, research-led learning paths and connected platform experiences.",
    sections: [
      {
        title: "Learning focus",
        items: [
          "Technical learning and capability enablement.",
          "Security awareness and digital trust education.",
          "Professional development across product, operations and governance domains.",
        ],
      },
      {
        title: "Impact",
        items: [
          "Builds workforce confidence and skill readiness.",
          "Bridges learning with real operating requirements.",
          "Supports long-term talent and digital maturity.",
        ],
      },
    ],
    cta: { label: "Explore DGACADEMY", href: "/ecosystem/dgacademy" },
  },
  "technology-manufacturing-product-innovation": {
    eyebrow: "Technology Manufacturing & Product Innovation",
    title: "Research-led product innovation and secure engineering capability.",
    intro:
      "DIGINFO develops, validates and scales technological products and platforms with a focus on practical business value, trust and engineering quality.",
    sections: [
      {
        title: "Areas of work",
        items: [
          "Product design and engineering with enterprise reality in mind.",
          "Secure product development and validation pathways.",
          "Manufacturing, engineering and platform innovation across digital and hardware contexts.",
        ],
      },
      {
        title: "Value",
        items: [
          "Converts research into practical capability.",
          "Improves product readiness and operational confidence.",
          "Builds ownership across innovation, engineering and business outcomes.",
        ],
      },
    ],
    cta: { label: "Learn about innovation", href: "/innovation" },
  },
  "business-continuity-growth-enablement": {
    eyebrow: "Business Continuity & Growth Enablement",
    title: "Keep operations moving while preparing for sustainable growth.",
    intro:
      "Business continuity and growth are not separate priorities. DIGINFO helps organizations build resilience into the operating model while enabling better strategic scale.",
    sections: [
      {
        title: "What we enable",
        items: [
          "Operational continuity planning and risk-aware execution.",
          "Growth enablement across cloud, product, insight and governance programs.",
          "Clear pathways that protect continuity while supporting expansion.",
        ],
      },
      {
        title: "Result",
        items: [
          "Resilient digital operations.",
          "Confidence to grow without unmanaged complexity.",
          "A stronger foundation for enterprise transformation.",
        ],
      },
    ],
    cta: { label: "Request a growth conversation", href: "/contact/request-consultation" },
  },
  industries: {
    eyebrow: "Industries",
    title: "DIGINFO works across sectors where trust and operational continuity matter most.",
    intro:
      "We help organizations in regulated, public, infrastructure and enterprise environments modernize securely, strengthen governance and improve decision confidence.",
    sections: [
      {
        title: "Industry focus",
        items: [
          "Government and public sector operations.",
          "Banking, finance and digital trust-critical environments.",
          "Telecom, infrastructure and enterprise technology systems.",
          "Healthcare, education, manufacturing and industrial operations.",
        ],
      },
      {
        title: "What we bring",
        items: [
          "Security-first thinking with business context.",
          "Capabilities adapted to sector risk and operational demands.",
          "A practical model for modernization, assurance and growth.",
        ],
      },
    ],
    cta: { label: "Explore sector solutions", href: "/what-we-do" },
  },
  "government-public-sector": {
    eyebrow: "Government & Public Sector",
    title: "Digital resilience for public trust and critical services.",
    intro:
      "Public sector organizations need technology systems that are secure, accountable, resilient and directly aligned to service continuity.",
    sections: [
      {
        title: "Key needs",
        items: [
          "Secure service delivery and operational continuity.",
          "Governance, assurance and policy alignment.",
          "Digital modernization with accountability and trust in place.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Risk reviews and governance programs.",
          "Digital transformation planning and secure modernization.",
          "Platform and intelligence support for institutional resilience.",
        ],
      },
    ],
    cta: { label: "Talk to DIGINFO", href: "/contact/request-consultation" },
  },
  "banking-finance": {
    eyebrow: "Banking & Finance",
    title: "Secure growth for highly regulated digital operations.",
    intro:
      "Financial institutions need secure operations, strong governance and dependable technology systems to support growth and customer trust.",
    sections: [
      {
        title: "Challenges addressed",
        items: [
          "Cyber risk across digital channels and internal systems.",
          "Operational resilience and control assurance.",
          "Modernization without compromising governance or continuity.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Governance, risk and assurance programs.",
          "Cloud and platform modernization planning.",
          "Intelligence-led security and decision support.",
        ],
      },
    ],
    cta: { label: "Request a strategy conversation", href: "/contact/request-consultation" },
  },
  telecom: {
    eyebrow: "Telecom",
    title: "Reliable digital operations for connected services and infrastructure.",
    intro:
      "Telecom organizations rely on secure, resilient and scalable platforms to support mission-critical communications and service continuity.",
    sections: [
      {
        title: "Challenges addressed",
        items: [
          "Large-scale operational complexity.",
          "Security, resilience and network service continuity.",
          "Digital modernization under pressure from business growth.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Platform and cloud modernization.",
          "Risk governance and assurance frameworks.",
          "AI-powered intelligence and secure transformation planning.",
        ],
      },
    ],
    cta: { label: "Discuss telecom requirements", href: "/contact/product-inquiry" },
  },
  healthcare: {
    eyebrow: "Healthcare",
    title: "Trustworthy digital operations for patient and service continuity.",
    intro:
      "Healthcare environments need systems that are secure, resilient, compliant and built around patient trust and continuity of care.",
    sections: [
      {
        title: "Key needs",
        items: [
          "Protect sensitive digital operations and clinical systems.",
          "Strengthen resilience, governance and continuity.",
          "Support modernization aligned with operational and clinical realities.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Cyber resilience planning and assurance.",
          "Modernization support for healthcare technology systems.",
          "Operational risk frameworks and transformation guidance.",
        ],
      },
    ],
    cta: { label: "Request a conversation", href: "/contact/request-consultation" },
  },
  education: {
    eyebrow: "Education",
    title: "Digital capability and learning for modern institutions.",
    intro:
      "Education institutions need secure digital readiness, resilient infrastructure and strong learning programs to support students, staff and institutional continuity.",
    sections: [
      {
        title: "Focus areas",
        items: [
          "Secure digital infrastructure and learning environments.",
          "Workforce and student capability development.",
          "Governance and modernization support for institutional growth.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Education and workforce development programs.",
          "Cloud modernization and platform guidance.",
          "Research-driven learning and secure technology support.",
        ],
      },
    ],
    cta: { label: "Explore DGACADEMY", href: "/ecosystem/dgacademy" },
  },
  "critical-infrastructure": {
    eyebrow: "Critical Infrastructure",
    title: "Operational resilience for infrastructure that cannot fail.",
    intro:
      "Critical infrastructure requires disciplined, trusted and resilient technology operations because failures can affect services, safety and national continuity.",
    sections: [
      {
        title: "Core focus",
        items: [
          "Infrastructure resilience and continuity planning.",
          "Risk visibility, assurance and governance.",
          "Secure modernization of technology environments.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Risk assessment and strategic resilience support.",
          "Governance, assurance and digital modernization planning.",
          "Secure engineering and platform capability.",
        ],
      },
    ],
    cta: { label: "Request critical infrastructure support", href: "/contact/request-consultation" },
  },
  "enterprise-technology": {
    eyebrow: "Enterprise & Technology",
    title: "Secure, scalable growth for digital-first businesses.",
    intro:
      "Technology-led organizations need strategic alignment across security, product, cloud and operations to sustain growth without losing control.",
    sections: [
      {
        title: "Typical challenges",
        items: [
          "Scaling digital operations without governance gaps.",
          "Balancing innovation speed with risk clarity.",
          "Ensuring platform modernization supports long-term growth.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Transformation and modernization planning.",
          "AI and intelligence-enabled operational improvement.",
          "Platform, security and business continuity alignment.",
        ],
      },
    ],
    cta: { label: "Talk to our advisory team", href: "/contact/request-consultation" },
  },
  "manufacturing-industrial": {
    eyebrow: "Manufacturing & Industrial",
    title: "Secure technology for resilient industrial operations.",
    intro:
      "Manufacturing and industrial environments rely on secure infrastructure, efficient operations and resilient processes to maintain business continuity.",
    sections: [
      {
        title: "Primary themes",
        items: [
          "Operational technology modernization and resilience.",
          "Secure digital process design and connected systems.",
          "Technology innovation with governance and continuity in mind.",
        ],
      },
      {
        title: "DIGINFO support",
        items: [
          "Engineering and platform modernization.",
          "Risk governance and assurance support.",
          "Product development and digital innovation planning.",
        ],
      },
    ],
    cta: { label: "Explore engineering services", href: "/contact/product-inquiry" },
  },
  innovation: {
    eyebrow: "Innovation",
    title: "Innovation is how we turn complexity into capability.",
    intro:
      "DIGINFO creates business value by combining research, product engineering, AI capability, secure systems and disciplined execution across a modern digital ecosystem.",
    sections: [
      {
        title: "Innovation themes",
        items: [
          "AI and intelligence enablement with human oversight.",
          "Product engineering and secure platform development.",
          "Research, validation and responsible security operations.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "Innovation should improve business performance, not just add technical complexity.",
          "Real leverage comes from connecting research, engineering and operational execution.",
        ],
      },
    ],
    cta: { label: "Explore DGBRAIN", href: "/innovation/dgbrain-ai-intelligence-engine" },
  },
  "dgbrain-ai-intelligence-engine": {
    eyebrow: "DGBRAIN",
    title: "DGBRAIN brings intelligence, clarity and responsible decision support.",
    intro:
      "DGBRAIN is DIGINFO’s flagship AI and intelligence platform. It helps organizations turn signals, content and knowledge into structured insight while keeping accountability in human hands.",
    sections: [
      {
        title: "Core role",
        items: [
          "Support analysis, search understanding and recommendation workflows.",
          "Synthesize information from internal and external sources.",
          "Enable more informed decisions across enterprise and product contexts.",
        ],
      },
      {
        title: "Human review model",
        items: [
          "DIGINFO experts review and validate material outputs.",
          "DGBRAIN supports insight generation, but responsible people keep accountability for action.",
        ],
      },
    ],
    cta: { label: "Explore AI services", href: "/what-we-do/ai-intelligence-services" },
  },
  "research-and-development": {
    eyebrow: "Research & Development",
    title: "Research and development that informs products, strategy and secure growth.",
    intro:
      "Our research agenda connects business challenges with emerging technologies, validation work and practical product thinking.",
    sections: [
      {
        title: "Focus",
        items: [
          "Technology and market landscape analysis.",
          "Platform, product and capability evaluation.",
          "Research that supports business decisions and secure innovation.",
        ],
      },
      {
        title: "Outcomes",
        items: [
          "Faster validation of promising ideas.",
          "Better investment prioritization and product fit.",
          "Clearer strategic direction for digital growth.",
        ],
      },
    ],
    cta: { label: "See our insights", href: "/insights/research" },
  },
  "product-engineering": {
    eyebrow: "Product Engineering",
    title: "Product engineering built around business value and operational reality.",
    intro:
      "DIGINFO’s engineering approach connects product thinking, secure development practices and delivery discipline to build usable, governable solutions.",
    sections: [
      {
        title: "Engineering focus",
        items: [
          "Design for business utility, not only technical novelty.",
          "Operate with maintainability, quality and security in mind.",
          "Turn high-uncertainty ideas into practical, testable outcomes.",
        ],
      },
      {
        title: "Value",
        items: [
          "Better product readiness before large-scale rollout.",
          "Lower risk during implementation and scale-up.",
          "Clear alignment between engineering and growth priorities.",
        ],
      },
    ],
    cta: { label: "View technology innovation", href: "/what-we-do/technology-manufacturing-product-innovation" },
  },
  "technology-manufacturing": {
    eyebrow: "Technology Manufacturing",
    title: "Manufacturing and engineering capability rooted in secure technology practice.",
    intro:
      "Technology manufacturing connects product design, engineering discipline and secure delivery environments across digital and physical innovation contexts.",
    sections: [
      {
        title: "Key focus",
        items: [
          "Secure engineering and product development pathways.",
          "Manufacturing-enabled innovation and operational readiness.",
          "Research-backed engineering with quality and trust in mind.",
        ],
      },
      {
        title: "Business benefit",
        items: [
          "More dependable technology outcomes.",
          "Better continuity across product and operational delivery.",
          "A stronger platform for long-term digital innovation.",
        ],
      },
    ],
    cta: { label: "Speak with our innovation team", href: "/contact/product-inquiry" },
  },
  "cybersecurity-research": {
    eyebrow: "Cybersecurity Research",
    title: "Research that strengthens cyber resilience and technical understanding.",
    intro:
      "DIGINFO’s research work supports better understanding of cyber threats, security patterns and operational risks in evolving digital environments.",
    sections: [
      {
        title: "Focus areas",
        items: [
          "Threat analysis and operational security insight.",
          "Technology and control assessment across changing environments.",
          "Security research with business and resilience relevance.",
        ],
      },
      {
        title: "Outcome",
        items: [
          "Sharper decision-making for security investment and governance.",
          "Improved resilience across digital systems and teams.",
          "Better alignment between technical risk and business priorities.",
        ],
      },
    ],
    cta: { label: "View cyber intelligence", href: "/insights/cyber-intelligence" },
  },
  "responsible-ai-human-review": {
    eyebrow: "Responsible AI & Human Review",
    title: "AI is useful when human accountability is built into the system.",
    intro:
      "DIGINFO promotes an AI model in which automation supports insight generation, but people remain accountable for interpretation, approval and operational decisions.",
    sections: [
      {
        title: "Principles",
        items: [
          "Human review for material decisions and public-facing outputs.",
          "Governance designed for trust, accountability and clarity.",
          "Responsible usage across capability, content and operational workflows.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "AI should amplify judgment, not replace it.",
          "Responsible design improves trust, transparency and long-term adoption.",
        ],
      },
    ],
    cta: { label: "See DGBRAIN governance", href: "/innovation/dgbrain-ai-intelligence-engine" },
  },
  "security-validation-bug-bounty": {
    eyebrow: "Security Validation & Bug Bounty",
    title: "Security validation supports stronger trust and more resilient operations.",
    intro:
      "DIGINFO supports responsible validation practices and security research workflows that help uncover issues earlier and improve product confidence.",
    sections: [
      {
        title: "Methods",
        items: [
          "Responsible disclosure pathways and validation programs.",
          "Security review and remediation support across products and systems.",
          "Research-led improvement in resilience and operational confidence.",
        ],
      },
      {
        title: "Impact",
        items: [
          "Early issue detection and more secure release planning.",
          "Stronger product trust and response readiness.",
          "A more mature security validation model across product development.",
        ],
      },
    ],
    cta: { label: "View responsible disclosure", href: "/legal/responsible-disclosure" },
  },
  ecosystem: {
    eyebrow: "Ecosystem",
    title: "One company. Multiple platforms. Shared intelligence, identity and trust.",
    intro:
      "DIGINFO’s ecosystem brings together owned platforms for cloud, research, learning, media, assurance, enterprise operations and product innovation under one connected strategic model.",
    sections: [
      {
        title: "Core ecosystem layers",
        items: [
          "Public and commercial platforms for media, cloud, training and assurance.",
          "Shared systems for intelligence, identity, operations and enterprise enablement.",
          "Growth and community programs that connect talent, learning and impact.",
        ],
      },
      {
        title: "Clear boundaries",
        items: [
          "DGBRAIN supports AI intelligence and human review.",
          "DGHUB supports content workflow and operational control.",
          "DGEnterprise supports identity, access and subscriptions.",
          "DGSHOP supports commerce, licensing and reconciliation.",
        ],
      },
    ],
    cta: { label: "Explore product platforms", href: "/ecosystem/dgmagazine" },
  },
  dgmagazine: {
    eyebrow: "DGMAGAZINE",
    title: "DGMAGAZINE brings thought leadership, media and cyber intelligence to the public.",
    intro:
      "DGMAGAZINE is DIGINFO’s media and editorial platform for technology, cybersecurity, digital trust and strategic insight.",
    sections: [
      {
        title: "What it does",
        items: [
          "Shares expert commentary and public-facing cyber intelligence.",
          "Supports thought leadership around business, technology and digital risk.",
          "Builds awareness and trust through relevant editorial content.",
        ],
      },
      {
        title: "Where it fits",
        items: [
          "A public media platform within the DIGINFO ecosystem.",
          "Connected to DIGINFO’s broader research, intelligence and trust model.",
        ],
      },
    ],
    cta: { label: "Visit DGMAGAZINE", href: "https://dgmagazine.net" },
  },
  dgacademy: {
    eyebrow: "DGACADEMY",
    title: "DGACADEMY helps organizations build digital confidence and capability.",
    intro:
      "DGACADEMY delivers learning, professional development and capability-building experiences across cybersecurity, technology and enterprise readiness.",
    sections: [
      {
        title: "Learning model",
        items: [
          "Structured learning pathways for technical and operational teams.",
          "Professional skill development in a modern digital context.",
          "Learning experiences aligned to workforce readiness and growth.",
        ],
      },
      {
        title: "Connected ecosystem",
        items: [
          "Supports DG Care, DG Engineering and broader workforce initiatives.",
          "Connects learning with enterprise and community transformation outcomes.",
        ],
      },
    ],
    cta: { label: "Visit DGACADEMY", href: "https://dgacademy.net" },
  },
  dgcloud: {
    eyebrow: "DGCLOUD",
    title: "DGCLOUD supports secure, scalable and modern platform operations.",
    intro:
      "DGCLOUD provides an operational layer for cloud and digital infrastructure needs, including service delivery, governance and security-minded modernization.",
    sections: [
      {
        title: "Platform role",
        items: [
          "Supports secure cloud and digital infrastructure resilience.",
          "Helps enterprises modernize important workloads and platform operations.",
          "Designed to support reliable and governable technology environments.",
        ],
      },
      {
        title: "Connected systems",
        items: [
          "Connected to DG Nexus for cloud operations and platform orchestration.",
          "Aligned with secure growth and modernization objectives.",
        ],
      },
    ],
    cta: { label: "See cloud modernization", href: "/what-we-do/cloud-platform-modernization" },
  },
  "threat-assurance": {
    eyebrow: "THREATASSURANCE",
    title: "THREATASSURANCE helps organizations understand, govern and improve resilience.",
    intro:
      "THREATASSURANCE provides assurance-focused capabilities spanning governance, risk, continuity, controls, vendor risk and decision reporting.",
    sections: [
      {
        title: "Focus areas",
        items: [
          "Governance and risk visibility.",
          "Enterprise assurance and operational continuity.",
          "Control, policy and risk management support.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "Supports better executive visibility and decision readiness.",
          "Improves trust and resilience in complex operating environments.",
        ],
      },
    ],
    cta: { label: "Visit THREATASSURANCE", href: "https://threatassurance.net" },
  },
  dglabs: {
    eyebrow: "DGLABS",
    title: "DGLABS is where experimentation, validation and innovation meet.",
    intro:
      "DGLABS supports research environments, proof-of-concept work and experimentation that moves from idea to tested capability with security and practicality in view.",
    sections: [
      {
        title: "Purpose",
        items: [
          "Test transformative ideas and validate viability.",
          "Support product and technology development under measured, secure conditions.",
          "Connect research to real business outcomes.",
        ],
      },
      {
        title: "Role in ecosystem",
        items: [
          "Works alongside DIGINFO innovation programs and delivery teams.",
          "Helps shape product readiness and high-confidence engineering decisions.",
        ],
      },
    ],
    cta: { label: "Explore innovation", href: "/innovation" },
  },
  nativesecurity: {
    eyebrow: "NATIVESECURITY",
    title: "NATIVESECURITY brings secure technology and engineering focus to product innovation.",
    intro:
      "NATIVESECURITY provides a secure technology and manufacturing lens, supporting hardware-enabled and software-defined product capability across critical business contexts.",
    sections: [
      {
        title: "What it supports",
        items: [
          "Secure product and engineering capability.",
          "Technology manufacturing and trusted platform development.",
          "Operational resilience across digital and physical systems.",
        ],
      },
      {
        title: "Connected platforms",
        items: [
          "Connected to DG NSOS and product engineering initiatives.",
          "Works with DIGINFO’s innovation and engineering capabilities.",
        ],
      },
    ],
    cta: { label: "Visit NATIVESECURITY", href: "https://nativesecurity.org" },
  },
  dghub: {
    eyebrow: "DGHUB",
    title: "DGHUB is the operational control plane for content, workflow and governance.",
    intro:
      "DGHUB provides structured editorial, workflow and operational support for shared digital activity across the DIGINFO ecosystem.",
    sections: [
      {
        title: "Core role",
        items: [
          "Workflow management and approval processes.",
          "System coordination for content and operational governance.",
          "Operational clarity for internal and shared program teams.",
        ],
      },
      {
        title: "Value",
        items: [
          "Improves operational coordination.",
          "Strengthens governance across product and content workflows.",
        ],
      },
    ],
    cta: { label: "Learn about shared platforms", href: "/ecosystem" },
  },
  dgenterprise: {
    eyebrow: "DGEnterprise",
    title: "DGEnterprise keeps identity, access and digital account control aligned.",
    intro:
      "DGEnterprise supports accounts, organization structures, roles, subscriptions, entitlements and digital identity across the DIGINFO ecosystem.",
    sections: [
      {
        title: "Platform focus",
        items: [
          "Identity, access and account governance.",
          "Entitlements, role structures and subscription management.",
          "Operational alignment for business and platform access.",
        ],
      },
      {
        title: "Where it matters",
        items: [
          "Controls how users, teams and organizations interact with the broader ecosystem.",
          "Improves trust and consistency across platform experiences.",
        ],
      },
    ],
    cta: { label: "Sign in", href: "/sign-in" },
  },
  dgshop: {
    eyebrow: "DGSHOP",
    title: "DGSHOP supports transactions, licensing and product commerce workflows.",
    intro:
      "DGSHOP brings together catalog access, pricing, order flow, licensing, billing and reconciliation into a structured commercial model.",
    sections: [
      {
        title: "Key functionality",
        items: [
          "Catalogue and pricing management.",
          "Order, checkout and payment operations.",
          "Licensing and invoice reconciliation workflows.",
        ],
      },
      {
        title: "Business value",
        items: [
          "Improves commercial clarity and platform operations.",
          "Supports product monetization and subscription workflows with governance.",
        ],
      },
    ],
    cta: { label: "Contact product team", href: "/contact/product-inquiry" },
  },
  "dg-nexus": {
    eyebrow: "DG Nexus",
    title: "DG Nexus connects cloud governance and platform operations.",
    intro:
      "DG Nexus supports the secure and structured operating layer behind cloud capabilities, infrastructure orchestration, automation and digital environment management.",
    sections: [
      {
        title: "Operational purpose",
        items: [
          "Supports cloud and platform operations across infrastructure contexts.",
          "Improves automation, environment control and governance visibility.",
          "Helps teams move from fragmented environments to managed operations.",
        ],
      },
      {
        title: "Value",
        items: [
          "Greater operational consistency.",
          "Improved resilience and management clarity.",
          "Better alignment with secure modernization objectives.",
        ],
      },
    ],
    cta: { label: "See DGCLOUD", href: "/ecosystem/dgcloud" },
  },
  "advanced-lms": {
    eyebrow: "Advanced LMS",
    title: "Advanced LMS powers structured learning, assessments and workforce development.",
    intro:
      "The Advanced LMS supports training delivery, assessment, live learning workflows and institutional capability programs across customer and internal learning contexts.",
    sections: [
      {
        title: "Learning capabilities",
        items: [
          "Training delivery and assessment.",
          "Live and self-paced learning support.",
          "Workforce development and capability tracking.",
        ],
      },
      {
        title: "Business value",
        items: [
          "Improves learning outcomes and talent readiness.",
          "Supports formal and practical capability growth.",
        ],
      },
    ],
    cta: { label: "Explore DGACADEMY", href: "/ecosystem/dgacademy" },
  },
  "dg-career": {
    eyebrow: "DG Career",
    title: "DG Career supports opportunities, skills and talent pathways.",
    intro:
      "DG Career connects talent, opportunity and professional development across the DIGINFO ecosystem and wider community.",
    sections: [
      {
        title: "Focus",
        items: [
          "Hiring and talent opportunities.",
          "Professional profiles and skills development paths.",
          "Workforce growth across digital and secure-technology domains.",
        ],
      },
      {
        title: "Value",
        items: [
          "Helps people connect to meaningful work and growth.",
          "Supports enterprise capability-building across the ecosystem.",
        ],
      },
    ],
    cta: { label: "Careers inquiry", href: "/contact/careers-inquiry" },
  },
  "dg-family": {
    eyebrow: "DG Family",
    title: "DG Family connects people, communities and long-term digital trust.",
    intro:
      "DG Family helps DIGINFO sustain a community-centered approach through recognition, alumni engagement and long-term professional connection.",
    sections: [
      {
        title: "Purpose",
        items: [
          "Support community and professional recognition.",
          "Build networks around trust, learning and impact.",
          "Encourage long-term engagement with DIGINFO values and goals.",
        ],
      },
      {
        title: "Strength",
        items: [
          "Connected relationships across education, learning and professional growth.",
          "A more human network built around capability and trust.",
        ],
      },
    ],
    cta: { label: "Learn more", href: "/who-we-are/partnerships" },
  },
  "dg-care": {
    eyebrow: "DG Care",
    title: "DG Care strengthens talent development and social impact pathways.",
    intro:
      "DG Care is a governed learning and impact pathway supporting workforce capability, mentorship and professional progression in aligned ecosystem programs.",
    sections: [
      {
        title: "Purpose",
        items: [
          "Support talent development and access to learning pathways.",
          "Promote practical capability-building through safe, guided progress.",
          "Link growth initiatives with community and professional development outcomes.",
        ],
      },
      {
        title: "Impact",
        items: [
          "Improves inclusion, upskilling and learning continuity.",
          "Creates stronger professional pathways across the ecosystem.",
        ],
      },
    ],
    cta: { label: "Explore DGACADEMY", href: "/ecosystem/dgacademy" },
  },
  "dg-engineering": {
    eyebrow: "DG Engineering",
    title: "DG Engineering powers practical, secure engineering and product delivery.",
    intro:
      "DG Engineering links STEM learning, engineering capability and real-world delivery across DIGINFO’s innovation and secure product ecosystem.",
    sections: [
      {
        title: "Focus",
        items: [
          "Engineering capability development.",
          "Product and platform delivery support.",
          "Secure technology enablement for growth and resilience.",
        ],
      },
      {
        title: "Outcome",
        items: [
          "Better engineering readiness.",
          "More structured product and platform delivery.",
        ],
      },
    ],
    cta: { label: "View innovation services", href: "/what-we-do/technology-manufacturing-product-innovation" },
  },
  "dg-nsos": {
    eyebrow: "DG NSOS",
    title: "DG NSOS is DIGINFO’s secure operating-system innovation layer.",
    intro:
      "DG NSOS supports secure and efficient operating-system innovation in line with NATIVESECURITY and product-oriented engineering requirements.",
    sections: [
      {
        title: "Core value",
        items: [
          "Secure system design with engineering discipline.",
          "Support for product innovation under trusted operating models.",
          "Alignment with secure hardware and software development needs.",
        ],
      },
      {
        title: "Role",
        items: [
          "Supports secure technology deployment and engineering environments.",
          "Connects product and systems work to trusted operating architecture.",
        ],
      },
    ],
    cta: { label: "Explore NATIVESECURITY", href: "/ecosystem/nativesecurity" },
  },
  "cyber-kids": {
    eyebrow: "DG Cyber Kids",
    title: "DG Cyber Kids brings digital safety and cyber awareness to younger audiences.",
    intro:
      "DG Cyber Kids supports digital awareness, safe technology habits and early exposure to cyber skills in a responsible educational context.",
    sections: [
      {
        title: "Purpose",
        items: [
          "Introduce safer digital habits early.",
          "Build foundational cyber awareness and responsible behavior.",
          "Support broader education and community impact programs.",
        ],
      },
      {
        title: "Value",
        items: [
          "Improves long-term digital trust and safer habits.",
          "Extends community engagement beyond adult business audiences.",
        ],
      },
    ],
    cta: { label: "Learn about education", href: "/what-we-do/education-workforce-development" },
  },
  "diginfo-innovatech": {
    eyebrow: "DIGINFO INNOVATECH",
    title: "DIGINFO INNOVATECH drives product engineering and technology execution.",
    intro:
      "DIGINFO INNOVATECH brings product engineering, technology delivery and research-driven execution together to support practical innovation at scale.",
    sections: [
      {
        title: "Core role",
        items: [
          "Translate business requirements into secure, usable technology.",
          "Support platform delivery, modernization and product engineering work.",
          "Connect research outcomes with implementation and operational reality.",
        ],
      },
      {
        title: "Impact",
        items: [
          "Improves how innovation moves from concept to operational value.",
          "Builds more dependable delivery across growth and transformation initiatives.",
        ],
      },
    ],
    cta: { label: "Explore innovation", href: "/innovation" },
  },
  insights: {
    eyebrow: "Insights",
    title: "Research, perspective and strategic understanding for a changing digital world.",
    intro:
      "DIGINFO shares research, cyber intelligence, executive perspectives and practical analysis to help organizations navigate risk, technology and digital transformation with more confidence.",
    sections: [
      {
        title: "Insight areas",
        items: [
          "Research and technology intelligence.",
          "Cyber security commentary and risk-informed perspective.",
          "Executive views and practical business analysis.",
        ],
      },
      {
        title: "Where it helps",
        items: [
          "Support executive decision-making.",
          "Improve strategic clarity across technology and risk.",
          "Create a trusted source for growing digital understanding.",
        ],
      },
    ],
    cta: { label: "View research", href: "/insights/research" },
  },
  research: {
    eyebrow: "Research",
    title: "Research that sharpens strategy and technology decisions.",
    intro:
      "Our research work combines technology understanding, sector relevance and operational insight so that organizations can move with more clarity and less uncertainty.",
    sections: [
      {
        title: "Research themes",
        items: [
          "Technology evaluation and architecture insight.",
          "Product readiness and capability fit analysis.",
          "Market and operational signals for better strategic choices.",
        ],
      },
      {
        title: "Value",
        items: [
          "Better strategic investment decisions.",
          "Improved alignment between technology and business needs.",
          "A stronger research base for resilience and growth.",
        ],
      },
    ],
    cta: { label: "Request a briefing", href: "/contact/request-consultation" },
  },
  "cyber-intelligence": {
    eyebrow: "Cyber Intelligence",
    title: "Cyber intelligence for more informed security decisions.",
    intro:
      "DIGINFO helps organizations interpret threat patterns, control maturity and operating risk in a way that supports better decision-making without unnecessary noise.",
    sections: [
      {
        title: "Topic focus",
        items: [
          "Threat awareness and technical risk understanding.",
          "Operational resilience and cyber posture context.",
          "Actionable insight tied to business impact.",
        ],
      },
      {
        title: "Value",
        items: [
          "Faster prioritization of action.",
          "A clearer view of cyber risk and security decisions.",
        ],
      },
    ],
    cta: { label: "See cyber research", href: "/innovation/cybersecurity-research" },
  },
  "executive-perspectives": {
    eyebrow: "Executive Perspectives",
    title: "Executive insight for digital trust, resilience and growth.",
    intro:
      "Our executive perspectives summarize what leaders need to understand when technology, risk and growth decisions become more complex.",
    sections: [
      {
        title: "Topics",
        items: [
          "Operating model modernization.",
          "Risk governance and strategic resilience.",
          "AI and digital trust at the executive level.",
        ],
      },
      {
        title: "Outcome",
        items: [
          "Better leadership decisions.",
          "More confident technology and risk direction.",
        ],
      },
    ],
    cta: { label: "Speak with our team", href: "/contact/request-consultation" },
  },
  "articles-publications": {
    eyebrow: "Articles & Publications",
    title: "Publications and strategic commentary from DIGINFO.",
    intro:
      "Our articles and publications bring together operational knowledge, business context and digital trust perspectives for decision-makers and teams.",
    sections: [
      {
        title: "Covered topics",
        items: [
          "Technology transformation and modernization.",
          "Cybersecurity, AI and digital trust.",
          "Business continuity, platform thinking and enterprise strategy.",
        ],
      },
      {
        title: "Audience",
        items: [
          "Leaders and practitioners alike.",
          "Decision-makers looking for practical, grounded thinking.",
        ],
      },
    ],
    cta: { label: "Read the latest", href: "/insights" },
  },
  news: {
    eyebrow: "News",
    title: "Company and ecosystem news from DIGINFO.",
    intro:
      "DIGINFO shares updates on technology, innovation, partnerships, learning and strategic initiatives spanning its ecosystem.",
    sections: [
      {
        title: "Coverage",
        items: [
          "Ecosystem milestones and major initiatives.",
          "Partnerships, training and innovation delivery.",
          "Operational and platform updates relevant to stakeholders.",
        ],
      },
      {
        title: "Purpose",
        items: [
          "Keep stakeholders informed with clear, relevant updates.",
          "Make progress visible without overpromising.",
        ],
      },
    ],
    cta: { label: "Contact DIGINFO", href: "/contact" },
  },
  events: {
    eyebrow: "Events",
    title: "Events and ecosystem conversations that shape digital capability.",
    intro:
      "DIGINFO supports events, learning formats and dialogue opportunities that bring together technology, talent, cyber resilience and digital growth thinking.",
    sections: [
      {
        title: "Event themes",
        items: [
          "Cyber resilience and digital trust.",
          "Innovation, AI and technology modernization.",
          "Learning, community and ecosystem capability-building.",
        ],
      },
      {
        title: "Audience",
        items: [
          "Leaders, practitioners and partners in digital transformation.",
          "Organizations seeking practical, trusted learning experiences.",
        ],
      },
    ],
    cta: { label: "Request a briefing", href: "/contact/request-consultation" },
  },
  "case-studies": {
    eyebrow: "Case Studies",
    title: "Case studies grounded in real digital, security and transformation work.",
    intro:
      "DIGINFO showcases outcomes and lessons from engagements focused on modernization, resilience, security improvement and business continuity.",
    sections: [
      {
        title: "Focus areas",
        items: [
          "Secure transformation and cloud modernization.",
          "Governance, assurance and operational resilience.",
          "AI enablement and product innovation work.",
        ],
      },
      {
        title: "Why it matters",
        items: [
          "Case studies show how digital priorities become practical outcomes.",
          "They connect business understanding with technical execution.",
        ],
      },
    ],
    cta: { label: "See all insights", href: "/insights" },
  },
  contact: {
    eyebrow: "Contact",
    title: "Let’s talk about your next digital priority.",
    intro:
      "Whether you need advisory support, secure modernization help, ecosystem information or product guidance, DIGINFO can help shape the right next step.",
    sections: [
      {
        title: "Engagement options",
        items: [
          "General inquiry and information requests.",
          "Consultation, risk and transformation discussions.",
          "Product, partnership and careers conversations.",
        ],
      },
      {
        title: "Reach us",
        items: [
          "Email: info@diginfo.net",
          "Landline: +9234325505",
          "Offices: Karachi, Pakistan; Riyadh, Saudi Arabia",
          "Website: https://diginfo.net",
        ],
      },
    ],
    cta: { label: "Request consultation", href: "/contact/request-consultation" },
  },
  "general-inquiry": {
    eyebrow: "General Inquiry",
    title: "Tell us about your question or requirement.",
    intro:
      "Share a short summary of your requirement and our team will route it to the most relevant contact point.",
    sections: [],
    cta: { label: "Request information", href: "/contact/general-inquiry" },
  },
  "request-consultation": {
    eyebrow: "Request Consultation",
    title: "Book a consultation with DIGINFO.",
    intro:
      "Tell us about the challenge you are trying to solve and we will help identify the appropriate next step.",
    sections: [],
    cta: { label: "Book a consultation", href: "/contact/request-consultation" },
  },
  "product-inquiry": {
    eyebrow: "Product Inquiry",
    title: "Ask about DIGINFO platforms, products and technology offerings.",
    intro:
      "Share details about the platform, service or capability you want to explore and we will connect you with the appropriate team.",
    sections: [],
    cta: { label: "Inquire about products", href: "/contact/product-inquiry" },
  },
  "partnership-inquiry": {
    eyebrow: "Partnership Inquiry",
    title: "Discuss strategic partnership and ecosystem opportunities.",
    intro:
      "We welcome partnerships across business, education, secure technology, community and innovation programs.",
    sections: [],
    cta: { label: "Request partnership discussion", href: "/contact/partnership-inquiry" },
  },
  "company-profile-request": {
    eyebrow: "Company Profile Request",
    title: "Request the latest DIGINFO company profile.",
    intro:
      "Request an updated corporate overview, ecosystem summary or relevant business-profile materials for your stakeholders.",
    sections: [],
    cta: { label: "Request company profile", href: "/company-profile" },
  },
  "media-inquiry": {
    eyebrow: "Media Inquiry",
    title: "Media and editorial contact for DIGINFO.",
    intro:
      "Request a media interview, editorial conversation, spokesperson contact or information about DIGINFO and its ecosystem.",
    sections: [],
    cta: { label: "Send media request", href: "/contact/media-inquiry" },
  },
  "careers-inquiry": {
    eyebrow: "Careers Inquiry",
    title: "Start a conversation about roles, opportunities and talent growth.",
    intro:
      "Share your background, the type of opportunity you are looking for and the domain you would like to contribute to.",
    sections: [],
    cta: { label: "Submit a careers inquiry", href: "/contact/careers-inquiry" },
  },
  "security-disclosure": {
    eyebrow: "Security Disclosure",
    title: "Responsible security disclosure and validation.",
    intro:
      "Use this form to share a vulnerability report, reproduction details and responsible disclosure information in a secure and controlled manner.",
    sections: [],
    cta: { label: "Submit security disclosure", href: "/contact/security-disclosure" },
  },
  "company-profile": {
    eyebrow: "Company Profile",
    title: "DIGINFO company profile and business overview.",
    intro:
      "This landing page provides access to DIGINFO’s profile, business context and next-step contact options for stakeholders and partners.",
    sections: [
      {
        title: "What you can request",
        items: [
          "Corporate overview and business profile.",
          "Capability summary and ecosystem overview.",
          "Partner and enterprise introduction materials.",
        ],
      },
      {
        title: "Follow up",
        items: [
          "Request a detailed profile from our team.",
          "Talk to us about your strategic or digital transformation needs.",
        ],
      },
    ],
    cta: { label: "Request profile", href: "/contact/company-profile-request" },
  },
  search: {
    eyebrow: "Search",
    title: "Search DIGINFO content and platforms.",
    intro:
      "Use this page to quickly explore DIGINFO’s public content, business pages, ecosystem stories and strategic insight resources.",
    sections: [],
    cta: { label: "Browse the website", href: "/" },
  },
  "sign-in": {
    eyebrow: "Sign In",
    title: "Secure access to DIGINFO systems and services.",
    intro:
      "Use the DGEnterprise access workflow for account and service sign-in. This page is a frontend access route and can later be connected to the approved authentication flow.",
    sections: [
      {
        title: "Access",
        items: [
          "DGEnterprise account access.",
          "Secure SSO and entitlement handling.",
          "Protected operational and enterprise workflows.",
        ],
      },
      {
        title: "Next step",
        items: [
          "Use the appropriate downstream sign-in route for the service you need.",
          "If you are not a registered user, contact DIGINFO for support.",
        ],
      },
    ],
    cta: { label: "Continue to sign in", href: "https://dgenterprise.diginfo.net" },
  },
  newsletter: {
    eyebrow: "Newsletter",
    title: "Stay informed with DIGINFO updates.",
    intro:
      "Receive relevant updates on research, ecosystem developments, digital trust, AI intelligence and secure technology progress.",
    sections: [
      {
        title: "Coverage",
        items: [
          "Innovation and platform updates.",
          "Industry and cybersecurity insights.",
          "Event, education and ecosystem information.",
        ],
      },
      {
        title: "Stay connected",
        items: [
          "Sign up to receive relevant updates and news.",
          "Use the form below to join the distribution list.",
        ],
      },
    ],
    cta: { label: "Subscribe", href: "/newsletter" },
  },
  sitemap: {
    eyebrow: "Sitemap",
    title: "DIGINFO website sitemap.",
    intro:
      "This sitemap lists the public website routes and strategic landing pages available in the DIGINFO corporate website.",
    sections: [
      {
        title: "Primary sections",
        items: [
          "Home, Who We Are, What We Do, Industries, Innovation, Ecosystem, Insights, Contact.",
          "Utility and legal pages for support, privacy and compliance.",
        ],
      },
      {
        title: "Useful destinations",
        items: [
          "Company profile page.",
          "Search page.",
          "Legal and policy pages.",
        ],
      },
    ],
    cta: { label: "Review public routes", href: "/" },
  },
  "thank-you": {
    eyebrow: "Thank You",
    title: "Thank you for contacting DIGINFO.",
    intro:
      "Your message has been noted and our team will review it shortly. We appreciate the time and trust you have placed in DIGINFO.",
    sections: [
      {
        title: "What happens next",
        items: [
          "A relevant DIGINFO team member will review your request.",
          "We will follow up with the next best step or contact path.",
        ],
      },
      {
        title: "Need support now?",
        items: [
          "Email: info@diginfo.net",
          "Phone: +9234325505",
        ],
      },
    ],
    cta: { label: "Return home", href: "/" },
  },
  "privacy-policy": {
    eyebrow: "Privacy Policy",
    title: "Privacy policy",
    intro:
      "DIGINFO respects privacy and handles personal information responsibly. This page outlines the general principles governing collection, use and protection of information.",
    sections: [
      {
        title: "Information use",
        items: [
          "We use personal data only for legitimate business, communication and service needs.",
          "We protect information through reasonable operational safeguards and governance.",
        ],
      },
      {
        title: "Contact",
        items: [
          "For privacy-related questions, contact info@diginfo.net.",
        ],
      },
    ],
    cta: { label: "Contact us", href: "/contact" },
  },
  "terms-of-use": {
    eyebrow: "Terms of Use",
    title: "Terms of use",
    intro:
      "This website is provided for general information purposes. By using the website, you agree to use the information responsibly and in line with applicable law.",
    sections: [
      {
        title: "General conditions",
        items: [
          "Content is provided for informational purposes.",
          "DIGINFO may update website content and structure over time.",
        ],
      },
      {
        title: "Contact",
        items: [
          "Questions may be directed to info@diginfo.net.",
        ],
      },
    ],
    cta: { label: "Return home", href: "/" },
  },
  "cookie-policy": {
    eyebrow: "Cookie Policy",
    title: "Cookie policy",
    intro:
      "This website may use cookies, analytics and session tools to support functionality, improve user experience and maintain the effectiveness of digital operations.",
    sections: [
      {
        title: "Purpose",
        items: [
          "Improve website usability and performance.",
          "Understand traffic and engagement in a privacy-aware way.",
        ],
      },
      {
        title: "Contact",
        items: [
          "Questions or cookie preferences may be discussed with DIGINFO via info@diginfo.net.",
        ],
      },
    ],
    cta: { label: "Contact us", href: "/contact" },
  },
  "responsible-disclosure": {
    eyebrow: "Responsible Disclosure",
    title: "Responsible disclosure policy",
    intro:
      "DIGINFO welcomes responsible vulnerability reporting. We ask researchers to support safe, ethical and coordinated disclosure practices.",
    sections: [
      {
        title: "Reporting guidance",
        items: [
          "Provide clear and accurate vulnerability details.",
          "Avoid exposing sensitive data publicly before coordinated review.",
        ],
      },
      {
        title: "Submit",
        items: [
          "Use the security disclosure form in the contact section.",
        ],
      },
    ],
    cta: { label: "Submit disclosure", href: "/contact/security-disclosure" },
  },
  accessibility: {
    eyebrow: "Accessibility",
    title: "Accessibility commitment",
    intro:
      "DIGINFO aims to provide a website experience that is usable, understandable and accessible across modern devices and assistive technologies.",
    sections: [
      {
        title: "Our approach",
        items: [
          "Semantic page structure and clear headings.",
          "Accessible forms and meaningful link text.",
          "Responsive and keyboard-friendly navigation.",
        ],
      },
      {
        title: "Support",
        items: [
          "If you experience accessibility issues, contact DIGINFO at info@diginfo.net.",
        ],
      },
    ],
    cta: { label: "Contact DIGINFO", href: "/contact" },
  },
};

export const routeAliases: Record<string, string> = {
  about: "about-diginfo",
  "who-we-are": "who-we-are",
  "what-we-do": "what-we-do",
  industries: "industries",
  innovation: "innovation",
  ecosystem: "ecosystem",
  insights: "insights",
};
