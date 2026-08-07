import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { L, PROJECTS } from "@/lib/content";
import { COVERS } from "@/lib/covers";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title.en} — Case Study by Mohamad Kheradhoosh`;
    return {
      meta: [
        { title },
        { name: "description", content: project.subtitle.en },
        { property: "og:title", content: title },
        { property: "og:description", content: project.subtitle.en },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/work/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/work/${params.slug}` }],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const { project } = Route.useLoaderData();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const idx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length]!;

  const blocks: { label: { fa: string; en: string }; body: string }[] = [
    { label: { fa: "مسئله", en: "Problem" }, body: L(project.problem, lang) },
    { label: { fa: "پژوهش", en: "Research" }, body: L(project.research, lang) },
    { label: { fa: "فرایند", en: "Process" }, body: L(project.process, lang) },
    { label: { fa: "وایرفریم", en: "Wireframes" }, body: L(project.wireframes, lang) },
    { label: { fa: "سیستم طراحی", en: "Design System" }, body: L(project.designSystem, lang) },
    { label: { fa: "رابط نهایی", en: "Final UI" }, body: L(project.finalUi, lang) },
  ];

  return (
    <>
      <header className="container-editorial pt-16 pb-12 md:pt-24">
        <Reveal>
          <Link to="/work" className="link-underline text-sm text-muted-foreground">
            {t("common.allProjects")}
          </Link>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="text-hero mt-8 max-w-3xl">{L(project.title, lang)}</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {L(project.subtitle, lang)}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <dl className="rule-top mt-12 grid grid-cols-2 gap-8 pt-8 md:grid-cols-3">
            <div>
              <dt className="eyebrow">{L({ fa: "نقش", en: "Role" }, lang)}</dt>
              <dd className="mt-2 text-sm">{L(project.role, lang)}</dd>
            </div>
            <div>
              <dt className="eyebrow">{L({ fa: "صناعت", en: "Sector" }, lang)}</dt>
              <dd className="mt-2 text-sm">{L(project.sector, lang)}</dd>
            </div>
            <div>
              <dt className="eyebrow">{L({ fa: "سال", en: "Year" }, lang)}</dt>
              <dd className="mt-2 text-sm">{project.year}</dd>
            </div>
          </dl>
        </Reveal>
      </header>

      <div className="container-editorial">
        <Reveal>
          <img
            src={COVERS[project.cover]}
            alt=""
            width={1600}
            height={1000}
            className="aspect-16/10 w-full rounded-md bg-surface object-cover"
          />
        </Reveal>
      </div>

      <Section labelledBy="case-heading">
        <h2 id="case-heading" className="sr-only">
          {L(project.title, lang)}
        </h2>
        <div className="space-y-16">
          {blocks.map((b, i) => (
            <Reveal key={b.label.en} delay={0.04 * i}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
                <h3 className="text-sm font-medium text-muted-foreground md:col-span-3">
                  {L(b.label, lang)}
                </h3>
                <p className="max-w-2xl text-base leading-relaxed md:col-span-9">{b.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section labelledBy="results-heading" className="rule-top">
        <Reveal>
          <h2 id="results-heading" className="text-section">
            {L({ fa: "نتایج", en: "Results" }, lang)}
          </h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {project.results.map((r: { fa: string; en: string }, i: number) => (
            <Reveal as="li" key={r.en} delay={0.05 * i}>
              <p className="text-base leading-relaxed">
                <span className="text-accent">— </span>
                {L(r, lang)}
              </p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1}>
          <div className="mt-16 max-w-2xl">
            <h3 className="text-sm font-medium text-muted-foreground">
              {L({ fa: "آموخته‌ها", en: "Lessons Learned" }, lang)}
            </h3>
            <p className="mt-4 text-base leading-relaxed">{L(project.lessons, lang)}</p>
          </div>
        </Reveal>
      </Section>

      <Section className="rule-top">
        <Reveal>
          <p className="eyebrow">{t("common.next")}</p>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group mt-6 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight md:text-4xl"
          >
            {L(next.title, lang)}
            <ArrowRight
              className="size-6 text-muted-foreground transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
