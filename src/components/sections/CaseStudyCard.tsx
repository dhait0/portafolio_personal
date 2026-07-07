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
    <Link href={`/case-studies/${caseStudy.slug}`} className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className={cn(
          "flex h-full flex-col rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6 transition-colors group-hover:border-sky-500/40",
          compact ? "min-h-[220px]" : "min-h-[320px]",
        )}
      >
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-950/60">
          <div className="relative aspect-[16/10]">
            <Image
              src={cover.src}
              alt={cover.alt}
              fill
              sizes="(max-width: 1024px) 86vw, 440px"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-slate-200">
              {caseStudy.category}
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">{caseStudy.category}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-50">{caseStudy.title}</h3>
          </div>
          <div className="rounded-full border border-slate-700/80 bg-slate-950/60 p-2 text-slate-300">
            <Lock className="h-4 w-4" />
          </div>
        </div>

        <p className="mt-4 text-sm leading-6 text-slate-300">{caseStudy.summary}</p>
        {!compact ? <p className="mt-4 text-sm leading-6 text-slate-200">{caseStudy.overview}</p> : null}

        <div className="mt-5 flex flex-wrap gap-2">
          {caseStudy.techStack.slice(0, compact ? 3 : 4).map((tech) => (
            <span key={tech} className="rounded-full border border-slate-700/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-sky-300 transition group-hover:text-sky-200">
            {router.locale === "en" ? "View case study" : "Ver caso"}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </motion.article>
    </Link>
  );
}
