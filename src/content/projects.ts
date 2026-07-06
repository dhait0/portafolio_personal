import type { Locale } from "@/lib/i18n";

export type DemoProject = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  highlight: string;
};

const demoProjectsByLocale: Record<Locale, DemoProject[]> = {
  es: [
    {
      slug: "react-typescript-admin-dashboard",
      title: "Panel de Administración React TypeScript",
      description: "Un dashboard de analítica simulado con tarjetas, gráficos y navegación según rol.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      highlight: "Diseñado para mostrar UI de dashboards, estructura de componentes y comportamiento responsive.",
    },
    {
      slug: "n8n-ai-workflow-demo",
      title: "Demo de Flujo n8n + IA",
      description: "Flujo de webhook a resumen con IA, actualización de hoja mock y notificación.",
      stack: ["n8n", "OpenAI API", "Webhooks", "JSON payloads"],
      highlight: "Muestra patrones de automatización prácticos sin exponer datos privados.",
    },
    {
      slug: "jenkins-cicd-demo-app",
      title: "App Demo de CI/CD con Jenkins",
      description: "Una app pequeña con automatización de pipeline y entrega contenedorizada.",
      stack: ["Jenkins", "Docker", "Node.js", "Linux"],
      highlight: "Útil como demo pública para diseño de pipelines y consistencia de despliegue.",
    },
    {
      slug: "microsoft-graph-integration-demo",
      title: "Demo de Integración con Microsoft Graph",
      description: "Ejemplo seguro para leer y sincronizar datos de directorio o buzón.",
      stack: ["Microsoft Graph", "Microsoft 365", "REST APIs", "OAuth"],
      highlight: "Una demo basada en documentación que evita tokens reales y tenants privados.",
    },
  ],
  en: [
    {
      slug: "react-typescript-admin-dashboard",
      title: "React TypeScript Admin Dashboard",
      description: "A mock analytics dashboard with cards, charts and role-aware navigation.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      highlight: "Designed to showcase dashboard UI, component structure and responsive behavior.",
    },
    {
      slug: "n8n-ai-workflow-demo",
      title: "n8n + AI Workflow Demo",
      description: "Webhook to AI summary to mock spreadsheet update and notification flow.",
      stack: ["n8n", "OpenAI API", "Webhooks", "JSON payloads"],
      highlight: "Shows practical automation patterns without exposing private data.",
    },
    {
      slug: "jenkins-cicd-demo-app",
      title: "Jenkins CI/CD Demo App",
      description: "A small web app with pipeline automation and containerized delivery.",
      stack: ["Jenkins", "Docker", "Node.js", "Linux"],
      highlight: "Useful as a public demo for pipeline design and deployment consistency.",
    },
    {
      slug: "microsoft-graph-integration-demo",
      title: "Microsoft Graph Integration Demo",
      description: "Safe mock example for reading and syncing directory or mailbox data.",
      stack: ["Microsoft Graph", "Microsoft 365", "REST APIs", "OAuth"],
      highlight: "Documentation-first demo that avoids real tokens and private tenants.",
    },
  ],
};

export function getDemoProjects(locale: string | undefined | null): DemoProject[] {
  return demoProjectsByLocale[locale === "en" ? "en" : "es"];
}
