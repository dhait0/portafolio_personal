import { useRouter } from "next/router";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCaseStudies } from "@/content/case-studies";
import { getSiteCopy } from "@/content/site-copy";
import { SeoHead } from "@/components/seo/SeoHead";

export default function CaseStudiesIndexPage() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const caseStudies = getCaseStudies(router.locale);

  return (
    <>
      <SeoHead title={`${copy.caseStudiesPage.title} | Sebastian Camargo`} description={copy.caseStudiesPage.description} />

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
