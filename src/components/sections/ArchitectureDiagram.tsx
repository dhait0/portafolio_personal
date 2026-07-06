import { ChevronRight } from "lucide-react";
import type { CaseStudy } from "@/content/case-studies";

type ArchitectureDiagramProps = {
  architecture: CaseStudy["architecture"];
};

export function ArchitectureDiagram({ architecture }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-3xl border border-slate-700/80 bg-slate-950/80 p-6">
      <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center">
        {architecture.map((step, index) => (
          <div key={step} className="flex items-center gap-3">
            <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 text-sm text-slate-200">
              {step}
            </div>
            {index < architecture.length - 1 ? <ChevronRight className="hidden h-4 w-4 text-slate-500 md:block" /> : null}
          </div>
        ))}
      </div>
    </div>
  );
}
