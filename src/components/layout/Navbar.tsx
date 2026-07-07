import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, Github, Mail, CircleDotDashed, Languages } from "lucide-react";
import { getProfileLinks, mailTo } from "@/lib/profile";
import { getSiteCopy } from "@/content/site-copy";

const profileLinks = getProfileLinks();

export function Navbar() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);
  const currentLocale = router.locale === "en" ? "en" : "es";
  const statusLabel = router.locale === "en" ? "live" : "activo";
  const languageLabel = currentLocale.toUpperCase();

  function handleLanguageChange(locale: string) {
    void router.push(router.asPath, router.asPath, { locale });
  }

  return (
    <header className="sticky top-2 z-50 px-2 sm:top-4 sm:px-6 lg:px-8">
      <div className="surface-strong mx-auto max-w-7xl rounded-3xl">
        <div className="flex items-center justify-between gap-3 px-3 py-3 sm:px-5">
          <Link href="/#hero" className="group flex items-center gap-3">
            <span className="surface-soft flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold text-main transition group-hover:scale-105 sm:h-11 sm:w-11">
              SC
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-semibold text-main">Sebastian Camargo</p>
                <span className="hidden items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-[0.24em] text-muted sm:inline-flex">
                  <CircleDotDashed className="h-3 w-3" />
                  {statusLabel}
                </span>
              </div>
              <p className="hidden max-w-[18rem] truncate text-xs text-muted sm:block">{copy.brand}</p>
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
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-muted transition hover:border-orange-200/40 hover:bg-white/[0.07] hover:text-main"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <label className="btn-secondary relative px-3 py-2 text-sm">
              <Languages className="h-4 w-4 text-[var(--color-orange-strong)]" />
              <span>{languageLabel}</span>
              <select
                aria-label={copy.languageLabel}
                value={currentLocale}
                onChange={(event) => handleLanguageChange(event.target.value)}
                className="absolute inset-0 cursor-pointer opacity-0"
              >
                <option value="es">ES - Español</option>
                <option value="en">EN - English</option>
              </select>
            </label>
            <Link
              href="/contact"
              className="btn-primary px-4 py-2 text-sm"
            >
              {copy.nav.contact}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <Link
            href={mailTo(profileLinks.email)}
            className="btn-secondary shrink-0 px-3 py-2 text-sm sm:hidden"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex gap-2 overflow-x-auto border-t border-white/10 px-3 py-3 sm:px-4 lg:hidden">
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
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted transition hover:border-orange-200/40 hover:bg-white/10 hover:text-main"
            >
              {label}
            </Link>
          ))}
          <label className="relative inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-muted">
            <Languages className="h-3.5 w-3.5 text-[var(--color-orange-strong)]" />
            <span>{languageLabel}</span>
            <select
              aria-label={copy.languageLabel}
              value={currentLocale}
              onChange={(event) => handleLanguageChange(event.target.value)}
              className="absolute inset-0 cursor-pointer opacity-0"
            >
              <option value="es">ES - Español</option>
              <option value="en">EN - English</option>
            </select>
          </label>
          <Link
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted transition hover:border-orange-200/40 hover:bg-white/10 hover:text-main"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}
