type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-slate-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl sm:leading-tight">{title}</h2>
      {description ? <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p> : null}
    </div>
  );
}
