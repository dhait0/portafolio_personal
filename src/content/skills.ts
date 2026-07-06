import type { Locale } from "@/lib/i18n";

export type SkillGroup = {
  title: string;
  description: string;
  skills: string[];
};

const skillGroupsByLocale: Record<Locale, SkillGroup[]> = {
  es: [
    {
      title: "Desarrollo Web",
      description: "Entrega moderna de frontend y backend para producto y herramientas internas.",
      skills: ["React", "TypeScript", "Next.js", "Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Automatización e IA",
      description: "Automatización de flujos, extracción de datos y operaciones asistidas por IA.",
      skills: ["n8n", "Puppeteer", "OpenAI / AI APIs", "Webhooks", "Automatización de flujos", "Extracción de datos", "Automatización de reportes", "Diseño de prompts"],
    },
    {
      title: "DevOps e Infraestructura",
      description: "Rutas de despliegue confiables y gestión pragmática de infraestructura.",
      skills: ["Jenkins", "Docker", "Linux", "Git", "Proxmox", "Virtualización", "Pipelines CI/CD", "Copias de seguridad"],
    },
    {
      title: "Integraciones Enterprise",
      description: "Conectividad entre sistemas de negocio, Microsoft y herramientas internas.",
      skills: ["Microsoft Graph", "Microsoft 365", "SharePoint", "Active Directory", "Integraciones API", "Automatización de correo", "SSO / flujos de identidad", "Sincronización de procesos"],
    },
    {
      title: "Fundamentos de IT",
      description: "Base operativa que mejora la calidad de entrega y el soporte posterior.",
      skills: ["Soporte técnico", "Administración de redes", "Monitoreo", "Bases de seguridad", "Soporte a usuarios", "Triage de incidentes", "Documentación", "Resolución de problemas"],
    },
  ],
  en: [
    {
      title: "Web Development",
      description: "Modern frontend and backend delivery for product and internal tools.",
      skills: ["React", "TypeScript", "Next.js", "Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Automation & AI",
      description: "Workflow automation, data extraction and AI-assisted operations.",
      skills: ["n8n", "Puppeteer", "OpenAI / AI APIs", "Webhooks", "Workflow automation", "Data extraction", "Report automation", "Prompt design"],
    },
    {
      title: "DevOps & Infrastructure",
      description: "Reliable deployment paths and pragmatic infrastructure management.",
      skills: ["Jenkins", "Docker", "Linux", "Git", "Proxmox", "Virtualization", "CI/CD pipelines", "Backups"],
    },
    {
      title: "Enterprise Integrations",
      description: "Business system connectivity across Microsoft and internal tooling.",
      skills: ["Microsoft Graph", "Microsoft 365", "SharePoint", "Active Directory", "API integrations", "Email automation", "SSO / identity flows", "Business process sync"],
    },
    {
      title: "IT Foundations",
      description: "Operational background that improves delivery quality and supportability.",
      skills: ["Technical support", "Network administration", "Monitoring", "Security basics", "User support", "Incident triage", "Documentation", "System troubleshooting"],
    },
  ],
};

export function getSkillGroups(locale: string | undefined | null): SkillGroup[] {
  return skillGroupsByLocale[locale === "en" ? "en" : "es"];
}
