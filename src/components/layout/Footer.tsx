"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { getSiteCopy } from "@/content/site-copy";

export function Footer() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© 2026 Sebastian Camargo. {copy.brand}</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/#hero" className="transition hover:text-slate-200">
            {copy.nav.home}
          </Link>
          <Link href="/case-studies" className="transition hover:text-slate-200">
            {copy.nav.caseStudies}
          </Link>
          <Link href="/contact" className="transition hover:text-slate-200">
            {copy.nav.contact}
          </Link>
          <Link href="https://vercel.com" target="_blank" rel="noreferrer" className="transition hover:text-slate-200">
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  );
}
