import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft, Lock } from "lucide-react";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { ProjectMetric } from "@/components/sections/ProjectMetric";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStackCloud } from "@/components/sections/TechStackCloud";
import { getCaseStudies, getCaseStudyBySlug, getCaseStudyImage, type CaseStudy } from "@/content/case-studies";
import { getSiteCopy } from "@/content/site-copy";
import { SeoHead } from "@/components/seo/SeoHead";

type CaseStudyPageProps = {
  study: CaseStudy;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getCaseStudies("es").map((study) => ({
      params: { slug: study.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<CaseStudyPageProps> = async (context) => {
  const slug = context.params?.slug;
  const locale = context.locale;

  if (typeof slug !== "string") {
    return { notFound: true };
  }

  const study = getCaseStudyBySlug(locale, slug);

  if (!study) {
    return { notFound: true };
  }

  return {
    props: {
      study,
    },
  };
};

export default function CaseStudyPage({ study }: CaseStudyPageProps) {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const cover = getCaseStudyImage(study);

  return (
    <>
      <SeoHead
        title={`${study.title} | Sebastian Camargo`}
        description={study.summary}
        image={cover.src}
        imageAlt={cover.alt}
        type="article"
        canonicalPath={`/case-studies/${study.slug}`}
      />

      <main className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-main">
            <ArrowLeft className="h-4 w-4" />
            {copy.caseStudiesPage.back}
          </Link>

          <section className="surface mt-8 rounded-[2rem] p-5 sm:p-8">
            <div className="flex items-center gap-2 text-sm text-subtle">
              <Lock className="h-4 w-4" />
              {copy.caseStudiesPage.confidentialityNote}
            </div>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight text-main sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">{study.summary}</p>
            <div className="mt-6">
              <TechStackCloud items={study.techStack} />
            </div>
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[16/9]">
                <Image
                  src={cover.src}
                  alt={cover.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,23,36,0.92)] via-[rgba(11,23,36,0.18)] to-transparent" />
                <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-[rgba(11,23,36,0.72)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted sm:left-6 sm:top-6">
                  {study.category}
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {study.metrics.map(([value, label]) => (
                <ProjectMetric key={`${study.slug}-${value}`} value={value} label={label} />
              ))}
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-5">
              <div className="surface rounded-3xl p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-orange-strong)]">{copy.caseStudiesPage.category}</p>
                <p className="mt-3 text-xl font-semibold text-main">{study.category}</p>
                <p className="mt-4 text-sm leading-6 text-subtle">{study.overview}</p>
              </div>

              <div className="surface rounded-3xl p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-orange-strong)]">{copy.caseStudiesPage.myRole}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{study.myRole}</p>
              </div>

              <div className="surface rounded-3xl p-5 sm:p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-orange-strong)]">{copy.caseStudiesPage.techStack}</p>
                <div className="mt-4">
                  <TechStackCloud items={study.techStack} />
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.overview} title={copy.caseStudiesPage.overview} />
                <p className="mt-4 text-muted">{study.overview}</p>
              </article>

              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.problem} title={copy.caseStudiesPage.problem} />
                <p className="mt-4 text-muted">{study.problem}</p>
              </article>

              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.solution} title={copy.caseStudiesPage.solution} />
                <p className="mt-4 text-muted">{study.solution}</p>
              </article>

              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.architecture} title={copy.caseStudiesPage.architecture} />
                <div className="mt-6">
                  <ArchitectureDiagram architecture={study.architecture} />
                </div>
              </article>

              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.keyFeatures} title={copy.caseStudiesPage.keyFeatures} />
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {study.keyFeatures.map((feature) => (
                    <li key={feature} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.results} title={copy.caseStudiesPage.results} />
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {study.results.map((result) => (
                    <li key={result} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted">
                      {result}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.whatILearned} title={copy.caseStudiesPage.whatILearned} />
                <ul className="mt-5 grid gap-3">
                  {study.whatILearned.map((lesson) => (
                    <li key={lesson} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-muted">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="surface rounded-3xl p-5 sm:p-7">
                <SectionHeading
                  eyebrow={copy.caseStudiesPage.confidentialityNote}
                  title={copy.caseStudiesPage.confidentialityNote}
                />
                <p className="mt-4 text-muted">{study.confidentialityNote}</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
