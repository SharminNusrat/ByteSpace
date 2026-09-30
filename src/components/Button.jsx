const variants = {
  primary: 'bg-secondary-400 text-neutral-950 hover:bg-secondary-300',
  ghost: 'border border-neutral-200 text-neutral-950 hover:bg-neutral-50',
}

const sizes = {
  sm: 'h-[46px] px-6 text-label-l',
  md: 'h-11 px-6 text-label-m',
  lg: 'h-14 px-8 text-label-l',
}

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  return (
    <Component
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-medium transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
}
