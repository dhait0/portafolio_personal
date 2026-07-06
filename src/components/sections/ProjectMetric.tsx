type ProjectMetricProps = {
  value: string;
  label: string;
};

export function ProjectMetric({ value, label }: ProjectMetricProps) {
  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 p-5">
      <p className="text-2xl font-semibold text-slate-50">{value}</p>
      <p className="mt-1 text-sm leading-6 text-slate-400">{label}</p>
    </div>
  );
}
