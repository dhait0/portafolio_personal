"use client";

import { useRouter } from "next/router";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectMetric } from "@/components/sections/ProjectMetric";
import type { LucideIcon } from "lucide-react";
import { Code2, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { getSiteCopy } from "@/content/site-copy";

const highlights = [
  { icon: Code2, label: "Frontend engineering" },
  { icon: Workflow, label: "Workflow automation" },
  { icon: Layers3, label: "Product systems" },
  { icon: ShieldCheck, label: "Delivery reliability" },
] satisfies Array<{ icon: LucideIcon; label: string }>;

export function AboutSection() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);

  return (
    <section id="about" className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow={copy.about.eyebrow}
            title={copy.about.title}
            description={copy.about.description}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {copy.about.metrics.map(([value, label]) => (
            <ProjectMetric key={value} value={value} label={label} />
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.about.highlights.map((label, index) => {
          const Icon = highlights[index].icon;

          return (
            <div key={label} className="surface rounded-2xl p-5 text-center">
              <Icon className="mx-auto h-5 w-5 text-[var(--color-orange-strong)]" />
              <p className="mt-3 text-sm text-muted">{label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
