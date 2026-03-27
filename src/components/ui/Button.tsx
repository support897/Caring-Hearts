import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'link' | 'white'
type ButtonSize = 'default' | 'small' | 'large'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  external?: boolean
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-brand text-white border-transparent hover:bg-brand-hover btn-hover-shadow',
  secondary:
    'bg-transparent text-brand border-brand hover:bg-brand hover:text-white btn-hover-shadow',
  link: 'bg-transparent text-brand border-transparent underline underline-offset-4 hover:text-brand-hover p-0',
  white:
    'bg-white text-black border-transparent hover:bg-gray-100 btn-hover-shadow',
}

const sizeStyles: Record<ButtonSize, string> = {
  small: 'text-sm py-2 px-4',
  default: 'text-base py-2.5 px-5 md:px-[30px]',
  large: 'text-base md:text-lg py-3 px-6 md:px-8',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  external,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-[5px] border transition-all duration-250 cursor-pointer'
  const classes = `${baseStyles} ${variantStyles[variant]} ${variant !== 'link' ? sizeStyles[size] : ''} ${className}`

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
