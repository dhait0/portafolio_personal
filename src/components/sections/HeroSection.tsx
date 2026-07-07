"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Braces,
  LayoutDashboard,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { getSiteCopy } from "@/content/site-copy";

export function HeroSection() {
  const router = useRouter();
  const copy = getSiteCopy(router.locale);

  return (
    <section id="hero" className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,_rgba(95,180,217,0.18),transparent_30%),radial-gradient(circle_at_80%_14%,_rgba(231,161,91,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_20%)]" />
      <div className="absolute inset-0 bg-grid-fade [background-size:84px_84px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.86),transparent_92%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20 xl:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="surface-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-main">
            <Bot className="h-4 w-4" />
            {copy.hero.badge}
          </div>

          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-main sm:text-4xl lg:text-5xl xl:text-[4rem] xl:leading-[0.98]">
            {copy.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {copy.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="btn-primary px-6 py-3 text-sm"
            >
              {copy.hero.ctas.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="btn-secondary px-6 py-3 text-sm"
            >
              {copy.hero.ctas.secondary}
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              [copy.hero.signal, copy.hero.signalValue],
              [copy.hero.stackLabel, copy.hero.stackValue],
              [copy.hero.sideLabels[0], copy.hero.sideLabels[1]],
            ].map(([title, detail]) => (
              <div
                key={title}
                className="surface rounded-2xl p-4 transition hover:-translate-y-1 hover:border-orange-200/40"
              >
                <p className="text-xs uppercase tracking-[0.26em] text-subtle">{title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
            {copy.hero.chips.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          className="surface-strong relative min-h-[420px] overflow-hidden rounded-[2rem] p-4 sm:rounded-[2.5rem] lg:min-h-[520px] lg:p-6"
        >
          <div className="absolute left-8 top-10 h-28 w-28 rounded-full bg-[rgba(95,180,217,0.18)] blur-3xl" />
          <div className="absolute right-8 top-12 h-28 w-28 rounded-full bg-[rgba(231,161,91,0.18)] blur-3xl" />

          <div className="relative grid h-full gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="surface-soft rounded-3xl p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-subtle">{copy.hero.signal}</p>
                  <p className="mt-2 text-lg font-semibold text-main">{copy.hero.signalValue}</p>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy.hero.floating.delivery[1]}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-[var(--color-orange-strong)]">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            <div className="surface rounded-[2rem] p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.26em] text-subtle">{copy.hero.stackLabel}</p>
                  <p className="mt-2 text-sm text-muted">{copy.hero.stackValue}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-2 text-[var(--color-blue)]">
                  <Braces className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  {
                    title: router.locale === "en" ? "Clear web screens" : "Pantallas web claras",
                    copy: copy.about.description,
                    icon: LayoutDashboard,
                  },
                  {
                    title: router.locale === "en" ? "Automatic tasks" : "Tareas automáticas",
                    copy: copy.hero.floating.automation[1],
                    icon: Workflow,
                  },
                  {
                    title: router.locale === "en" ? "Launch support" : "Soporte para publicar",
                    copy: copy.hero.floating.delivery[1],
                    icon: ShieldCheck,
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.14 + index * 0.05 }}
                      className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-2xl border border-white/10 bg-[rgba(95,180,217,0.12)] p-2 text-[var(--color-blue)]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-main">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-muted">{item.copy}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="surface rounded-3xl p-4">
              <p className="text-xs uppercase tracking-[0.26em] text-subtle">{copy.hero.signal}</p>
              <div className="mt-3 grid gap-2">
                {copy.hero.stats.map(([value, detail]) => (
                  <div key={value} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-xl font-bold text-main">{value}</p>
                      <LineChart className="h-4 w-4 text-[var(--color-orange-strong)]" />
                    </div>
                    <p className="mt-1 text-xs leading-5 text-muted">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
