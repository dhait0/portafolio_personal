import type { Locale } from "@/lib/i18n";

export const siteCopy = {
  es: {
    brand: "Desarrollador Full Stack | Automatización con IA",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      caseStudies: "Casos",
      process: "Proceso",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para proyectos freelance de desarrollo web, automatización y mejora de procesos",
      title: "Soluciones web y automatizaciones para que tu negocio trabaje mejor.",
      description:
        "Construyo herramientas internas, páginas web y flujos automatizados que reducen trabajo manual, organizan información y ayudan a que los equipos avancen con menos fricción.",
      ctas: {
        primary: "Ver casos",
        secondary: "Contactarme",
      },
      signal: "Enfoque",
      signalValue: "Soluciones prácticas para problemas reales",
      stackLabel: "Qué puedo construir",
      stackValue: "Web + automatización + despliegue",
      stats: [
        ["Menos", "tareas repetitivas para tu equipo"],
        ["Más", "orden en procesos e información"],
        ["Claro", "explicación simple de cada entrega"],
      ],
      chips: ["React", "TypeScript", "n8n", "Microsoft Graph", "Jenkins", "Docker", "Proxmox"],
      floating: {
        integrations: ["Conexión entre herramientas", "Microsoft 365, formularios, bases de datos y servicios externos"],
        automation: ["Automatización de tareas", "Flujos con n8n, IA y reglas claras para ahorrar tiempo"],
        delivery: ["Publicación y mantenimiento", "Docker, Jenkins y servidores listos para operar"],
      },
      sideLabels: ["Herramientas internas / páginas web / automatización", "Sistemas útiles desde el primer uso"],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "De soporte técnico a crear soluciones digitales para equipos reales.",
      description:
        "Empecé resolviendo problemas de usuarios, equipos y sistemas. Hoy uso esa experiencia para crear herramientas web, automatizaciones y mejoras que ayudan a trabajar con más orden.",
      metrics: [
        ["6+", "ejemplos de proyectos explicados sin datos privados"],
        ["4", "demos públicas para ver mi forma de trabajar"],
        ["Negocio", "enfoque en ahorrar tiempo y ordenar procesos"],
        ["Completo", "de la idea inicial a una solución funcionando"],
      ],
      highlights: ["Web", "Automatización", "Sistemas", "Soporte"],
    },
    value: {
      eyebrow: "Soluciones web",
      title: "Herramientas digitales que ayudan a trabajar mejor.",
      description:
        "Trabajo con clientes que necesitan algo más que una página bonita: una solución que organice datos, reduzca tareas manuales y sea fácil de mantener.",
      metrics: [
        ["Web", "pantallas claras para operar y consultar información"],
        ["Automatización", "flujos que evitan repetir tareas todos los días"],
        ["Publicación", "proyectos listos para usar y mantener"],
      ],
      platforms: [
        {
          title: "Aplicaciones web",
          description: "Paneles, formularios y herramientas internas fáciles de usar.",
        },
        {
          title: "Procesos automáticos",
          description: "Tareas que se ejecutan solas con reglas claras y control del equipo.",
        },
        {
          title: "Puesta en marcha",
          description: "Configuración, publicación y documentación para que la solución quede usable.",
        },
      ],
    },
    featured: {
      eyebrow: "Casos destacados",
      title: "Ejemplos de proyectos explicados sin datos privados.",
      description:
        "Revisa ejemplos de problemas comunes: automatizar tareas, crear paneles internos, conectar herramientas y mejorar procesos.",
      carouselHint: "El carrusel avanza solo a baja velocidad. Pasa el cursor para pausarlo.",
      cta: "Ver todos los casos",
    },
    process: {
      eyebrow: "Proceso",
      title: "Una forma de trabajo clara desde la idea hasta la entrega.",
      description:
        "Cada proyecto se divide en pasos simples para que sepas qué se está haciendo, por qué importa y qué vas a recibir.",
      items: [
        {
          title: "Descubrimiento",
          description: "Entender qué problema quieres resolver y qué resultado sería útil para tu equipo.",
        },
        {
          title: "Arquitectura",
          description: "Definir cómo se conectan usuarios, datos, herramientas y permisos antes de construir.",
        },
        {
          title: "Implementación",
          description: "Crear las pantallas, conexiones y automatizaciones necesarias para la primera versión.",
        },
        {
          title: "Automatización",
          description: "Convertir tareas repetitivas en flujos automáticos que ahorran tiempo.",
        },
        {
          title: "Pruebas",
          description: "Probar que la solución funcione bien antes de entregarla o publicarla.",
        },
        {
          title: "Despliegue",
          description: "Publicar la solución para que puedas usarla en un entorno real.",
        },
        {
          title: "Documentación",
          description: "Dejar instrucciones claras para usar, mantener o ampliar la solución.",
        },
      ],
    },
    demos: {
      eyebrow: "Demos públicas",
      title: "Demos públicas para ver ejemplos de trabajo.",
      description:
        "Son proyectos de muestra que enseñan cómo diseño pantallas, conecto datos y automatizo procesos sin exponer información privada.",
      cardLabel: "Demo pública",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de la herramienta o automatización que necesitas.",
      description: "Cuéntame qué proceso quieres mejorar y revisamos la forma más simple de resolverlo.",
      email: "Enviar email",
      whatsapp: "WhatsApp",
      freelancer: "Perfil de Freelancer",
      github: "GitHub",
      linkedin: "LinkedIn",
      labels: {
        whatsapp: "Contacto directo para nuevos proyectos",
        freelancer: "Perfil freelance público",
        github: "Código público y repos demo",
        linkedin: "Red profesional y actualizaciones",
      },
    },
    caseStudiesPage: {
      eyebrow: "Casos",
      title: "Ejemplos de proyectos explicados de forma clara.",
      description:
        "Cada caso muestra el problema, la solución y el resultado sin exponer datos privados de empresas o clientes.",
      back: "Volver a casos",
      category: "Categoría",
      myRole: "Mi rol",
      techStack: "Stack técnico",
      overview: "Resumen",
      problem: "Problema",
      solution: "Solución",
      architecture: "Arquitectura",
      keyFeatures: "Características clave",
      results: "Resultados",
      whatILearned: "Lo que aprendí",
      confidentialityNote: "Nota de confidencialidad",
    },
    language: "EN",
    languageLabel: "Language",
  },
  en: {
    brand: "Full Stack Developer | AI Automation Developer",
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      caseStudies: "Case studies",
      process: "Process",
      contact: "Contact",
    },
    hero: {
      badge: "Available for freelance web development, automation and process improvement",
      title: "Web tools and automations that help your business work better.",
      description:
        "I build internal tools, websites and automated workflows that reduce manual work, organize information and help teams move with less friction.",
      ctas: {
        primary: "View cases",
        secondary: "Contact me",
      },
      signal: "Focus",
      signalValue: "Practical solutions for real problems",
      stackLabel: "What I can build",
      stackValue: "Web + automation + deployment",
      stats: [
        ["Less", "repetitive work for your team"],
        ["More", "order in processes and information"],
        ["Clear", "simple explanation for every delivery"],
      ],
      chips: ["React", "TypeScript", "n8n", "Microsoft Graph", "Jenkins", "Docker", "Proxmox"],
      floating: {
        integrations: ["Tool connections", "Microsoft 365, forms, databases and external services"],
        automation: ["Task automation", "n8n, AI and clear rules to save time"],
        delivery: ["Launch and maintenance", "Docker, Jenkins and servers ready to operate"],
      },
      sideLabels: ["Internal tools / websites / automation", "Useful systems from the first version"],
    },
    about: {
      eyebrow: "About",
      title: "From technical support to building useful digital tools for real teams.",
      description:
        "I started by solving user, equipment and systems problems. Today I use that experience to create web tools, automations and improvements that make work more organized.",
      metrics: [
        ["6+", "project examples explained without private data"],
        ["4", "public demos to show how I work"],
        ["Business", "focused on saving time and organizing processes"],
        ["Complete", "from the first idea to a working solution"],
      ],
      highlights: ["Web", "Automation", "Systems", "Support"],
    },
    value: {
      eyebrow: "Web solutions",
      title: "Digital tools that help teams work better.",
      description:
        "I work with clients who need more than a nice page: a solution that organizes data, reduces manual tasks and stays easy to maintain.",
      metrics: [
        ["Web", "clear screens to manage and review information"],
        ["Automation", "flows that avoid repeating tasks every day"],
        ["Launch", "projects ready to use and maintain"],
      ],
      platforms: [
        {
          title: "Web applications",
          description: "Dashboards, forms and internal tools that are easy to use.",
        },
        {
          title: "Automatic processes",
          description: "Tasks that run on their own with clear rules and team control.",
        },
        {
          title: "Launch setup",
          description: "Configuration, publishing and documentation so the solution is ready to use.",
        },
      ],
    },
    featured: {
      eyebrow: "Featured case studies",
      title: "Project examples explained without private data.",
      description:
        "Review examples of common needs: automating tasks, building internal dashboards, connecting tools and improving processes.",
      carouselHint: "The carousel auto-advances slowly. Hover to pause it.",
      cta: "View all cases",
    },
    process: {
      eyebrow: "Process",
      title: "A clear workflow from idea to delivery.",
      description:
        "Each project is split into simple steps so you know what is happening, why it matters and what you will receive.",
      items: [
        {
          title: "Discovery",
          description: "Understand the problem you want to solve and what outcome would be useful for your team.",
        },
        {
          title: "Architecture",
          description: "Define how users, data, tools and permissions connect before building.",
        },
        {
          title: "Implementation",
          description: "Create the screens, connections and automations needed for the first version.",
        },
        {
          title: "Automation",
          description: "Turn repetitive tasks into automatic flows that save time.",
        },
        {
          title: "Testing",
          description: "Check that the solution works properly before it is delivered or published.",
        },
        {
          title: "Deployment",
          description: "Publish the solution so it can be used in a real environment.",
        },
        {
          title: "Documentation",
          description: "Leave clear instructions to use, maintain or expand the solution.",
        },
      ],
    },
    demos: {
      eyebrow: "Public demos",
      title: "Public demos that show examples of my work.",
      description:
        "These sample projects show how I design screens, connect data and automate processes without exposing private information.",
      cardLabel: "Public demo",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let us talk about the tool or automation you need.",
      description: "Tell me what process you want to improve and we can review the simplest way to solve it.",
      email: "Send email",
      whatsapp: "WhatsApp",
      freelancer: "Freelancer profile",
      github: "GitHub",
      linkedin: "LinkedIn",
      labels: {
        whatsapp: "Direct contact for new projects",
        freelancer: "Public freelance profile",
        github: "Public code and demo repositories",
        linkedin: "Professional network and updates",
      },
    },
    caseStudiesPage: {
      eyebrow: "Case studies",
      title: "Project examples explained clearly.",
      description:
        "Each case shows the problem, the solution and the result without exposing private company or client data.",
      back: "Back to case studies",
      category: "Category",
      myRole: "My role",
      techStack: "Tech stack",
      overview: "Overview",
      problem: "Problem",
      solution: "Solution",
      architecture: "Architecture",
      keyFeatures: "Key features",
      results: "Results",
      whatILearned: "What I learned",
      confidentialityNote: "Confidentiality note",
    },
    language: "ES",
    languageLabel: "Idioma",
  },
} satisfies Record<Locale, any>;

export function getSiteCopy(locale: string | undefined | null) {
  return siteCopy[locale === "en" ? "en" : "es"];
}
