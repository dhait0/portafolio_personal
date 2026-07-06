import type { Locale } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  problem: string;
  solution: string;
  myRole: string;
  architecture: string[];
  techStack: string[];
  keyFeatures: string[];
  results: string[];
  whatILearned: string[];
  confidentialityNote: string;
  featured?: boolean;
};

export const supportedLocales: Locale[] = ["es", "en"];

const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  es: [
    {
      slug: "enterprise-automation-platform",
      title: "Plataforma de Automatización Empresarial",
      category: "Automatización e IA",
      summary:
        "Una capa de automatización anonimizada para flujos empresariales que conectan correo, archivos, reportes y herramientas internas.",
      overview:
        "Construí automatizaciones que conectan Microsoft 365, APIs y servicios de IA para reducir trabajo operativo repetitivo y estandarizar entregas entre equipos.",
      problem:
        "Los equipos resolvían solicitudes rutinarias de forma manual entre correo, hojas de cálculo y carpetas compartidas, lo que generaba retrasos y resultados inconsistentes.",
      solution:
        "Diseñé flujos en n8n que orquestan ingreso de datos, validación, enriquecimiento y notificaciones mediante Microsoft Graph, APIs REST y servicios de IA.",
      myRole:
        "Definí el flujo de automatización, implementé la capa de integración, resolví el mapeo de datos y dejé el sistema listo para entrega operativa.",
      architecture: [
        "Microsoft 365",
        "Microsoft Graph API",
        "Flujos en n8n",
        "PostgreSQL + APIs externas",
        "Reportes, alertas y paneles",
      ],
      techStack: ["n8n", "Microsoft Graph", "REST APIs", "PostgreSQL", "OpenAI / AI APIs", "JavaScript"],
      keyFeatures: [
        "Ingreso automatizado de solicitudes",
        "Enriquecimiento de documentos y metadatos",
        "Resumen asistido por IA",
        "Ruteo de notificaciones",
        "Registros listos para auditoría",
      ],
      results: [
        "Redujo coordinación manual",
        "Hizo más consistente la ejecución de flujos",
        "Centralizó datos de procesos de negocio",
        "Mejoró la visibilidad de los equipos operativos",
      ],
      whatILearned: [
        "La calidad de la automatización depende tanto de la validación de datos como de la orquestación.",
        "Las integraciones enterprise necesitan manejo claro de fallos y observabilidad.",
      ],
      confidentialityNote: "Todos los nombres de empresas, payloads y detalles de flujo están anonimizados y recreados con datos mock.",
      featured: true,
    },
    {
      slug: "internal-saas-web-platform",
      title: "Plataforma Web SaaS Interna",
      category: "Desarrollo Web",
      summary:
        "Una plataforma interna centralizada para operaciones, paneles y gestión de datos construida con mentalidad de producto.",
      overview:
        "Desarrollé y adapté módulos de aplicación para un portal tipo SaaS interno usado para administrar registros, accesos y reportes.",
      problem:
        "El negocio necesitaba un único lugar para que usuarios operativos vieran información, actualizaran registros y accedieran a herramientas guiadas por flujos.",
      solution:
        "Implementé módulos frontend con React y TypeScript conectados a servicios backend con Prisma y PostgreSQL, preparados para despliegue en contenedores.",
      myRole:
        "Contribuí a la implementación frontend, integración de APIs, decisiones de modelado de datos y preparación para despliegue.",
      architecture: [
        "UI en React / TypeScript",
        "Capa API en Node.js",
        "Prisma ORM",
        "PostgreSQL",
        "Despliegue con Docker",
      ],
      techStack: ["React", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "Docker"],
      keyFeatures: [
        "Layout listo para autenticación",
        "Vistas según rol",
        "Módulos CRUD",
        "Widgets de dashboard",
        "Vistas de reportes",
      ],
      results: [
        "Generó una experiencia de operación más limpia",
        "Redujo fricción entre equipos y captura de datos",
        "Estandarizó la estructura de la interfaz",
      ],
      whatILearned: [
        "Las herramientas internas también necesitan UX y manejo de estado sólidos.",
        "Un conjunto pequeño de patrones reutilizables escala mejor que pantallas aisladas.",
      ],
      confidentialityNote: "Todos los nombres, estructuras de datos y pantallas están generalizados para proteger la confidencialidad.",
      featured: true,
    },
    {
      slug: "jenkins-docker-cicd-pipeline",
      title: "Pipeline CI/CD con Jenkins y Docker",
      category: "DevOps e Infraestructura",
      summary: "Un pipeline de entrega orientado a contenedores que estandarizó build, pruebas y despliegue.",
      overview:
        "Configuré automatización CI/CD para que los cambios de código pasaran por validaciones repetibles y generación de imágenes antes del despliegue.",
      problem:
        "Los releases manuales generaban retrasos, diferencias entre entornos y errores ocasionales al desplegar.",
      solution:
        "Implementé un pipeline en Jenkins que instala dependencias, ejecuta validaciones de tipos, construye la app y produce una imagen Docker lista para despliegue.",
      myRole:
        "Diseñé las etapas del pipeline, preparé la estrategia de build con Docker y documenté el proceso de release.",
      architecture: [
        "Push en Git",
        "Pipeline de Jenkins",
        "Instalación y validaciones",
        "Build de imagen Docker",
        "Destino de despliegue",
      ],
      techStack: ["Jenkins", "Docker", "Git", "Linux", "Node.js", "Bash"],
      keyFeatures: [
        "Etapas repetibles",
        "Builds contenedorizados",
        "Validaciones de tipos antes del release",
        "Artefactos listos para despliegue",
      ],
      results: [
        "Redujo fricción en releases",
        "Mejoró la consistencia entre builds",
        "Hizo el despliegue más fácil de auditar",
      ],
      whatILearned: [
        "La mejor estrategia de CI/CD es lo suficientemente simple para que el equipo la mantenga.",
        "Un esquema limpio de imágenes Docker reduce el costo de mantenimiento.",
      ],
      confidentialityNote: "Los detalles del pipeline son ilustrativos y usan lenguaje de despliegue genérico.",
    },
    {
      slug: "open-source-software-adaptation",
      title: "Adaptación de Software Open Source",
      category: "Adaptación de Plataforma",
      summary:
        "Un ejemplo de ajuste de software open source existente a flujos de negocio e identidad específicos.",
      overview:
        "Personalicé una plataforma open source de terceros para que encajara con reglas operativas, roles de usuario y restricciones de despliegue.",
      problem:
        "El producto base no coincidía con el modelo de trabajo y administración de la organización.",
      solution:
        "Ajusté configuración, extendí comportamientos donde era adecuado e integré el sistema al entorno existente.",
      myRole:
        "Me encargué de la configuración, la planificación de la adaptación, el trabajo de integración y el soporte de despliegue.",
      architecture: [
        "Aplicación open source",
        "Configuración personalizada",
        "Integración de identidad y flujos",
        "Entorno Docker / Linux",
        "Usuarios del negocio",
      ],
      techStack: ["Linux", "Docker", "PostgreSQL", "APIs", "React", "Node.js"],
      keyFeatures: [
        "Configuración alineada al flujo",
        "Acceso consciente de identidad",
        "Empaquetado de despliegue",
        "Documentación operativa",
      ],
      results: [
        "Mejoró el encaje con procesos internos",
        "Redujo pasos manuales de workaround",
        "Extendió la vida útil de la plataforma",
      ],
      whatILearned: [
        "La adaptación open source funciona mejor cuando respeta la arquitectura base.",
        "Los límites claros importan cuando se mezcla personalización con mantenibilidad.",
      ],
      confidentialityNote: "La plataforma original y el contexto de negocio están generalizados intencionalmente.",
    },
    {
      slug: "microsoft-365-graph-integrations",
      title: "Integraciones con Microsoft 365 y Graph API",
      category: "Integraciones Enterprise",
      summary: "Automatizaciones para operaciones de usuario, archivos, correo y SharePoint dentro del ecosistema Microsoft.",
      overview:
        "Conecté servicios de Microsoft 365 con automatizaciones de negocio para reducir trabajo administrativo repetitivo y mejorar el flujo de información.",
      problem:
        "Los equipos tenían que mover información manualmente entre SharePoint, correo y sistemas internos.",
      solution:
        "Usé Microsoft Graph y conocimiento de Microsoft 365 para automatizar flujos de cuentas, contenido y notificaciones mediante integraciones basadas en APIs.",
      myRole:
        "Desarrollé la lógica de integración, mapeé permisos de servicio y alineé el comportamiento de automatización con las necesidades operativas.",
      architecture: [
        "Tenant de Microsoft 365",
        "Microsoft Graph API",
        "n8n / servicios personalizados",
        "Flujos de SharePoint y correo",
        "Aplicaciones internas",
      ],
      techStack: ["Microsoft 365", "Microsoft Graph", "SharePoint", "Active Directory", "n8n", "REST APIs"],
      keyFeatures: [
        "Operaciones sobre usuarios y grupos",
        "Automatización de archivos y SharePoint",
        "Flujos de notificación",
        "Sincronización de procesos",
      ],
      results: [
        "Redujo tareas administrativas repetitivas",
        "Mejoró la consistencia de la información",
        "Simplificó los puntos de integración del negocio",
      ],
      whatILearned: [
        "Las integraciones Microsoft son más confiables cuando permisos y responsabilidades se documentan temprano.",
        "La visibilidad operativa es esencial para los equipos de soporte.",
      ],
      confidentialityNote: "Los detalles específicos del tenant fueron omitidos y reemplazados por descripciones seguras.",
    },
    {
      slug: "proxmox-private-cloud-infrastructure",
      title: "Nube Privada y Virtualización con Proxmox",
      category: "Infraestructura",
      summary:
        "Un entorno de virtualización para servicios internos, pruebas y cargas de trabajo contenedorizadas.",
      overview:
        "Administré infraestructura privada para soportar máquinas virtuales, backups, servicios Linux y aplicaciones Docker.",
      problem:
        "El negocio necesitaba un entorno confiable y flexible para servicios que pudiera probar y mantener internamente.",
      solution:
        "Administré hosts Proxmox, máquinas virtuales y rutinas de backup mientras mantuve el entorno práctico para la operación diaria.",
      myRole:
        "Apoyé la capa de virtualización, el diseño del entorno, los backups y la preparación de servicios.",
      architecture: [
        "Cluster Proxmox",
        "Máquinas virtuales",
        "Servicios Linux",
        "Cargas Docker",
        "Backups y monitoreo",
      ],
      techStack: ["Proxmox", "Linux", "Docker", "Networking", "Backups", "Monitoring"],
      keyFeatures: [
        "Provisionamiento de VMs",
        "Aislamiento de servicios",
        "Estrategia de backup",
        "Monitoreo operativo",
      ],
      results: [
        "Mejoró la confiabilidad de servicios internos",
        "Hizo más fácil administrar entornos de prueba y soporte",
        "Aumentó el control sobre el ciclo de vida de infraestructura",
      ],
      whatILearned: [
        "La buena virtualización trata de operaciones predecibles, no solo de consolidación de servidores.",
        "Backup y monitoreo deben formar parte del primer plan de despliegue.",
      ],
      confidentialityNote: "Los nombres de infraestructura y el dimensionamiento están omitidos intencionalmente.",
    },
  ],
  en: [
    {
      slug: "enterprise-automation-platform",
      title: "Enterprise Automation Platform",
      category: "Automation & AI",
      summary:
        "An anonymized automation layer for business workflows spanning email, files, reports and internal tools.",
      overview:
        "Built workflow automations that connect Microsoft 365, APIs and AI services to reduce repetitive operational work and standardize handoffs.",
      problem:
        "Teams were handling routine requests manually across email, spreadsheets and shared drives, which created delays and inconsistent outcomes.",
      solution:
        "Designed n8n workflows that orchestrate data intake, validation, enrichment and notification steps through Microsoft Graph, REST APIs and AI services.",
      myRole:
        "I defined the automation flow, implemented the integration layer, handled data mapping and prepared the system for operational handoff.",
      architecture: [
        "Microsoft 365",
        "Microsoft Graph API",
        "n8n workflows",
        "PostgreSQL + external APIs",
        "Reports, notifications and dashboards",
      ],
      techStack: ["n8n", "Microsoft Graph", "REST APIs", "PostgreSQL", "OpenAI / AI APIs", "JavaScript"],
      keyFeatures: [
        "Automated request intake",
        "Document and metadata enrichment",
        "AI-assisted summarization",
        "Notification routing",
        "Audit-friendly logs",
      ],
      results: [
        "Reduced manual coordination work",
        "Made workflow execution more consistent",
        "Centralized business process data",
        "Improved visibility for operational teams",
      ],
      whatILearned: [
        "Automation quality depends on data validation as much as on orchestration.",
        "Enterprise integrations need clear failure handling and observability.",
      ],
      confidentialityNote: "All company references, payloads and workflow details are anonymized and recreated with mock data.",
      featured: true,
    },
    {
      slug: "internal-saas-web-platform",
      title: "Internal SaaS Web Platform",
      category: "Web Development",
      summary:
        "A centralized internal platform for operations, dashboards and data management built with a product-first mindset.",
      overview:
        "Developed and adapted application modules for an internal SaaS-style portal used to manage records, access and reporting.",
      problem:
        "The business needed one place for operational users to view information, update records and access workflow-driven tools.",
      solution:
        "Implemented React and TypeScript frontend modules connected to backend services with Prisma and PostgreSQL, packaged for containerized deployment.",
      myRole:
        "I contributed to frontend implementation, API integration, data modeling decisions and deployment readiness.",
      architecture: [
        "React / TypeScript UI",
        "Node.js API layer",
        "Prisma ORM",
        "PostgreSQL",
        "Docker deployment",
      ],
      techStack: ["React", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "Docker"],
      keyFeatures: [
        "Authentication-ready layout",
        "Role-aware views",
        "CRUD modules",
        "Dashboard widgets",
        "Report views",
      ],
      results: [
        "Created a cleaner operations experience",
        "Reduced friction between teams and data entry",
        "Standardized the internal UI structure",
      ],
      whatILearned: [
        "Internal tools still need strong UX and state management.",
        "A small set of reusable UI patterns scales better than one-off screens.",
      ],
      confidentialityNote: "All names, data structures and screens are generalized to preserve confidentiality.",
      featured: true,
    },
    {
      slug: "jenkins-docker-cicd-pipeline",
      title: "CI/CD Pipeline with Jenkins and Docker",
      category: "DevOps & Infrastructure",
      summary: "A container-first delivery pipeline that standardized build, test and deployment steps.",
      overview:
        "Set up CI/CD automation so code changes could move through repeatable checks and image builds before deployment.",
      problem:
        "Manual releases created delays, drift between environments and occasional deployment mistakes.",
      solution:
        "Implemented a Jenkins pipeline that installs dependencies, runs type checks, builds the app and produces a Docker image for deployment.",
      myRole:
        "I designed the pipeline stages, prepared the Docker build strategy and documented the release process.",
      architecture: [
        "Git push",
        "Jenkins pipeline",
        "Dependency install + checks",
        "Docker image build",
        "Deployment target",
      ],
      techStack: ["Jenkins", "Docker", "Git", "Linux", "Node.js", "Bash"],
      keyFeatures: [
        "Repeatable pipeline stages",
        "Containerized builds",
        "Type checks before release",
        "Deployment-ready artifacts",
      ],
      results: [
        "Reduced release friction",
        "Improved consistency across builds",
        "Made deployments easier to audit",
      ],
      whatILearned: [
        "The best CI/CD setup is simple enough that teams actually keep using it.",
        "A clean Docker image strategy reduces long-term maintenance cost.",
      ],
      confidentialityNote: "Pipeline details are illustrative and use generic deployment language only.",
    },
    {
      slug: "open-source-software-adaptation",
      title: "Open Source Software Adaptation",
      category: "Platform Adaptation",
      summary:
        "An example of tailoring existing open source software to business-specific workflows and identity needs.",
      overview:
        "Customized a third-party open source platform so it fit operational rules, user roles and deployment constraints.",
      problem:
        "The out-of-the-box product did not match the organization’s workflow and administration model.",
      solution:
        "Adjusted configuration, extended behaviors where appropriate and integrated the system into the existing environment.",
      myRole:
        "I handled configuration, adaptation planning, integration work and deployment support.",
      architecture: [
        "Open source application",
        "Custom configuration",
        "Identity and workflow integration",
        "Docker / Linux environment",
        "Business users",
      ],
      techStack: ["Linux", "Docker", "PostgreSQL", "APIs", "React", "Node.js"],
      keyFeatures: [
        "Workflow-aligned configuration",
        "Identity-aware access",
        "Deployment packaging",
        "Operational documentation",
      ],
      results: [
        "Improved fit with internal processes",
        "Reduced need for manual workaround steps",
        "Extended useful life of the platform",
      ],
      whatILearned: [
        "Open source adaptation is strongest when it respects the product’s core architecture.",
        "Clear boundaries matter when mixing customization with maintainability.",
      ],
      confidentialityNote: "The original platform and business context are intentionally generalized.",
    },
    {
      slug: "microsoft-365-graph-integrations",
      title: "Microsoft 365 and Graph API Integrations",
      category: "Enterprise Integrations",
      summary: "Automations for user, file, email and SharePoint-related operations across the Microsoft ecosystem.",
      overview:
        "Connected Microsoft 365 services with business automations to reduce repetitive administrative work and improve data flow.",
      problem:
        "Teams had to move information manually between SharePoint, email and internal systems.",
      solution:
        "Used Microsoft Graph and Microsoft 365 knowledge to automate account, content and notification flows through API-driven integrations.",
      myRole:
        "I developed integration logic, mapped service permissions and aligned automation behavior with operational needs.",
      architecture: [
        "Microsoft 365 tenant",
        "Microsoft Graph API",
        "n8n / custom services",
        "SharePoint and email workflows",
        "Internal applications",
      ],
      techStack: ["Microsoft 365", "Microsoft Graph", "SharePoint", "Active Directory", "n8n", "REST APIs"],
      keyFeatures: [
        "User and group operations",
        "File and SharePoint automation",
        "Notification flows",
        "Process synchronization",
      ],
      results: [
        "Reduced repetitive admin tasks",
        "Improved information consistency",
        "Simplified integration points for the business",
      ],
      whatILearned: [
        "Microsoft integrations are most reliable when permissions and ownership are documented early.",
        "Operational visibility is essential for support teams.",
      ],
      confidentialityNote: "All tenant-specific details are omitted and replaced with safe mock descriptions.",
    },
    {
      slug: "proxmox-private-cloud-infrastructure",
      title: "Private Cloud and Virtualization with Proxmox",
      category: "Infrastructure",
      summary:
        "A virtualization environment for internal services, testing and containerized workloads.",
      overview:
        "Managed private cloud infrastructure to support virtual machines, backups, Linux services and Dockerized applications.",
      problem:
        "The business needed a reliable, flexible environment for services that could be tested and maintained in-house.",
      solution:
        "Administered Proxmox hosts, virtual machines and backup routines while keeping the environment practical for day-to-day operations.",
      myRole:
        "I supported the virtualization layer, environment layout, backups and service readiness.",
      architecture: [
        "Proxmox cluster",
        "Virtual machines",
        "Linux services",
        "Docker workloads",
        "Backups and monitoring",
      ],
      techStack: ["Proxmox", "Linux", "Docker", "Networking", "Backups", "Monitoring"],
      keyFeatures: [
        "VM provisioning",
        "Service isolation",
        "Backup strategy",
        "Operational monitoring",
      ],
      results: [
        "Improved reliability of internal services",
        "Made test and support environments easier to manage",
        "Increased control over the infrastructure lifecycle",
      ],
      whatILearned: [
        "Good virtualization work is about predictable operations, not just server consolidation.",
        "Backup and monitoring design should be part of the first deployment plan.",
      ],
      confidentialityNote: "Infrastructure names and sizing details are intentionally omitted.",
    },
  ],
};

export function getCaseStudies(locale: string | undefined | null): CaseStudy[] {
  return caseStudiesByLocale[locale === "en" ? "en" : "es"];
}

export function getCaseStudyBySlug(locale: string | undefined | null, slug: string) {
  return getCaseStudies(locale).find((study) => study.slug === slug);
}
