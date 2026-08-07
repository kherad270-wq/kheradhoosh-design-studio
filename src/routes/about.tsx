import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHeader, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { L, PILLARS, SKILL_GROUPS } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mohamad Kheradhoosh, Product Design Philosophy" },
      {
        name: "description",
        content:
          "The design philosophy of Mohamad Kheradhoosh: business, users, technology, strategy and leadership as one practice.",
      },
      { property: "og:title", content: "About — Mohamad Kheradhoosh" },
      {
        property: "og:description",
        content: "Design philosophy across business, users, technology, strategy and leadership.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <PageHeader eyebrow={t("about.eyebrow")} title={t("about.title")} lead={t("about.lead")} />

      <Section labelledBy="pillars-heading" className="rule-top">
        <h2 id="pillars-heading" className="sr-only">
          {t("about.eyebrow")}
        </h2>
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title.en} delay={0.05 * i}>
              <h3 className="text-2xl font-semibold tracking-tight">{L(p.title, lang)}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
                {L(p.body, lang)}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section labelledBy="skills-heading" className="rule-top">
        <Reveal>
          <p className="eyebrow">{t("skills.eyebrow")}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 id="skills-heading" className="text-section mt-6">
            {t("skills.title")}
          </h2>
        </Reveal>
        <div className="mt-16 space-y-14">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title.en} delay={0.04 * i}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
                <h3 className="text-sm font-medium text-muted-foreground md:col-span-3">
                  {L(group.title, lang)}
                </h3>
                <ul className="flex flex-wrap gap-2 md:col-span-9">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border px-4 py-2 text-sm text-foreground/85 transition-colors hover:border-accent/50 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
