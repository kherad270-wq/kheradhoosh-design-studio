import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, Section } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { PROFILE } from "@/lib/content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mohamad Kheradhoosh, Product Designer" },
      {
        name: "description",
        content:
          "Get in touch with Mohamad Kheradhoosh for product design collaborations, remote roles and design advisory. LinkedIn, Behance, email and resume.",
      },
      { property: "og:title", content: "Contact — Mohamad Kheradhoosh" },
      {
        property: "og:description",
        content: "Available for collaborations, remote roles and product design advisory.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useTranslation();

  const links = [
    { label: "LinkedIn", href: PROFILE.linkedin, external: true },
    { label: "Behance", href: PROFILE.behance, external: true },
    { label: t("common.email"), href: `mailto:${PROFILE.email}`, external: false },
    { label: t("common.resume"), href: PROFILE.resume, external: false },
  ];

  return (
    <>
      <PageHeader eyebrow={t("contact.eyebrow")} title={t("contact.title")} lead={t("contact.lead")} />
      <Section labelledBy="contact-links-heading">
        <h2 id="contact-links-heading" className="sr-only">
          {t("contact.eyebrow")}
        </h2>
        <ul>
          {links.map((l, i) => (
            <Reveal as="li" key={l.label} delay={0.05 * i} className="rule-top">
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                className="group flex items-center justify-between gap-6 py-8"
              >
                <span className="text-2xl font-semibold tracking-tight md:text-4xl">{l.label}</span>
                <ArrowUpRight
                  className="size-5 text-muted-foreground transition-colors group-hover:text-accent rtl:-scale-x-100"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1}>
          <p className="mt-16 text-sm text-muted-foreground">{PROFILE.email}</p>
        </Reveal>
      </Section>
    </>
  );
}
