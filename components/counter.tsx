"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

export function Counter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 2000,
}: {
  value: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start: number | null = null
    let frame = 0
    const step = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.floor(display).toLocaleString("en-US")

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
