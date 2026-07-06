import Head from "next/head";
import { useRouter } from "next/router";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCaseStudies } from "@/content/case-studies";
import { getSiteCopy } from "@/content/site-copy";

export default function CaseStudiesIndexPage() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const caseStudies = getCaseStudies(router.locale);

  return (
    <>
      <Head>
        <title>{`${copy.caseStudiesPage.title} | Sebastian Camargo`}</title>
        <meta name="description" content={copy.caseStudiesPage.description} />
      </Head>

      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow={copy.caseStudiesPage.eyebrow}
            title={copy.caseStudiesPage.title}
            description={copy.caseStudiesPage.description}
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} caseStudy={study} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
