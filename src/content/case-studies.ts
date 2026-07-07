import type { Locale } from "@/lib/i18n";

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  coverImage?: string;
  coverImageAlt?: string;
  metrics: Array<[string, string]>;
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

const defaultCaseStudyImages: Record<string, { src: string; alt: string }> = {
  "enterprise-automation-platform": {
    src: "/images/case-studies/automation.svg",
    alt: "Ilustración de automatización empresarial",
  },
  "internal-saas-web-platform": {
    src: "/images/case-studies/platform.svg",
    alt: "Ilustración de plataforma web interna",
  },
  "jenkins-docker-cicd-pipeline": {
    src: "/images/case-studies/devops.svg",
    alt: "Ilustración de pipeline DevOps y Docker",
  },
  "open-source-software-adaptation": {
    src: "/images/case-studies/platform.svg",
    alt: "Ilustración de adaptación de software open source",
  },
  "microsoft-365-graph-integrations": {
    src: "/images/case-studies/integrations.svg",
    alt: "Ilustración de integraciones Microsoft 365",
  },
  "proxmox-private-cloud-infrastructure": {
    src: "/images/case-studies/infra.svg",
    alt: "Ilustración de infraestructura privada y virtualización",
  },
};

const caseStudiesByLocale: Record<Locale, CaseStudy[]> = {
  es: [
    {
      slug: "enterprise-automation-platform",
      title: "Plataforma de Automatización Empresarial",
      category: "Automatización e IA",
      summary:
        "Automatización de flujo operativo con Microsoft 365, LDAP, Nextcloud, OpenRouter y n8n para reducir trabajo manual y errores en procesos basados en Excel.",
      metrics: [
        ["45% → 15%", "reducción aproximada de errores"],
        ["80%", "menos tiempo de gestión operativa"],
        ["100%+", "de incremento frente al flujo previo"],
      ],
      overview:
        "Diseñé una capa de automatización tipo ERP, adaptada a la forma real en la que operaba la empresa. El objetivo fue capturar oportunidades, generar documentos con IA, sincronizar información entre sistemas y quitar trabajo repetitivo de hojas de cálculo y formularios manuales.",
      problem:
        "El equipo resolvía varios procesos operativos de forma manual en Excel, correo y carpetas compartidas. Eso generaba retrasos, errores frecuentes y una carga administrativa muy alta para coordinar oportunidades, documentos y seguimiento interno.",
      solution:
        "Construí flujos en n8n y scripts de soporte para capturar oportunidades, validar datos, generar documentos con IA y conectar Microsoft 365, LDAP, Nextcloud y OpenRouter en un flujo unificado. La solución no se montó como un ERP genérico, sino como una plataforma alineada a la operación real del negocio.",
      myRole:
        "Definí la lógica operativa, integré los sistemas, construí los flujos de automatización y ajusté la solución hasta dejarla lista para uso diario por parte del equipo.",
      architecture: [
        "Microsoft 365",
        "LDAP",
        "Nextcloud",
        "OpenRouter / IA",
        "n8n + scripts",
        "Documentos, alertas y seguimiento",
      ],
      techStack: ["n8n", "Microsoft 365", "LDAP", "Nextcloud", "OpenRouter", "REST APIs", "JavaScript"],
      keyFeatures: [
        "Captura automatizada de oportunidades",
        "Generación de documentos asistida por IA",
        "Sincronización de datos entre sistemas",
        "Reducción de pasos manuales en Excel",
        "Trazabilidad operativa para el equipo",
      ],
      results: [
        "La operación superó el doble de capacidad frente al proceso anterior.",
        "Los errores bajaron de cerca del 45% a alrededor del 15%.",
        "El tiempo total de gestión se redujo aproximadamente un 80%.",
        "La empresa ganó un flujo más medible y consistente para el día a día.",
      ],
      whatILearned: [
        "La automatización sirve más cuando se adapta a la operación real y no al molde de un ERP genérico.",
        "Conectar sistemas distintos exige cuidar permisos, validación de datos y trazabilidad desde el inicio.",
      ],
      confidentialityNote:
        "Los nombres de empresa, los flujos exactos y los detalles sensibles están anonimizado. La descripción refleja la estructura real del trabajo sin exponer información privada.",
      featured: true,
    },
    {
      slug: "internal-saas-web-platform",
      title: "Plataforma Web SaaS Interna",
      category: "Desarrollo Web",
      summary:
        "Portal interno centralizado para operaciones, paneles, registros y gestión de datos con enfoque de producto.",
      metrics: [
        ["1", "portal central para la operación"],
        ["4", "zonas funcionales principales"],
        ["Docker", "despliegue preparado para contenedores"],
      ],
      overview:
        "Desarrollé y adapté módulos para una plataforma interna tipo SaaS que unificaba información, accesos y reportes en una sola experiencia para usuarios operativos.",
      problem:
        "El negocio necesitaba una interfaz única para consultar información, actualizar registros y ejecutar tareas diarias sin saltar entre sistemas separados.",
      solution:
        "Implementé módulos frontend con React y TypeScript, conectados a una base de datos PostgreSQL y servicios Node.js con Prisma. El foco estuvo en mantener el portal ordenado, escalable y fácil de operar.",
      myRole:
        "Participé en la construcción de la interfaz, la integración con APIs, el modelado de datos y la preparación del despliegue.",
      architecture: [
        "React / TypeScript UI",
        "Node.js API layer",
        "Prisma ORM",
        "PostgreSQL",
        "Docker deployment",
      ],
      techStack: ["React", "TypeScript", "Node.js", "Prisma ORM", "PostgreSQL", "Docker"],
      keyFeatures: [
        "Layout preparado para autenticación",
        "Vistas por rol o perfil",
        "Módulos CRUD",
        "Widgets de panel",
        "Vistas de reportes",
      ],
      results: [
        "La experiencia operativa quedó más limpia y consistente.",
        "Se redujo la fricción entre captura de datos y uso diario.",
        "La arquitectura quedó mejor estructurada para crecer con el alcance.",
      ],
      whatILearned: [
        "Las herramientas internas también necesitan buena UX y reglas claras de estado.",
        "Un conjunto pequeño de patrones reutilizables escala mejor que muchas pantallas aisladas.",
      ],
      confidentialityNote:
        "Los nombres, estructuras de datos y pantallas están generalizados para proteger la confidencialidad.",
      featured: true,
    },
    {
      slug: "jenkins-docker-cicd-pipeline",
      title: "Pipeline CI/CD con Jenkins y Docker",
      category: "DevOps e Infraestructura",
      summary:
        "Pipeline de entrega que validaba tipado, bugs y seguridad antes de construir la imagen y desplegarla.",
      metrics: [
        ["1", "merge a main como disparador"],
        ["3+", "capas de validación antes del deploy"],
        ["0", "despliegues manuales sin control"],
      ],
      overview:
        "Configuré un flujo CI/CD para que cada merge a `main` pasara por validaciones reproducibles antes de llegar a producción. El objetivo era estabilizar la forma de construir y entregar las aplicaciones.",
      problem:
        "Los despliegues manuales generaban diferencias entre entornos, reprocesos y errores que se detectaban tarde. Además, el equipo no tenía un informe claro de cada falla para resolverla rápido.",
      solution:
        "Implementé un pipeline en Jenkins que ejecuta validación de tipado, revisión de errores, pruebas de seguridad y chequeos estructurales. Al final del proceso se construye la imagen Docker, se publica en un entorno de Gitea y luego la máquina de producción la descarga para compilarla o ejecutarla según el caso.",
      myRole:
        "Diseñé las etapas del pipeline, definí los controles previos al despliegue y documenté el flujo para que el equipo pudiera operar y depurar con menos fricción.",
      architecture: [
        "Merge a main",
        "Pipeline de Jenkins",
        "Validación de tipos y errores",
        "Pruebas de seguridad",
        "Build de Docker",
        "Gitea + despliegue en producción",
      ],
      techStack: ["Jenkins", "Docker", "Git", "Linux", "Node.js", "Bash", "Security checks"],
      keyFeatures: [
        "Disparo automático por merge",
        "Chequeo de tipado antes del deploy",
        "Pruebas de seguridad y estructura",
        "Construcción final de Docker",
        "Reportes de error claros desde Jenkins",
      ],
      results: [
        "Se redujeron despliegues fallidos y reprocesos.",
        "La identificación de errores fue mucho más rápida gracias al reporte del pipeline.",
        "El proceso de entrega quedó más predecible entre desarrollo y producción.",
      ],
      whatILearned: [
        "Un pipeline útil no es el más complejo, sino el que explica bien dónde falla y cómo corregirlo.",
        "Estandarizar build y despliegue evita depender de hábitos manuales entre ambientes.",
      ],
      confidentialityNote:
        "La secuencia exacta del pipeline y los nombres internos están simplificados para no exponer detalles sensibles.",
    },
    {
      slug: "open-source-software-adaptation",
      title: "Adaptación de Software Open Source",
      category: "Adaptación de Plataforma",
      summary:
        "Ajuste de varias herramientas open source para proyectos internos, CRM, capacitaciones, nube y firmas digitales.",
      metrics: [
        ["5", "herramientas adaptadas"],
        ["3+", "casos de uso internos cubiertos"],
        ["1", "modelo de administración mantenido"],
      ],
      overview:
        "Tomé soluciones open source ya existentes y las adapté a diferentes necesidades del negocio: gestión de proyectos, CRM, capacitación, almacenamiento en nube, formularios internos y firmas digitales.",
      problem:
        "El software base no encajaba del todo con el flujo de trabajo, la identidad visual ni la forma de operación de la empresa. Cambiar de cero era más riesgoso y menos eficiente que adaptar herramientas maduras.",
      solution:
        "Personalicé la lógica de negocio y la capa visual corporativa de herramientas como OpenProject, Odoo, Nextcloud, Appsmith y Documenso. Mantuvimos la administración y la operación principal casi intactas para conservar facilidad de soporte y actualizaciones.",
      myRole:
        "Me encargué de la evaluación de las herramientas, la adaptación funcional, la integración con el entorno y el acompañamiento de despliegue.",
      architecture: [
        "OpenProject",
        "Odoo",
        "Nextcloud",
        "Appsmith",
        "Documenso",
        "Integración con procesos internos",
      ],
      techStack: ["Linux", "Docker", "PostgreSQL", "APIs", "OpenProject", "Odoo", "Nextcloud", "Appsmith"],
      keyFeatures: [
        "Adaptación a flujos reales del negocio",
        "Personalización visual corporativa",
        "Mantenimiento de la administración base",
        "Menor riesgo frente a desarrollos desde cero",
        "Soporte más sencillo a largo plazo",
      ],
      results: [
        "Se pasó de procesos manuales de mayor riesgo a una operación más medible.",
        "Las herramientas quedaron mejor alineadas con soporte y mantenimiento.",
        "Se aprovechó software maduro sin perder adaptabilidad al negocio.",
      ],
      whatILearned: [
        "A veces la mejor solución no es construir desde cero, sino adaptar bien una base estable.",
        "La clave está en personalizar sin romper la mantenibilidad ni la operación estándar.",
      ],
      confidentialityNote:
        "La selección exacta de herramientas y el contexto interno están generalizados de forma intencional.",
    },
    {
      slug: "microsoft-365-graph-integrations",
      title: "Integraciones con Microsoft 365 y Graph API",
      category: "Integraciones Enterprise",
      summary:
        "Automatización de archivos, carpetas, publicaciones y comunicación dentro de SharePoint y Teams.",
      metrics: [
        ["2", "servicios principales: SharePoint y Teams"],
        ["3", "tipos de operación cubiertos"],
        ["1", "capa de permisos e IDs definida"],
      ],
      overview:
        "Construí integraciones sobre Microsoft 365 para mejorar el control de archivos, el manejo de versiones y la comunicación interna en SharePoint y Teams.",
      problem:
        "Los equipos movían información manualmente entre SharePoint, Teams y sistemas internos, lo que hacía difícil controlar carpetas, versiones y permisos.",
      solution:
        "Usé Microsoft Graph, Postman, n8n y aplicaciones internas para sincronizar archivos, gestionar datos de usuarios y publicar mensajes o contenidos en canales de Teams. También se trabajó con lógica ERP y scripts personalizados cuando hacía falta.",
      myRole:
        "Desarrollé la integración, validé permisos e IDs, resolví el manejo de archivos y ayudé a que la operación quedara más ordenada y predecible.",
      architecture: [
        "SharePoint",
        "Teams",
        "Microsoft Graph API",
        "n8n / Postman",
        "Apps ERP y scripts",
        "Publicación y sincronización",
      ],
      techStack: ["Microsoft 365", "Microsoft Graph", "SharePoint", "Teams", "Active Directory", "n8n", "Postman"],
      keyFeatures: [
        "Gestión de archivos y carpetas",
        "Control de versiones",
        "Publicación de mensajes en Teams",
        "Sincronización de información de usuarios",
        "Uso de permisos bien delimitados",
      ],
      results: [
        "La gestión documental quedó más ordenada y controlada.",
        "Se mejoró el control de carpetas, archivos y versiones.",
        "Las publicaciones y mensajes en Teams quedaron integrados al flujo operativo.",
      ],
      whatILearned: [
        "El manejo de carpetas y archivos suele ser la parte más delicada de Microsoft Graph.",
        "El resto se vuelve mucho más manejable cuando los IDs y los permisos están bien definidos desde el principio.",
      ],
      confidentialityNote:
        "Los tenants, rutas y detalles internos están omitidos para mantener la información segura.",
    },
    {
      slug: "proxmox-private-cloud-infrastructure",
      title: "Nube Privada y Virtualización con Proxmox",
      category: "Infraestructura",
      summary:
        "Cluster de virtualización para servicios internos, pruebas y despliegues de software open source.",
      metrics: [
        ["3", "servidores dentro del cluster"],
        ["1", "servidor adicional para pruebas"],
        ["Diario", "copias y monitoreo"],
      ],
      overview:
        "Administré una nube privada basada en Proxmox para alojar contenedores y máquinas virtuales que soportaban herramientas internas de la empresa.",
      problem:
        "La organización necesitaba más capacidad y disponibilidad para herramientas de trabajo y servicios de uso diario, sin depender de una única máquina o de despliegues improvisados.",
      solution:
        "Gestioné un cluster de 3 servidores y un servidor adicional fuera del cluster para pruebas de instalación. Se usaron máquinas Debian y Windows, además de contenedores Ubuntu Server, con backups diarios y monitoreo en Zabbix.",
      myRole:
        "Me encargué de la administración del cluster, la gestión de las máquinas, la recuperación y los respaldos para mantener el entorno operativo.",
      architecture: [
        "Cluster Proxmox de 3 servidores",
        "Servidor adicional de pruebas",
        "VMs Debian y Windows",
        "Contenedores Ubuntu Server",
        "Backups diarios",
        "Monitoreo con Zabbix",
      ],
      techStack: ["Proxmox", "Linux", "Windows", "Docker", "Networking", "Backups", "Zabbix"],
      keyFeatures: [
        "Gestión de cluster",
        "Provisionamiento de VMs y contenedores",
        "Estrategia de backup diaria",
        "Monitoreo centralizado",
        "Recuperación más rápida ante fallos",
      ],
      results: [
        "Se mejoró la disponibilidad de herramientas internas.",
        "La operación ganó capacidad para alojar servicios de uso diario.",
        "La recuperación ante fallos quedó mejor preparada por backup y monitoreo.",
      ],
      whatILearned: [
        "La virtualización útil es la que hace más predecible la operación, no solo la que ahorra hardware.",
        "Backups, recuperación y monitoreo deben formar parte del diseño desde el inicio.",
      ],
      confidentialityNote:
        "Los nombres de hosts, aplicaciones y dimensionamiento específico están generalizados de forma intencional.",
    },
  ],
  en: [
    {
      slug: "enterprise-automation-platform",
      title: "Enterprise Automation Platform",
      category: "Automation & AI",
      summary:
        "Operational workflow automation using Microsoft 365, LDAP, Nextcloud, OpenRouter and n8n to reduce manual work and Excel-driven errors.",
      metrics: [
        ["45% → 15%", "approximate error reduction"],
        ["80%", "less management time"],
        ["100%+", "increase over the previous flow"],
      ],
      overview:
        "Built an ERP-like automation layer adapted to the company’s actual operating model. The goal was to capture opportunities, generate AI-assisted documents, sync data across tools and remove repetitive spreadsheet work.",
      problem:
        "Teams were handling multiple operational processes manually in Excel, email and shared folders. That created delays, frequent errors and a heavy administrative load for opportunity tracking, documents and internal follow-up.",
      solution:
        "I built n8n flows and support scripts to capture opportunities, validate data, generate AI-assisted documents and connect Microsoft 365, LDAP, Nextcloud and OpenRouter into one operating flow. The solution was tailored to the business instead of forcing a generic ERP model.",
      myRole:
        "I defined the operational logic, integrated the systems, built the automation flows and refined the solution until it was ready for daily use.",
      architecture: [
        "Microsoft 365",
        "LDAP",
        "Nextcloud",
        "OpenRouter / AI",
        "n8n + scripts",
        "Documents, alerts and follow-up",
      ],
      techStack: ["n8n", "Microsoft 365", "LDAP", "Nextcloud", "OpenRouter", "REST APIs", "JavaScript"],
      keyFeatures: [
        "Automated opportunity intake",
        "AI-assisted document generation",
        "Cross-system data synchronization",
        "Less manual spreadsheet work",
        "Operational traceability for the team",
      ],
      results: [
        "Operational capacity more than doubled compared to the previous process.",
        "Errors dropped from roughly 45% to around 15%.",
        "Total management time was reduced by about 80%.",
        "The company gained a more measurable and consistent daily workflow.",
      ],
      whatILearned: [
        "Automation works best when it matches the real operation instead of a generic ERP shape.",
        "Connecting different systems requires permission handling, data validation and traceability from day one.",
      ],
      confidentialityNote:
        "Company names, exact flows and sensitive details are anonymized. The description reflects the actual work structure without exposing private information.",
      featured: true,
    },
    {
      slug: "internal-saas-web-platform",
      title: "Internal SaaS Web Platform",
      category: "Web Development",
      summary:
        "Centralized internal portal for operations, dashboards, records and data management with a product-first mindset.",
      metrics: [
        ["1", "central portal for internal operations"],
        ["4", "core functional areas"],
        ["Docker", "container-ready deployment"],
      ],
      overview:
        "Developed and adapted modules for an internal SaaS-style platform that unified information, access and reporting into one experience for operational users.",
      problem:
        "The business needed a single interface to check information, update records and complete daily tasks without jumping between separate tools.",
      solution:
        "Implemented React and TypeScript frontend modules connected to PostgreSQL-backed Node.js services through Prisma. The focus was on keeping the portal organized, scalable and easy to operate.",
      myRole:
        "I contributed to the UI build, API integration, data modeling and deployment readiness.",
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
        "Role-based views",
        "CRUD modules",
        "Dashboard widgets",
        "Reporting views",
      ],
      results: [
        "The day-to-day operating experience became cleaner and more consistent.",
        "Friction between data entry and daily usage was reduced.",
        "The architecture was better structured for future growth.",
      ],
      whatILearned: [
        "Internal tools still need good UX and clear state rules.",
        "A small set of reusable patterns scales better than many one-off screens.",
      ],
      confidentialityNote:
        "Names, data structures and screens are generalized to preserve confidentiality.",
      featured: true,
    },
    {
      slug: "jenkins-docker-cicd-pipeline",
      title: "CI/CD Pipeline with Jenkins and Docker",
      category: "DevOps & Infrastructure",
      summary:
        "Delivery pipeline that checked typing, bugs and security before building the image and deploying it.",
      metrics: [
        ["1", "merge to main as trigger"],
        ["3+", "validation layers before deploy"],
        ["0", "manual releases without control"],
      ],
      overview:
        "Set up a CI/CD flow so every merge into `main` went through repeatable checks before reaching production. The goal was to stabilize how applications were built and delivered.",
      problem:
        "Manual deployments caused environment drift, rework and late-detected errors. The team also lacked a clear failure report for fast troubleshooting.",
      solution:
        "Built a Jenkins pipeline that runs type checks, error review, security tests and structural validation. At the end, Docker is built, published to a Gitea target and then pulled by the production machine for build or execution, depending on the setup.",
      myRole:
        "I designed the pipeline stages, defined the pre-deployment checks and documented the flow so the team could operate and debug with less friction.",
      architecture: [
        "Merge to main",
        "Jenkins pipeline",
        "Type and error validation",
        "Security tests",
        "Docker build",
        "Gitea + production deployment",
      ],
      techStack: ["Jenkins", "Docker", "Git", "Linux", "Node.js", "Bash", "Security checks"],
      keyFeatures: [
        "Automatic trigger on merge",
        "Type checks before deploy",
        "Security and structure validation",
        "Final Docker build",
        "Clear Jenkins error reports",
      ],
      results: [
        "Failed deployments and rework were reduced.",
        "Errors were identified much faster thanks to pipeline reports.",
        "The delivery process became more predictable between development and production.",
      ],
      whatILearned: [
        "A useful pipeline is not the most complex one, but the one that explains where it failed and how to fix it.",
        "Standardizing build and deployment removes dependence on manual habits between environments.",
      ],
      confidentialityNote:
        "The exact pipeline sequence and internal names are simplified to avoid exposing sensitive details.",
    },
    {
      slug: "open-source-software-adaptation",
      title: "Open Source Software Adaptation",
      category: "Platform Adaptation",
      summary:
        "Tailored several open source tools for internal project management, CRM, training, storage and digital signatures.",
      metrics: [
        ["5", "open source tools adapted"],
        ["3+", "internal use cases covered"],
        ["1", "admin model kept stable"],
      ],
      overview:
        "Adapted existing open source solutions to different business needs: project management, CRM, training, cloud storage, internal forms and digital signatures.",
      problem:
        "The base software did not fully match the company’s workflow, brand identity or operational model. Rebuilding everything from scratch would have been riskier and less efficient than adapting mature tools.",
      solution:
        "Customized the business logic and corporate visual layer of tools such as OpenProject, Odoo, Nextcloud, Appsmith and Documenso. The core administration and operational model stayed mostly intact so support and updates remained manageable.",
      myRole:
        "I handled tool evaluation, functional adaptation, environment integration and deployment support.",
      architecture: [
        "OpenProject",
        "Odoo",
        "Nextcloud",
        "Appsmith",
        "Documenso",
        "Integration with internal processes",
      ],
      techStack: ["Linux", "Docker", "PostgreSQL", "APIs", "OpenProject", "Odoo", "Nextcloud", "Appsmith"],
      keyFeatures: [
        "Fit to real business workflows",
        "Corporate visual customization",
        "Core admin model preserved",
        "Lower risk than greenfield builds",
        "Easier long-term support",
      ],
      results: [
        "Manual high-risk processes shifted into a more measurable operation.",
        "The tools aligned better with support and maintenance needs.",
        "Mature software was reused without losing business fit.",
      ],
      whatILearned: [
        "Sometimes the best solution is not rebuilding from zero, but adapting a stable base well.",
        "The key is customizing without breaking maintainability or standard operations.",
      ],
      confidentialityNote:
        "The exact tools chosen and the internal context are intentionally generalized.",
    },
    {
      slug: "microsoft-365-graph-integrations",
      title: "Microsoft 365 and Graph API Integrations",
      category: "Enterprise Integrations",
      summary:
        "Automation for files, folders, posts and communication inside SharePoint and Teams.",
      metrics: [
        ["2", "main Microsoft 365 services"],
        ["3", "operation areas covered"],
        ["1", "permission model documented"],
      ],
      overview:
        "Built Microsoft 365 integrations to improve file control, version tracking and internal communication across SharePoint and Teams.",
      problem:
        "Teams were moving information manually between SharePoint, Teams and internal systems, which made folders, versions and permissions hard to control.",
      solution:
        "Used Microsoft Graph, Postman, n8n and internal apps to sync files, manage user data and publish messages or content to Teams channels. ERP logic and custom scripts were also used where needed.",
      myRole:
        "I developed the integration, validated permissions and IDs, solved file handling and helped make the operational flow more organized and predictable.",
      architecture: [
        "SharePoint",
        "Teams",
        "Microsoft Graph API",
        "n8n / Postman",
        "ERP apps and scripts",
        "Publishing and sync",
      ],
      techStack: ["Microsoft 365", "Microsoft Graph", "SharePoint", "Teams", "Active Directory", "n8n", "Postman"],
      keyFeatures: [
        "File and folder management",
        "Version control",
        "Teams message publishing",
        "User data synchronization",
        "Permission-driven integration",
      ],
      results: [
        "Document handling became more organized and controlled.",
        "Folder, file and version control improved.",
        "Teams publishing and messaging were integrated into the operating flow.",
      ],
      whatILearned: [
        "Folder and file management is usually the hardest part of Microsoft Graph.",
        "Everything else becomes much easier once IDs and permissions are clearly defined from the start.",
      ],
      confidentialityNote:
        "Tenant names, paths and internal details are omitted to keep the information safe.",
    },
    {
      slug: "proxmox-private-cloud-infrastructure",
      title: "Private Cloud and Virtualization with Proxmox",
      category: "Infrastructure",
      summary:
        "Virtualization cluster for internal services, testing and open source software deployments.",
      metrics: [
        ["3", "nodes in the cluster"],
        ["1", "extra test server outside the cluster"],
        ["Daily", "backups and monitoring"],
      ],
      overview:
        "Managed a Proxmox-based private cloud that hosted containers and virtual machines supporting the company’s internal tools.",
      problem:
        "The organization needed more capacity and availability for work tools and daily services without relying on a single machine or improvised deployments.",
      solution:
        "Managed a 3-server cluster plus one additional testing server outside the cluster. Debian and Windows VMs were used alongside mostly Ubuntu Server containers, with daily backups and Zabbix monitoring.",
      myRole:
        "I handled cluster administration, machine management, recovery and backups to keep the environment operational.",
      architecture: [
        "3-node Proxmox cluster",
        "Additional test server",
        "Debian and Windows VMs",
        "Ubuntu Server containers",
        "Daily backups",
        "Zabbix monitoring",
      ],
      techStack: ["Proxmox", "Linux", "Windows", "Docker", "Networking", "Backups", "Zabbix"],
      keyFeatures: [
        "Cluster management",
        "VM and container provisioning",
        "Daily backup strategy",
        "Centralized monitoring",
        "Faster recovery after failures",
      ],
      results: [
        "Internal tools became more available and reliable.",
        "The environment gained more capacity for day-to-day services.",
        "Recovery improved because backup and monitoring were already in place.",
      ],
      whatILearned: [
        "Useful virtualization is the kind that makes operations more predictable, not just the kind that saves hardware.",
        "Backups, recovery and monitoring should be part of the design from the start.",
      ],
      confidentialityNote:
        "Host names, specific applications and sizing details are intentionally generalized.",
    },
  ],
};

export function getCaseStudies(locale: string | undefined | null): CaseStudy[] {
  return caseStudiesByLocale[locale === "en" ? "en" : "es"];
}

export function getCaseStudyBySlug(locale: string | undefined | null, slug: string) {
  return getCaseStudies(locale).find((study) => study.slug === slug);
}

export function getCaseStudyImage(caseStudy: CaseStudy) {
  return {
    src: caseStudy.coverImage ?? defaultCaseStudyImages[caseStudy.slug]?.src ?? "/og-default.svg",
    alt: caseStudy.coverImageAlt ?? defaultCaseStudyImages[caseStudy.slug]?.alt ?? caseStudy.title,
  };
}
