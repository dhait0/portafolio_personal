"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { getProfileLinks, mailTo } from "@/lib/profile";
import { getSiteCopy } from "@/content/site-copy";

const profileLinks = getProfileLinks();

export function CTASection() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/90 p-8 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-400">{copy.contact.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              {copy.contact.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-200">
              {copy.contact.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={mailTo(profileLinks.email)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              <Mail className="h-4 w-4" />
              {copy.contact.email}
            </Link>
            <Link
              href={profileLinks.freelancer}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              {copy.contact.freelancer}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              <Github className="h-4 w-4" />
              {copy.contact.github}
            </Link>
            <Link
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              <Linkedin className="h-4 w-4" />
              {copy.contact.linkedin}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
