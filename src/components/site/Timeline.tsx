import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { EXPERIENCES, L } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Timeline() {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  const [open, setOpen] = useState(0);

  return (
    <ol className="mt-16">
      {EXPERIENCES.map((exp, i) => {
        const expanded = open === i;
        return (
          <Reveal as="li" key={exp.company.en} delay={0.04 * i} className="rule-top">
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? -1 : i)}
                aria-expanded={expanded}
                className="grid w-full grid-cols-1 items-baseline gap-2 py-8 text-start md:grid-cols-12 md:gap-6"
              >
                <span className="text-sm text-muted-foreground md:col-span-3">
                  {L(exp.period, lang)}
                </span>
                <span className="text-xl font-semibold tracking-tight md:col-span-5">
                  {L(exp.company, lang)}
                </span>
                <span className="text-sm text-muted-foreground md:col-span-3">
                  {L(exp.role, lang)}
                </span>
                <span className="hidden justify-self-end text-muted-foreground md:col-span-1 md:block">
                  {expanded ? (
                    <Minus className="size-4" aria-hidden="true" />
                  ) : (
                    <Plus className="size-4" aria-hidden="true" />
                  )}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-10 pb-12 md:grid-cols-12 md:gap-6">
                    <div className="md:col-span-3">
                      <p className="eyebrow">{L({ fa: "صناعت", en: "Industry" }, lang)}</p>
                      <p className="mt-3 text-sm text-muted-foreground">{L(exp.industry, lang)}</p>
                    </div>
                    <div className="md:col-span-5">
                      <p className="text-base leading-relaxed">{L(exp.summary, lang)}</p>
                      <p className="eyebrow mt-8">
                        {L({ fa: "مسئولیت‌ها", en: "Responsibilities" }, lang)}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {exp.responsibilities.map((r) => (
                          <li key={r.en} className="text-sm leading-relaxed text-muted-foreground">
                            {L(r, lang)}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="md:col-span-4">
                      <p className="eyebrow">{L({ fa: "تأثیر و دستاورد", en: "Impact" }, lang)}</p>
                      <ul className="mt-3 space-y-3">
                        {exp.impact.map((r) => (
                          <li key={r.en} className="text-sm leading-relaxed">
                            <span className="text-accent">— </span>
                            {L(r, lang)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        );
      })}
    </ol>
  );
}
