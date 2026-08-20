"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

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
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUpVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
