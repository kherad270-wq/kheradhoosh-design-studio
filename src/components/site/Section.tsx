import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="container-editorial pt-20 pb-16 md:pt-28 md:pb-24">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="text-hero mt-6 max-w-3xl">{title}</h1>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
        </Reveal>
      ) : null}
    </header>
  );
}

export function Section({
  children,
  className = "",
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
}) {
  return (
    <section aria-labelledby={labelledBy} className={`container-editorial py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}
