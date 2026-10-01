# DIGINFO CORPORATE WEBSITE — CODING AGENT MASTER INSTRUCTION

> **IMPORTANT: THIS DOCUMENT IS THE MASTER IMPLEMENTATION HANDOVER FOR THE CODING AGENT.**
>
> The complete original DIGINFO content, information architecture, routes, terminology, corporate facts, testimonials, migration requirements, SEO requirements, governance requirements, and acceptance criteria are preserved below **without deletion**. The instructions in this section are additional implementation constraints for converting the handover into work on the **existing DIGINFO website codebase**.

---

## 0. NON-NEGOTIABLE EXECUTION RULE

You are modifying an **existing production website codebase**. This is **not a greenfield project and not a redesign**.

Before changing or creating anything:

1. Inspect and understand the existing repository.
2. Inspect the current `app/` route structure.
3. Inspect existing layouts, shared components, header, footer, navigation, buttons, cards, typography, spacing, containers, forms, icons, theme implementation, responsive behavior, metadata utilities, image handling, and existing design tokens/classes.
4. Identify the existing dark/light theme implementation and preserve it.
5. Identify the existing three-language/localization architecture and preserve its structure.
6. For this implementation phase, build and populate **English only**. Do **not** add Urdu or Arabic page content yet.
7. Do not replace the existing design system with a new design system.
8. Do not introduce arbitrary colors, backgrounds, typography, spacing, radii, shadows, or visual patterns when an existing equivalent already exists.
9. Do not hard-code new visual colors such as `bg-[#...]`, `text-[#...]`, arbitrary hex values, or similar values merely because they appear suitable. **Reuse the existing project's theme/design tokens/classes/components.**
10. Do not hard-code content into multiple components when the existing application has a content/data/config pattern that can be reused.
11. Do not assume the current code is structured differently from what you inspect. **Inspect first, then implement according to the actual repository.**

### Absolute priority

The final implementation must simultaneously satisfy:

- the existing approved visual design;
- the existing dark/light theme;
- the existing responsive behavior;
- the existing component/design language;
- the approved DIGINFO information architecture in this document;
- the exact routes specified in this document;
- the exact corporate facts specified in this document;
- the approved testimonials and their attribution;
- the approved navigation and footer;
- the approved ecosystem terminology and product boundaries;
- the approved SEO/migration requirements;
- English-only content for this phase;
- frontend-only form implementation;
- optimized Next.js implementation.

**Do not omit a requirement because it appears inconvenient to implement.**

---

# 1. DO NOT REDESIGN THE WEBSITE

The existing website's visual design is the source of truth for presentation.

Use the current:

- header;
- footer;
- desktop navigation;
- mobile navigation;
- mega-menu patterns;
- buttons;
- cards;
- hero patterns;
- section layouts;
- typography;
- spacing;
- containers;
- icons;
- animations;
- hover/focus states;
- dark/light theme;
- responsive breakpoints;
- existing reusable components;
- existing image treatment;
- existing forms;
- breadcrumbs;
- loading states;
- error states;
- metadata conventions.

Where the existing website has an established pattern, reuse it rather than creating a new one.

If a new page needs a layout that does not currently exist, compose it from existing design primitives and patterns wherever possible.

**Do not redesign the header, footer, theme, or overall visual language.**

---

# 2. EXISTING NEXT.JS STACK IS FIXED

The existing application is:

- Next.js
- App Router
- TypeScript
- Tailwind CSS

Keep the existing framework and architecture.

Do not migrate the project to another framework.

Do not replace App Router with Pages Router.

Do not introduce an unnecessary separate frontend framework.

Do not introduce a new CSS framework.

Do not replace Tailwind with another styling system.

Use the project's existing dependencies and conventions whenever they already solve the requirement.

---

# 3. ENGLISH ONLY — BUT PRESERVE LOCALIZATION ARCHITECTURE

The application supports three languages/locales.

For this implementation phase:

**ONLY ENGLISH CONTENT IS REQUIRED.**

Do not spend this phase creating Urdu or Arabic translations.

However:

- do not remove localization support;
- do not break existing locale routing;
- do not remove locale dictionaries;
- do not hard-code architecture that prevents future Urdu/Arabic content;
- follow the existing localization structure;
- keep page/content structures compatible with future translations;
- do not duplicate the entire application solely to implement English.

If the existing application already has locale-aware routes/components, integrate the new English content into that architecture.

---

# 4. EVERY ROUTE IN THE MASTER DOCUMENT MATTERS

Treat the route inventory in Section 6 and all route declarations throughout this document as authoritative.

Create/update the routes exactly as specified.

Do not silently rename:

- route segments;
- slugs;
- product names;
- navigation labels;
- page names.

Do not create alternative spellings.

Do not replace hyphens with underscores.

Do not invent abbreviated routes.

Do not remove a route because its page seems small.

Do not merge separate routes merely to reduce implementation work.

Where a route is explicitly marked as a supporting or utility route, preserve that classification.

The final website must have the complete approved route architecture.

---

# 5. APPROVED MAIN HEADER NAVIGATION — EXACT

The main navigation must be exactly:

1. Home
2. Who We Are
3. What We Do
4. Industries
5. Innovation
6. Ecosystem
7. Insights
8. Contact

Do not add DGEnterprise as a primary navigation item.

Do not add Media as a primary navigation item.

Do not add Products as a primary navigation item.

Do not add Services as a primary navigation item.

Use the existing header design and mega-menu UI, but populate it according to the approved structure in this document.

### Approved utility actions

The utility actions are:

- Company Profile
- Talk to DIGINFO
- Sign In

The public label must be:

**Sign In**

Do not expose:

**DGEnterprise Login**

as the public utility label.

---

# 6. HEADER MEGA-MENUS MUST FOLLOW THE DOCUMENT

Implement the exact approved menu structure from Section 5.

This includes:

### Who We Are

- About DIGINFO
- Vision & Strategy
- Leadership
- Our Journey
- Partnerships
- Careers

### What We Do

- Cyber Resilience
- Secure Digital Transformation
- Cloud & Platform Modernization
- Governance, Risk & Assurance
- AI & Intelligence Services
- Education & Workforce Development
- Technology Manufacturing & Product Innovation
- Business Continuity & Growth Enablement

### Industries

- Government & Public Sector
- Banking & Finance
- Telecom
- Healthcare
- Education
- Critical Infrastructure
- Enterprise & Technology
- Manufacturing & Industrial

### Innovation

- DGBRAIN AI Intelligence Engine
- Research & Development
- Product Engineering
- Technology Manufacturing
- Cybersecurity Research
- Responsible AI & Human Review
- Security Validation & Bug Bounty

### Ecosystem

Use the approved grouped mega-menu:

**Explore**
- Ecosystem Overview

**Public & Commercial Platforms**
- DGMAGAZINE
- DGACADEMY
- DGCLOUD
- THREATASSURANCE
- DGLABS
- NATIVESECURITY

**Core Shared Platforms**
- DGBRAIN
- DGHUB
- DGEnterprise
- DGSHOP
- DG Nexus
- Advanced LMS

**Growth & Community**
- DG Career
- DG Family
- DG Care

**Extensions & Engineering**
- DG NSOS
- DG Engineering
- DG Cyber Kids
- DG Bug Bounty
- DIGINFO INNOVATECH

Follow the canonical-route rules from the original document. In particular, DGBRAIN and DG Bug Bounty have canonical Innovation routes rather than duplicate canonical Ecosystem content.

### Insights

- Research
- Cyber Intelligence
- Executive Perspectives
- Articles & Publications
- News
- Events
- Case Studies

### Contact

- General Inquiry
- Request Consultation
- Product Inquiry
- Partnership Inquiry
- Company Profile Request
- Media Inquiry
- Careers Inquiry
- Security Disclosure

---

# 7. FOOTER MUST FOLLOW THE DOCUMENT

Use the existing footer design.

Do not redesign it.

Populate it with the approved groups and links from Section 15.2:

### Company

- About DIGINFO
- Vision & Strategy
- Leadership
- Our Journey
- Partnerships
- Careers
- Contact

### What We Do

- Cyber Resilience
- Secure Digital Transformation
- Cloud & Platform Modernization
- Governance, Risk & Assurance
- AI & Intelligence
- Education & Workforce
- Product Innovation
- Business Continuity

### Ecosystem

- DGMAGAZINE
- DGACADEMY
- DGCLOUD
- THREATASSURANCE
- DGLABS
- NATIVESECURITY
- Ecosystem Overview

Core-system links may be included in the secondary footer list, but **do not create a logo wall**.

### Insights

- Research
- Cyber Intelligence
- Executive Perspectives
- News
- Events
- Case Studies

### Utility

- Company Profile
- Sign In
- Search
- Sitemap
- Newsletter

### Legal

- Privacy Policy
- Terms of Use
- Cookie Policy
- Responsible Disclosure
- Accessibility

### Contact

Use the approved corporate facts exactly:

- Offices: Karachi, Pakistan; Riyadh, Saudi Arabia
- Landline: `+9234325505`
- Email: `info@diginfo.net`
- Website: `https://diginfo.net`
- Cyber Magazine: `https://dgmagazine.net`

The footer copyright must use the **dynamic current year**.

Do not retain the legacy fixed `2021–2023` copyright.

---

# 8. CORPORATE CONTACT INFORMATION MUST NOT BE CHANGED

Use these exact approved values wherever applicable:

**Legal entity:** Digital Information Systems (Pvt) Limited

**Brand:** DIGINFO

**Corporate website:** https://diginfo.net

**General email:** info@diginfo.net

**Landline:** +9234325505

**Offices:** Karachi, Pakistan; Riyadh, Saudi Arabia

**Cyber Magazine:** https://dgmagazine.net

**DGACADEMY:** https://dgacademy.net

**NATIVESECURITY:** https://nativesecurity.org

**THREATASSURANCE:** https://threatassurance.net and https://threatassurance.com

Do not invent another email address.

Do not invent another telephone number.

Do not replace these values with placeholder contact details.

Do not carry forward the unsupported `24/7 expert assistance` claim.

---

# 9. TESTIMONIALS ARE CONTROLLED CONTENT

Testimonials are not filler content.

Use the approved testimonial content and attribution from Section 21.

When a testimonial is displayed as a direct quotation:

- use the exact approved wording from the master corporate profile or original approved source;
- preserve attribution;
- preserve the person's name and title/organization accurately;
- do not rewrite a direct quotation into marketing copy;
- do not invent additional testimonials;
- do not fabricate missing titles;
- do not alter quotation meaning.

The developer mapping summaries in Section 21.1 must **not** be treated as replacements for the exact approved quotation when a direct quote is displayed.

The relevant approved attribution set includes:

- Dr. Ashfaq A. Malik — Ex-Dean / HoD Cybersecurity, PN Engineering College
- Dr. Zeeshan — Dean / HoD, Naval Architecture Department, NUST-PNEC
- Adeel Yousfani — Head of Cybersecurity, Pakistan International Airlines (PIA)
- Asif Iqbal — Chief Information Security Officer (CISO), Muslim Commercial Bank (MCB)
- Umair Ahmad — Director Information Security | CISO, Moore JFC Group
- Engr. Kh. Golam Sarwar — Chief Information Security Officer, The Premier Bank PLC., Bangladesh

Only use customer/testimonial evidence according to the permission and accuracy rules in the original document.

---

# 10. CUSTOMER/ORGANIZATION NAMES ARE ALSO CONTROLLED CONTENT

Do not casually remove, rename, or invent customer organizations from the approved list.

The approved categories and organizations are defined in Section 21.

Use them only where the page/content context calls for customer evidence and where publication permission/accuracy is valid.

Do not create a generic customer-logo wall simply because the names exist.

---

# 11. DO NOT CONFLATE DIGINFO ECOSYSTEM PRODUCTS

Maintain the boundaries exactly as described in Section 4.

In particular:

### DGBRAIN
Flagship AI and intelligence platform.

### DGHUB
Central CRM/CMS/workflow/editorial approval/operational admin/human control plane.

### DGEnterprise
Identity, accounts, organizations, roles, subscriptions, entitlements and SSO.

### DGSHOP
Catalogue, pricing, checkout, orders, payments, invoices, refunds, licensing and reconciliation.

### DG Nexus
DGCLOUD cloud-management and operations layer.

Do not describe these as one product.

Do not imply they are one monolithic application.

Use the approved "one ecosystem, clear product boundaries" principle.

---

# 12. PRODUCTS THAT MUST NOT BE PROMOTED INCORRECTLY

Do not:

- promote DG Media as a primary commercial product;
- present DG PEDIA as an active product;
- turn DGEnterprise into a primary marketing-navigation item;
- turn DGHUB into a homepage customer-facing product block;
- turn DGSHOP into a homepage marketing block;
- create a raw homepage wall containing every product logo.

The homepage must communicate the ecosystem at the approved category/outcome level.

---

# 13. HOMEPAGE CONTENT MUST FOLLOW SECTION 7

Do not replace the homepage with generic corporate copy.

The homepage content hierarchy must include:

1. Corporate proposition:
   - `Building Technology, AI Intelligence & Digital Trust`

2. Supporting message:
   - DIGINFO helps organizations solve business challenges, secure operations, build intelligence, modernize technology and grow through a connected ecosystem of owned platforms, research, cloud, education and secure engineering.

3. Business challenge statement:
   - `Where Business Challenges Meet Technology, Security and Product Innovation.`

4. Eight capability areas.

5. Four business outcomes:
   - Business Continuity
   - AI-Powered Intelligence
   - Technology Innovation
   - Secure Growth

6. DGBRAIN flagship section.

7. Technology, R&D & Manufacturing connection:
   - DGLABS
   - DIGINFO INNOVATECH
   - NATIVESECURITY
   - DG NSOS
   - secure product engineering

8. Eight approved industry groups.

9. Ecosystem preview by category, not a raw logo wall.

10. Why DIGINFO:
    - Business understanding
    - cybersecurity DNA
    - own technology
    - AI with accountability
    - research-to-product
    - talent ecosystem
    - unified architecture
    - long-term ownership

11. Insights.

12. Approved customer evidence/testimonials/case studies.

13. Final CTA:
    - Talk to DIGINFO / Request Consultation
    - Company Profile
    - relevant product visit

Use the existing homepage design and component patterns.

---

# 14. PAGE-BY-PAGE CONTENT MUST NOT BE REDUCED TO PLACEHOLDER TEXT

Every page in the original handover has:

- route;
- purpose;
- core message;
- required content;
- CTA requirements;
- related links;
- content owner.

Implement those requirements.

Do not create pages that contain only:

- a title;
- one paragraph;
- "Coming soon";
- lorem ipsum;
- generic placeholder cards.

The approved document is the content specification.

Where the document specifies a page's required content, that content must be represented in the page.

---

# 15. STANDARD INNER-PAGE STRUCTURE

Use the existing design system, but make sure every applicable inner page addresses the Appendix B checklist:

- Navigation label
- One unique H1
- Intro/summary
- Business problem
- DIGINFO response
- Evidence where approved
- Related platforms
- Related industries
- Related insights
- One primary CTA and up to two secondary actions
- SEO title
- Meta description
- Canonical URL
- OG metadata
- Structured data where valid
- Governance metadata where the CMS architecture supports it

The Appendix B guidance specifies an intro/summary of approximately 80–160 words.

Do not mechanically force this length when it would damage the approved content; use it as the document's standard content requirement.

---

# 16. FORMS: FRONTEND ONLY IN THIS PHASE

The document defines many forms.

Implement the **frontend UI and client-side interaction only**.

Do NOT build the backend submission infrastructure in this phase.

Do NOT invent database schemas for the forms.

Do NOT invent API endpoints that have not been provided.

Do NOT pretend the forms are connected to DGHUB yet.

The frontend should be structured so backend integration can be attached later.

Implement:

- form fields;
- labels;
- required/optional states;
- validation UX;
- consent checkbox;
- error states;
- loading/submitting states;
- success UI;
- accessible form controls;
- responsive layout;
- correct form type/context;
- appropriate CTA;
- prepared submission abstraction if the existing project has one.

The backend will be attached later.

The form definitions must follow Section 14 exactly.

### Forms/routes

- `/contact/general-inquiry`
- `/contact/request-consultation`
- `/contact/product-inquiry`
- `/contact/partnership-inquiry`
- `/contact/company-profile-request`
- `/contact/media-inquiry`
- `/contact/careers-inquiry`
- `/contact/security-disclosure`

The central `/contact` page must also be implemented.

---

# 17. SECURITY DISCLOSURE FORM

Treat the security disclosure form differently from ordinary contact forms from a UX perspective.

It must include the fields specified by the handover:

- Researcher identity/contact
- Affected product
- Vulnerability summary
- Severity evidence
- Reproduction details
- Consent to policy

Do not expose submitted security details publicly.

Do not create an insecure frontend pattern that displays submitted vulnerability information.

Backend/security workflow will be attached later.

---

# 18. NEXT.JS IMAGE REQUIREMENT

For local or remote images used by the website:

**Prefer and use Next.js `<Image>` from `next/image`.**

Do not use raw `<img>` for normal website images unless there is a technically justified exception that is already established by the existing project.

Follow the existing image configuration and optimization conventions.

Use appropriate:

- `width`/`height`, or
- responsive `fill` with a properly sized parent;
- `sizes`;
- `priority` only where justified, especially for actual above-the-fold/LCP imagery;
- meaningful `alt`;
- existing image loading patterns.

Do not blindly set every image to `priority`.

Do not create layout shifts.

Do not load unnecessarily large assets.

Do not use an image simply because the content document mentions an image if the existing approved design does not require one.

---

# 19. PERFORMANCE AND OPTIMIZATION REQUIREMENTS

The implementation must be optimized.

Inspect the existing application before choosing an optimization strategy.

Prioritize:

- Server Components by default where appropriate;
- Client Components only where interactivity requires them;
- minimal client-side JavaScript;
- no unnecessary hydration;
- dynamic imports for genuinely heavy client-only functionality where appropriate;
- optimized images through `next/image`;
- correct `sizes`;
- appropriate caching/revalidation consistent with the existing application;
- semantic HTML;
- minimal duplicated data;
- no unnecessary API requests;
- no unnecessary third-party scripts;
- no duplicated content payloads;
- no giant client-side configuration objects when server-side data can be used;
- accessible and performant responsive navigation.

Do not optimize by breaking the existing design or functionality.

---

# 20. SEO IS REQUIRED FOR EVERY INDEXABLE PAGE

Every indexable page must have:

- unique title;
- unique meta description;
- canonical URL;
- Open Graph metadata;
- appropriate social metadata;
- correct robots/indexability behavior;
- breadcrumb structured data where appropriate;
- relevant structured data where appropriate.

Use the existing project's metadata architecture if one already exists.

Do not create duplicate metadata implementations.

Do not use fake structured data.

Only use:

- Organization
- WebSite
- BreadcrumbList
- Article/NewsArticle
- Event
- Person
- FAQ

when the page genuinely qualifies.

---

# 21. CREATE THE XML SITEMAP

At the end of implementation, create the site's XML sitemap so that:

`/sitemap.xml`

works in production.

Because this is a Next.js App Router application, prefer the existing project's established convention; if no convention exists, use the Next.js App Router sitemap mechanism (`app/sitemap.ts`) to generate `/sitemap.xml`.

The sitemap must be based on the **approved published/indexable routes** from this handover.

Do not put `/404` or `/500` into the XML sitemap.

Do not include private/admin/authenticated operational routes.

Do not include duplicate canonical URLs.

Do not invent routes.

Make sure the final production sitemap is valid XML at `/sitemap.xml`.

Also preserve the existing human-readable `/sitemap` route specified by the handover if it is part of the application.

---

# 22. ROBOTS AND SITEMAP

Inspect the existing robots implementation.

Ensure the production robots configuration points search engines toward:

`/sitemap.xml`

Do not expose private operational/admin content through robots merely as a substitute for access control.

Follow the existing application's security model.

---

# 23. COMPANY PROFILE

The old direct PDF route:

`/DIGINFO%20PROFILE.pdf`

must not remain the main corporate profile experience.

Implement:

`/company-profile`

as the approved landing/managed download experience.

Follow the existing design.

The actual backend/download workflow can remain subject to the existing project and later integration, but the frontend page must be complete.

---

# 24. LEGACY URL MIGRATION

Implement the approved redirects from Section 18.

At minimum, account for:

- `/company/about-us/experience` → `/who-we-are/experience`
- `/company/contact-us` → `/contact`
- `/products/news-updates/dg-magazine` → `/ecosystem/dgmagazine`
- `/products/education/dg-academy` → `/ecosystem/dgacademy`
- `/products/cloud-security/dg-cloud` → `/ecosystem/dgcloud`
- `/products/security-challenge/threat-assurance` → `/ecosystem/threat-assurance`
- `/DIGINFO%20PROFILE.pdf` → `/company-profile`
- `dgenterprise.diginfo.net` → Sign In / DGEnterprise policy as specified
- `media.diginfo.net` → approved shared-service/redirect behavior

Before launch, the complete production route inventory must still be checked because the document explicitly states that routes not discoverable through public search may exist.

Do not delete indexed legacy routes without an explicit migration/redirect decision.

---

# 25. EXTERNAL PRODUCT LINKS

Use the approved external domains exactly where the document specifies them.

Known approved external destinations include:

- https://dgmagazine.net
- https://dgacademy.net
- https://nativesecurity.org
- https://threatassurance.net
- https://threatassurance.com

Do not invent additional external product domains.

If the existing project already contains configured external destinations for a product, inspect and reuse them where consistent with this document.

---

# 26. SEARCH

Implement the `/search` route according to the document.

The frontend must:

- search approved public corporate content and insights;
- display content type;
- display title;
- display summary;
- display date where relevant;
- display related product/industry where relevant;
- link to the canonical destination;
- support zero-result states;
- follow the existing design and theme.

Do not expose private DGHUB, DGEnterprise, customer, admin, or operational information.

DGBRAIN semantic search may be integrated only through approved public-content boundaries.

---

# 27. ANALYTICS

Preserve the existing analytics architecture if present.

Ensure the event model from Section 19 is represented where analytics is already configured:

- `nav_click`
- `cta_click`
- `product_outbound_click`
- `company_profile_view/download`
- `form_start`
- `form_submit`
- `sign_in_click`
- `search`
- `insight_view`
- `case_study_view`

Do not create duplicate analytics systems if one already exists.

Do not expose sensitive form values as analytics event properties.

---

# 28. ACCESSIBILITY

The implementation must meet the acceptance criteria:

- semantic headings;
- proper labels;
- keyboard operation;
- visible focus states consistent with existing design;
- meaningful link text;
- appropriate alt text;
- accessible downloads;
- accessible form errors;
- appropriate button semantics;
- accessible mobile navigation;
- appropriate ARIA only where necessary.

Do not solve accessibility by replacing the existing visual design.

---

# 29. LEGAL PAGES

Implement all required legal routes:

- `/legal/privacy-policy`
- `/legal/terms-of-use`
- `/legal/cookie-policy`
- `/legal/responsible-disclosure`
- `/legal/accessibility`

Use the existing legal-page design.

Do not invent legal claims.

Where the handover says content must be reviewed by Legal & Compliance, preserve that governance requirement and do not present invented legal text as legally approved.

---

# 30. UTILITY ROUTES

Implement/preserve:

- `/company-profile`
- `/search`
- `/sign-in`
- `/newsletter`
- `/sitemap`
- `/thank-you`
- `/404`
- `/500`

Use the existing project's conventions for special/error pages.

---

# 31. DO NOT BUILD BACKEND IN THIS TASK

This implementation phase is primarily the **frontend website implementation**.

Do not create a new backend architecture.

Do not create new databases.

Do not create production DGHUB APIs.

Do not create payment integrations.

Do not create CRM infrastructure.

Do not create authentication infrastructure if the existing Sign In integration already exists; instead connect to the existing pattern or leave the frontend integration point ready for the approved DGEnterprise SSO flow.

Do not fabricate API contracts.

Where backend integration is required by the document, implement the frontend contract/interface cleanly so backend can be connected later.

---

# 32. DO NOT CHANGE APPROVED CONTENT WITHOUT A SOURCE

Do not "improve" approved corporate wording based on personal interpretation.

Do not rewrite:

- corporate positioning;
- vision;
- mission;
- values;
- business outcomes;
- product definitions;
- route names;
- testimonials;
- contact information;
- approved external domains;

unless the original handover explicitly permits adaptation for context.

If content is missing from this document and the existing site also does not provide an approved version, do not invent factual claims.

Use an appropriate neutral UI treatment only where absolutely necessary and identify the missing content for later content-owner approval.

---

# 33. CONTENT LANGUAGE AND TERMINOLOGY

Use the exact approved names:

- DIGINFO
- DGBRAIN
- DGHUB
- DGEnterprise
- DGSHOP
- DG Nexus
- DGMAGAZINE
- DGACADEMY
- DGCLOUD
- THREATASSURANCE
- DGLABS
- NATIVESECURITY
- DG NSOS
- DG Career
- DG Family
- DG Care
- DG Engineering
- DG Cyber Kids
- DG Bug Bounty
- Advanced LMS
- DIGINFO INNOVATECH

Do not change capitalization merely for stylistic preference.

---

# 34. BUSINESS POSITIONING

The website must not revert to the old cyber-only identity.

The approved positioning is:

**Building Technology, AI Intelligence & Digital Trust**

The business statement is:

**We understand business. We build technology. We secure operations. We help organizations grow.**

The positioning line is:

**Where Business Challenges Meet Technology, Security and Product Innovation.**

The ecosystem line is:

**One Company. Multiple Platforms. Shared Intelligence, Identity and Trust.**

The DGBRAIN line is:

**DGBRAIN assists. DIGINFO experts review and approve.**

These approved lines must be used where the original content specification assigns them.

---

# 35. THE FOUR BUSINESS OUTCOMES

Use these exactly:

### Business Continuity
Keep operations secure, resilient and moving forward even when risk, disruption or technology change increases.

### AI-Powered Intelligence
Turn cyber, risk, content and operational signals into structured intelligence through DGBRAIN and expert review.

### Technology Innovation
Design and build owned platforms, products and learning systems shaped by real business requirements.

### Secure Growth
Modernize, govern, scale and develop people without separating growth from trust and resilience.

---

# 36. CONTENT RELATIONSHIPS MUST BE IMPLEMENTED

The original handover requires contextual cross-linking.

Ensure:

- every capability page references relevant industries and ecosystem platforms;
- every platform page maps back to business outcomes and at least one What We Do page;
- every industry page surfaces relevant capabilities, platform examples and approved evidence/case studies;
- insights can be associated with products, industries and capabilities;
- DGBRAIN has one canonical Innovation page;
- DG Bug Bounty has one canonical Innovation page;
- Ecosystem links to those canonical Innovation pages instead of duplicating content.

---

# 37. DESIGN/THEME SAFETY RULE

Before adding any Tailwind utility or CSS:

**Check whether the existing codebase already has the desired token/component/pattern.**

Do not introduce:

- arbitrary hex colors;
- arbitrary background colors;
- arbitrary text colors;
- arbitrary font sizes;
- arbitrary shadows;
- arbitrary rounded values;
- arbitrary spacing systems;

when an existing design token/pattern can be reused.

The goal is to make the new content look as though it was always part of the existing website.

---

# 38. RESPONSIVE BEHAVIOR

All pages and navigation must work across the existing supported breakpoints.

Do not create desktop-only pages.

Do not create mobile-only structures unnecessarily.

Do not break the existing header/mobile menu.

Forms must remain usable on mobile.

Cards and grids must adapt using the existing responsive design conventions.

---

# 39. COMPONENT ARCHITECTURE

Before creating a new component:

1. Search the repository for an existing equivalent.
2. Reuse it if appropriate.
3. Extend it if appropriate.
4. Only create a new component if the existing architecture does not support the requirement.

Avoid creating dozens of nearly identical page components when the existing application supports reusable data-driven structures.

However, do not over-generalize components so aggressively that the approved content becomes difficult to maintain.

---

# 40. SERVER VS CLIENT COMPONENTS

Prefer Server Components.

Use Client Components only for:

- interactive menus;
- theme-dependent client behavior if already required by the architecture;
- forms;
- search interactions;
- carousels/sliders;
- interactive filters;
- other genuinely client-side functionality.

Do not turn entire pages into Client Components simply because one small section is interactive.

---

# 41. FINAL IMPLEMENTATION VERIFICATION

Before considering the work complete, verify all of the following:

### Routes
- Every approved route exists.
- Route paths match the document exactly.
- No approved route was silently omitted.
- No incorrect duplicate canonical route was created.

### Header
- Exactly eight main navigation items.
- Utility actions are exactly Company Profile, Talk to DIGINFO, Sign In.
- Mega-menu categories and items match the document.

### Footer
- Approved footer groups and links exist.
- Contact details are exact.
- Dynamic current year is used.
- Legacy 2021–2023 copyright is removed.

### Content
- Homepage follows the specified hierarchy.
- Every page follows its required content specification.
- Product boundaries are correct.
- DGBRAIN is clearly flagship intelligence.
- Cybersecurity is foundational but not the entire corporate identity.

### Forms
- All form routes exist.
- Frontend fields match the handover.
- Consent is present where specified.
- Backend is not fabricated.
- Success/error/loading UX exists.

### Testimonials
- Approved attribution is correct.
- Direct quotes use approved source wording.
- No invented testimonials.

### SEO
- Every indexable page has unique metadata.
- Canonicals are correct.
- OG metadata exists.
- Structured data is used only when valid.
- Legacy redirects are configured.

### Sitemap
- `/sitemap.xml` works.
- It contains approved published/indexable routes.
- It excludes error/private routes.
- It has no duplicate canonical URLs.

### Images
- `next/image` is used for normal website imagery.
- Images have meaningful alt text.
- `sizes` is appropriate.
- No unnecessary `priority`.
- No avoidable layout shift.

### Theme
- Existing light/dark theme works.
- No hard-coded colors were introduced unnecessarily.
- Existing design tokens/components are reused.

### Localization
- Existing three-language architecture remains intact.
- This phase contains English content only.

### Accessibility
- Keyboard navigation works.
- Forms are labeled.
- Headings are semantic.
- Links/buttons are meaningful.
- Images have appropriate alt text.
- Error/success states are accessible.

### Performance
- No unnecessary Client Components.
- No unnecessary large dependencies.
- No unnecessary API calls.
- No obvious image or hydration problems.

---

# 42. FINAL AGENT DELIVERABLE

At the end of the task, the coding agent must provide:

1. The completed modified existing website codebase.
2. All required new/modified routes.
3. Updated header and footer using the existing design.
4. All required English content.
5. All frontend forms.
6. SEO metadata.
7. Redirects.
8. Search page.
9. Utility pages.
10. Legal pages.
11. `/sitemap.xml`.
12. Any required robots/sitemap configuration.
13. A concise implementation summary.
14. A list of files changed/created.
15. A list of any items that genuinely could not be completed because required source material/backend functionality was unavailable.

Do not claim backend integration is complete when it is not.

Do not claim a form is connected to DGHUB when only the frontend exists.

Do not claim a product URL is valid unless it was supplied by the handover or already exists in the project configuration.

---

# 43. IMPORTANT: THE ORIGINAL HANDOVER BELOW IS STILL AUTHORITATIVE

Everything after this section is the original DIGINFO Corporate Website Content & Information Architecture Handover.

**Do not remove, shorten, summarize, reinterpret, or skip any section below.**

It contains the authoritative:

- corporate positioning;
- source hierarchy;
- current-site assessment;
- legacy migration requirements;
- ecosystem terminology;
- navigation;
- mega-menu;
- complete sitemap;
- homepage requirements;
- Who We Are pages;
- What We Do pages;
- Industries pages;
- Innovation pages;
- Ecosystem pages;
- Insights pages;
- Contact/forms;
- utility actions;
- footer;
- legal requirements;
- CMS models;
- taxonomy;
- SEO;
- redirects;
- search;
- analytics;
- platform responsibilities;
- governance;
- customer evidence;
- testimonials;
- corporate facts;
- QA criteria;
- build order;
- approved copy bank;
- inner-page checklist;
- source references.



---

# DIGINFO Corporate Website — Content & Information Architecture Handover

> Confidential — Content, Information Architecture & Developer Handover

**Source:** `diginfo.net`

**Primary positioning:** Building Technology, AI Intelligence & Digital Trust

**Implementation instruction:** This is a content update to the existing website, not a redesign. Preserve the approved existing visual design, layouts, theme, and UI patterns. The existing application uses **Next.js + App Router + TypeScript + Tailwind CSS**. Update/enhance the website content, routes, metadata, links, and content structures according to this document without changing the framework or redesigning the site.

---

CORPORATE WEBSITE

Content, Information Architecture & Developer Handover Master

diginfo.net

Building Technology, AI Intelligence & Digital Trust

Developer handover baseline • Content and IA only • Approved design direction excluded from this document

Source baseline: current diginfo.net assessment + approved DIGINFO corporate profile + approved ecosystem decisions

## Document Control & Source Hierarchy

| Item | Decision |
| --- | --- |
| Document purpose | Provide the development team with the authoritative navigation, sitemap, page-content requirements, content ownership, migration rules and launch acceptance criteria for the new DIGINFO corporate website. |
| Design scope | Out of scope. The visual design, page layouts and theme are already approved separately. Developers must not use this document to reinterpret the approved design. |
| Primary source of truth | Latest approved DIGINFO corporate profile and the latest approved DIGINFO ecosystem / corporate website decisions. |
| Secondary source | Existing diginfo.net is a migration and historical-reference source only. Its old positioning, taxonomy and wording are not the new source of truth. |
| Legacy content use | Reuse only valuable verified assets such as historical customer relationships, testimonials, product history and redirects. Rewrite legacy copy to match the current corporate position. |
| Status model | The corporate profile presents the ecosystem as operational and integrated. Website copy must remain evergreen and avoid phrases such as “revamp”, “nearly complete”, “future product” or similar unfinished-status language. |
| Corporate identity | DIGINFO / Digital Information Systems (Pvt) Limited is the mother-company business face. Product brands remain distinct, with shared core platforms explained as enabling systems. |

| Non-negotiable brand position<br>DIGINFO is not a cybersecurity-only company and not a directory of unrelated products. The website must present one connected business, technology, cybersecurity, AI intelligence, cloud, R&D, education, enterprise assurance and secure-technology ecosystem. |
| --- |

## Table of Contents

| Section | Title |
| --- | --- |
| 1 | Executive Summary |
| 2 | Current diginfo.net — Deep-Dive Assessment |
| 3 | Corporate Positioning & Content Principles |
| 4 | Approved Ecosystem Terminology & Boundaries |
| 5 | Final Main Navigation & Mega-Menu Structure |
| 6 | Complete Website Sitemap & Route Inventory |
| 7 | Homepage Content Specification |
| 8 | Who We Are — Page-by-Page Content |
| 9 | What We Do — Capability Content |
| 10 | Industries — Sector Content |
| 11 | Innovation — Page Content |
| 12 | Ecosystem — Platform Content Specifications |
| 13 | Insights — Content Model |
| 14 | Contact, Forms & Conversion Journeys |
| 15 | Utility Actions, Footer & Legal Content |
| 16 | CMS Content Models & Required Fields |
| 17 | Taxonomy, Cross-Linking & Content Relationships |
| 18 | SEO, URL Migration & Redirect Plan |
| 19 | Search, Analytics & Platform Integration |
| 20 | Content Governance, Ownership & Publishing Workflow |
| 21 | Approved Customer, Experience & Testimonial Content |
| 22 | Corporate Facts, Contact & External Domains |
| 23 | Content QA & Acceptance Criteria |
| 24 | Recommended Content/Development Build Order |
| Appendix A | Approved Corporate Copy Bank |
| Appendix B | Standard Inner-Page Content Checklist |
| Appendix C | Source References & Review Notes |
| Final | Developer Handover Summary |

## 1. Executive Summary

DIGINFO’s current corporate website reflects an earlier era of the company. The new website must reposition DIGINFO around the business outcomes, platform ownership, AI intelligence, product innovation, cloud, research, education, enterprise assurance and secure-technology capabilities now represented in the approved corporate profile and ecosystem architecture.

The objective is not to make the corporate website a product catalogue. It must act as the business-facing gateway to the DIGINFO group: explain who DIGINFO is, what business problems it solves, where it operates, how its ecosystem works, which industries it serves, how it innovates, and where visitors should go next for product, consultation, partnership, media, careers or sign-in journeys.

| Priority | Required outcome |
| --- | --- |
| P1 — Corporate repositioning | Replace the cyber-only narrative with the approved business + technology + cybersecurity + AI intelligence + innovation proposition. |
| P1 — Navigation | Adopt the approved eight-item main navigation: Home, Who We Are, What We Do, Industries, Innovation, Ecosystem, Insights, Contact. |
| P1 — Ecosystem coverage | Represent all current public platforms, core shared platforms, growth/community programs and engineering capabilities without turning the homepage into a logo wall. |
| P1 — DGBRAIN | Position DGBRAIN as the flagship intelligence platform and explain its human-governed role across the ecosystem. |
| P1 — Identity / operations | Move DGEnterprise out of the main marketing navigation and make Sign In a utility action. Explain DGHUB, DGEnterprise, DGSHOP and DG Nexus within the Ecosystem section. |
| P1 — Migration | Preserve valuable legacy SEO routes, customers and testimonials through controlled migration and 301 redirects. |
| P2 — Content governance | Use DGHUB for corporate content workflow; DGBRAIN may assist metadata/search/content intelligence, with human review before publication. |
| P2 — Evidence | Use customers, case studies, testimonials, partnerships, leadership and insights as trust evidence, with consent/approval governance. |

## 2. Current diginfo.net — Deep-Dive Assessment

Assessment date: 25 September 2026. The live website is treated as a legacy migration source, not as the content model for the new site.

### 2.1 Current navigation and visible corporate structure

| Current item | Observed state | Required action |
| --- | --- | --- |
| Home | Current home page remains strongly cybersecurity-led and carries the older corporate narrative. | Replace copy with approved business-first corporate positioning. |
| Company | Legacy company grouping. The Experience page remains valuable because it contains a broad historical customer portfolio. | Replace with Who We Are and map valuable legacy content into About, Leadership, Journey, Partnerships and supporting Experience content. |
| Services | Legacy services taxonomy is not aligned to the approved eight outcome/capability areas. | Replace with What We Do and the eight approved capability pages. |
| Products | Current public product coverage surfaced by search is mainly DGMAGAZINE, DGACADEMY, DGCLOUD and THREATASSURANCE. | Replace with Ecosystem and include the complete current product/platform inventory. |
| Media | Currently exposed as a top-level destination to media.diginfo.net. | Remove as a main corporate product. Corporate media belongs in Insights and DGMAGAZINE Media Center; the shared media service can remain a technical service/redirect. |
| DGEnterprise | Currently exposed as a top-level navigation destination. | Move to utility action “Sign In”. Corporate content should explain DGEnterprise under Ecosystem > Core Shared Platforms. |

### 2.2 Current content that is materially outdated

The homepage still frames DIGINFO primarily around “technology and cyber security” and “DG Cyber Security Framework Initiatives”; this no longer represents the full company.

The current homepage’s solution emphasis is threat/security-centric, while the approved corporate profile now includes business continuity, secure transformation, cloud modernization, AI intelligence, enterprise assurance, education/workforce development, product innovation and manufacturing.

The old public product mix is incomplete and does not represent DGBRAIN, DGHUB, DGEnterprise, DGSHOP, DG Nexus, DG Career, DG Family, DG Care, DG Engineering, DG NSOS, DG Cyber Kids, DG Bug Bounty or DIGINFO INNOVATECH.

The current Company Profile download points to the legacy cyber-security profile and must be replaced with the current evergreen profile landing/download workflow.

The live footer still contains old copyright years (2021–2023). The new site must use a dynamic current-year copyright and evergreen corporate wording.

The current “Accreditation” heading is used to list industries; this terminology is misleading. The new site has a dedicated Industries section.

The current Contact page states 24/7 expert assistance. Do not carry that claim forward unless an operational support policy explicitly confirms it.

### 2.3 Legacy content worth preserving

| Legacy asset | Migration use |
| --- | --- |
| Experience / customer portfolio | Retain verified customer and organization names as historical trust evidence; reclassify using the approved customer categories and updated profile list. |
| Customer reviews | Retain verified historical testimonial text where attribution/permission is valid. Combine with new approved testimonials from the corporate profile. |
| DGMAGAZINE page | Preserve SEO value but replace magazine-only positioning with the new publishing + media + intelligence description. |
| DGACADEMY page | Preserve training heritage but expand to learning, workforce development, assessments, live learning, hands-on labs, DG Care and DG Engineering. |
| DGCLOUD page | Preserve cloud/virtualization history while updating terminology to DGCLOUD + DG Nexus and the current commercial/labs/resilience role. |
| THREATASSURANCE page | Preserve the detailed 20-module heritage, but position the platform as broader enterprise assurance spanning ITSM, GRC, ERM, ISMS, audit, controls and management reporting. |
| Old corporate approach | Educate / Practice / Manage / Ensure can be retained only as historical heritage material if desired; the primary new website framework is the approved business outcomes and capabilities. |

### 2.4 Current URLs reviewed

https://diginfo.net/

https://diginfo.net/company/about-us/experience

https://diginfo.net/company/contact-us

https://diginfo.net/products/news-updates/dg-magazine

https://diginfo.net/products/education/dg-academy

https://diginfo.net/products/cloud-security/dg-cloud

https://diginfo.net/products/security-challenge/threat-assurance

https://media.diginfo.net/

https://diginfo.net/DIGINFO%20PROFILE.pdf

| Migration requirement<br>Before launch, export a complete production route inventory (including routes not discoverable through public search). No legacy URL with external backlinks or indexed value should be retired without an explicit 301 mapping. |
| --- |

## 3. Corporate Positioning & Content Principles

### 3.1 Primary corporate proposition

| Primary positioning<br>Building Technology, AI Intelligence & Digital Trust |
| --- |

| Business statement<br>We understand business. We build technology. We secure operations. We help organizations grow. |
| --- |

| Corporate description<br>DIGINFO is a technology, cybersecurity, R&D, manufacturing and digital ecosystem company. We combine business understanding with secure technology, owned platforms, AI intelligence, cloud services, enterprise assurance, professional learning and research. |
| --- |

### 3.2 Vision, mission and values

| Element | Approved content |
| --- | --- |
| Vision | To build trusted digital ecosystems in which organizations, professionals and communities can use technology securely, intelligently and confidently. |
| Mission | To combine business understanding, cybersecurity, AI intelligence, cloud, governance, education, research and owned technology platforms to help organizations operate continuously, modernize securely and grow with trust. |
| Integrity | Build trust through honesty, accountability and professional conduct. |
| Commitment | Take ownership of outcomes and support customers and communities for the long term. |
| Competence | Invest in technical depth, research, professional capability and continuous learning. |
| Innovation | Turn real problems into researched technology, platforms and practical solutions. |
| Responsibility | Build security, privacy, governance and human accountability into the operating model. |
| Impact | Measure success through business continuity, better decisions, stronger capability and sustainable growth. |

### 3.3 Four business outcomes

| Outcome | Website meaning |
| --- | --- |
| Business Continuity | Keep operations secure, resilient and moving forward even when risk, disruption or technology change increases. |
| AI-Powered Intelligence | Turn cyber, risk, content and operational signals into structured intelligence through DGBRAIN and expert review. |
| Technology Innovation | Design and build owned platforms, products and learning systems shaped by real business requirements. |
| Secure Growth | Modernize, govern, scale and develop people without separating growth from trust and resilience. |

### 3.4 Content principles for every page

Business-first: start with the customer or stakeholder problem, not with the technology stack.

Cybersecurity-rooted, not cybersecurity-only: security and trust remain foundational but do not narrow the company identity.

Owned-technology emphasis: clearly distinguish DIGINFO-owned platforms from third-party technology partnerships.

Human-governed AI: DGBRAIN can assist analysis, search, recommendation, translation and content intelligence; accountable people remain responsible for material outputs.

One ecosystem, clear product boundaries: explain integration without implying that all systems are one monolithic application.

Evergreen writing: avoid temporary launch language, year-specific slogans, “coming soon”, “nearly complete” and other short-lived wording unless explicitly required for a dated news item.

Evidence-based claims: do not publish customer logos, certifications, partner badges, performance numbers or availability claims without current approval/evidence.

Cross-linking: every capability page should link to relevant industries and platforms; every platform page should link back to business outcomes, not operate as a disconnected product island.

## 4. Approved Ecosystem Terminology & Boundaries

| Name | Website role / canonical description | Public positioning rule |
| --- | --- | --- |
| DIGINFO | Mother company / corporate business face. | Primary brand for diginfo.net. |
| DGBRAIN | Flagship AI and intelligence platform for analytics, search intelligence, recommendations, translation, content intelligence and decision support. | Prominent under Innovation; referenced across Ecosystem. Human review required for material outputs. |
| DGHUB | Central CRM, CMS, workflow, editorial approvals, operational admin and human control plane. | Explain under Core Shared Platforms; not a customer-facing homepage product block. |
| DGEnterprise | Authoritative identity, accounts, organizations, roles, subscriptions, entitlements and SSO. | Explain under Core Shared Platforms; top utility label is “Sign In”, not “DGEnterprise Login”. |
| DGSHOP | Central catalogue, pricing, checkout, orders, payments, invoices, refunds, licensing and reconciliation. | Explain under Core Shared Platforms; do not promote as a homepage marketing block. |
| DG Nexus | DGCLOUD cloud-management and operations layer for VM/network/storage orchestration, automation and lab environments. | Explain with DGCLOUD and under Core Platforms. |
| DGMAGAZINE | Cybersecurity publishing, media and intelligence platform. | Public/commercial platform; external product domain dgmagazine.net. |
| DGACADEMY | Learning, workforce and professional-development platform. | Public/commercial platform; includes DG Care and DG Engineering relationships. |
| DGCLOUD | Commercial cloud and virtual-infrastructure platform; foundation for customer workloads, labs and learning environments. | Public/commercial platform. |
| THREATASSURANCE | Enterprise assurance platform spanning ITSM, GRC, ERM, ISMS, audit, controls, vendor management, continuity and reporting. | Public/commercial platform. |
| DGLABS | Research, validation and innovation capability. | Public/commercial/R&D platform. |
| NATIVESECURITY | Secure technology, hardware engineering and manufacturing capability. | Public/commercial secure-technology platform. |
| DG NSOS | Linux-kernel-based operating system for NATIVESECURITY and compatible hardware. | Product extension under NATIVESECURITY. |
| DG Career | Professional profiles, opportunities, hiring, skills and talent ecosystem. | Growth/community platform. |
| DG Family | Community, alumni, recognition, Hall of Fame and approved testimonials/stories. | Growth/community platform. |
| DG Care | Governed talent-development and social-impact pathway under DGACADEMY. | Program, not a generic standalone product. |
| DG Engineering | STEM / engineering learning system under DGACADEMY with NATIVESECURITY and DGLABS integration. | Program/platform extension. |
| DG Cyber Kids | Cyber awareness / learning extension. | Product extension; not a main homepage product unless specifically promoted. |
| DG Bug Bounty | Responsible security research, vulnerability disclosure, rewards and validation program. | Cross-functional security-validation capability; canonical content under Innovation. |
| Advanced LMS | Shared learning, assessment, live-class and collaboration capability. | Core shared learning platform; supports DGACADEMY and enterprise learning. |
| DIGINFO INNOVATECH | Internal Product Engineering & Software Operations organization. | Explain under Innovation/Ecosystem; not positioned as a separate commercial product by default. |
| DG Media | Legacy/shared media service. | Do not list as a primary commercial product unless re-approved. Corporate media is handled through Insights/DGMAGAZINE. |
| DG PEDIA | Parked/future concept. | Exclude from active product inventory unless explicitly re-approved. |

## 5. Final Main Navigation & Mega-Menu Structure

| Approved primary navigation<br>Home | Who We Are | What We Do | Industries | Innovation | Ecosystem | Insights | Contact |
| --- |

| Approved utility actions<br>Company Profile | Talk to DIGINFO | Sign In |
| --- |

### 5.1 Who We Are

| Sub-menu | Route | Content purpose |
| --- | --- | --- |
| About DIGINFO | /who-we-are/about-diginfo | Corporate overview, business model, ecosystem concept, selected experience and why DIGINFO. |
| Vision & Strategy | /who-we-are/vision-and-strategy | Vision, mission, values, business outcomes and strategic principles. |
| Leadership | /who-we-are/leadership | Founder/CEO, executive leadership and management team from the approved profile. |
| Our Journey | /who-we-are/our-journey | Evolution from cybersecurity expertise into a connected technology ecosystem. |
| Partnerships | /who-we-are/partnerships | Technology alliances, Red Hat capability, education/research/commercial/community partnerships. |
| Careers | /who-we-are/careers | Corporate careers, internship/talent pathways, links to DG Career and DG Care where appropriate. |

### 5.2 What We Do

| Sub-menu | Route |
| --- | --- |
| Cyber Resilience | /what-we-do/cyber-resilience |
| Secure Digital Transformation | /what-we-do/secure-digital-transformation |
| Cloud & Platform Modernization | /what-we-do/cloud-platform-modernization |
| Governance, Risk & Assurance | /what-we-do/governance-risk-assurance |
| AI & Intelligence Services | /what-we-do/ai-intelligence-services |
| Education & Workforce Development | /what-we-do/education-workforce-development |
| Technology Manufacturing & Product Innovation | /what-we-do/technology-manufacturing-product-innovation |
| Business Continuity & Growth Enablement | /what-we-do/business-continuity-growth-enablement |

### 5.3 Industries

| Sub-menu | Route |
| --- | --- |
| Government & Public Sector | /industries/government-public-sector |
| Banking & Finance | /industries/banking-finance |
| Telecom | /industries/telecom |
| Healthcare | /industries/healthcare |
| Education | /industries/education |
| Critical Infrastructure | /industries/critical-infrastructure |
| Enterprise & Technology | /industries/enterprise-technology |
| Manufacturing & Industrial | /industries/manufacturing-industrial |

### 5.4 Innovation

| Sub-menu | Route |
| --- | --- |
| DGBRAIN AI Intelligence Engine | /innovation/dgbrain-ai-intelligence-engine |
| Research & Development | /innovation/research-and-development |
| Product Engineering | /innovation/product-engineering |
| Technology Manufacturing | /innovation/technology-manufacturing |
| Cybersecurity Research | /innovation/cybersecurity-research |
| Responsible AI & Human Review | /innovation/responsible-ai-human-review |
| Security Validation & Bug Bounty | /innovation/security-validation-bug-bounty |

### 5.5 Ecosystem — recommended grouped mega-menu

The Ecosystem menu must be grouped to avoid presenting a flat list of 15–20 names. The grouping below preserves product clarity and the approved “one ecosystem, clear product boundaries” principle.

| Group | Sub-menu items | Canonical route rule |
| --- | --- | --- |
| Explore | Ecosystem Overview | /ecosystem |
| Public & Commercial Platforms | DGMAGAZINE; DGACADEMY; DGCLOUD; THREATASSURANCE; DGLABS; NATIVESECURITY | Each has a dedicated /ecosystem/[slug] corporate summary page plus an external product CTA where an official product site exists. |
| Core Shared Platforms | DGBRAIN; DGHUB; DGEnterprise; DGSHOP; DG Nexus; Advanced LMS | DGBRAIN links to its canonical Innovation page. The remaining platforms use /ecosystem/[slug]. |
| Growth & Community | DG Career; DG Family; DG Care | Use dedicated ecosystem pages; explain DG Care as a DGACADEMY program. |
| Extensions & Engineering | DG NSOS; DG Engineering; DG Cyber Kids; DG Bug Bounty; DIGINFO INNOVATECH | DG Bug Bounty links to its canonical Innovation page; others use ecosystem pages. |

### 5.6 Insights

| Sub-menu | Route |
| --- | --- |
| Research | /insights/research |
| Cyber Intelligence | /insights/cyber-intelligence |
| Executive Perspectives | /insights/executive-perspectives |
| Articles & Publications | /insights/articles-publications |
| News | /insights/news |
| Events | /insights/events |
| Case Studies | /insights/case-studies |

### 5.7 Contact

| Sub-menu | Route |
| --- | --- |
| General Inquiry | /contact/general-inquiry |
| Request Consultation | /contact/request-consultation |
| Product Inquiry | /contact/product-inquiry |
| Partnership Inquiry | /contact/partnership-inquiry |
| Company Profile Request | /contact/company-profile-request |
| Media Inquiry | /contact/media-inquiry |
| Careers Inquiry | /contact/careers-inquiry |
| Security Disclosure | /contact/security-disclosure |

## 6. Complete Website Sitemap & Route Inventory

| Section | Page | Route | Visibility |
| --- | --- | --- | --- |
| Corporate | Home | / | Primary |
| Who We Are | Who We Are | /who-we-are | Primary |
| Who We Are | About DIGINFO | /who-we-are/about-diginfo | Primary |
| Who We Are | Vision & Strategy | /who-we-are/vision-and-strategy | Primary |
| Who We Are | Leadership | /who-we-are/leadership | Primary |
| Who We Are | Our Journey | /who-we-are/our-journey | Primary |
| Who We Are | Partnerships | /who-we-are/partnerships | Primary |
| Who We Are | Careers | /who-we-are/careers | Primary |
| Who We Are | Experience & Customers | /who-we-are/experience | Supporting |
| What We Do | What We Do | /what-we-do | Primary |
| What We Do | Cyber Resilience | /what-we-do/cyber-resilience | Primary |
| What We Do | Secure Digital Transformation | /what-we-do/secure-digital-transformation | Primary |
| What We Do | Cloud & Platform Modernization | /what-we-do/cloud-platform-modernization | Primary |
| What We Do | Governance, Risk & Assurance | /what-we-do/governance-risk-assurance | Primary |
| What We Do | AI & Intelligence Services | /what-we-do/ai-intelligence-services | Primary |
| What We Do | Education & Workforce Development | /what-we-do/education-workforce-development | Primary |
| What We Do | Technology Manufacturing & Product Innovation | /what-we-do/technology-manufacturing-product-innovation | Primary |
| What We Do | Business Continuity & Growth Enablement | /what-we-do/business-continuity-growth-enablement | Primary |
| Industries | Industries | /industries | Primary |
| Industries | Government & Public Sector | /industries/government-public-sector | Primary |
| Industries | Banking & Finance | /industries/banking-finance | Primary |
| Industries | Telecom | /industries/telecom | Primary |
| Industries | Healthcare | /industries/healthcare | Primary |
| Industries | Education | /industries/education | Primary |
| Industries | Critical Infrastructure | /industries/critical-infrastructure | Primary |
| Industries | Enterprise & Technology | /industries/enterprise-technology | Primary |
| Industries | Manufacturing & Industrial | /industries/manufacturing-industrial | Primary |
| Innovation | Innovation | /innovation | Primary |
| Innovation | DGBRAIN AI Intelligence Engine | /innovation/dgbrain-ai-intelligence-engine | Primary |
| Innovation | Research & Development | /innovation/research-and-development | Primary |
| Innovation | Product Engineering | /innovation/product-engineering | Primary |
| Innovation | Technology Manufacturing | /innovation/technology-manufacturing | Primary |
| Innovation | Cybersecurity Research | /innovation/cybersecurity-research | Primary |
| Innovation | Responsible AI & Human Review | /innovation/responsible-ai-human-review | Primary |
| Innovation | Security Validation & Bug Bounty | /innovation/security-validation-bug-bounty | Primary |
| Ecosystem | Ecosystem Overview | /ecosystem | Primary |
| Ecosystem | DGMAGAZINE | /ecosystem/dgmagazine | Primary |
| Ecosystem | DGACADEMY | /ecosystem/dgacademy | Primary |
| Ecosystem | DGCLOUD | /ecosystem/dgcloud | Primary |
| Ecosystem | THREATASSURANCE | /ecosystem/threat-assurance | Primary |
| Ecosystem | DGLABS | /ecosystem/dglabs | Primary |
| Ecosystem | NATIVESECURITY | /ecosystem/nativesecurity | Primary |
| Ecosystem | DGHUB | /ecosystem/dghub | Primary |
| Ecosystem | DGEnterprise | /ecosystem/dgenterprise | Primary |
| Ecosystem | DGSHOP | /ecosystem/dgshop | Primary |
| Ecosystem | DG Nexus | /ecosystem/dg-nexus | Primary |
| Ecosystem | Advanced LMS | /ecosystem/advanced-lms | Primary |
| Ecosystem | DG Career | /ecosystem/dg-career | Primary |
| Ecosystem | DG Family | /ecosystem/dg-family | Primary |
| Ecosystem | DG Care | /ecosystem/dg-care | Primary |
| Ecosystem | DG Engineering | /ecosystem/dg-engineering | Primary |
| Ecosystem | DG NSOS | /ecosystem/nsos | Primary |
| Ecosystem | DG Cyber Kids | /ecosystem/cyber-kids | Primary |
| Ecosystem | DIGINFO INNOVATECH | /ecosystem/diginfo-innovatech | Primary |
| Insights | Insights | /insights | Primary |
| Insights | Research | /insights/research | Primary |
| Insights | Cyber Intelligence | /insights/cyber-intelligence | Primary |
| Insights | Executive Perspectives | /insights/executive-perspectives | Primary |
| Insights | Articles & Publications | /insights/articles-publications | Primary |
| Insights | News | /insights/news | Primary |
| Insights | Events | /insights/events | Primary |
| Insights | Case Studies | /insights/case-studies | Primary |
| Contact | Contact | /contact | Primary |
| Contact | General Inquiry | /contact/general-inquiry | Primary |
| Contact | Request Consultation | /contact/request-consultation | Primary |
| Contact | Product Inquiry | /contact/product-inquiry | Primary |
| Contact | Partnership Inquiry | /contact/partnership-inquiry | Primary |
| Contact | Company Profile Request | /contact/company-profile-request | Primary |
| Contact | Media Inquiry | /contact/media-inquiry | Primary |
| Contact | Careers Inquiry | /contact/careers-inquiry | Primary |
| Contact | Security Disclosure | /contact/security-disclosure | Primary |
| Utility | Company Profile | /company-profile | Utility |
| Utility | Search | /search | Utility |
| Utility | Sign In | /sign-in | Utility |
| Utility | Newsletter | /newsletter | Utility |
| Utility | Sitemap | /sitemap | Utility |
| Utility | Thank You | /thank-you | Utility |
| Utility | 404 | /404 | Utility |
| Utility | 500 | /500 | Utility |
| Legal | Privacy Policy | /legal/privacy-policy | Footer |
| Legal | Terms of Use | /legal/terms-of-use | Footer |
| Legal | Cookie Policy | /legal/cookie-policy | Footer |
| Legal | Responsible Disclosure | /legal/responsible-disclosure | Footer |
| Legal | Accessibility | /legal/accessibility | Footer |

## 7. Homepage Content Specification

The homepage visual design is already approved elsewhere. This section defines only the content hierarchy, copy responsibilities and destination links.

| Content area | Required content | Primary destination |
| --- | --- | --- |
| Corporate proposition | H1: Building Technology, AI Intelligence & Digital Trust. Supporting message: DIGINFO helps organizations solve business challenges, secure operations, build intelligence, modernize technology and grow through a connected ecosystem of owned platforms, research, cloud, education and secure engineering. | Who We Are / What We Do |
| Business challenge statement | Where Business Challenges Meet Technology, Security and Product Innovation. Explain that DIGINFO starts with continuity, risk, modernization, trust, capability and growth rather than technology for its own sake. | What We Do |
| What DIGINFO Does | Summarize the eight capability areas without turning them into an exhaustive services list. | /what-we-do |
| Four business outcomes | Business Continuity; AI-Powered Intelligence; Technology Innovation; Secure Growth. | Relevant capability pages |
| DGBRAIN flagship | Position DGBRAIN as DIGINFO’s Intelligence Platform. Include “DGBRAIN assists. DIGINFO experts review and approve.” | /innovation/dgbrain-ai-intelligence-engine |
| Technology, R&D & Manufacturing | Connect DGLABS, DIGINFO INNOVATECH, NATIVESECURITY, DG NSOS and secure product engineering. | Innovation / Ecosystem |
| Industries | Show the eight approved industry groups with business-specific language. | /industries |
| Ecosystem preview | Introduce the connected ecosystem at category level. Do not show a raw wall of every product logo. | /ecosystem |
| Why DIGINFO | Business understanding; cybersecurity DNA; own technology; AI with accountability; research-to-product; talent ecosystem; unified architecture; long-term ownership. | About / Why DIGINFO content |
| Insights | Latest corporate research, executive perspectives, case studies, news and selected DGMAGAZINE intelligence links. | /insights |
| Customer evidence | Selected approved customers/testimonials/case studies. Avoid overwhelming the homepage with the full historical list. | /who-we-are/experience / /insights/case-studies |
| Final CTA | Talk to DIGINFO / Request Consultation; Company Profile; relevant product visit. | /contact/request-consultation / /company-profile |

## 8. Who We Are — Page-by-Page Content

#### Who We Are

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are |
| Purpose | Section landing page explaining DIGINFO as the corporate parent and connected ecosystem. |
| Core message | DIGINFO combines business understanding, cybersecurity, owned technology, AI intelligence, cloud, research, learning and secure engineering. |
| Required content | Corporate overview; vision teaser; four outcomes; ecosystem explanation; leadership teaser; journey teaser; selected experience; partnerships; careers. |
| Primary CTA(s) | About DIGINFO; Talk to DIGINFO; Company Profile |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### About DIGINFO

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are/about-diginfo |
| Purpose | Authoritative company overview. |
| Core message | DIGINFO is broader than traditional consulting: it advises, researches, designs, builds, operates and improves technology. |
| Required content | Corporate description; business-first/cybersecurity-rooted/technology-owned/intelligence-powered/research-driven/human-governed principles; selected customers; offices; corporate facts; ecosystem summary. |
| Primary CTA(s) | Explore What We Do; Explore Ecosystem; Talk to DIGINFO |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### Vision & Strategy

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are/vision-and-strategy |
| Purpose | Explain the long-term strategic direction and operating philosophy. |
| Core message | Trusted digital ecosystems, owned platforms, reusable shared capabilities and human-governed intelligence. |
| Required content | Vision; mission; values; four business outcomes; one-ecosystem-clear-boundaries principle; business continuity and secure growth; responsible intelligence. |
| Primary CTA(s) | Explore Innovation; Explore What We Do |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### Leadership

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are/leadership |
| Purpose | Present approved leadership and management. |
| Core message | Founder-led strategy supported by management across technology, cybersecurity, operations, research, editorial, legal, marketing and corporate support. |
| Required content | Muhammad Saleem — Founder & CEO; Muhammad Saeed — Co-Founder & CTO; Gohar Khalid — Director, HR & Administration; Mirza Furqan Baig — COO / Director, Strategy & Planning; Dr. Ashfaq A. Malik — Chief Editor, DGMAGAZINE; Kausar Fecto — Director, Legal & Compliance; Muhammad Akmal Khan — Head of Marketing & Finance; Hamed Mohiuddin — Head of Content Strategy & Writer. Add approved bios/photos only. |
| Primary CTA(s) | Our Journey; Partnerships; Contact |
| Related links | Corporate / HR |
| Content owner | Corporate / Product Owner |

#### Our Journey

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are/our-journey |
| Purpose | Show the company’s evolution without tying the page to a short-lived roadmap. |
| Core message | From cybersecurity expertise to a connected technology ecosystem. |
| Required content | Milestones: cybersecurity/IT risk/governance/cloud foundation; first product era (DGMAGAZINE, DGACADEMY, DGCLOUD, THREATASSURANCE, DGLABS, NATIVESECURITY); shared platforms (DGEnterprise, DGHUB, DGSHOP, DG Nexus); intelligence era (DGBRAIN); engineering ownership (INNOVATECH); talent & impact (DG Care, DG Career, DG Engineering). |
| Primary CTA(s) | Explore Ecosystem; Explore Innovation |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### Partnerships

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are/partnerships |
| Purpose | Explain partnership types and collaboration rules. |
| Core message | DIGINFO combines owned IP with responsible use of enterprise technologies and strategic partnerships. |
| Required content | Technology alliances; Red Hat capability; education partnerships; research collaboration; commercial partners; community partnerships; partner inquiry CTA. Do not publish badges/certification numbers without current validation. |
| Primary CTA(s) | Partnership Inquiry; Innovation; DGACADEMY; DGLABS |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### Careers

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are/careers |
| Purpose | Corporate careers and talent entry point. |
| Core message | Build careers through real capability, governed learning and opportunities across the ecosystem. |
| Required content | Corporate vacancies; internships; DG Care; DG Career; learning pathways; values; application process; careers inquiry. |
| Primary CTA(s) | DG Career; DG Care; Careers Inquiry |
| Related links | HR / DG Career |
| Content owner | Corporate / Product Owner |

#### Experience & Customers

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /who-we-are/experience |
| Purpose | Supporting route for migrated customer evidence; not required in primary navigation. |
| Core message | Long-term experience across government, finance, power, healthcare, industry, technology, education and other sectors. |
| Required content | Selected customer categories from approved profile; case-study links; approved testimonials; historical experience; consent/accuracy rules. |
| Primary CTA(s) | Case Studies; Talk to DIGINFO |
| Related links | Corporate / Sales / Legal review |
| Content owner | Corporate / Product Owner |

## 9. What We Do — Capability Content

#### What We Do

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do |
| Purpose | Business capability landing page. |
| Core message | DIGINFO combines advisory, software, cloud, intelligence, education, research and secure product engineering to solve business problems. |
| Required content | Eight approved capability areas; platform advantage; representative professional services; relevant industries; evidence; consultation CTA. |
| Primary CTA(s) | Request Consultation; Industries; Ecosystem |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### Cyber Resilience

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/cyber-resilience |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Strengthen security posture, reduce exposure, prepare for incidents and protect business operations. |
| Required content | Security assessment & penetration testing; cyber consulting/advisory; incident readiness; threat intelligence; vulnerability management; security awareness; managed security; relevant DGMAGAZINE/DGLABS/THREATASSURANCE links. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

#### Secure Digital Transformation

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/secure-digital-transformation |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Modernize platforms, workflows and digital services with security and governance built in. |
| Required content | Architecture review; identity; platform modernization; secure workflows; governance; migration planning; DGEnterprise/DGHUB/DGBRAIN relevance; transformation roadmap content. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

#### Cloud & Platform Modernization

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/cloud-platform-modernization |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Support secure cloud adoption, scalable platforms and infrastructure modernization. |
| Required content | Cloud migration; virtualization; hosting; platform engineering; resilience; backup/DR; managed services; DGCLOUD and DG Nexus; POC environments. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

#### Governance, Risk & Assurance

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/governance-risk-assurance |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Improve governance, risk, compliance, audit, control and operational assurance. |
| Required content | GRC; ISMS; ERM; audit readiness; policy; vendor risk; business continuity; THREATASSURANCE; executive dashboards; remediation workflows. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

#### AI & Intelligence Services

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/ai-intelligence-services |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Use governed AI intelligence to improve analysis, research, search, recommendations and decision workflows. |
| Required content | DGBRAIN capabilities; data/content/cyber intelligence; semantic discovery; recommendations; translation; content intelligence; decision support; human review; privacy boundaries. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

#### Education & Workforce Development

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/education-workforce-development |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Build cyber, cloud, governance, AI and digital capability through structured learning and practical experience. |
| Required content | DGACADEMY; assessments; certifications; live learning; DGCLOUD labs; DG Care; DG Engineering; enterprise training; workforce pathways. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

#### Technology Manufacturing & Product Innovation

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/technology-manufacturing-product-innovation |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Design researched products, secure technology concepts and manufacturing-led solutions. |
| Required content | NATIVESECURITY; DG NSOS; DGLABS; INNOVATECH; hardware/firmware; product engineering; prototyping; secure manufacturing; product lifecycle. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

#### Business Continuity & Growth Enablement

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /what-we-do/business-continuity-growth-enablement |
| Purpose | Dedicated capability page for business leaders and technical stakeholders. |
| Core message | Help organizations reduce disruption, modernize safely and grow with confidence. |
| Required content | Business continuity; DR; resilience; risk-informed modernization; workforce readiness; cloud; assurance; technology planning; growth enablement. |
| Primary CTA(s) | Request Consultation; Explore relevant platform; View Case Studies |
| Related links | Relevant Industries; Ecosystem; Insights |
| Content owner | Corporate / Product Owner |

## 10. Industries — Sector Content

#### Industries

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries |
| Purpose | Landing page connecting business problems to DIGINFO capabilities by sector. |
| Core message | DIGINFO applies the same core principles—continuity, trust, intelligence, modernization and capability—to different regulatory and operating environments. |
| Required content | Eight industry summaries; common challenges; relevant capabilities; relevant ecosystem platforms; selected experience; case studies. |
| Primary CTA(s) | Select Industry; Request Consultation; View Case Studies |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### Government & Public Sector

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/government-public-sector |
| Purpose | Industry landing page. |
| Core message | Secure digital services, citizen trust, governance, public-sector resilience, sovereign control and continuity. |
| Required content | Cyber resilience; identity; cloud; governance; DGBRAIN intelligence; THREATASSURANCE; workforce development; selected government experience. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

#### Banking & Finance

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/banking-finance |
| Purpose | Industry landing page. |
| Core message | Customer trust, identity security, regulatory confidence and operational resilience. |
| Required content | GRC/ERM/ISMS; identity; cyber resilience; continuity; threat intelligence; secure cloud; executive assurance; financial-sector experience. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

#### Telecom

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/telecom |
| Purpose | Industry landing page. |
| Core message | Protect critical networks, customer data and service continuity while modernizing platforms. |
| Required content | Network/security assurance; cloud/platform modernization; identity; continuity; managed security; analytics; workforce development. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

#### Healthcare

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/healthcare |
| Purpose | Industry landing page. |
| Core message | Protect patient data, maintain continuity and strengthen ransomware and digital-health resilience. |
| Required content | Security assessments; continuity/DR; GRC; identity; secure cloud; awareness; executive assurance; healthcare experience. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

#### Education

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/education |
| Purpose | Industry landing page. |
| Core message | Secure learning environments, protect student data and build workforce capability. |
| Required content | DGACADEMY; DG Care; DGCLOUD labs; DGLABS research; cyber awareness; secure identity; university partnerships and 100+ outreach pipeline. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

#### Critical Infrastructure

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/critical-infrastructure |
| Purpose | Industry landing page. |
| Core message | Improve resilience for systems and services society depends on. |
| Required content | Risk/assurance; continuity; industrial security; vulnerability management; incident readiness; cloud/DR; security research. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

#### Enterprise & Technology

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/enterprise-technology |
| Purpose | Industry landing page. |
| Core message | Secure digital growth, platforms, products and cloud transformation. |
| Required content | Secure transformation; product engineering; AI intelligence; cloud; DevSecOps/SRE via INNOVATECH; assurance; research. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

#### Manufacturing & Industrial

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /industries/manufacturing-industrial |
| Purpose | Industry landing page. |
| Core message | Protect production continuity, supply chains and technology innovation. |
| Required content | Industrial security; continuity; risk; secure platforms; NATIVESECURITY; DG NSOS; R&D; manufacturing capability. |
| Primary CTA(s) | Request Consultation; Explore Capabilities; View Relevant Platforms |
| Related links | What We Do; Ecosystem; Case Studies |
| Content owner | Corporate / Product Owner |

## 11. Innovation — Page Content

#### Innovation

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation |
| Purpose | Explain how DIGINFO converts research and business problems into secure operated technology. |
| Core message | Innovation is not isolated experimentation; it connects intelligence, research, engineering, manufacturing, validation and human governance. |
| Required content | DGBRAIN; R&D; Product Engineering; Technology Manufacturing; Cybersecurity Research; Responsible AI; Security Validation & Bug Bounty; links to DGLABS, NATIVESECURITY and INNOVATECH. |
| Primary CTA(s) | Explore DGBRAIN; Explore DGLABS; Talk to DIGINFO |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### DGBRAIN AI Intelligence Engine

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation/dgbrain-ai-intelligence-engine |
| Purpose | Innovation detail page. |
| Core message | DGBRAIN is DIGINFO’s specialist AI and intelligence platform. |
| Required content | Analytics & intelligence; search intelligence; content intelligence; decision support; product integration; human review; clear boundary from DGEnterprise/DGSHOP/DGHUB/DG Nexus; support to DGMAGAZINE and wider ecosystem. |
| Primary CTA(s) | Talk to DIGINFO; Explore Related Platform; Partnership Inquiry |
| Related links | Innovation; Ecosystem; Research |
| Content owner | Corporate / Product Owner |

#### Research & Development

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation/research-and-development |
| Purpose | Innovation detail page. |
| Core message | DGLABS connects research, validation and experimentation to product, content, training and customer outcomes. |
| Required content | Cyber research; product evaluation; prototype/POC; buyer guides; DGBRAIN support; innovation pipeline; POC-as-a-Service. |
| Primary CTA(s) | Talk to DIGINFO; Explore Related Platform; Partnership Inquiry |
| Related links | Innovation; Ecosystem; Research |
| Content owner | Corporate / Product Owner |

#### Product Engineering

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation/product-engineering |
| Purpose | Innovation detail page. |
| Core message | DIGINFO INNOVATECH owns the product lifecycle from discovery through architecture, engineering, security, deployment and operations. |
| Required content | Product discovery; architecture; UX; frontend/backend/API/data/AI engineering; DevSecOps; quality engineering; SRE; architecture governance; IP/knowledge ownership. |
| Primary CTA(s) | Talk to DIGINFO; Explore Related Platform; Partnership Inquiry |
| Related links | Innovation; Ecosystem; Research |
| Content owner | Corporate / Product Owner |

#### Technology Manufacturing

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation/technology-manufacturing |
| Purpose | Innovation detail page. |
| Core message | DIGINFO extends beyond software into secure hardware and engineered systems. |
| Required content | NATIVESECURITY; hardware; firmware; DG NSOS; secure platforms; manufacturing capability; DGLABS validation; DG Engineering learning link. |
| Primary CTA(s) | Talk to DIGINFO; Explore Related Platform; Partnership Inquiry |
| Related links | Innovation; Ecosystem; Research |
| Content owner | Corporate / Product Owner |

#### Cybersecurity Research

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation/cybersecurity-research |
| Purpose | Innovation detail page. |
| Core message | Research strengthens products, intelligence, guidance and security outcomes. |
| Required content | Vulnerability research; threat patterns; defensive research; product evaluation; DGLABS; DGMAGAZINE research/intelligence; responsible publication. |
| Primary CTA(s) | Talk to DIGINFO; Explore Related Platform; Partnership Inquiry |
| Related links | Innovation; Ecosystem; Research |
| Content owner | Corporate / Product Owner |

#### Responsible AI & Human Review

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation/responsible-ai-human-review |
| Purpose | Innovation detail page. |
| Core message | AI assists; accountable humans remain responsible. |
| Required content | Human approval; auditability; privacy/data boundaries; product-specific authority; model/output validation; security; responsible use; “DGBRAIN assists. DIGINFO experts review and approve.” |
| Primary CTA(s) | Talk to DIGINFO; Explore Related Platform; Partnership Inquiry |
| Related links | Innovation; Ecosystem; Research |
| Content owner | Corporate / Product Owner |

#### Security Validation & Bug Bounty

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /innovation/security-validation-bug-bounty |
| Purpose | Innovation detail page. |
| Core message | Governed security validation through researchers, controlled labs, triage and remediation evidence. |
| Required content | Researcher identity; disclosure intake; DGLABS validation; DGCLOUD/DG Nexus labs; DGHUB workflow; DGBRAIN correlation/summaries; THREATASSURANCE risk/control linkage; rewards via approved commerce/finance workflow. |
| Primary CTA(s) | Talk to DIGINFO; Explore Related Platform; Partnership Inquiry |
| Related links | Innovation; Ecosystem; Research |
| Content owner | Corporate / Product Owner |

## 12. Ecosystem — Platform Content Specifications

#### DIGINFO Ecosystem

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem |
| Purpose | Explain the whole platform portfolio and how the pieces connect without collapsing product boundaries. |
| Core message | One Company. Multiple Platforms. Shared Intelligence, Identity and Trust. |
| Required content | Commercial/public platforms; core shared systems; growth/community initiatives; product extensions; INNOVATECH; integration principles; “one identity / one commerce core / one workflow cockpit / one intelligence layer”; external product links. |
| Primary CTA(s) | Explore Platform; Talk to DIGINFO; Sign In |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### DGMAGAZINE

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dgmagazine |
| Purpose | Corporate ecosystem detail page. |
| Core message | DIGINFO’s cybersecurity publishing, media and intelligence platform. |
| Required content | Newsroom; Research; Threat Intelligence; Global Cyber Threat Map; Advisory Room; Leadership Insights; Cyber Products; Media Center; Cyber Awareness; Career Guidance; Events; subscriber content; monthly digital magazine; engagement; multilingual English/Urdu/Arabic. Corporate page must link to https://dgmagazine.net. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DGACADEMY

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dgacademy |
| Purpose | Corporate ecosystem detail page. |
| Core message | DIGINFO’s learning and workforce-development platform. |
| Required content | Courses; assessments; certifications; live learning; hands-on DGCLOUD labs; enterprise learning; DG Care; DG Engineering; internship/talent pathways. Corporate page should link to https://dgacademy.net. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DGCLOUD

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dgcloud |
| Purpose | Corporate ecosystem detail page. |
| Core message | DIGINFO’s public/commercial cloud and virtual-infrastructure platform. |
| Required content | Commercial cloud; virtual infrastructure; hands-on labs; POC-as-a-Service; bug-bounty labs; primary/DR; automation; DG Nexus operations; customer workloads. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### THREATASSURANCE

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/threat-assurance |
| Purpose | Corporate ecosystem detail page. |
| Core message | Enterprise assurance platform spanning ITSM, GRC, ERM, ISMS, audit, controls and reporting. |
| Required content | Retain the 20-module heritage: asset; configuration; service catalogue; incident; change; SLA; workflow; BPM; risk; compliance/legal; audit; governance/policy; third party/vendor; vulnerability; threat; IAM; BCM; project; LMS; knowledge/announcements/blogs. Link to threatassurance.net / threatassurance.com as configured. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DGLABS

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dglabs |
| Purpose | Corporate ecosystem detail page. |
| Core message | DIGINFO research, validation and innovation capability. |
| Required content | Cyber research; product evaluation; prototypes; POC; bug-bounty validation; DGBRAIN support; innovation pipeline; controlled research/labs. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### NATIVESECURITY

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/nativesecurity |
| Purpose | Corporate ecosystem detail page. |
| Core message | Cybersecurity technology, secure hardware and manufacturing platform. |
| Required content | Secure platforms/appliances; hardware/firmware; DG NSOS; engineering; manufacturing; DG Engineering link; DGLABS validation. Link to https://nativesecurity.org. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DGHUB

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dghub |
| Purpose | Corporate ecosystem detail page. |
| Core message | Central business operations and human control plane. |
| Required content | CRM; CMS; workflows; editorial operations; approvals; assignments; publishing authorization; customer processes; product-management modules; DGMAGAZINE management module; ecosystem-wide back office. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DGEnterprise

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dgenterprise |
| Purpose | Corporate ecosystem detail page. |
| Core message | Authoritative identity, organization, subscription, entitlement and SSO platform. |
| Required content | Accounts; organizations; roles; profiles; subscriptions; entitlements; customer/partner/student/teacher/researcher/admin identity; cross-product access; certificates/integrations where approved. Sign In utility routes here. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DGSHOP

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dgshop |
| Purpose | Corporate ecosystem detail page. |
| Core message | Central commerce platform. |
| Required content | Catalogue; pricing; checkout; orders; payments; invoices; refunds; licensing; reconciliation; entitlement handoff to DGEnterprise. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DG Nexus

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dg-nexus |
| Purpose | Corporate ecosystem detail page. |
| Core message | DGCLOUD management and cloud-operations layer. |
| Required content | VM/network/storage orchestration; automation; labs; HOL; POC; bug-bounty labs; customer VM management; primary/DR control. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### Advanced LMS

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/advanced-lms |
| Purpose | Corporate ecosystem detail page. |
| Core message | Shared learning, assessment and live-collaboration platform. |
| Required content | Course delivery; assessments; exams; certificates; teachers/students; live classes/video conferencing; enterprise learning support; DGACADEMY integration. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DG Career

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dg-career |
| Purpose | Corporate ecosystem detail page. |
| Core message | Professional and career platform. |
| Required content | Profiles; opportunities; hiring; skills; talent discovery; connection from DGACADEMY/DG Care to employment and professional growth. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DG Family

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dg-family |
| Purpose | Corporate ecosystem detail page. |
| Core message | Community, alumni, recognition and Hall of Fame platform. |
| Required content | Students; teachers; alumni; subscribers; customers; cloud users; partners; stories; approved testimonials; recognition; long-term community relationships. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DG Care

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dg-care |
| Purpose | Corporate ecosystem detail page. |
| Core message | Talent-development and social-impact program under DGACADEMY. |
| Required content | Discover; assess; counsel; learn; practice; build; qualify; graduate; grow. Guided learning; mentoring; controlled real work; capstones; evaluation; talent pipeline; sponsored ecosystem access for qualified students. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DG Engineering

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/dg-engineering |
| Purpose | Corporate ecosystem detail page. |
| Core message | STEM and engineering education system under DGACADEMY. |
| Required content | Curriculum owned by DGACADEMY; NATIVESECURITY hardware/firmware/DG NSOS; DGLABS research/innovation; complete learning systems rather than isolated kits. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DG NSOS

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/nsos |
| Purpose | Corporate ecosystem detail page. |
| Core message | Linux-kernel-based operating system for NATIVESECURITY and compatible hardware. |
| Required content | Common secure software foundation; hardware lifecycle; platform management; compatible third-party hardware support; NATIVESECURITY integration. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DG Cyber Kids

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/cyber-kids |
| Purpose | Corporate ecosystem detail page. |
| Core message | Cyber awareness and learning extension for younger audiences. |
| Required content | Age-appropriate awareness, learning and safe digital behavior. Detailed curriculum/content remains product-owned; corporate page should stay high level unless a separate approved program brief exists. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

#### DIGINFO INNOVATECH

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /ecosystem/diginfo-innovatech |
| Purpose | Corporate ecosystem detail page. |
| Core message | Internal Product Engineering & Software Operations organization. |
| Required content | Product lifecycle; architecture; development; testing; cybersecurity; deployment; monitoring; service management; DevSecOps; SRE; quality; documentation; IP/knowledge ownership. Clarify that physical hardware manufacturing remains under NATIVESECURITY governance. |
| Primary CTA(s) | Visit Product / Talk to DIGINFO / Related Capability |
| Related links | Ecosystem; What We Do; Innovation |
| Content owner | Corporate + Product Owner |

## 13. Insights — Content Model

#### Insights

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights |
| Purpose | Corporate knowledge hub distinct from DGMAGAZINE’s full editorial product. |
| Core message | Surface DIGINFO corporate thinking, research, intelligence, case studies, events and company news while linking specialist cyber content to DGMAGAZINE. |
| Required content | Research; Cyber Intelligence; Executive Perspectives; Articles & Publications; News; Events; Case Studies; filters/taxonomy; related products/industries. |
| Primary CTA(s) | Explore Insight; Subscribe; Talk to DIGINFO |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

#### Research

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights/research |
| Purpose | Insights detail/listing family. |
| Core message | Corporate/DGLABS research, technical papers, buyer guides and selected research outputs. |
| Required content | Title; summary; author/team; publication date; topics; related platforms; document/download; citation/source metadata; approval status. |
| Primary CTA(s) | Read / Download / Register / Contact |
| Related links | Relevant capability, industry and product pages |
| Content owner | Corporate Communications / DGLABS / Product Owner |

#### Cyber Intelligence

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights/cyber-intelligence |
| Purpose | Insights detail/listing family. |
| Core message | Selected corporate intelligence summaries and links into DGMAGAZINE threat intelligence. |
| Required content | Short corporate briefings; DGBRAIN-supported analysis where approved; source transparency; link to DGMAGAZINE for full coverage. |
| Primary CTA(s) | Read / Download / Register / Contact |
| Related links | Relevant capability, industry and product pages |
| Content owner | Corporate Communications / DGLABS / Product Owner |

#### Executive Perspectives

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights/executive-perspectives |
| Purpose | Insights detail/listing family. |
| Core message | Leadership viewpoints from DIGINFO executives and approved guests. |
| Required content | Author bio; topic; business implications; related capabilities/industries; optional link to DGMAGAZINE Leadership Insights. |
| Primary CTA(s) | Read / Download / Register / Contact |
| Related links | Relevant capability, industry and product pages |
| Content owner | Corporate Communications / DGLABS / Product Owner |

#### Articles & Publications

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights/articles-publications |
| Purpose | Insights detail/listing family. |
| Core message | Long-form corporate articles, white papers and publications. |
| Required content | Article metadata; author; summary; body/download; related pages; external publication link. |
| Primary CTA(s) | Read / Download / Register / Contact |
| Related links | Relevant capability, industry and product pages |
| Content owner | Corporate Communications / DGLABS / Product Owner |

#### News

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights/news |
| Purpose | Insights detail/listing family. |
| Core message | DIGINFO corporate announcements and company updates. |
| Required content | Date; headline; summary; body; category; media contact; related product; no DGMAGAZINE breaking-news duplication. |
| Primary CTA(s) | Read / Download / Register / Contact |
| Related links | Relevant capability, industry and product pages |
| Content owner | Corporate Communications / DGLABS / Product Owner |

#### Events

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights/events |
| Purpose | Insights detail/listing family. |
| Core message | Corporate events, webinars, workshops, training, partner and community activities. |
| Required content | Date/time; venue/online; organizer; audience; registration; related product/program; archive status. |
| Primary CTA(s) | Read / Download / Register / Contact |
| Related links | Relevant capability, industry and product pages |
| Content owner | Corporate Communications / DGLABS / Product Owner |

#### Case Studies

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /insights/case-studies |
| Purpose | Insights detail/listing family. |
| Core message | Evidence of business outcomes and delivery experience. |
| Required content | Customer/sector (only with approval); challenge; scope; approach; platforms/capabilities; outcome; testimonial; confidentiality level; related industry. |
| Primary CTA(s) | Read / Download / Register / Contact |
| Related links | Relevant capability, industry and product pages |
| Content owner | Corporate Communications / DGLABS / Product Owner |

## 14. Contact, Forms & Conversion Journeys

#### Contact DIGINFO

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /contact |
| Purpose | Central contact landing page. |
| Core message | Make it easy to reach the correct DIGINFO team without exposing internal complexity. |
| Required content | Offices: Karachi, Pakistan; Riyadh, Saudi Arabia. Landline: +9234325505. Email: info@diginfo.net. Website: https://diginfo.net. Cyber Magazine: https://dgmagazine.net. Inquiry types and links to dedicated forms. |
| Primary CTA(s) | Request Consultation; General Inquiry; Product Inquiry |
| Related links | Relevant capability, industry and ecosystem pages. |
| Content owner | Corporate / Product Owner |

| Form route | Required fields | Routing / outcome |
| --- | --- | --- |
| /contact/general-inquiry | Name; organization; email; phone optional; country; inquiry; consent. | Create DGHUB inquiry/CRM record; acknowledgement email; assign by category. |
| /contact/request-consultation | Name; organization; role; email; phone; country; business challenge; capability interest; timeframe optional; consent. | Create qualified consultation lead in DGHUB; assign to business owner. |
| /contact/product-inquiry | Name; organization; contact; product/platform selection; use case; message; consent. | Route by selected ecosystem product; preserve product context in CRM. |
| /contact/partnership-inquiry | Organization; contact; partnership type; geography; proposal; website; consent. | Route to partnership/business owner; support technology, education, research, commercial or community categories. |
| /contact/company-profile-request | Name; organization; email; purpose; consent. | Provide/download approved profile; track request/download; optionally create CRM record. |
| /contact/media-inquiry | Name; outlet/organization; email; deadline; topic; request. | Route to corporate communications / DGMAGAZINE media team as appropriate. |
| /contact/careers-inquiry | Name; email; role/track; CV/profile link; message; consent. | Route to HR / DG Career; do not use general sales queue. |
| /contact/security-disclosure | Researcher identity/contact; affected product; vulnerability summary; severity evidence; reproduction details; consent to policy. | Route to DG Bug Bounty/security-validation workflow; preserve confidentiality; acknowledgement without exposing sensitive details publicly. |

| Form rule<br>Do not hard-code email-only workflows. All forms should create structured records in the approved operational workflow, with anti-spam/rate-limit controls, consent capture and auditable assignment. |
| --- |

## 15. Utility Actions, Footer & Legal Content

### 15.1 Utility actions

| Action | Route / behavior | Rule |
| --- | --- | --- |
| Company Profile | /company-profile | Use a landing page with current profile summary and managed download rather than linking directly to a raw PDF file. |
| Talk to DIGINFO | /contact/request-consultation | Primary corporate conversion action. |
| Sign In | /sign-in | Route users to DGEnterprise SSO/customer access. Keep “Sign In” as the public label. |
| Search | /search | Global public-site search across approved corporate pages and insights. DGBRAIN semantic assistance may be used only on approved public content. |

### 15.2 Footer content

| Footer group | Required links/content |
| --- | --- |
| Company | About DIGINFO; Vision & Strategy; Leadership; Our Journey; Partnerships; Careers; Contact. |
| What We Do | Cyber Resilience; Secure Digital Transformation; Cloud & Platform Modernization; Governance, Risk & Assurance; AI & Intelligence; Education & Workforce; Product Innovation; Business Continuity. |
| Ecosystem | DGMAGAZINE; DGACADEMY; DGCLOUD; THREATASSURANCE; DGLABS; NATIVESECURITY; Ecosystem Overview. Core-system links may be included in a secondary footer list, not as a logo wall. |
| Insights | Research; Cyber Intelligence; Executive Perspectives; News; Events; Case Studies. |
| Utility | Company Profile; Sign In; Search; Sitemap; Newsletter. |
| Legal | Privacy Policy; Terms of Use; Cookie Policy; Responsible Disclosure; Accessibility. |
| Contact | Offices: Karachi, Pakistan; Riyadh, Saudi Arabia | Landline: +9234325505 | Email: info@diginfo.net | Website: https://diginfo.net | Cyber Magazine: https://dgmagazine.net. |
| Copyright | Dynamic current year. Do not retain the fixed 2021–2023 legacy copyright text. |

### 15.3 Legal / trust pages

#### Privacy Policy

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /legal/privacy-policy |
| Purpose | Legal/trust page. |
| Core message | Explain personal data collection, forms, analytics, cookies, account handoff and contact rights. |
| Required content | Content must be reviewed by Legal & Compliance before publication; date/version field; contact channel; related policy links. |
| Primary CTA(s) | Contact / Security Disclosure |
| Related links | Legal |
| Content owner | Corporate / Product Owner |

#### Terms of Use

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /legal/terms-of-use |
| Purpose | Legal/trust page. |
| Core message | Website use, content/IP, links, disclaimers and acceptable conduct. |
| Required content | Content must be reviewed by Legal & Compliance before publication; date/version field; contact channel; related policy links. |
| Primary CTA(s) | Contact / Security Disclosure |
| Related links | Legal |
| Content owner | Corporate / Product Owner |

#### Cookie Policy

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /legal/cookie-policy |
| Purpose | Legal/trust page. |
| Core message | Cookie categories, analytics, preferences and consent controls. |
| Required content | Content must be reviewed by Legal & Compliance before publication; date/version field; contact channel; related policy links. |
| Primary CTA(s) | Contact / Security Disclosure |
| Related links | Legal |
| Content owner | Corporate / Product Owner |

#### Responsible Disclosure

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /legal/responsible-disclosure |
| Purpose | Legal/trust page. |
| Core message | Security reporting scope, safe-harbor/process language as approved, prohibited testing, confidentiality and handoff to DG Bug Bounty/security team. |
| Required content | Content must be reviewed by Legal & Compliance before publication; date/version field; contact channel; related policy links. |
| Primary CTA(s) | Contact / Security Disclosure |
| Related links | Legal |
| Content owner | Corporate / Product Owner |

#### Accessibility

| Field | Developer / Content Requirement |
| --- | --- |
| Route | /legal/accessibility |
| Purpose | Legal/trust page. |
| Core message | Accessibility commitment, known limitations, contact for accessibility issues and supported standards/process. |
| Required content | Content must be reviewed by Legal & Compliance before publication; date/version field; contact channel; related policy links. |
| Primary CTA(s) | Contact / Security Disclosure |
| Related links | Legal |
| Content owner | Corporate / Product Owner |

## 16. CMS Content Models & Required Fields

DGHUB is the approved central CMS/workflow and should own corporate-page content administration. The public website consumes approved content through the platform/API layer; it should not embed editorial/admin logic in the frontend.

| Content model | Required fields / governance |
| --- | --- |
| Corporate Page | Title; slug; navigation label; eyebrow; H1; summary; body modules; CTA; related pages; SEO title; meta description; canonical URL; OG image; status; owner; review date; publish date; last updated. |
| Platform / Product | Name; official spelling; short description; full description; category; role; capabilities; related business outcomes; related industries; external URL; sign-in URL if applicable; owner; logo asset; CTA; SEO; status. |
| Capability | Name; business problem; outcomes; services; related platforms; industries; evidence; CTA; owner. |
| Industry | Name; sector challenges; outcomes; relevant capabilities; relevant platforms; selected experience; case studies; CTA. |
| Insight | Type; title; slug; summary; author; body; date; topics; industry; product; capability; source links; downloadable asset; related content; SEO; approval. |
| Leadership Profile | Name; role; short bio; long bio; approved photo; areas of responsibility; social/profile links; display status. |
| Customer Reference | Organization; sector; geography; relationship description; logo; permission status; confidentiality flag; related case studies; publish status. |
| Testimonial | Quote; author; title; organization; product/context; source date; permission/approval; publish status. |
| Partnership | Partner; category; description; badge/logo approval; URL; validity/review date; owner. |
| Office | City; country; type; contact channels; public display flag. |
| Form Definition | Form type; fields; routing; acknowledgement; consent text; retention rule; owner; spam protection. |

## 17. Taxonomy, Cross-Linking & Content Relationships

| Taxonomy | Values / rule |
| --- | --- |
| Capability | Cyber Resilience; Secure Digital Transformation; Cloud & Platform Modernization; Governance/Risk/Assurance; AI & Intelligence; Education & Workforce; Technology Manufacturing & Product Innovation; Business Continuity & Growth. |
| Industry | Government/Public Sector; Banking/Finance; Telecom; Healthcare; Education; Critical Infrastructure; Enterprise/Technology; Manufacturing/Industrial. |
| Platform category | Public/Commercial; Core Shared; Growth/Community; Product Extension; Engineering Organization. |
| Insight type | Research; Cyber Intelligence; Executive Perspective; Article/Publication; News; Event; Case Study. |
| Audience | Executive; Technology; Security; Risk/Compliance; Student/Learner; Researcher; Partner; Media; Job Candidate. |
| Geography | Global; Pakistan; Saudi Arabia; other locations as content requires. |

Each capability page must reference at least two relevant ecosystem platforms where accurate.

Each platform page must map back to business outcomes and at least one What We Do page.

Each industry page should surface relevant capabilities, platform examples and approved evidence/case studies.

Insights should be tagged to products, industries and capabilities so the website can surface contextual related content without duplicating articles.

Do not duplicate DGBRAIN or DG Bug Bounty content at multiple canonical URLs. Use cross-links from Ecosystem to the Innovation canonical pages.

## 18. SEO, URL Migration & Redirect Plan

| Legacy URL | New destination | Rule |
| --- | --- | --- |
| https://diginfo.net/ | / | Replace content in place; retain domain authority. |
| /company/about-us/experience | /who-we-are/experience | 301 permanent redirect; preserve customer/experience intent. |
| /company/contact-us | /contact | 301 permanent redirect. |
| /products/news-updates/dg-magazine | /ecosystem/dgmagazine | 301; corporate summary links to dgmagazine.net. |
| /products/education/dg-academy | /ecosystem/dgacademy | 301; corporate summary links to dgacademy.net. |
| /products/cloud-security/dg-cloud | /ecosystem/dgcloud | 301. |
| /products/security-challenge/threat-assurance | /ecosystem/threat-assurance | 301; link to configured Threat Assurance domain. |
| /DIGINFO%20PROFILE.pdf | /company-profile | 301/managed redirect to current profile landing page; do not leave stale PDF indexed. |
| media.diginfo.net | Defined service/redirect policy | Do not expose as a primary corporate product. Preserve only if required as a shared media service or redirect to the appropriate DGMAGAZINE/Insights destination. |
| dgenterprise.diginfo.net | /sign-in → DGEnterprise | Keep the corporate public label as Sign In. |

### 18.1 SEO requirements

Unique SEO title and meta description for every indexable page; no duplicate title templates across product pages.

Canonical URL on every indexable page; explicitly canonicalize cross-linked DGBRAIN and DG Bug Bounty content.

XML sitemap generated from published indexable routes; robots rules managed per environment.

Structured data where appropriate: Organization, WebSite, BreadcrumbList, Article/NewsArticle, Event, Person, FAQ only when the page genuinely contains the corresponding content.

Open Graph/social metadata with approved corporate/product assets.

Preserve legacy backlinks through 301 redirects; export old indexed URLs before cutover and monitor 404s after launch.

Use clean lowercase slugs, hyphen-separated words and no spaces in new URLs.

## 19. Search, Analytics & Platform Integration

### 19.1 Global search

Search only approved public corporate content and insights by default.

DGBRAIN may provide semantic search, related-content suggestions and query understanding, but public search must not expose private DGHUB, DGEnterprise, customer or operational data.

Search results should identify content type, title, summary, date where relevant, related product/industry and destination URL.

Track zero-result queries to improve content coverage and taxonomy.

### 19.2 Analytics event model

| Event | Minimum properties |
| --- | --- |
| nav_click | menu; submenu; destination |
| cta_click | cta_name; source_page; destination |
| product_outbound_click | product; source_page; external_domain |
| company_profile_view/download | source_page; asset_version |
| form_start | form_type; source_page |
| form_submit | form_type; product/capability if selected; success/failure |
| sign_in_click | source_page |
| search | query; result_count |
| insight_view | content_type; topic; product; industry |
| case_study_view | industry; capability; product |

### 19.3 Approved platform responsibilities

| Platform | Corporate website responsibility |
| --- | --- |
| DGHUB | Corporate CMS, workflow, approvals, CRM/contact routing and publishing control. |
| DGBRAIN | Public-content intelligence support: semantic search, metadata, recommendations, translation/content assistance where approved; human review required. |
| DGEnterprise | Identity/SSO, accounts and authenticated access. Corporate utility label remains Sign In. |
| DGSHOP | Commerce where products/services require catalogue, checkout, payment, invoice or licensing flows. |
| DGCLOUD | Runtime/infrastructure foundation for backend services. |
| Cloudflare | Global edge, CDN/static delivery, internet security and protected public asset/download delivery. |

| Architecture boundary<br>The public corporate website must not connect directly to business databases. It consumes approved services through the DIGINFO application/platform layer and governed APIs. |
| --- |

## 20. Content Governance, Ownership & Publishing Workflow

Content owner creates or updates a page/content record in DGHUB.

Product/capability owner verifies technical and business accuracy.

Corporate communications reviews tone, consistency, brand terminology and cross-links.

Legal & Compliance reviews claims, customer references, testimonials, partnership badges, privacy/security disclosures and other governed statements where required.

DGBRAIN may assist with metadata, summaries, related-content suggestions, translation or content intelligence; the output is not auto-published.

Authorized human approver publishes through DGHUB.

Published content records retain owner, approval status, last-reviewed date and next-review trigger.

| Content area | Primary owner | Mandatory reviewers |
| --- | --- | --- |
| Corporate / Who We Are | Corporate / CEO Office | Corporate Communications; Legal where claims apply |
| What We Do | Business/Capability Owner | Technical/Product Owner; Corporate |
| Industries | Business Development / Corporate | Capability owners; Legal for customer references |
| Innovation | CTO / DGBRAIN / DGLABS / INNOVATECH | Security; Corporate; Legal where needed |
| Ecosystem products | Product Owner | Corporate; Architecture owner; Legal where claims apply |
| Insights | Corporate Communications / DGLABS / product editorial owner | Subject-matter reviewer; Legal if needed |
| Leadership | CEO Office / HR | Individual approval; Corporate |
| Customers / Testimonials | Sales / Corporate | Legal/permission verification |
| Careers / DG Care | HR / DGACADEMY | Corporate; Legal/privacy |
| Legal / Disclosure | Legal & Compliance / Security | Authorized executive approval |

## 21. Approved Customer, Experience & Testimonial Content

The current website contains valuable historical experience and the approved corporate profile adds newer customer and university engagement content. The website should present selected evidence, not an uncontrolled logo wall. Every name/logo/testimonial must have publish permission or an approved historical basis.

| Category | Approved organizations / content |
| --- | --- |
| Government & Public Sector | Pakistan Navy; Strategic Plans Division (SPD); NUST — Professional Development Center (PDC); NUST — IME Department; NUST — PDH Department; IUCN; MTC — NESCOM; Ministry of Defense — Riyadh, Saudi Arabia; EXEQUT; PIA; Nova Water, Riyadh, Saudi Arabia; JPTS — Al-Jeri Transport, Riyadh, Saudi Arabia. |
| Pharmaceutical & Textile | Indus Pharma; Brookes Pharma; Barrett Hodgson; Abbott Pharmaceuticals Pakistan; Soorty Enterprises — Denim; Hub Leather; YTM — Younus Textile; Al-Karam Textile; International Textile. |
| Banking & Finance | Silk Bank; Bank Al-Baraka; Mobi Direct; Pak-Oman Bank. |
| FMCG | English Biscuits / Peek Freans; Tapal Tea; Young’s Food; Hilal Foods; Matco Foods; Colgate-Palmolive. |
| Power Sector | NIFT — National Institutional Facilitation Technologies; HASCOL; K-Electric; National Power Park Lahore; PARCO. |
| Automotive | Atlas Honda — Motors Pakistan. |
| Broadcast & Media | AlMajd Islamic TV — Riyadh, Saudi Arabia. |
| Technology | Lumes Soft Lahore; LOGON Broadband. |
| Healthcare & Digital Services | Indus Hospital; Aman Foundation; Ziauddin Hospital; TenPearls. |
| Industry & Logistics | Marnite Industries; Bykea. |
| University & Academic Engagement | Mohammad Ali Jinnah University; Iqra University; Usman Institute of Technology; Suffa University; ALKAWTHAR University; Information Technology University (ITU), Lahore. |
| National University Outreach | 100+ universities across Pakistan — learning, talent development, research collaboration and ecosystem awareness pipeline. |

### 21.1 Testimonial content approved in the corporate profile

| Attribution | Approved website-use summary |
| --- | --- |
| Dr. Ashfaq A. Malik — Ex-Dean / HoD Cybersecurity, PN Engineering College | DGACADEMY’s cloud-based cybersecurity training initiative demonstrated professionalism comparable to international standards. Careful course design, clear delivery and strong alignment with academic cybersecurity programs created high value. |
| Dr. Zeeshan — Dean / HoD, Naval Architecture Department, NUST-PNEC | Having worked with DIGINFO on successful projects, I can testify to strong communication, attention to detail and an end-to-end approach covering awareness, readiness, assessment, planning and budgeting. |
| Adeel Yousfani — Head of Cybersecurity, Pakistan International Airlines (PIA) | DG Magazine has established itself as a valuable platform for sharing insights, research and practical experiences in cybersecurity and emerging technologies. It promotes knowledge, innovation and professional excellence, connects professionals and researchers, and supports awareness, best practices and resilience. |
| Asif Iqbal — Chief Information Security Officer (CISO), Muslim Commercial Bank (MCB) | DIGINFO Media demonstrated a professional and engaging approach to showcasing industry talent and perspectives. The experience was inspiring and professional, with well-structured, informative content and a strong commitment to quality presentation. |
| Umair Ahmad — Director Information Security | CISO, Moore JFC Group | The engagement was an amazing and smooth experience with strong understanding and assistance, with an expectation of a long-term relationship and collaboration. |
| Engr. Kh. Golam Sarwar — Chief Information Security Officer, The Premier Bank PLC., Bangladesh | The Cybersecurity Myths Series is an insightful editorial initiative that challenges common assumptions and encourages organizations to rethink their security strategies. |

| Publishing control<br>For website publication, use the exact approved testimonial wording from the master corporate profile or the original signed/source record. The summaries above are for developer mapping and should not replace the approved verbatim source where a quote is presented as a direct quotation. |
| --- |

## 22. Corporate Facts, Contact & External Domains

| Item | Approved public value |
| --- | --- |
| Legal entity | Digital Information Systems (Pvt) Limited |
| Brand | DIGINFO |
| Corporate website | https://diginfo.net |
| General email | info@diginfo.net |
| Landline | +9234325505 |
| Offices | Karachi, Pakistan; Riyadh, Saudi Arabia |
| Cyber Magazine | https://dgmagazine.net |
| DGACADEMY | https://dgacademy.net |
| NATIVESECURITY | https://nativesecurity.org |
| THREATASSURANCE | https://threatassurance.net and https://threatassurance.com |

## 23. Content QA & Acceptance Criteria

Primary navigation exactly matches the approved eight main items.

Utility actions are Company Profile, Talk to DIGINFO and Sign In; DGEnterprise is not used as the public utility label.

No homepage product/logo wall; ecosystem is explained at category/outcome level.

DGBRAIN is clearly positioned as flagship intelligence capability and human-governed.

DGHUB, DGEnterprise, DGSHOP and DG Nexus responsibilities are not conflated.

All major current public platforms and approved extensions are represented somewhere in the Ecosystem section.

DG Media is not promoted as a main commercial product; DG PEDIA is not presented as an active product.

Legacy cyber-only positioning is removed from primary corporate pages.

Old Company Profile PDF no longer remains the main downloadable corporate profile.

All legacy indexed routes have explicit 301 mappings.

No unverified “24/7”, certification, partner, customer or performance claims are copied forward without approval.

Contact details match the approved corporate facts.

Customer/testimonial permission is verified before public use.

Every indexable page has unique title, meta description, canonical URL and appropriate OG metadata.

Forms route into structured DGHUB workflows and capture consent.

Public search cannot expose private operational or customer data.

Corporate website has no direct business-database access.

Legal pages are published and linked in footer before launch.

Accessibility basics are met: semantic headings, labels, keyboard operation, alt text, meaningful link text and accessible downloads.

Analytics events are tested for navigation, CTA, profile download, forms, sign-in, search and outbound product links.

404/500 pages, sitemap and search are functional at launch.

## 24. Recommended Content/Development Build Order

Freeze route map, redirect map and terminology dictionary before implementation.

Create DGHUB content models and workflow states for pages, platforms, capabilities, industries, insights, people, customers, testimonials, forms and legal content.

Build global navigation, footer, utility actions, breadcrumbs, search shell and legal/utility routes according to the approved design.

Implement corporate pages: Home, Who We Are, What We Do, Industries, Innovation, Ecosystem, Insights and Contact landings.

Implement inner-page content types and load approved copy from this handover/profile source.

Integrate Sign In with DGEnterprise; integrate forms with DGHUB workflows; configure DGSHOP only where commerce flows are required.

Integrate DGBRAIN-approved public search/recommendation assistance without exposing private data.

Load customer/testimonial evidence after permission/accuracy review.

Create all 301 redirects from legacy routes and test external product links.

Complete SEO, structured data, accessibility, analytics, consent, error pages and sitemap.

Run content QA against the acceptance checklist, then perform production cutover with the legacy site retained only according to the approved migration plan.

## Appendix A — Approved Corporate Copy Bank

| Use | Approved copy |
| --- | --- |
| Primary headline | Building Technology, AI Intelligence & Digital Trust |
| Corporate promise | We understand business. We build technology. We secure operations. We help organizations grow. |
| Positioning line | Where Business Challenges Meet Technology, Security and Product Innovation. |
| Corporate overview | DIGINFO is a technology, cybersecurity, R&D, manufacturing and digital ecosystem company. We combine business understanding with secure technology, owned platforms, AI intelligence, cloud services, enterprise assurance, professional learning and research. |
| Operating model | DIGINFO connects advisory, software, cloud, identity, commerce, intelligence, education, research and secure product engineering. The objective is not to create more disconnected systems; it is to create reusable capability across the ecosystem while preserving clear ownership for each product. |
| Ecosystem line | One Company. Multiple Platforms. Shared Intelligence, Identity and Trust. |
| DGBRAIN line | DGBRAIN assists. DIGINFO experts review and approve. |
| Trust principle | Security is not a final checklist. It is part of how DIGINFO designs products, operates platforms, manages intelligence and builds long-term relationships. |
| DG Care principle | Learn. Experience. Build. Qualify. Grow. |
| Engineering promise | Secure, scalable and intelligent digital products engineered, operated and continuously improved by DIGINFO. |

## Appendix B — Standard Inner-Page Content Checklist

| Field | Requirement |
| --- | --- |
| Navigation label | Short, clear label matching the approved menu terminology. |
| H1 | One unique page title; must not simply repeat navigation language when a stronger business-oriented H1 is available. |
| Intro / summary | 80–160 words explaining the page’s business purpose and context. |
| Business problem | What challenge, risk, opportunity or stakeholder need the page addresses. |
| DIGINFO response | Capabilities, platforms, people, process and outcomes relevant to the problem. |
| Evidence | Customer/case study/testimonial/research evidence where approved. |
| Related platforms | Explicit links into Ecosystem. |
| Related industries | Relevant sector pages. |
| Related insights | Research, case studies, news or thought leadership. |
| CTA | One primary and up to two secondary actions; avoid competing calls to action. |
| SEO | Title, meta description, canonical, OG, structured data where valid. |
| Governance | Owner, approver, review date, publish status. |

## Appendix C — Source References & Review Notes

This handover consolidates the latest approved DIGINFO corporate profile, the latest ecosystem/corporate-site decisions and a current review of the legacy public website. Where legacy wording conflicts with the latest approved corporate profile, the latest approved corporate profile and ecosystem decisions take precedence.

| Source | Use in this handover |
| --- | --- |
| DIGINFO Corporate Profile — Professional Word Master V1 | Primary copy, ecosystem, capabilities, management, customer, testimonial and corporate-facts baseline. |
| Approved DIGINFO corporate website deep-dive decisions | Primary navigation, submenus, route structure, homepage content architecture, footer/legal/utility and platform-boundary decisions. |
| Current https://diginfo.net | Legacy-site audit, current navigation, current customer experience page, current product pages, contact page and migration/redirect source. |
| Current https://media.diginfo.net | Legacy/shared media-service reference; not a primary product classification. |
| Approved DIGINFO ecosystem architecture | DGBRAIN/DGHUB/DGEnterprise/DGSHOP/DG Nexus boundaries; DGCLOUD/Cloudflare roles; shared-platform principles. |

## Developer Handover Summary

| Build the corporate business gateway — not another product portal<br>The new diginfo.net must explain DIGINFO as the mother company, connect business problems to capabilities and industries, make the ecosystem understandable, establish DGBRAIN as flagship intelligence, preserve clear platform boundaries, and route visitors cleanly to consultation, product destinations, insights, careers, partnership and sign-in journeys. |
| --- |

This document intentionally does not prescribe website design layouts. The approved visual design and theme remain separate artifacts. The development team should use this document as the content, information-architecture, routing, migration and governance baseline.
