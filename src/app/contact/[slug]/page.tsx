import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";

const formFieldsMap: Record<
  string,
  {
    title: string;
    description: string;
    fields: Array<{
      name: string;
      label: string;
      type?: "text" | "email" | "tel" | "textarea";
      placeholder?: string;
      required?: boolean;
    }>;
    consentText?: string;
  }
> = {
  "general-inquiry": {
    title: "General inquiry",
    description: "Share the context, your goals and the timeline you are considering for the engagement.",
    fields: [
      { name: "name", label: "Full name", required: true, placeholder: "Your name" },
      { name: "email", label: "Email address", type: "email", required: true, placeholder: "you@example.com" },
      { name: "company", label: "Organization or company", placeholder: "Your organization" },
      { name: "message", label: "How can we help?", type: "textarea", required: true, placeholder: "Tell us about your requirement" },
    ],
  },
  "request-consultation": {
    title: "Request consultation",
    description: "Tell us what challenge you are trying to solve and our team will help identify the appropriate next step.",
    fields: [
      { name: "name", label: "Full name", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "company", label: "Organization" },
      { name: "details", label: "Requirement summary", type: "textarea", required: true, placeholder: "Describe your goals, timeline and current challenge" },
    ],
  },
  "product-inquiry": {
    title: "Product inquiry",
    description: "Ask about platforms, product capability or the right DIGINFO solution for your organization.",
    fields: [
      { name: "name", label: "Full name", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "product", label: "Product or platform of interest", required: true },
      { name: "message", label: "What would you like to learn?", type: "textarea", required: true },
    ],
  },
  "partnership-inquiry": {
    title: "Partnership inquiry",
    description: "Share details about a potential partnership, ecosystem collaboration or strategic opportunity.",
    fields: [
      { name: "name", label: "Contact name", required: true },
      { name: "email", label: "Work email", type: "email", required: true },
      { name: "organization", label: "Organization" },
      { name: "details", label: "Partnership opportunity", type: "textarea", required: true },
    ],
  },
  "company-profile-request": {
    title: "Company profile request",
    description: "Request a corporate overview, ecosystem summary or stakeholder-ready profile.",
    fields: [
      { name: "name", label: "Your name", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "company", label: "Organization" },
      { name: "reason", label: "What would you like to review?", type: "textarea", required: true },
    ],
  },
  "media-inquiry": {
    title: "Media inquiry",
    description: "Request editorial support, spokesperson contact or media information from DIGINFO.",
    fields: [
      { name: "name", label: "Your name", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "media", label: "Outlet or publication" },
      { name: "topic", label: "Request details", type: "textarea", required: true },
    ],
  },
  "careers-inquiry": {
    title: "Careers inquiry",
    description: "Tell us about the roles or skill areas that interest you and the type of opportunity you are exploring.",
    fields: [
      { name: "name", label: "Full name", required: true },
      { name: "email", label: "Email address", type: "email", required: true },
      { name: "experience", label: "Relevant experience or expertise" },
      { name: "message", label: "Tell us about your interests", type: "textarea", required: true },
    ],
  },
  "security-disclosure": {
    title: "Security disclosure",
    description: "Report a vulnerability or security concern through a responsible disclosure workflow.",
    fields: [
      { name: "researcher", label: "Researcher identity or contact", required: true },
      { name: "product", label: "Affected product or platform", required: true },
      { name: "summary", label: "Vulnerability summary", type: "textarea", required: true },
      { name: "reproduction", label: "Reproduction details", type: "textarea", required: true },
      { name: "severity", label: "Severity evidence or impact", type: "textarea", required: true },
    ],
    consentText: "I confirm that I am reporting this in a responsible, non-destructive and policy-aligned manner.",
  },
};

const slugs = Object.keys(formFieldsMap);

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function ContactFormPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const form = formFieldsMap[slug];

  if (!form) notFound();

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <ContactForm
        title={form.title}
        description={form.description}
        fields={form.fields}
        consentText={form.consentText}
      />
    </main>
  );
}
