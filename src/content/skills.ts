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
      description: "Pantallas, formularios y paneles para operar información de forma clara.",
      skills: ["React", "TypeScript", "Next.js", "Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Automatización e IA",
      description: "Procesos que ahorran tiempo al conectar herramientas y ejecutar tareas repetitivas.",
      skills: ["n8n", "Puppeteer", "OpenAI / AI APIs", "Webhooks", "Automatización de flujos", "Extracción de datos", "Automatización de reportes", "Diseño de prompts"],
    },
    {
      title: "Publicación y Servidores",
      description: "Configuración para que las soluciones queden funcionando y sean fáciles de mantener.",
      skills: ["Jenkins", "Docker", "Linux", "Git", "Proxmox", "Virtualización", "Publicación automática", "Copias de seguridad"],
    },
    {
      title: "Conexión entre Herramientas",
      description: "Integraciones para que tus sistemas compartan información sin copiar y pegar.",
      skills: ["Microsoft Graph", "Microsoft 365", "SharePoint", "Active Directory", "Integraciones API", "Automatización de correo", "SSO / flujos de identidad", "Sincronización de procesos"],
    },
    {
      title: "Fundamentos de IT",
      description: "Experiencia resolviendo problemas de usuarios, redes, equipos y operación diaria.",
      skills: ["Soporte técnico", "Administración de redes", "Monitoreo", "Bases de seguridad", "Soporte a usuarios", "Triage de incidentes", "Documentación", "Resolución de problemas"],
    },
  ],
  en: [
    {
      title: "Web Development",
      description: "Screens, forms and dashboards to manage information clearly.",
      skills: ["React", "TypeScript", "Next.js", "Node.js", "NestJS", "Prisma ORM", "PostgreSQL", "REST APIs"],
    },
    {
      title: "Automation & AI",
      description: "Processes that save time by connecting tools and running repetitive tasks.",
      skills: ["n8n", "Puppeteer", "OpenAI / AI APIs", "Webhooks", "Workflow automation", "Data extraction", "Report automation", "Prompt design"],
    },
    {
      title: "Launch & Servers",
      description: "Setup that keeps solutions running and easier to maintain.",
      skills: ["Jenkins", "Docker", "Linux", "Git", "Proxmox", "Virtualization", "Automated publishing", "Backups"],
    },
    {
      title: "Tool Connections",
      description: "Integrations that help systems share information without copy and paste.",
      skills: ["Microsoft Graph", "Microsoft 365", "SharePoint", "Active Directory", "API integrations", "Email automation", "SSO / identity flows", "Business process sync"],
    },
    {
      title: "IT Foundations",
      description: "Experience solving user, network, equipment and daily operation problems.",
      skills: ["Technical support", "Network administration", "Monitoring", "Security basics", "User support", "Incident triage", "Documentation", "System troubleshooting"],
    },
  ],
};

export function getSkillGroups(locale: string | undefined | null): SkillGroup[] {
  return skillGroupsByLocale[locale === "en" ? "en" : "es"];
}
