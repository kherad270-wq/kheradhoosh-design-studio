import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { L, type Project } from "@/lib/content";
import { COVERS } from "@/lib/covers";
import { Reveal } from "./Reveal";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <Reveal as="article" delay={0.05 * index} className="group">
      <Link
        to="/work/$slug"
        params={{ slug: project.slug }}
        className="block focus-visible:outline-offset-8"
      >
        <div className="overflow-hidden rounded-md bg-surface">
          <img
            src={COVERS[project.cover]}
            alt=""
            width={1600}
            height={1000}
            loading={index === 0 ? "eager" : "lazy"}
            className="aspect-16/10 w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
          />
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight">{L(project.title, lang)}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {L(project.subtitle, lang)}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              {L(project.sector, lang)} · {L(project.role, lang)} · {project.year}
            </p>
          </div>
          <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors group-hover:text-accent">
            <span className="hidden sm:inline">{t("common.readCase")}</span>
            <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
