# Portfolio Idea — Sebastian Camargo

## Purpose
Create a high-impact technical portfolio that helps Sebastian win freelance projects in web development, automation, AI integrations, CI/CD and infrastructure.

This portfolio should not expose private company code or real client data. It should transform real experience into anonymized case studies with mock screenshots, diagrams and clear business outcomes.

## Personal brand

**Name:** Sebastian Camargo  
**Positioning:** Full Stack Developer & AI Automation Engineer  
**Tagline:** Building web platforms, workflow automations, enterprise integrations and CI/CD pipelines.

## Core offer
Sebastian helps businesses:

- Build modern web applications with React, TypeScript and Node.js.
- Automate repetitive processes with n8n, Puppeteer and AI APIs.
- Integrate Microsoft 365, SharePoint and Microsoft Graph.
- Build backend services with PostgreSQL, Prisma ORM and REST APIs.
- Deploy and maintain software using Docker, Linux and Jenkins CI/CD.
- Adapt Open Source software to business needs.
- Manage virtualized environments with Proxmox.

## Target clients

- Small businesses that need automation.
- Companies with manual processes in Excel, email or Microsoft 365.
- SaaS founders needing MVPs or dashboards.
- Teams needing React/TypeScript frontend work.
- Businesses that need API integrations.
- Companies wanting CI/CD setup with Jenkins and Docker.
- Organizations using Open Source tools that need customization.

## Site concept
A dark, animated, technical portfolio that feels like a mix of:

- SaaS landing page
- Engineering portfolio
- Automation agency website
- Technical case study library

## Homepage narrative

### Hero
Headline:

> Full Stack Developer & AI Automation Engineer

Subheadline:

> I build modern web platforms, automate business workflows, integrate enterprise systems and deploy reliable software using React, TypeScript, n8n, Microsoft Graph, Docker and Jenkins.

CTA buttons:

- View case studies
- Contact me

Visual idea:

Animated technical architecture floating around the hero:

```txt
React + TypeScript → REST API → PostgreSQL
        ↓
       n8n → Microsoft Graph → AI APIs
        ↓
      Docker → Jenkins → Linux Server
```

### Skills matrix
Group the skills like this:

#### Web Development
- React
- TypeScript
- Next.js
- Node.js
- NestJS
- Prisma ORM
- PostgreSQL
- REST APIs

#### Automation & AI
- n8n
- Puppeteer
- OpenAI / AI APIs
- Webhooks
- Workflow automation
- Data extraction
- Report automation

#### Enterprise Integrations
- Microsoft Graph
- Microsoft 365
- SharePoint
- Active Directory
- API integrations
- Email automation

#### DevOps & Infrastructure
- Jenkins
- Docker
- Linux
- Git
- Proxmox
- Virtualization
- CI/CD pipelines

#### IT Foundations
- Technical support
- Network administration
- Backups
- Monitoring
- Security basics
- User support

## Case studies to create

### 1. Enterprise Automation Platform

**Goal:** Show n8n, Microsoft Graph, AI APIs and process automation.

**Problem:** Manual workflows across email, files, reports and business tools caused delays and repetitive work.

**Solution:** Designed automated workflows using n8n, Microsoft Graph, APIs and AI services to process data, trigger actions and generate reports.

**Tech stack:** n8n, Microsoft Graph, REST APIs, PostgreSQL, OpenAI, JavaScript.

**Mock architecture:**

```txt
Microsoft 365
   ↓
Microsoft Graph API
   ↓
n8n workflows
   ↓
PostgreSQL / External APIs
   ↓
Reports / Notifications / Dashboards
```

**Confidentiality:** Use recreated workflow diagrams and fake data.

---

### 2. Internal SaaS Web Platform

**Goal:** Show React, TypeScript, Node.js, Prisma and PostgreSQL.

**Problem:** The business needed a centralized platform for internal operations, dashboards and data management.

**Solution:** Built and adapted web modules using React and TypeScript, connected to backend APIs and PostgreSQL through Prisma ORM.

**Tech stack:** React, TypeScript, Node.js, Prisma ORM, PostgreSQL, Docker.

**Mock features:**

- Login
- Role-based access
- Dashboard
- CRUD modules
- Reports
- API integration

---

### 3. Jenkins + Docker CI/CD Pipeline

**Goal:** Show deployment automation.

**Problem:** Manual deployments were slow and error-prone.

**Solution:** Implemented CI/CD workflows with Jenkins and Docker to automate build, test and deployment steps.

**Tech stack:** Jenkins, Docker, Git, Linux, Bash, Node.js.

**Mock architecture:**

```txt
Git push
  ↓
Jenkins pipeline
  ↓
Install dependencies
  ↓
Run checks/tests
  ↓
Build Docker image
  ↓
Deploy to server
```

---

### 4. Open Source Software Adaptation

**Goal:** Show ability to customize existing systems.

**Problem:** An Open Source platform needed to be adapted to specific operational needs.

**Solution:** Configured, extended and integrated the software with internal workflows, authentication, reporting and deployment processes.

**Tech stack:** Linux, Docker, PostgreSQL, APIs, React/Node when applicable.

**Confidentiality:** Avoid naming private tools if sensitive. Use generic wording.

---

### 5. Microsoft 365 & Graph API Integrations

**Goal:** Show Microsoft ecosystem expertise.

**Problem:** Teams needed automation around users, files, SharePoint and emails.

**Solution:** Used Microsoft 365 administration knowledge and Microsoft Graph API integrations to automate operational tasks and connect Microsoft services with external systems.

**Tech stack:** Microsoft 365, Microsoft Graph, SharePoint, Active Directory, n8n, REST APIs.

---

### 6. Proxmox Private Cloud Infrastructure

**Goal:** Show infrastructure and virtualization.

**Problem:** The business needed reliable virtualized environments for services, testing and internal tools.

**Solution:** Administered Proxmox environments, virtual machines, backups, Linux servers and Dockerized workloads.

**Tech stack:** Proxmox, Linux, Docker, networking, backups, monitoring.

## Public demos to build later

These should be open-source and safe to publish:

1. **React TypeScript Admin Dashboard**
   - Mock analytics dashboard
   - Tailwind
   - Charts
   - Dark mode

2. **n8n AI Workflow Demo**
   - Webhook → AI summary → Google Sheet mock → notification
   - Use fake data

3. **Jenkins CI/CD Demo App**
   - Small React/Node app
   - Jenkinsfile
   - Dockerfile
   - README

4. **Microsoft Graph Demo**
   - Safe mock integration
   - No real tokens
   - Documentation only or sandbox example

5. **Puppeteer Automation Demo**
   - Public website scraping example
   - Export to CSV
   - No bypassing auth or anti-bot systems

## Design requirements

- Dark background
- Animated gradient hero
- Floating tech cards
- Glassmorphism panels
- Framer Motion scroll reveals
- Interactive case study cards
- Architecture diagrams
- Responsive layout
- Fast loading
- Excellent mobile view

## Suggested homepage sections

1. Hero
2. Trusted capabilities / tech stack
3. Featured case studies
4. Skills matrix
5. How I work
6. Public demos
7. Contact CTA

## Suggested copy

### Hero copy

I design and build practical software systems: web platforms, workflow automations, API integrations and deployment pipelines. My background combines development, IT operations and infrastructure, which allows me to deliver solutions that work beyond the code.

### About copy

I started in systems and IT support, working with users, networks, servers and enterprise tools. Over time, I moved into software development and automation, building internal solutions with React, TypeScript, Node.js, n8n, Microsoft Graph, Docker and Jenkins. This combination helps me understand both the technical and operational side of business problems.

## Codex first task
Create the initial portfolio project.

Requirements:

1. Create a Next.js project with TypeScript and Tailwind.
2. Add Framer Motion.
3. Build the homepage sections.
4. Create a `content/case-studies.ts` file with the six case studies.
5. Create reusable components for cards, headings and skill pills.
6. Prepare the project for deployment on Vercel.

## Acceptance criteria

- `npm run dev` works.
- `npm run build` works.
- Homepage looks premium and animated.
- No private company information appears.
- Case studies use mock/anonymized data.
- Site is responsive.
- Project can be deployed to Vercel.
