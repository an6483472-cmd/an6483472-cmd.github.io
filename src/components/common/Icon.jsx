import { cn } from '../../utils/helpers'

export default function Icon({ name, className = '', filled = false }) {
  return (
    <span
      className={cn(
        'material-symbols-outlined',
        filled && 'filled-icon',
        className,
      )}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
