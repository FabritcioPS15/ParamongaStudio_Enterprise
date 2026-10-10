'use client'

import React from 'react'
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion'

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  ...props
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
} & HTMLMotionProps<'div'>) {
  const yOffset = direction === 'up' ? 24 : direction === 'down' ? -24 : 0
  const xOffset = direction === 'left' ? 24 : direction === 'right' ? -24 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode
  className?: string
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode
  className?: string
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={fadeIn} className={className} {...props}>
      {children}
    </motion.div>
  )
}

export function HoverCard({
  children,
  className = '',
  ...props
}: {
  children: React.ReactNode
  className?: string
} & HTMLMotionProps<'div'>) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ scale: 0.98 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export { motion }
