import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, BriefcaseBusiness, GraduationCap, Layers3, MapPin, Sparkles } from "lucide-react";
import { SeoHead } from "@/components/seo/SeoHead";
import { ProjectMetric } from "@/components/sections/ProjectMetric";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillPill } from "@/components/ui/SkillPill";
import { getAboutPageContent } from "@/content/about";
import { getSiteCopy } from "@/content/site-copy";

export default function AboutPage() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const about = getAboutPageContent(router.locale);

  return (
    <>
      <SeoHead
        title={`${copy.nav.about} | Sebastian Camargo`}
        description={about.intro}
        canonicalPath="/about"
      />

      <main className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <section className="surface-clay overflow-hidden rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-orange-strong)]">
                  <Sparkles className="h-4 w-4" />
                  {about.badge}
                </div>
                <h1 className="font-display mt-5 max-w-4xl text-4xl font-bold tracking-tight text-main sm:text-5xl lg:text-6xl">
                  {about.title}
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{about.intro}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="surface-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted">
                    <BriefcaseBusiness className="h-4 w-4 text-[var(--color-orange-strong)]" />
                    {about.capabilityChip}
                  </span>
                  <span className="surface-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-muted">
                    <MapPin className="h-4 w-4 text-[var(--color-blue)]" />
                    {about.locationLabel}
                  </span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {about.quickFacts.map(([value, label]) => (
                  <ProjectMetric key={value} value={value} label={label} />
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="surface rounded-[2rem] p-6 sm:p-8">
              <SectionHeading eyebrow={copy.nav.about} title={about.badge} />
              <div className="mt-6 space-y-4">
                {about.profile.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </article>

            <article className="surface rounded-[2rem] p-6 sm:p-8">
              <SectionHeading
                eyebrow={about.technicalTitle}
                title={about.stackSectionTitle}
              />
              <div className="mt-6 space-y-5">
                {about.technicalGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-orange-strong)]">
                      {group.title}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <SkillPill key={item} label={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="surface rounded-[2rem] p-6 sm:p-8">
            <SectionHeading
              eyebrow={about.experienceTitle}
              title={about.experienceSectionTitle}
              description={about.experienceIntro}
            />
            <div className="mt-8 space-y-5">
              {about.experience.map((item) => (
                <article key={`${item.role}-${item.period}`} className="surface-soft rounded-[1.75rem] p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-main">{item.role}</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.24em] text-[var(--color-orange-strong)]">
                        {item.company}
                      </p>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-muted">
                      <BriefcaseBusiness className="h-4 w-4 text-[var(--color-blue)]" />
                      {item.period}
                    </div>
                  </div>
                  <p className="mt-4 text-base leading-7 text-muted">{item.summary}</p>
                  <ul className="mt-5 grid gap-3 lg:grid-cols-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-muted">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <article className="surface rounded-[2rem] p-6 sm:p-8">
              <SectionHeading eyebrow={about.educationTitle} title={about.educationSectionTitle} />
              <div className="mt-6 space-y-4">
                {about.education.map((item) => (
                  <div key={`${item.title}-${item.institution}`} className="surface-soft rounded-[1.5rem] p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 rounded-2xl bg-white/5 p-2 text-[var(--color-orange-strong)]">
                        <GraduationCap className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-main">{item.title}</h3>
                        <p className="mt-1 text-sm text-muted">{item.institution}</p>
                        <p className="mt-2 text-sm text-subtle">{item.period}</p>
                        {item.note ? <p className="mt-2 text-sm text-subtle">{item.note}</p> : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="surface rounded-[2rem] p-6 sm:p-8">
              <SectionHeading eyebrow={about.softSkillsTitle} title={about.softSkillsSectionTitle} />
              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {about.softSkills.map((skill) => (
                  <div key={skill} className="surface-soft flex items-center gap-3 rounded-[1.5rem] px-4 py-4">
                    <span className="rounded-2xl bg-white/5 p-2 text-[var(--color-blue)]">
                      <Layers3 className="h-4 w-4" />
                    </span>
                    <span className="text-sm text-muted">{skill}</span>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="surface-clay rounded-[2rem] p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <SectionHeading eyebrow={copy.contact.eyebrow} title={about.contactTitle} description={about.contactText} />
              </div>
              <Link href="/contact" className="btn-primary px-6 py-3 text-sm">
                {copy.contact.title}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
