import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, Github, Mail, CircleDotDashed } from "lucide-react";
import { getProfileLinks, mailTo } from "@/lib/profile";
import { getSiteCopy } from "@/content/site-copy";

const profileLinks = getProfileLinks();

export function Navbar() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const nextLocale = router.locale === "en" ? "es" : "en";
  const statusLabel = router.locale === "en" ? "live" : "activo";

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.65rem] border border-slate-700/80 bg-slate-950/95 shadow-xl shadow-black/20">
        <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
          <Link href="/#hero" className="group flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-sm font-semibold text-slate-200 transition group-hover:scale-105">
              SC
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-slate-50">Sebastian Camargo</p>
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-2 py-0.5 text-[10px] uppercase tracking-[0.3em] text-slate-300">
                  <CircleDotDashed className="h-3 w-3" />
                  {statusLabel}
                </span>
              </div>
              <p className="hidden text-xs text-slate-300 sm:block">{copy.brand}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {[
              ["/#about", copy.nav.about],
              ["/#skills", copy.nav.skills],
              ["/case-studies", copy.nav.caseStudies],
              ["/#process", copy.nav.process],
              ["/#contact", copy.nav.contact],
            ].map(([href, label]) => (
              <Link
                key={label}
                href={href}
                className="rounded-full border border-slate-700/80 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800/90 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <Link
              href={router.asPath}
              locale={nextLocale}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              {copy.languageLabel}: {copy.language}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              {copy.nav.contact}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Link
            href={mailTo(profileLinks.email)}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-200 sm:hidden"
          >
            <Mail className="h-4 w-4" />
            {copy.nav.contact}
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-slate-800/80 px-4 py-3 lg:hidden">
          {[
            ["/#about", copy.nav.about],
            ["/#skills", copy.nav.skills],
            ["/case-studies", copy.nav.caseStudies],
            ["/#process", copy.nav.process],
            ["/#contact", copy.nav.contact],
          ].map(([href, label]) => (
            <Link
              key={label}
              href={href}
              className="whitespace-nowrap rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              {label}
            </Link>
          ))}
          <Link
            href={router.asPath}
            locale={nextLocale}
            className="whitespace-nowrap rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/90"
          >
            {copy.language}
          </Link>
          <Link
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-xs text-slate-200 transition hover:border-slate-500 hover:bg-slate-800/90"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
