import type { Locale } from "@/lib/i18n";

export type AboutExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: string[];
};

export type AboutEducationItem = {
  title: string;
  institution: string;
  period: string;
  note?: string;
};

export type AboutPageContent = {
  badge: string;
  title: string;
  intro: string;
  capabilityChip: string;
  locationLabel: string;
  profile: string[];
  quickFacts: Array<[string, string]>;
  stackSectionTitle: string;
  experienceTitle: string;
  experienceSectionTitle: string;
  experienceIntro: string;
  experience: AboutExperienceItem[];
  educationTitle: string;
  educationSectionTitle: string;
  education: AboutEducationItem[];
  technicalTitle: string;
  technicalGroups: Array<{
    title: string;
    items: string[];
  }>;
  softSkillsTitle: string;
  softSkillsSectionTitle: string;
  softSkills: string[];
  contactTitle: string;
  contactText: string;
};

const aboutPageByLocale: Record<Locale, AboutPageContent> = {
  es: {
    badge: "Perfil profesional",
    title: "Sobre mí, experiencia y la forma en que convierto soporte técnico en soluciones útiles.",
    intro:
      "Soy Técnico en Sistemas y actualmente trabajo como desarrollador y automatizador de procesos. Mi perfil mezcla soporte real a usuarios, operación de infraestructura y desarrollo web orientado a resolver necesidades de negocio.",
    capabilityChip: "Desarrollo, automatización e infraestructura",
    locationLabel: "Bogotá D.C., Colombia",
    profile: [
      "Comencé desde la base técnica: mantenimiento de equipos, configuración de sistemas, redes internas y soporte funcional. Esa etapa me dio contexto real sobre cómo trabajan las personas y dónde se rompen los procesos.",
      "Hoy construyo soluciones con React, Node.js y TypeScript, automatizo flujos con n8n e integro APIs, servicios corporativos y herramientas internas para reducir trabajo manual y mejorar la operación.",
      "Me interesa especialmente el punto donde desarrollo, automatización e infraestructura se cruzan: herramientas web, despliegues, integraciones, virtualización y mejora continua.",
    ],
    quickFacts: [
      ["React + Node.js", "desarrollo de interfaces y lógica de negocio"],
      ["n8n + APIs", "automatización e integración entre plataformas"],
      ["Jenkins + Docker", "apoyo a despliegue e integración continua"],
      ["Soporte + sistemas", "base técnica útil para entornos empresariales"],
    ],
    stackSectionTitle: "Stack, sistemas y herramientas con las que ya he trabajado.",
    experienceTitle: "Experiencia",
    experienceSectionTitle: "Experiencia aplicada a problemas operativos reales.",
    experienceIntro:
      "Mi experiencia combina desarrollo, automatización y soporte TI. La transición no fue un cambio de carrera aislado, sino una evolución natural desde operaciones técnicas hacia soluciones más completas.",
    experience: [
      {
        role: "Desarrollador y Automatizador de Procesos",
        company: "Vadel S.A.S",
        period: "Septiembre 2024 - Febrero 2025",
        summary:
          "Participé en desarrollo web, automatización de flujos y soporte técnico-funcional para necesidades operativas del negocio.",
        bullets: [
          "Desarrollo y adecuación de soluciones con React, Node.js y TypeScript.",
          "Implementación de automatizaciones de procesos con n8n.",
          "Integración y consumo de APIs para conectar plataformas, servicios y aplicaciones.",
          "Uso de APIs de inteligencia artificial para automatización e integración de servicios.",
          "Apoyo en despliegues, pruebas e integración continua con Jenkins.",
          "Participación en dockerización de aplicaciones y manejo de entornos virtualizados.",
          "Capacitación y acompañamiento a usuarios en herramientas tecnológicas.",
        ],
      },
      {
        role: "Asistente de Tecnologías de la Información",
        company: "Vadel S.A.S",
        period: "Agosto 2024 - Febrero 2025",
        summary:
          "Soporte técnico y administración tecnológica general en ambientes empresariales con foco en continuidad operativa.",
        bullets: [
          "Soporte técnico y mantenimiento de equipos informáticos, tanto hardware como software.",
          "Colaboración en redes internas y dispositivos de comunicación como routers, switches y Wi-Fi.",
          "Implementación de medidas básicas de seguridad y gestión de copias de seguridad.",
          "Apoyo en administración de servidores, SharePoint y Active Directory.",
          "Gestión de inventarios de equipos tecnológicos y reportes del estado de sistemas.",
        ],
      },
      {
        role: "Practicante Universitario",
        company: "SENA",
        period: "Enero 2022 - Noviembre 2023",
        summary:
          "Base fuerte en mantenimiento preventivo, correctivo y soporte al usuario, con tareas de verificación, diagnóstico y configuración.",
        bullets: [
          "Mantenimiento y configuración de hardware.",
          "Instalación y configuración de sistemas operativos.",
          "Diagnóstico y solución de problemas de hardware y software.",
          "Verificación, actualización y configuración de sistemas.",
          "Apoyo en seguridad, respaldos y reposición de partes dañadas cuando era necesario.",
        ],
      },
    ],
    educationTitle: "Educación y formación",
    educationSectionTitle: "Formación que respalda la práctica técnica.",
    education: [
      {
        title: "Técnico profesional en servicios de redes y comunicaciones",
        institution: "Universidad CIDE",
        period: "Febrero 2024 - En curso",
      },
      {
        title: "Técnico profesional en servicios de seguridad informática",
        institution: "Politécnico Minuto de Dios",
        period: "Febrero 2024 - Aplazada",
      },
      {
        title: "Técnico en sistemas",
        institution: "SENA",
        period: "Enero 2022 - Noviembre 2023",
      },
      {
        title: "Curso de seguridad en terminales",
        institution: "Cisco Networking Academy",
        period: "Febrero 2025 - En curso",
      },
      {
        title: "Bachiller",
        institution: "Colegio Alberto Lleras Camargo (IED)",
        period: "Finalizado",
      },
    ],
    technicalTitle: "Habilidades técnicas",
    technicalGroups: [
      {
        title: "Desarrollo y automatización",
        items: [
          "React",
          "TypeScript",
          "Node.js",
          "NestJS",
          "n8n",
          "Integración y consumo de APIs",
          "APIs de inteligencia artificial",
          "Prisma ORM",
          "SQL: MySQL, PostgreSQL y SQL Server",
        ],
      },
      {
        title: "DevOps e infraestructura",
        items: [
          "Jenkins",
          "Dockerización",
          "Virtualización",
          "Proxmox",
          "Linux",
          "Windows",
          "Terminal Linux",
          "Administración básica de servidores",
        ],
      },
      {
        title: "Enterprise y soporte",
        items: [
          "SharePoint",
          "Active Directory",
          "Soporte técnico y funcional",
          "Implementación y adecuación de aplicaciones",
          "Generación y manejo de reportes",
          "Mantenimiento de equipos",
          "Manejo de redes de infraestructura",
          "Seguridad informática básica",
        ],
      },
    ],
    softSkillsTitle: "Fortalezas de trabajo",
    softSkillsSectionTitle: "Cómo trabajo además de la parte técnica.",
    softSkills: [
      "Trabajo colaborativo",
      "Adaptabilidad",
      "Aprendizaje continuo",
      "Proactividad",
      "Liderazgo",
      "Comunicación efectiva",
      "Pensamiento crítico",
      "Resolución de problemas",
      "Capacidad de análisis",
      "Trabajo bajo presión",
      "Orientación al logro",
    ],
    contactTitle: "Disponible para proyectos donde haga falta construir y ordenar.",
    contactText:
      "Si necesitas una web interna, una automatización, una integración o alguien que entienda tanto la parte técnica como la operativa, esta experiencia es justo la base con la que trabajo.",
  },
  en: {
    badge: "Professional profile",
    title: "About me, my experience, and how I turn technical support into useful digital solutions.",
    intro:
      "I am a Systems Technician currently working as a developer and process automation builder. My profile combines hands-on user support, infrastructure operations and web development focused on business needs.",
    capabilityChip: "Development, automation and infrastructure",
    locationLabel: "Bogota D.C., Colombia",
    profile: [
      "I started from the technical foundation: equipment maintenance, system setup, internal networks and functional support. That stage gave me real context about how teams operate and where processes break.",
      "Today I build solutions with React, Node.js and TypeScript, automate workflows with n8n and connect APIs, corporate services and internal tools to reduce manual work and improve operations.",
      "I am especially interested in the point where development, automation and infrastructure overlap: web tools, deployments, integrations, virtualization and continuous improvement.",
    ],
    quickFacts: [
      ["React + Node.js", "interfaces and business logic delivery"],
      ["n8n + APIs", "automation and platform integration"],
      ["Jenkins + Docker", "deployment and CI support"],
      ["Support + systems", "technical base for enterprise environments"],
    ],
    stackSectionTitle: "Stack, systems and tools I have already worked with.",
    experienceTitle: "Experience",
    experienceSectionTitle: "Experience applied to real operational problems.",
    experienceIntro:
      "My experience combines development, automation and IT support. The shift was not an isolated career change, but a natural evolution from technical operations into more complete solutions.",
    experience: [
      {
        role: "Developer and Process Automation Specialist",
        company: "Vadel S.A.S",
        period: "September 2024 - February 2025",
        summary:
          "Worked across web development, workflow automation and technical-functional support for operational business needs.",
        bullets: [
          "Built and adapted solutions with React, Node.js and TypeScript.",
          "Implemented workflow automations with n8n.",
          "Integrated and consumed APIs to connect platforms, services and applications.",
          "Used AI APIs for automation and service integration.",
          "Supported deployments, testing and continuous integration with Jenkins.",
          "Participated in application containerization and virtualized environments.",
          "Trained and supported users on applications and technical tools.",
        ],
      },
      {
        role: "Information Technology Assistant",
        company: "Vadel S.A.S",
        period: "August 2024 - February 2025",
        summary:
          "Handled technical support and general technology administration in business environments with a focus on operational continuity.",
        bullets: [
          "Provided technical support and maintenance for hardware and software.",
          "Collaborated on internal networks and communication devices such as routers, switches and Wi-Fi.",
          "Implemented basic security measures and backup routines.",
          "Supported server administration, SharePoint and Active Directory tasks.",
          "Managed technology inventory and reporting on system status.",
        ],
      },
      {
        role: "University Intern",
        company: "SENA",
        period: "January 2022 - November 2023",
        summary:
          "Built a strong base in preventive and corrective maintenance, user support, verification, diagnostics and system configuration.",
        bullets: [
          "Maintained and configured hardware.",
          "Installed and configured operating systems.",
          "Diagnosed and solved hardware and software issues.",
          "Handled verification, updates and system configuration tasks.",
          "Supported security, backups and replacement of damaged components when needed.",
        ],
      },
    ],
    educationTitle: "Education and training",
    educationSectionTitle: "Training that supports practical technical work.",
    education: [
      {
        title: "Professional Technician in Network and Communications Services",
        institution: "Universidad CIDE",
        period: "February 2024 - Present",
      },
      {
        title: "Professional Technician in Information Security Services",
        institution: "Politécnico Minuto de Dios",
        period: "February 2024 - Paused",
      },
      {
        title: "Systems Technician",
        institution: "SENA",
        period: "January 2022 - November 2023",
      },
      {
        title: "Terminal Security Course",
        institution: "Cisco Networking Academy",
        period: "February 2025 - Present",
      },
      {
        title: "High school diploma",
        institution: "Colegio Alberto Lleras Camargo (IED)",
        period: "Completed",
      },
    ],
    technicalTitle: "Technical skills",
    technicalGroups: [
      {
        title: "Development and automation",
        items: [
          "React",
          "TypeScript",
          "Node.js",
          "NestJS",
          "n8n",
          "API integration and consumption",
          "AI APIs",
          "Prisma ORM",
          "SQL: MySQL, PostgreSQL and SQL Server",
        ],
      },
      {
        title: "DevOps and infrastructure",
        items: [
          "Jenkins",
          "Docker",
          "Virtualization",
          "Proxmox",
          "Linux",
          "Windows",
          "Linux terminal",
          "Basic server administration",
        ],
      },
      {
        title: "Enterprise and support",
        items: [
          "SharePoint",
          "Active Directory",
          "Technical and functional support",
          "Application implementation and adaptation",
          "Report creation and handling",
          "Equipment maintenance",
          "Infrastructure networking",
          "Basic information security",
        ],
      },
    ],
    softSkillsTitle: "Working strengths",
    softSkillsSectionTitle: "How I work beyond the technical side.",
    softSkills: [
      "Collaborative work",
      "Adaptability",
      "Continuous learning",
      "Proactivity",
      "Leadership",
      "Effective communication",
      "Critical thinking",
      "Problem solving",
      "Analytical thinking",
      "Working under pressure",
      "Results orientation",
    ],
    contactTitle: "Available for projects that need both building and operational clarity.",
    contactText:
      "If you need an internal web tool, an automation, an integration or someone who understands both the technical and operational side, this is the experience I build from.",
  },
};

export function getAboutPageContent(locale: string | undefined | null) {
  return aboutPageByLocale[locale === "en" ? "en" : "es"];
}
