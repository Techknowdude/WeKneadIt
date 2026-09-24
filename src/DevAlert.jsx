export default function DevAlert({ onDismiss }) {
  return (
    <aside
      className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/60 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-800 p-8 text-center shadow-2xl text-slate-100">
        <span className="inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-orange-300 mb-4">
          Under Active Development
        </span>
        <h2 className="text-xl font-bold tracking-tight mb-2">Early Preview</h2>
        <p className="text-sm text-slate-200 mb-6 leading-relaxed">
          You are viewing a live preview build. Features and data persistence
          are subject to change.
        </p>
        <button
          onClick={onDismiss}
          className="w-full rounded-lg bg-orange-300 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
        >
          Acknowledge & Continue
        </button>
      </div>
    </aside>
  );
}
