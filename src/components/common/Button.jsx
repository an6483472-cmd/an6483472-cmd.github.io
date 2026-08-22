import { Link } from 'react-router-dom'
import { cn } from '../../utils/helpers'

const variants = {
  primary:
    'bg-accent-gradient text-on-primary border border-transparent shadow-sm hover:-translate-y-0.5 hover:shadow-[var(--shadow-accent)] hover:brightness-110 active:scale-[0.98]',
  secondary:
    'bg-transparent text-on-surface border border-outline-variant hover:border-primary/30 hover:bg-muted hover:shadow-sm hover:-translate-y-0.5',
  outline:
    'bg-card text-primary border border-outline-variant hover:border-primary/40 hover:shadow-sm',
  ghost:
    'bg-transparent border border-transparent text-on-surface-variant hover:text-on-surface',
}

export default function Button({
  children,
  href,
  to,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 font-label-sm text-label-sm transition-all duration-200 ease-out',
    variants[variant] ?? variants.primary,
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  )
}
