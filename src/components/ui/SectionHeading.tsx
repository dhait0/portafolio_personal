type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-orange-strong)] sm:tracking-[0.34em]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-main sm:text-4xl sm:leading-tight">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p> : null}
    </div>
  );
}
