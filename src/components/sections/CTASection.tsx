"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { getProfileLinks, mailTo } from "@/lib/profile";
import { getSiteCopy } from "@/content/site-copy";

const profileLinks = getProfileLinks();

export function CTASection() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="surface-strong rounded-[2rem] p-6 sm:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-orange-strong)] sm:tracking-[0.34em]">{copy.contact.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-main sm:text-4xl">
              {copy.contact.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              {copy.contact.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href={mailTo(profileLinks.email)}
              className="btn-primary px-6 py-3 text-sm"
            >
              <Mail className="h-4 w-4" />
              {copy.contact.email}
            </Link>
            {profileLinks.whatsapp ? (
              <Link
                href={profileLinks.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary px-6 py-3 text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                {copy.contact.whatsapp}
              </Link>
            ) : null}
            <Link
              href={profileLinks.freelancer}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-6 py-3 text-sm"
            >
              {copy.contact.freelancer}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={profileLinks.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-6 py-3 text-sm"
            >
              <Github className="h-4 w-4" />
              {copy.contact.github}
            </Link>
            <Link
              href={profileLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary px-6 py-3 text-sm"
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
