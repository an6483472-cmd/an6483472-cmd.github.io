export default function SectionLabel({ children }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-5 py-2">
      <span className="animate-pulse-dot h-2 w-2 rounded-full bg-primary" />
      <span className="font-label-mono text-label-mono tracking-wide text-primary">
        {children}
      </span>
    </div>
  )
}
