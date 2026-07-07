"use client";

import { useEffect, useMemo, useRef, type WheelEvent as ReactWheelEvent } from "react";
import type { CaseStudy } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";

type CaseStudyCarouselProps = {
  studies: CaseStudy[];
};

export function CaseStudyCarousel({ studies }: CaseStudyCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isAdjustingRef = useRef(false);
  const track = useMemo(() => [...studies, ...studies, ...studies], [studies]);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller || studies.length === 0) {
      return;
    }

    const loopWidth = scroller.scrollWidth / 3;
    scroller.scrollLeft = loopWidth;
  }, [studies]);

  function recenterScroll() {
    const scroller = scrollerRef.current;

    if (!scroller || studies.length === 0 || isAdjustingRef.current) {
      return;
    }

    const loopWidth = scroller.scrollWidth / 3;

    if (scroller.scrollLeft <= loopWidth * 0.5) {
      isAdjustingRef.current = true;
      scroller.scrollLeft += loopWidth;
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    } else if (scroller.scrollLeft >= loopWidth * 1.5) {
      isAdjustingRef.current = true;
      scroller.scrollLeft -= loopWidth;
      requestAnimationFrame(() => {
        isAdjustingRef.current = false;
      });
    }
  }

  function handleWheel(event: ReactWheelEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const canScrollHorizontally = scroller.scrollWidth > scroller.clientWidth;
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (!canScrollHorizontally || delta === 0) {
      return;
    }

    event.preventDefault();
    scroller.scrollLeft += delta;
    recenterScroll();
  }

  return (
    <div className="relative [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
      <div
        ref={scrollerRef}
        onWheel={handleWheel}
        onScroll={recenterScroll}
        className="case-carousel-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden py-2"
      >
        {track.map((study, index) => (
          <div
            key={`${study.slug}-${index}`}
            className="w-[min(86vw,440px)] shrink-0 snap-start sm:w-[420px] lg:w-[440px]"
          >
            <CaseStudyCard caseStudy={study} compact />
          </div>
        ))}
      </div>
    </div>
  );
}
