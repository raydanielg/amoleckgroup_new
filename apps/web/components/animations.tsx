"use client"

import { motion, useInView, type Variants } from "framer-motion"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { cn } from "@workspace/ui/lib/utils"

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUpVariants}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({
  children,
  className,
  stagger = 0.1,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function FadeInItem({
  children,
  className,
  hover = true,
}: {
  children: ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6 } : undefined}
      style={hover ? { willChange: "transform" } : undefined}
    >
      {children}
    </motion.div>
  )
}

/** Glowing blurred orb used for ambient background decoration. */
export function GlowOrb({
  className,
  duration = 8,
  delayOffset = 0,
}: {
  className?: string
  duration?: number
  delayOffset?: number
}) {
  return (
    <motion.div
      className={className}
      animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: delayOffset }}
    />
  )
}

/** Infinite horizontal marquee — duplicates children for a seamless loop. */
export function Marquee({
  children,
  className,
  speed = 28,
}: {
  children: ReactNode
  className?: string
  speed?: number
}) {
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <div className="flex w-max">
        <motion.div
          className="flex shrink-0 items-center gap-6 pr-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        >
          {children}
        </motion.div>
        <motion.div
          className="flex shrink-0 items-center gap-6 pr-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}

/** Counts up to the numeric portion of `value` once it scrolls into view. */
export function AnimatedCounter({
  value,
  className,
  duration = 1400,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [display, setDisplay] = useState<string>(() => value.replace(/[\d,.]/g, "0"))

  useEffect(() => {
    if (!isInView) return
    const match = value.match(/[\d,.]+/)
    if (!match || match.index === undefined) {
      setDisplay(value)
      return
    }
    const target = parseFloat(match[0].replace(/,/g, ""))
    const prefix = value.slice(0, match.index)
    const suffix = value.slice(match.index + match[0].length)
    const start = performance.now()
    let frame: number

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(target * eased)
      setDisplay(`${prefix}${current}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

/** Rotates through an array of phrases with a smooth fade + slide animation. */
export function RotatingText({
  words,
  interval = 2500,
  className,
}: {
  words: string[]
  interval?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block text-primary"
      >
        {words[index]}
      </motion.span>
    </span>
  )
}

