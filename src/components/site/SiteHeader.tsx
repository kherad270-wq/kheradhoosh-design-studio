import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useSiteChrome } from "./chrome";

const NAV = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/experience", key: "nav.experience" },
  { to: "/work", key: "nav.work" },
  { to: "/ai-workflow", key: "nav.ai" },
  { to: "/contact", key: "nav.contact" },
] as const;

export function SiteHeader() {
  const { t } = useTranslation();
  const { theme, toggleTheme, toggleLang, lang } = useSiteChrome();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md">
      <div className="container-editorial flex h-[72px] items-center justify-between gap-6">
        <Link
          to="/"
          className="text-[0.95rem] font-semibold tracking-tight text-foreground"
          aria-label={t("hero.name")}
        >
          {t("hero.name")}
        </Link>

        <nav aria-label={t("nav.menu")} className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={toggleLang}
            aria-label={t("common.lang")}
            className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-md px-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Languages className="size-4" aria-hidden="true" />
            <span aria-hidden="true">{lang === "en" ? "FA" : "EN"}</span>
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t("common.theme")}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="size-4" aria-hidden="true" />
            ) : (
              <Moon className="size-4" aria-hidden="true" />
            )}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav.close") : t("nav.menu")}
            aria-expanded={open}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-foreground md:hidden"
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-border" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[73px] z-40 bg-background md:hidden"
          >
            <nav className="container-editorial flex flex-col gap-2 pt-10" aria-label={t("nav.menu")}>
              {NAV.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block py-3 text-3xl font-semibold tracking-tight text-foreground/80 data-[status=active]:text-foreground"
                  >
                    {t(item.key)}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
