"use client";

import { useRouter } from "next/router";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillPill } from "@/components/ui/SkillPill";
import { getSkillGroups } from "@/content/skills";
import { getSiteCopy } from "@/content/site-copy";

export function SkillMatrix() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const skillGroups = getSkillGroups(router.locale);

  return (
    <section id="skills" className="border-b border-white/5 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={copy.value.eyebrow}
          title={copy.value.title}
          description={copy.value.description}
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-6">
              <h3 className="text-xl font-semibold text-slate-50">{group.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{group.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <SkillPill key={skill} label={skill} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
