import { useEffect, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import i18n, { LANG_STORAGE_KEY } from "@/lib/i18n";
import { isRtl } from "@/lib/content";

const THEME_KEY = "mk-theme";

type Ctx = { lang: string; toggleLang: () => void; theme: string; toggleTheme: () => void };

export function useSiteChrome(): Ctx {
  const { i18n: inst } = useTranslation();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem(LANG_STORAGE_KEY);
    if (stored && stored !== inst.language) void inst.changeLanguage(stored);
    const storedTheme =
      localStorage.getItem(THEME_KEY) ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(storedTheme);
  }, [inst]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const apply = (lng: string) => {
      document.documentElement.lang = lng;
      document.documentElement.dir = isRtl(lng) ? "rtl" : "ltr";
    };
    apply(inst.language);
    inst.on("languageChanged", apply);
    return () => inst.off("languageChanged", apply);
  }, [inst]);

  return {
    lang: inst.language,
    theme,
    toggleLang: () => {
      const next = isRtl(inst.language) ? "en" : "fa";
      localStorage.setItem(LANG_STORAGE_KEY, next);
      void inst.changeLanguage(next);
    },
    toggleTheme: () => {
      const next = theme === "dark" ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      setTheme(next);
    },
  };
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let frame = 0;
    let cancelled = false;
    void import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      lenis = new Lenis({ duration: 1.1, smoothWheel: true });
      const raf = (time: number) => {
        lenis?.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);
  return <>{children}</>;
}

export { i18n };
