import Link from "next/link";
import { useRouter } from "next/router";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
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
              className="flex items-center justify-between rounded-3xl border border-slate-700/80 bg-slate-900/80 px-6 py-5 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-2xl bg-slate-950/70 p-3 text-slate-200">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-50">{copy.contact.email}</p>
                  <p className="text-sm text-slate-400">{profileLinks.email}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </Link>

            <Link
              href={profileLinks.freelancer}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-3xl border border-slate-700/80 bg-slate-900/80 px-6 py-5 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-2xl bg-slate-950/70 p-3 text-slate-200">
                  <ArrowRight className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-50">{copy.contact.freelancer}</p>
                  <p className="text-sm text-slate-400">{copy.contact.labels.freelancer}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </Link>

            <Link
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-3xl border border-slate-700/80 bg-slate-900/80 px-6 py-5 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-2xl bg-slate-950/70 p-3 text-slate-200">
                  <Github className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-50">{copy.contact.github}</p>
                  <p className="text-sm text-slate-400">{copy.contact.labels.github}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </Link>

            <Link
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-3xl border border-slate-700/80 bg-slate-900/80 px-6 py-5 transition hover:border-slate-500 hover:bg-slate-800/90"
            >
              <div className="flex items-center gap-4">
                <span className="rounded-2xl bg-slate-950/70 p-3 text-slate-200">
                  <Linkedin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-semibold text-slate-50">{copy.contact.linkedin}</p>
                  <p className="text-sm text-slate-400">{copy.contact.labels.linkedin}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 text-slate-400" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
