"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArrowRight, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { getCaseStudyImage, type CaseStudy } from "@/content/case-studies";
import { cn } from "@/lib/utils";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  compact?: boolean;
};

export function CaseStudyCard({ caseStudy, compact }: CaseStudyCardProps) {
  const router = useRouter();
  const cover = getCaseStudyImage(caseStudy);

  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block h-full w-full outline-none focus-visible:ring-2 focus-visible:ring-orange-300/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-page-deep)]">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className={cn(
          "surface flex h-full flex-col rounded-3xl transition-colors group-hover:border-orange-200/40",
          compact ? "min-h-[460px] p-4 sm:min-h-[470px] sm:p-5" : "min-h-[300px] p-5 sm:p-6",
        )}
      >
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className={cn("relative", compact ? "aspect-[16/8.5]" : "aspect-[16/10]")}>
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 1024px) 86vw, 440px"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(11,23,36,0.92)] via-[rgba(11,23,36,0.18)] to-transparent" />
            <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-[rgba(11,23,36,0.72)] px-3 py-1 text-[0.65rem] uppercase tracking-[0.24em] text-muted sm:left-4 sm:top-4">
              {caseStudy.category}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-orange-strong)]">{caseStudy.category}</p>
            <h3 className={cn("mt-3 font-semibold text-main", compact ? "text-lg sm:text-[1.35rem]" : "text-xl sm:text-2xl")}>
              {caseStudy.title}
            </h3>
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 p-2 text-muted">
            <Lock className="h-4 w-4" />
          </div>
        </div>

        <p className={cn("mt-4 text-muted", compact ? "text-[0.92rem] leading-6" : "text-sm leading-6")}>{caseStudy.summary}</p>
        {!compact ? <p className="mt-4 text-sm leading-6 text-muted">{caseStudy.overview}</p> : null}

        <div className={cn("flex flex-wrap gap-2", compact ? "mt-4" : "mt-5")}>
          {caseStudy.techStack.slice(0, compact ? 3 : 4).map((tech) => (
            <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
              {tech}
            </span>
          ))}
        </div>

        <div className={cn("mt-auto", compact ? "pt-5" : "pt-6")}>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-orange-strong)] transition group-hover:text-[var(--color-orange-strong)]">
            {router.locale === "en" ? "View case study" : "Ver caso"}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
