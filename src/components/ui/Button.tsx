import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'brand' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never }

type ButtonAsLink = BaseProps & LinkProps & { href?: never }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-surface hover:bg-accent-hover shadow-soft hover:shadow-card',
  brand:
    'bg-brand text-ink hover:bg-brand-dark shadow-soft hover:shadow-card font-semibold',
  secondary:
    'bg-brand-light text-ink hover:bg-brand-muted border border-border',
  outline:
    'bg-transparent text-ink border border-ink/20 hover:border-brand hover:bg-brand hover:text-ink',
  ghost: 'bg-transparent text-ink hover:bg-ink/5',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      size = 'md',
      children,
      className,
      icon,
      iconPosition = 'right',
      ...props
    },
    ref
  ) {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium',
      'transition-all duration-300 ease-out tracking-wide',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/30 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      variantStyles[variant],
      sizeStyles[size],
      className
    )

    const content = (
      <>
        {icon && iconPosition === 'left' && icon}
        {children}
        {icon && iconPosition === 'right' && icon}
      </>
    )

    if ('to' in props && props.to) {
      const { to, ...linkProps } = props as ButtonAsLink
      return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link ref={ref as React.Ref<HTMLAnchorElement>} to={to} className={classes} {...linkProps}>
            {content}
          </Link>
        </motion.div>
      )
    }

    const buttonProps = props as ButtonAsButton
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={classes}
          {...buttonProps}
        >
          {content}
        </button>
      </motion.div>
    )
  }
)
