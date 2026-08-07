import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, Download } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { Reveal, RevealWords } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { ProjectCard } from "@/components/site/ProjectCard";
import { AI_STEPS, L, PILLARS, PROFILE, PROJECTS, STATS } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohamad Kheradhoosh — Senior Product Designer & UX Strategist" },
      {
        name: "description",
        content:
          "Portfolio of Mohamad Kheradhoosh, senior product designer and AI product designer with 15+ years turning complex business challenges into user-centered digital products.",
      },
      { property: "og:title", content: "Mohamad Kheradhoosh — Senior Product Designer" },
      {
        property: "og:description",
        content:
          "15+ years of product design, design systems and AI-driven product workflows. Selected work, case studies and experience.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Mohamad Kheradhoosh",
          jobTitle: "Senior Product Designer",
          address: { "@type": "PostalAddress", addressCountry: "IR" },
          email: `mailto:${PROFILE.email}`,
          sameAs: [PROFILE.linkedin, PROFILE.behance],
          knowsAbout: ["Product Design", "Design Systems", "UX Strategy", "AI Product Design"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <section className="container-editorial pt-16 pb-8 md:pt-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <Reveal>
              <p className="eyebrow">{t("hero.eyebrow")}</p>
            </Reveal>
            <h1 className="text-display mt-8">
              <RevealWords text={t("hero.name")} />
            </h1>
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
                {t("hero.roles")}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                {t("hero.statement")}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/work"
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
                >
                  {t("common.viewProjects")}
                  <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                </Link>
                <a
                  href={PROFILE.resume}
                  download
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
                >
                  {t("common.downloadResume")}
                  <Download className="size-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <img
                src={portrait}
                alt={t("hero.portraitAlt")}
                width={1024}
                height={1280}
                className="aspect-4/5 w-full rounded-md object-cover grayscale"
              />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <dl className="rule-top mt-20 grid grid-cols-3 gap-6 pt-10">
            {STATS.map((s) => (
              <div key={s.key}>
                <dt className="sr-only">{t(`stats.${s.key}`)}</dt>
                <dd>
                  <span className="block text-3xl font-semibold tracking-tight md:text-5xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-xs text-muted-foreground md:text-sm">
                    {t(`stats.${s.key}`)}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <Section labelledBy="about-heading">
        <Reveal>
          <p className="eyebrow">{t("about.eyebrow")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="about-heading" className="text-section mt-6 max-w-3xl">
            {t("about.title")}
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {PILLARS.slice(0, 2).map((p, i) => (
            <Reveal key={p.title.en} delay={0.06 * i}>
              <h3 className="text-lg font-semibold tracking-tight">{L(p.title, lang)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {L(p.body, lang)}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            to="/about"
            className="link-underline mt-12 inline-flex items-center gap-2 text-sm text-foreground"
          >
            {t("nav.about")}
            <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      <Section labelledBy="work-heading" className="rule-top">
        <Reveal>
          <p className="eyebrow">{t("work.eyebrow")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="work-heading" className="text-section mt-6 max-w-2xl">
            {t("work.title")}
          </h2>
        </Reveal>
        <div className="mt-16 space-y-24">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      <Section labelledBy="ai-heading" className="rule-top">
        <Reveal>
          <p className="eyebrow">{t("ai.eyebrow")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="ai-heading" className="text-section mt-6 max-w-2xl">
            {t("ai.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {t("ai.lead")}
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {AI_STEPS.map((s, i) => (
            <Reveal key={s.step} delay={0.05 * i}>
              <span className="text-xs text-accent">{s.step}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{L(s.title, lang)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{L(s.body, lang)}</p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <Link
            to="/ai-workflow"
            className="link-underline mt-12 inline-flex items-center gap-2 text-sm text-foreground"
          >
            {t("nav.ai")}
            <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>

      <Section labelledBy="cta-heading" className="rule-top">
        <Reveal>
          <h2 id="cta-heading" className="text-section max-w-2xl">
            {t("contact.title")}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <Link
            to="/contact"
            className="mt-10 inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            {t("nav.contact")}
            <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
