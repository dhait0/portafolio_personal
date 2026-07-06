import { cn } from "@/lib/utils";

type SkillPillProps = {
  label: string;
  className?: string;
};

export function SkillPill({ label, className }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1.5 text-sm text-slate-200 transition",
        "hover:border-slate-500 hover:bg-slate-800/90 hover:text-white",
        className,
      )}
    >
      {label}
    </span>
  );
}
