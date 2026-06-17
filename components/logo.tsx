export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex size-8 items-center justify-center">
        <svg viewBox="0 0 32 32" className="size-8" aria-hidden="true">
          <defs>
            <linearGradient id="am-grad" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="0.5" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <circle cx="16" cy="16" r="15" fill="url(#am-grad)" opacity="0.12" />
          <circle cx="16" cy="16" r="4.2" fill="url(#am-grad)" />
          <circle cx="6.5" cy="9" r="2.4" fill="url(#am-grad)" />
          <circle cx="25.5" cy="9" r="2.4" fill="url(#am-grad)" />
          <circle cx="6.5" cy="23" r="2.4" fill="url(#am-grad)" />
          <circle cx="25.5" cy="23" r="2.4" fill="url(#am-grad)" />
          <g stroke="url(#am-grad)" strokeWidth="1.4" opacity="0.55">
            <line x1="16" y1="16" x2="6.5" y2="9" />
            <line x1="16" y1="16" x2="25.5" y2="9" />
            <line x1="16" y1="16" x2="6.5" y2="23" />
            <line x1="16" y1="16" x2="25.5" y2="23" />
          </g>
        </svg>
      </span>
      {showText && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Abraham<span className="text-primary"> Memory</span>
        </span>
      )}
    </div>
  )
}
