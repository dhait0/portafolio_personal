# AGENTS.md — Portfolio Build Guide

## Project mission
Build a premium personal portfolio for Sebastian Camargo focused on:

- Full Stack Development
- AI & Business Automation
- DevOps, CI/CD and infrastructure
- Enterprise integrations

The portfolio must feel modern, technical, animated, and professional. It should help Sebastian win freelance projects in React, TypeScript, automation, n8n, Microsoft Graph, Jenkins, Docker and enterprise software adaptation.

## Primary stack
Use this stack unless there is a strong reason not to:

- Next.js 15+ with App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui or Radix UI primitives
- Lucide React icons
- Vercel deployment

Optional but recommended:

- next-mdx-remote or MDX for case studies
- Mermaid or custom SVG diagrams
- React Flow for architecture diagrams
- Motion blur, glassmorphism, gradients and micro-interactions

## Visual direction
The site should look like a senior engineering portfolio, not a generic resume.

Style keywords:

- Dark premium interface
- Neon blue / cyan accents
- Glass cards
- Subtle grid background
- Animated gradients
- Smooth scroll
- Interactive project cards
- Technical diagrams
- Code-inspired sections
- Clean typography
- Enterprise SaaS look

Avoid:

- Generic template look
- Overloaded animations
- Fake client logos
- Real confidential company data
- Any private source code
- Any real customer names, real credentials, internal URLs or screenshots with sensitive data

## Content positioning
Position Sebastian as:

> Full Stack Developer & AI Automation Engineer building web platforms, workflow automations, enterprise integrations and CI/CD pipelines.

Core technologies to highlight:

- React
- TypeScript
- Next.js
- Node.js
- NestJS
- Prisma ORM
- PostgreSQL
- n8n
- Puppeteer
- Microsoft Graph
- Microsoft 365
- OpenAI / AI APIs
- Jenkins
- Docker
- Linux
- Proxmox
- SharePoint
- Active Directory
- APIs REST
- Git

## Privacy and confidentiality rules
Some experience comes from real company work. Never expose proprietary information.

Use anonymized case studies:

- Replace company names with generic names like “enterprise client”, “internal operations team”, or “business unit”.
- Replace real screenshots with recreated UI screens using mock data.
- Replace real workflows with simplified diagrams.
- Do not include private repositories.
- Do not include real database schemas.
- Do not include real credentials, API endpoints, tokens, emails, phone numbers, internal domains or customer data.

Acceptable evidence:

- Architecture diagrams
- Mock dashboards
- Before/after process descriptions
- Technology stack
- Role and responsibilities
- Measurable but generalized impact, such as “reduced manual work”, “improved deployment consistency”, “centralized operational data”.

## Main site sections
Create these pages/sections:

1. Hero
   - Headline: “Full Stack Developer & AI Automation Engineer”
   - Subheadline focused on React, TypeScript, n8n, Microsoft Graph, Jenkins and Docker.
   - CTA buttons: “View case studies” and “Contact me”.

2. About
   - Short story: systems technician evolved into full stack and automation developer.
   - Emphasize practical enterprise experience.

3. Skills matrix
   Group skills by category:
   - Web Development
   - Automation & AI
   - DevOps & Infrastructure
   - Enterprise Integrations
   - IT Foundations

4. Case studies
   Must include at least six case studies:
   - Enterprise Automation Platform
   - Internal SaaS Web Platform
   - CI/CD Pipeline with Jenkins and Docker
   - Open Source Software Adaptation
   - Microsoft 365 & Graph API Integrations
   - Private Cloud & Virtualization with Proxmox

5. Featured demos
   Include public demo projects that can be built from scratch without private code:
   - React TypeScript Admin Dashboard
   - n8n + AI Workflow Demo
   - Jenkins CI/CD Demo App
   - Microsoft Graph Integration Demo

6. Process
   Show how Sebastian works:
   - Discovery
   - Architecture
   - Implementation
   - Automation
   - Testing
   - Deployment
   - Documentation

7. Contact
   - Email CTA
   - Freelancer profile CTA
   - GitHub CTA
   - LinkedIn placeholder

## Case study structure
Every case study should use this structure:

- Overview
- Problem
- Solution
- My role
- Architecture
- Tech stack
- Key features
- Results
- What I learned
- Confidentiality note

Use mock content and anonymized descriptions.

## Animation requirements
Use Framer Motion for:

- Hero entrance animation
- Scroll reveal sections
- Hover effects on cards
- Animated timeline
- Animated technology orbit or floating stack icons
- Case study card expansion
- Smooth page transitions if practical

Keep performance high. Avoid heavy animation loops.

## Component suggestions
Create reusable components:

- `HeroSection`
- `SectionHeading`
- `SkillPill`
- `SkillMatrix`
- `CaseStudyCard`
- `ArchitectureDiagram`
- `TechStackCloud`
- `AnimatedTimeline`
- `ProjectMetric`
- `CTASection`
- `Navbar`
- `Footer`

## Suggested file structure

```txt
src/
  app/
    page.tsx
    case-studies/
      page.tsx
      [slug]/
        page.tsx
    contact/
      page.tsx
  components/
    layout/
    sections/
    ui/
    case-studies/
  content/
    case-studies.ts
    skills.ts
    projects.ts
  lib/
    utils.ts
  styles/
    globals.css
```

## Case study slugs
Use these slugs:

- `enterprise-automation-platform`
- `internal-saas-web-platform`
- `jenkins-docker-cicd-pipeline`
- `open-source-software-adaptation`
- `microsoft-365-graph-integrations`
- `proxmox-private-cloud-infrastructure`

## Tone of voice
Use professional English as the main language. Spanish can be included as a secondary option later, but the first version should target international freelance clients.

Tone:

- Clear
- Confident
- Technical
- Business-oriented
- Honest
- No exaggeration

## Deployment target
The project must deploy cleanly to Vercel.

Requirements:

- Use environment variables only where needed.
- No server-only dependencies unless necessary.
- No private API calls in production.
- Lighthouse-friendly performance.
- Responsive design for mobile and desktop.

## First implementation task for Codex
Start by creating a Next.js + TypeScript + Tailwind project and implement the homepage with:

- Hero section
- Skills matrix
- Three featured case study cards
- Process section
- Contact CTA

Then add the case study content data structure and routes.
