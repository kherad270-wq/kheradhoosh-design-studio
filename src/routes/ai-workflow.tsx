import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { PageHeader, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { AI_STEPS, AI_TOOLS, L } from "@/lib/content";

export const Route = createFileRoute("/ai-workflow")({
  head: () => ({
    meta: [
      { title: "AI Workflow — AI in a Senior Product Design Practice" },
      {
        name: "description",
        content:
          "How Mohamad Kheradhoosh integrates ChatGPT, Claude, Gemini, Lovable, Cursor and more into research, ideation, prototyping and implementation.",
      },
      { property: "og:title", content: "AI Workflow — Mohamad Kheradhoosh" },
      {
        property: "og:description",
        content: "AI as an accelerator across research, ideation, prototyping and implementation.",
      },
      { property: "og:url", content: "/ai-workflow" },
    ],
    links: [{ rel: "canonical", href: "/ai-workflow" }],
  }),
  component: AiWorkflow,
});

function AiWorkflow() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <PageHeader eyebrow={t("ai.eyebrow")} title={t("ai.title")} lead={t("ai.lead")} />

      <Section labelledBy="steps-heading" className="rule-top">
        <h2 id="steps-heading" className="sr-only">
          {t("ai.eyebrow")}
        </h2>
        <ol className="space-y-16">
          {AI_STEPS.map((s, i) => (
            <Reveal as="li" key={s.step} delay={0.04 * i}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-6">
                <span className="text-sm text-accent md:col-span-2">{s.step}</span>
                <h3 className="text-2xl font-semibold tracking-tight md:col-span-4">
                  {L(s.title, lang)}
                </h3>
                <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:col-span-6">
                  {L(s.body, lang)}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section labelledBy="tools-heading" className="rule-top">
        <Reveal>
          <h2 id="tools-heading" className="text-section">
            {t("ai.toolsTitle")}
          </h2>
        </Reveal>
        <ul className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {AI_TOOLS.map((tool, i) => (
            <Reveal as="li" key={tool.name} delay={0.03 * i} className="rule-top pt-6">
              <h3 className="text-base font-semibold tracking-tight">{tool.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {L(tool.use, lang)}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
