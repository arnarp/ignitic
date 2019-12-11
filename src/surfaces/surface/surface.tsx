import { cn } from 'itils/dist/misc/cn'
import * as React from 'react'
import css from './surface.css'
import { motion, MotionProps } from 'framer-motion'

export type SurfaceColor =
  | 'paper'
  | 'neutral'
  | 'default'
  | 'primary'
  | 'secondary'

type Props = {
  children?: React.ReactNode
  color: SurfaceColor
  padding?: 'sm' | 'md' | 'lg' | 'xl'
  border?: 'neutral' | 'default' | 'primary' | 'secondary'
  rounded?: boolean
} & MotionProps &
  React.HTMLAttributes<HTMLDivElement>

export function Surface({
  children,
  className,
  color,
  border,
  padding,
  rounded,
  ...rest
}: Props) {
  return (
    <motion.div
      {...rest}
      className={cn(
        {
          [css.paperColor]: color == 'paper',
          [css.neutralColor]: color == 'neutral',
          [css.defaultColor]: color == 'default',
          [css.primaryColor]: color == 'primary',
          [css.secondaryColor]: color == 'secondary',
          [css.paddingSm]: padding == 'sm',
          [css.paddingMd]: padding == 'md',
          [css.paddingLg]: padding == 'lg',
          [css.paddingXl]: padding == 'xl',
          [css.rounded]: rounded == true,
          [css.borderNeutral]: border == 'neutral',
          [css.borderDefault]: border == 'default',
          [css.borderPrimary]: border == 'primary',
          [css.borderSecondary]: border == 'secondary'
        },
        className
      )}
    >
      {children}
    </motion.div>
  )
}
