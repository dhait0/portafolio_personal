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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,_rgba(45,212,255,0.12),transparent_28%),radial-gradient(circle_at_80%_14%,_rgba(14,165,233,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_18%)]" />
      <div className="absolute inset-0 bg-grid-fade [background-size:84px_84px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.86),transparent_92%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-4 py-2 text-sm text-slate-200">
            <Bot className="h-4 w-4" />
            {copy.hero.badge}
          </div>

          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl xl:text-[4rem] xl:leading-[0.98]">
            {copy.hero.title}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {copy.hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
            >
              {copy.hero.ctas.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800/90"
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
                className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 transition hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800/90"
              >
                <p className="text-xs uppercase tracking-[0.34em] text-slate-500">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            {copy.hero.chips.map((tag) => (
              <span key={tag} className="rounded-full border border-slate-700/80 bg-slate-950/70 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
          className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] border border-slate-700/80 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(10,15,24,0.94))] p-4 lg:min-h-[560px] lg:p-6"
        >
          <div className="absolute left-8 top-10 h-28 w-28 rounded-full bg-slate-400/10 blur-3xl" />
          <div className="absolute right-8 top-12 h-28 w-28 rounded-full bg-sky-400/8 blur-3xl" />

          <div className="relative grid h-full gap-4">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-slate-500">{copy.hero.signal}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-50">{copy.hero.signalValue}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{copy.hero.floating.delivery[1]}</p>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3 text-slate-200">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            <div className="rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-4 sm:p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-slate-500">{copy.hero.stackLabel}</p>
                  <p className="mt-2 text-sm text-slate-300">{copy.hero.stackValue}</p>
                </div>
                <div className="rounded-2xl border border-slate-700/80 bg-slate-950/70 p-2 text-slate-300">
                  <Braces className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {[
                  {
                    title: "Frontend systems",
                    copy: copy.about.description,
                    icon: LayoutDashboard,
                  },
                  {
                    title: "Automation layer",
                    copy: copy.hero.floating.automation[1],
                    icon: Workflow,
                  },
                  {
                    title: "Delivery layer",
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
                      className="rounded-[1.2rem] border border-slate-700/80 bg-slate-950/70 px-4 py-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-2 text-slate-200">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-slate-50">{item.title}</p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">{item.copy}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-700/80 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.34em] text-slate-500">{copy.hero.signal}</p>
              <div className="mt-3 grid gap-2">
                {copy.hero.stats.map(([value, detail]) => (
                  <div key={value} className="rounded-2xl border border-slate-700/80 bg-slate-950/70 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display text-xl font-bold text-slate-50">{value}</p>
                      <LineChart className="h-4 w-4 text-slate-400" />
                    </div>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{detail}</p>
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
