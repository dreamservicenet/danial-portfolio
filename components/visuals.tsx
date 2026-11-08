const A = "#A855F7", G = "#C084FC", V = "#7C3AED";

/** LLM project: tokens -> embeddings -> attention arcs -> transformer block. */
export function LlmVisual() {
  const toks = ["The", "model", "reads", "text"];
  const x = (i: number) => 40 + i * 70;
  return (
    <svg viewBox="0 0 520 220" role="img" aria-label="Diagram: tokens become embeddings, connect through attention, and pass into a transformer block" className="h-auto w-full">
      {toks.map((t, i) => (
        <g key={t}>
          <rect x={x(i) - 28} y="168" width="56" height="26" rx="6" fill="#171222" stroke={A} strokeOpacity=".5" />
          <text x={x(i)} y="185" textAnchor="middle" fontSize="11" fill="#F5F3FF" fontFamily="monospace">{t}</text>
          <line x1={x(i)} y1="168" x2={x(i)} y2="122" stroke={A} strokeOpacity=".4" />
          {[0, 1, 2].map((r) => <rect key={r} x={x(i) - 15 + r * 10} y="104" width="8" height="18" rx="2" fill={r === 1 ? G : V} opacity={0.5 + r * 0.2} />)}
        </g>
      ))}
      {[[0,2],[1,3],[0,3],[1,2]].map(([a, b], i) => (
        <path key={i} d={`M${x(a)} 100 Q${(x(a) + x(b)) / 2} ${60 - i * 8} ${x(b)} 100`} fill="none" stroke={G} strokeOpacity={0.35 + i * 0.12} />
      ))}
      <text x="40" y="22" fontSize="10" fill="#A8A1B8" fontFamily="monospace">self-attention</text>
      <path d="M300 130 H345" stroke={A} strokeOpacity=".6" markerEnd="url(#arr)" />
      <defs><marker id="arr" viewBox="0 0 8 8" refX="6" refY="4" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L8 4L0 8z" fill={A} /></marker></defs>
      <rect x="350" y="40" width="130" height="150" rx="10" fill="#100D18" stroke={A} strokeOpacity=".6" />
      {["Multi-head attention", "Add & Norm", "Feed forward", "Add & Norm"].map((l, i) => (
        <g key={`${i}-${l}`}>
          <rect x="364" y={54 + i * 34} width="102" height="26" rx="5" fill="#171222" stroke={i % 2 ? V : G} strokeOpacity=".6" />
          <text x="415" y={71 + i * 34} textAnchor="middle" fontSize="9.5" fill="#F5F3FF" fontFamily="monospace">{l}</text>
        </g>
      ))}
      <text x="415" y="208" textAnchor="middle" fontSize="10" fill="#A8A1B8" fontFamily="monospace">transformer block</text>
    </svg>
  );
}

/** Churn: model comparison as a code-style panel (no results shown). */
export function ChurnVisual() {
  return (
    <pre aria-hidden className="overflow-hidden rounded-lg border border-line bg-deep p-3 font-mono text-[11px] leading-5 text-mute">
{`models = [
  LogisticRegression(),
  RandomForest(),
  XGBoost(),
  LightGBM(),
]
# compare → evaluate`}
    </pre>
  );
}

/** Automation: connected workflow nodes. */
export function WorkflowVisual() {
  const steps = ["RSS", "Parse", "Draft", "Review"];
  return (
    <svg viewBox="0 0 320 70" role="img" aria-label="Workflow: RSS, parse, draft, human review" className="h-auto w-full">
      {steps.map((s, i) => (
        <g key={s}>
          {i > 0 && <line x1={i * 80 - 18} y1="35" x2={i * 80 + 4} y2="35" stroke={A} strokeOpacity=".6" strokeDasharray="3 3" />}
          <rect x={i * 80 + 4} y="17" width="62" height="36" rx="8" fill="#100D18" stroke={i === 3 ? G : A} strokeOpacity=".6" />
          <text x={i * 80 + 35} y="39" textAnchor="middle" fontSize="11" fill="#F5F3FF" fontFamily="monospace">{s}</text>
        </g>
      ))}
    </svg>
  );
}
