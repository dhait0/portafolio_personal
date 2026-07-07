import { ChevronRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";

type ArchitectureDiagramProps = {
  architecture: CaseStudy["architecture"];
};

export function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  return (
    <div className="surface-strong rounded-3xl p-5 sm:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
        {architecture.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <div className="surface rounded-2xl px-4 py-3 text-sm text-muted">
              {step}
            </div>
            {index < architecture.length - 1 ? <ChevronRight className="hidden h-4 w-4 text-[var(--color-orange-strong)] md:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
