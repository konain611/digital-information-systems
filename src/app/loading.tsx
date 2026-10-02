export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-(--bg-soft) px-6 text-(--text)"
      style={{
        backgroundImage:
          "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
      }}
    >
      <div role="status" aria-live="polite" className="flex flex-col items-center">
        <div className="relative h-40 w-40" aria-hidden="true">
          <div className="absolute inset-0 rounded-full border-4 border-(--line)"></div>
          <div className="absolute inset-2 animate-spin rounded-full border-t-4 border-b-4 border-(--accent)"></div>
        </div>

        <div className="mt-8 text-xl font-semibold tracking-wide text-(--text)">
          <span className="inline-block animate-pulse">Loading</span>
        </div>
        <div className="mt-2 text-sm text-(--muted)">Please wait...</div>
      </div>
    </div>
  );
}