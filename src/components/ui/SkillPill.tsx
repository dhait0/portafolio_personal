import { cn } from "@/lib/utils";

type SkillPillProps = {
  label: string;
  className?: string;
};

export function SkillPill({ label, className }: SkillPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-muted transition",
        "hover:border-orange-200/40 hover:bg-white/10 hover:text-main",
        className,
      )}
    >
      {label}
    </span>
  );
}
