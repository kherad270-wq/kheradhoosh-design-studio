import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHeader } from "@/components/site/Section";
import { Timeline } from "@/components/site/Timeline";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Mohamad Kheradhoosh, 15+ Years in Product Design" },
      {
        name: "description",
        content:
          "Roles, responsibilities and measurable impact across fintech, e-commerce, SaaS and AI tooling over fifteen years of product design.",
      },
      { property: "og:title", content: "Experience — Mohamad Kheradhoosh" },
      {
        property: "og:description",
        content: "Fifteen years of product design leadership across fintech, commerce and AI tooling.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader eyebrow={t("experience.eyebrow")} title={t("experience.title")} />
      <section aria-labelledby="timeline-heading" className="container-editorial pb-16">
        <h2 id="timeline-heading" className="sr-only">
          {t("experience.title")}
        </h2>
        <Timeline />
      </section>
    </>
  );
}
