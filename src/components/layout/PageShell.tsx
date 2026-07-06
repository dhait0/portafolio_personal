"use client";

import type { ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const router = useRouter();

  return (
    <MotionConfig reducedMotion="user">
      <>
        <div className="page-noise" />
        <Navbar />
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={router.asPath}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
      </>
    </MotionConfig>
  );
}
