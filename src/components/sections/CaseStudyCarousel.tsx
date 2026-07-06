"use client";

import type { CaseStudy } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";

type CaseStudyCarouselProps = {
  studies: CaseStudy[];
};

export function CaseStudyCarousel({ studies }: CaseStudyCarouselProps) {
  const track = [...studies, ...studies];

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div className="case-carousel-track flex w-max gap-5 py-2">
        {track.map((study, index) => (
          <div key={`${study.slug}-${index}`} className="w-[min(86vw,440px)] shrink-0 sm:w-[420px] lg:w-[440px]">
            <CaseStudyCard caseStudy={study} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
