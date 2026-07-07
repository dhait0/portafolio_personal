import Link from "next/link";
import { useRouter } from "next/router";
import { Github, Linkedin, Mail, ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProfileLinks, mailTo } from "@/lib/profile";
import { getSiteCopy } from "@/content/site-copy";
import { SeoHead } from "@/components/seo/SeoHead";

const profileLinks = getProfileLinks();

export default function ContactPage() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);

  return (
    <>
      <SeoHead title={`${copy.contact.title} | Sebastian Camargo`} description={copy.contact.description} />

      <main className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow={copy.contact.eyebrow}
            title={copy.contact.title}
            description={copy.contact.description}
          />

          <div className="mt-10 grid gap-4">
            <Link
              href={mailTo(profileLinks.email)}
              className="surface flex items-center justify-between gap-4 rounded-3xl px-4 py-5 transition hover:border-orange-200/40 hover:bg-white/10 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="shrink-0 rounded-2xl bg-white/5 p-3 text-[var(--color-orange-strong)]">
                  <Mail className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-main">{copy.contact.email}</p>
                  <p className="break-all text-sm text-subtle">{profileLinks.email}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-subtle" />
            </Link>

            {profileLinks.whatsapp ? (
              <Link
                href={profileLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="surface flex items-center justify-between gap-4 rounded-3xl px-4 py-5 transition hover:border-orange-200/40 hover:bg-white/10 sm:px-6"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="shrink-0 rounded-2xl bg-white/5 p-3 text-[var(--color-orange-strong)]">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-main">{copy.contact.whatsapp}</p>
                    <p className="text-sm text-subtle">{copy.contact.labels.whatsapp}</p>
                  </div>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-subtle" />
              </Link>
            ) : null}

            <Link
              href={profileLinks.freelancer}
              target="_blank"
              rel="noreferrer"
              className="surface flex items-center justify-between gap-4 rounded-3xl px-4 py-5 transition hover:border-orange-200/40 hover:bg-white/10 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="shrink-0 rounded-2xl bg-white/5 p-3 text-[var(--color-blue)]">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-main">{copy.contact.freelancer}</p>
                  <p className="text-sm text-subtle">{copy.contact.labels.freelancer}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-subtle" />
            </Link>

            <Link
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className="surface flex items-center justify-between gap-4 rounded-3xl px-4 py-5 transition hover:border-orange-200/40 hover:bg-white/10 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="shrink-0 rounded-2xl bg-white/5 p-3 text-[var(--color-blue)]">
                  <Github className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-main">{copy.contact.github}</p>
                  <p className="text-sm text-subtle">{copy.contact.labels.github}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-subtle" />
            </Link>

            <Link
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="surface flex items-center justify-between gap-4 rounded-3xl px-4 py-5 transition hover:border-orange-200/40 hover:bg-white/10 sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="shrink-0 rounded-2xl bg-white/5 p-3 text-[var(--color-blue)]">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-main">{copy.contact.linkedin}</p>
                  <p className="text-sm text-subtle">{copy.contact.labels.linkedin}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-subtle" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
