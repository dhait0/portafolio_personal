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
      title: "Panel para revisar datos del negocio",
      description: "Un ejemplo de panel con tarjetas, gráficos y navegación según tipo de usuario.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      highlight: "Muestra cómo se podría organizar información importante para tomar decisiones.",
    },
    {
      slug: "n8n-ai-workflow-demo",
      title: "Automatización de tareas con IA",
      description: "Un flujo que recibe información, genera un resumen, actualiza un registro y envía una notificación.",
      stack: ["n8n", "OpenAI API", "Webhooks", "JSON payloads"],
      highlight: "Muestra patrones de automatización prácticos sin exponer datos privados.",
    },
    {
      slug: "jenkins-cicd-demo-app",
      title: "Publicación automática de una app",
      description: "Una app pequeña que muestra cómo validar cambios y publicarlos con menos pasos manuales.",
      stack: ["Jenkins", "Docker", "Node.js", "Linux"],
      highlight: "Útil para ver cómo reducir errores al pasar una app de desarrollo a producción.",
    },
    {
      slug: "microsoft-graph-integration-demo",
      title: "Conexión segura con Microsoft 365",
      description: "Ejemplo seguro para consultar y sincronizar información de usuarios o correo.",
      stack: ["Microsoft Graph", "Microsoft 365", "REST APIs", "OAuth"],
      highlight: "Una demo basada en documentación que evita tokens reales y tenants privados.",
    },
  ],
  en: [
    {
      slug: "react-typescript-admin-dashboard",
      title: "Business data dashboard",
      description: "A sample dashboard with cards, charts and navigation based on user type.",
      stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      highlight: "Shows how important information can be organized for decision-making.",
    },
    {
      slug: "n8n-ai-workflow-demo",
      title: "Task automation with AI",
      description: "A flow that receives information, creates a summary, updates a record and sends a notification.",
      stack: ["n8n", "OpenAI API", "Webhooks", "JSON payloads"],
      highlight: "Shows practical automation patterns without exposing private data.",
    },
    {
      slug: "jenkins-cicd-demo-app",
      title: "Automatic app publishing",
      description: "A small app that shows how to check changes and publish with fewer manual steps.",
      stack: ["Jenkins", "Docker", "Node.js", "Linux"],
      highlight: "Useful to see how to reduce errors when moving an app from development to production.",
    },
    {
      slug: "microsoft-graph-integration-demo",
      title: "Secure connection with Microsoft 365",
      description: "Safe sample for reading and syncing user or email information.",
      stack: ["Microsoft Graph", "Microsoft 365", "REST APIs", "OAuth"],
      highlight: "Documentation-first demo that avoids real tokens and private tenants.",
    },
  ],
};

export function getDemoProjects(locale: string | undefined | null): DemoProject[] {
  return demoProjectsByLocale[locale === "en" ? "en" : "es"];
}
