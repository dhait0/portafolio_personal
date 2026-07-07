import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight } from "lucide-react";
import { AboutSection } from "@/components/sections/AboutSection";
import { AnimatedTimeline } from "@/components/sections/AnimatedTimeline";
import { CTASection } from "@/components/sections/CTASection";
import { CaseStudyCarousel } from "@/components/sections/CaseStudyCarousel";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillMatrix } from "@/components/sections/SkillMatrix";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStackCloud } from "@/components/sections/TechStackCloud";
import { getCaseStudies } from "@/content/case-studies";
import { getDemoProjects } from "@/content/projects";
import { getSiteCopy } from "@/content/site-copy";
import { SeoHead } from "@/components/seo/SeoHead";

export default function HomePage() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const caseStudies = getCaseStudies(router.locale);
  const demoProjects = getDemoProjects(router.locale);

  return (
    <>
      <SeoHead title={`Sebastian Camargo | ${copy.brand}`} description={copy.hero.description} />

      <HeroSection />
      <AboutSection />

      <section id="case-studies" className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow={copy.featured.eyebrow}
              title={copy.featured.title}
              description={copy.featured.description}
            />
            <Link
              href="/case-studies"
              className="btn-secondary px-5 py-3 text-sm"
            >
              {copy.featured.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-4 text-sm text-muted">{copy.featured.carouselHint}</div>
          <div className="mt-8">
            <CaseStudyCarousel studies={caseStudies} />
          </div>
        </div>
      </section>

      <SkillMatrix />

      <section id="process" className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.process.eyebrow}
            title={copy.process.title}
            description={copy.process.description}
          />
          <div className="mt-10">
            <AnimatedTimeline items={copy.process.items} />
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.demos.eyebrow}
            title={copy.demos.title}
            description={copy.demos.description}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {demoProjects.map((project) => (
              <article key={project.slug} className="surface rounded-3xl p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-orange-strong)]">{copy.demos.cardLabel}</p>
                <h3 className="mt-3 text-xl font-semibold text-main sm:text-2xl">{project.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{project.description}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{project.highlight}</p>
                <TechStackCloud items={project.stack} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
