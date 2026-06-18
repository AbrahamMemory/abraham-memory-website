// components/logo.tsx
import Image from "next/image"

export function Logo({ className = "", showText = true }: { className?: string; showText?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex size-8 items-center justify-center">
        <Image
          src="/logonew.svg" // Ganti dengan nama file Anda
          alt="Abraham Memory Logo"
          width={32}
          height={32}
          className="size-8 object-contain"
          priority
        />
      </span>
      {showText && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Abraham<span className="text-primary"> Memory</span>
        </span>
      )}
    </div>
  )
}