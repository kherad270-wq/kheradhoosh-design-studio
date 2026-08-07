import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
import { PROFILE } from "@/lib/content";

export function SiteFooter() {
  const { t } = useTranslation();
  return (
    <footer className="rule-top mt-32">
      <div className="container-editorial flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {t("footer.credit")} · {t("footer.year")}
        </p>
        <nav aria-label={t("nav.menu")} className="flex flex-wrap items-center gap-6 text-sm">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.behance}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline text-muted-foreground transition-colors hover:text-foreground"
          >
            Behance
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-underline text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("common.email")}
          </a>
          <Link
            to="/contact"
            className="link-underline text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("nav.contact")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
