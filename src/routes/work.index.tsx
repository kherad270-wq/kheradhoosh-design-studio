import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHeader, Section } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { PROJECTS } from "@/lib/content";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Selected Work — Product Design Case Studies" },
      {
        name: "description",
        content:
          "Selected product design case studies by Mohamad Kheradhoosh: mobile banking, AI tooling and marketplace commerce, with problem, process and results.",
      },
      { property: "og:title", content: "Selected Work — Mohamad Kheradhoosh" },
      {
        property: "og:description",
        content: "Case studies covering problem, research, process, design system and outcomes.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const { t } = useTranslation();
  return (
    <>
      <PageHeader eyebrow={t("work.eyebrow")} title={t("work.title")} lead={t("work.lead")} />
      <Section labelledBy="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          {t("work.title")}
        </h2>
        <div className="space-y-28">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>
    </>
  );
}
