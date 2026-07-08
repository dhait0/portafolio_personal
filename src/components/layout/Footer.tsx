"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { getSiteCopy } from "@/content/site-copy";

export function Footer() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);

  return (
    <footer className="border-t border-white/10 bg-[var(--color-panel-strong)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-subtle sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/brand/sebastian-camargo-logo.png"
            alt="Sebastian Camargo"
            width={250}
            height={54}
            className="h-10 w-auto rounded-lg object-contain"
          />
          <p className="sr-only">© 2026 Sebastian Camargo. {copy.brand}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/#hero" className="transition hover:text-main">
            {copy.nav.home}
          </Link>
          <Link href="/about" className="transition hover:text-main">
            {copy.nav.about}
          </Link>
          <Link href="/case-studies" className="transition hover:text-main">
            {copy.nav.caseStudies}
          </Link>
          <Link href="/contact" className="transition hover:text-main">
            {copy.nav.contact}
          </Link>
          <Link href="https://vercel.com" target="_blank" rel="noreferrer" className="transition hover:text-main">
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  );
}
