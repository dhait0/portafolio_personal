import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowLeft, Lock } from "lucide-react";
import { ArchitectureDiagram } from "@/components/sections/ArchitectureDiagram";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStackCloud } from "@/components/sections/TechStackCloud";
import { getCaseStudies, getCaseStudyBySlug, type CaseStudy } from "@/content/case-studies";
import { getSiteCopy } from "@/content/site-copy";

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

  return (
    <>
      <Head>
        <title>{`${study.title} | Sebastian Camargo`}</title>
        <meta name="description" content={study.summary} />
      </Head>

      <main className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white">
            <ArrowLeft className="h-4 w-4" />
            {copy.caseStudiesPage.back}
          </Link>

          <section className="mt-8 rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Lock className="h-4 w-4" />
              {copy.caseStudiesPage.confidentialityNote}
            </div>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
              {study.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{study.summary}</p>
            <div className="mt-6">
              <TechStackCloud items={study.techStack} />
            </div>
          </section>

          <section className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="space-y-5">
              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{copy.caseStudiesPage.category}</p>
                <p className="mt-3 text-xl font-semibold text-slate-50">{study.category}</p>
                <p className="mt-4 text-sm leading-6 text-slate-400">{study.overview}</p>
              </div>

              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{copy.caseStudiesPage.myRole}</p>
                <p className="mt-4 text-sm leading-6 text-slate-300">{study.myRole}</p>
              </div>

              <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{copy.caseStudiesPage.techStack}</p>
                <div className="mt-4">
                  <TechStackCloud items={study.techStack} />
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.overview} title={copy.caseStudiesPage.overview} />
                <p className="mt-4 text-slate-300">{study.overview}</p>
              </article>

              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.problem} title={copy.caseStudiesPage.problem} />
                <p className="mt-4 text-slate-300">{study.problem}</p>
              </article>

              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.solution} title={copy.caseStudiesPage.solution} />
                <p className="mt-4 text-slate-300">{study.solution}</p>
              </article>

              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.architecture} title={copy.caseStudiesPage.architecture} />
                <div className="mt-6">
                  <ArchitectureDiagram architecture={study.architecture} />
                </div>
              </article>

              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.keyFeatures} title={copy.caseStudiesPage.keyFeatures} />
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {study.keyFeatures.map((feature) => (
                    <li key={feature} className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-slate-200">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.results} title={copy.caseStudiesPage.results} />
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {study.results.map((result) => (
                    <li key={result} className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-slate-200">
                      {result}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading eyebrow={copy.caseStudiesPage.whatILearned} title={copy.caseStudiesPage.whatILearned} />
                <ul className="mt-5 grid gap-3">
                  {study.whatILearned.map((lesson) => (
                    <li key={lesson} className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-4 py-3 text-slate-200">
                      {lesson}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-7">
                <SectionHeading
                  eyebrow={copy.caseStudiesPage.confidentialityNote}
                  title={copy.caseStudiesPage.confidentialityNote}
                />
                <p className="mt-4 text-slate-300">{study.confidentialityNote}</p>
              </article>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
