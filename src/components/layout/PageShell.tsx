"use client";

import { useEffect, useLayoutEffect, type ReactNode } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useRouter } from "next/router";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const router = useRouter();

  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    window.history.scrollRestoration = "manual";

    const hash = router.asPath.split("#")[1];

    if (!hash) {
      if (router.pathname === "/") {
        window.scrollTo(0, 0);
      }
      return;
    }

    const targetId = decodeURIComponent(hash);
    let frameId = 0;
    let timeoutId = 0;

    function scrollToHash() {
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    frameId = requestAnimationFrame(() => {
      timeoutId = window.setTimeout(scrollToHash, 280);
    });

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
    };
  }, [router.asPath]);

  useEffect(() => {
    if (router.pathname !== "/") {
      return;
    }

    function handlePageShow(event: PageTransitionEvent) {
      if (event.persisted) {
        window.scrollTo(0, 0);
      }
    }

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, [router.pathname]);

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
