type ProjectMetricProps = {
  value: string;
  label: string;
};

export function ProjectMetric({ value, label }: ProjectMetricProps) {
  return (
    <div className="surface rounded-2xl p-5">
      <p className="text-2xl font-semibold text-main">{value}</p>
      <p className="mt-1 text-sm leading-6 text-muted">{label}</p>
    </div>
  );
}
