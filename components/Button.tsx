import Link from 'next/link'

interface ButtonProps {
  variant: 'primary' | 'secondary'
  href?: string
  onClick?: () => void
  children: React.ReactNode
}

export default function Button({ variant, href, onClick, children }: ButtonProps) {
  const baseClasses = 'px-6 py-3 font-medium transition-colors duration-200'
  const variantClasses = variant === 'primary' 
    ? 'bg-slate-900 text-white hover:bg-slate-800' 
    : 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${variantClasses}`}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </button>
  )
}