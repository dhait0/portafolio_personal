"use client";

import { useEffect, useRef, useState, type WheelEvent as ReactWheelEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";

type CaseStudyCarouselProps = {
  studies: CaseStudy[];
};

export function CaseStudyCarousel({ studies }: CaseStudyCarouselProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeIndexRef = useRef(0);
  const activeVirtualIndexRef = useRef(0);
  const isRecenteringRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const track = [...studies, ...studies, ...studies];
  const middleOffset = studies.length;

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, track.length);
  }, [track.length]);

  useEffect(() => {
    if (studies.length === 0) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      scrollToVirtualIndex(middleOffset, "auto");
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [middleOffset, studies.length]);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.45,
      },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView || studies.length <= 1) {
      return;
    }

    const intervalId = window.setInterval(() => {
      scrollToVirtualIndex(activeVirtualIndexRef.current + 1);
    }, 5000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [isInView, studies.length]);

  function getLogicalIndex(index: number) {
    const total = studies.length;

    if (total === 0) {
      return 0;
    }

    return ((index % total) + total) % total;
  }

  function scrollToVirtualIndex(index: number, behavior: ScrollBehavior = "smooth") {
    const total = studies.length;

    if (total === 0) {
      return;
    }

    const normalizedIndex = index < 0 || index >= track.length ? middleOffset + getLogicalIndex(index) : index;
    const card = cardRefs.current[normalizedIndex];
    const scroller = scrollerRef.current;

    if (!card || !scroller) {
      return;
    }

    const nextLeft = scroller.scrollLeft + card.getBoundingClientRect().left - scroller.getBoundingClientRect().left;

    scroller.scrollTo({
      left: nextLeft,
      behavior,
    });

    const logicalIndex = getLogicalIndex(normalizedIndex);
    activeVirtualIndexRef.current = normalizedIndex;
    setActiveIndex(logicalIndex);
  }

  function handleScroll() {
    const scroller = scrollerRef.current;

    if (!scroller || studies.length === 0) {
      return;
    }

    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) {
        return;
      }

      const distance = Math.abs(card.offsetLeft - scroller.scrollLeft);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const logicalIndex = getLogicalIndex(closestIndex);
    activeVirtualIndexRef.current = closestIndex;

    if (logicalIndex !== activeIndexRef.current) {
      setActiveIndex(logicalIndex);
    }

    if (!isRecenteringRef.current && (closestIndex < studies.length || closestIndex >= studies.length * 2)) {
      const centeredIndex = middleOffset + logicalIndex;

      isRecenteringRef.current = true;
      activeVirtualIndexRef.current = centeredIndex;

      window.requestAnimationFrame(() => {
        scrollToVirtualIndex(centeredIndex, "auto");
        isRecenteringRef.current = false;
      });
    }
  }

  function handleManualStep(index: number) {
    scrollToVirtualIndex(index);
  }

  function handleWheel(event: ReactWheelEvent<HTMLDivElement>) {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;

    if (delta === 0) {
      return;
    }

    event.preventDefault();
    scroller.scrollBy({
      left: delta,
      behavior: "auto",
    });
  }

  return (
    <div ref={rootRef} className="relative">
      <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-2 sm:grid-cols-[3rem_minmax(0,1fr)_3rem] sm:gap-4">
        <button
          type="button"
          onClick={() => handleManualStep(activeVirtualIndexRef.current - 1)}
          aria-label="Previous case study"
          className="surface-soft inline-flex h-11 w-11 items-center justify-center rounded-full text-main transition hover:border-orange-200/40 hover:bg-white/10 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onWheel={handleWheel}
          className="case-carousel-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden py-2 sm:gap-5"
        >
          {track.map((study, index) => (
            <div
              key={`${study.slug}-${index}`}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="flex min-w-0 shrink-0 basis-full snap-start sm:basis-[calc((100%_-_1.25rem)/2)] lg:basis-[calc((100%_-_2.5rem)/3)]"
            >
              <CaseStudyCard caseStudy={study} compact />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => handleManualStep(activeVirtualIndexRef.current + 1)}
          aria-label="Next case study"
          className="surface-soft inline-flex h-11 w-11 items-center justify-center rounded-full text-main transition hover:border-orange-200/40 hover:bg-white/10 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {studies.map((study, index) => (
          <button
            key={study.slug}
            type="button"
            onClick={() => handleManualStep(middleOffset + index)}
            aria-label={`Go to ${study.title}`}
            className={`h-2.5 rounded-full transition ${
              index === activeIndex
                ? "w-8 bg-[var(--color-orange-strong)]"
                : "w-2.5 bg-white/20 hover:bg-white/35"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
