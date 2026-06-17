"use client"

import { useEffect, useRef } from "react"

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  pulse: number
  pulseSpeed: number
}

type Pulse = {
  from: number
  to: number
  t: number
  speed: number
}

export function MemoryNetwork({ density = 1, className = "" }: { density?: number; className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d")
    if (!ctx) return
    const c: CanvasRenderingContext2D = ctx
    const cnv: HTMLCanvasElement = canvas

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let nodes: Node[] = []
    let pulses: Pulse[] = []
    const maxDist = 150
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    function resize() {
      const parent = cnv.parentElement
      if (!parent) return
      width = parent.clientWidth
      height = parent.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      cnv.width = width * dpr
      cnv.height = height * dpr
      cnv.style.width = width + "px"
      cnv.style.height = height + "px"
      c.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    function seed() {
      const count = Math.min(110, Math.floor((width * height) / 12000) * density)
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.8 + 1,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.008,
      }))
      pulses = []
    }

    function spawnPulse() {
      if (nodes.length < 2 || pulses.length > 14) return
      const from = Math.floor(Math.random() * nodes.length)
      // find a near neighbor
      let best = -1
      let bestD = maxDist
      for (let i = 0; i < nodes.length; i++) {
        if (i === from) continue
        const d = Math.hypot(nodes[i].x - nodes[from].x, nodes[i].y - nodes[from].y)
        if (d < bestD && Math.random() > 0.5) {
          bestD = d
          best = i
        }
      }
      if (best >= 0) {
        pulses.push({ from, to: best, t: 0, speed: Math.random() * 0.015 + 0.01 })
      }
    }

    let frame = 0
    function draw() {
      c.clearRect(0, 0, width, height)
      frame++

      // update + connections
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (!reduceMotion) {
          n.x += n.vx
          n.y += n.vy
        }
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
        n.pulse += n.pulseSpeed

        // mouse attraction
        const dxm = mouse.current.x - n.x
        const dym = mouse.current.y - n.y
        const dm = Math.hypot(dxm, dym)
        if (dm < 160) {
          n.x += (dxm / dm) * 0.4
          n.y += (dym / dm) * 0.4
        }
      }

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.28
            c.strokeStyle = `rgba(56, 189, 248, ${alpha})`
            c.lineWidth = 1
            c.beginPath()
            c.moveTo(a.x, a.y)
            c.lineTo(b.x, b.y)
            c.stroke()
          }
        }
      }

      // pulses (data flowing)
      for (let p = pulses.length - 1; p >= 0; p--) {
        const pulse = pulses[p]
        const a = nodes[pulse.from]
        const b = nodes[pulse.to]
        if (!a || !b) {
          pulses.splice(p, 1)
          continue
        }
        pulse.t += pulse.speed
        if (pulse.t >= 1) {
          pulses.splice(p, 1)
          continue
        }
        const px = a.x + (b.x - a.x) * pulse.t
        const py = a.y + (b.y - a.y) * pulse.t
        const g = c.createRadialGradient(px, py, 0, px, py, 6)
        g.addColorStop(0, "rgba(37, 99, 235, 0.9)")
        g.addColorStop(1, "rgba(37, 99, 235, 0)")
        c.fillStyle = g
        c.beginPath()
        c.arc(px, py, 6, 0, Math.PI * 2)
        c.fill()
      }

      // nodes
      for (const n of nodes) {
        const glow = (Math.sin(n.pulse) + 1) / 2
        const radius = n.r + glow * 1.2
        const g = c.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4)
        g.addColorStop(0, `rgba(37, 99, 235, ${0.5 + glow * 0.4})`)
        g.addColorStop(1, "rgba(37, 99, 235, 0)")
        c.fillStyle = g
        c.beginPath()
        c.arc(n.x, n.y, radius * 4, 0, Math.PI * 2)
        c.fill()

        c.fillStyle = `rgba(255, 255, 255, 0.95)`
        c.beginPath()
        c.arc(n.x, n.y, radius, 0, Math.PI * 2)
        c.fill()
      }

      if (!reduceMotion && frame % 22 === 0) spawnPulse()
      raf.current = requestAnimationFrame(draw)
    }

    function onMove(e: MouseEvent) {
      const rect = cnv.getBoundingClientRect()
      mouse.current.x = e.clientX - rect.left
      mouse.current.y = e.clientY - rect.top
    }
    function onLeave() {
      mouse.current.x = -9999
      mouse.current.y = -9999
    }

    resize()
    draw()
    window.addEventListener("resize", resize)
    cnv.addEventListener("mousemove", onMove)
    cnv.addEventListener("mouseleave", onLeave)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener("resize", resize)
      cnv.removeEventListener("mousemove", onMove)
      cnv.removeEventListener("mouseleave", onLeave)
    }
  }, [density])

  return <canvas ref={canvasRef} aria-hidden="true" className={className} />
}
