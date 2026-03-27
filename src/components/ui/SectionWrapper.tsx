interface SectionWrapperProps {
  children: React.ReactNode
  bg?: string
  className?: string
  id?: string
}

export default function SectionWrapper({
  children,
  bg,
  className = '',
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${className}`}
      style={bg ? { background: bg } : undefined}
    >
      {children}
    </section>
  )
}
