import { ReactNode } from 'react'

interface SectionProps {
  children?: ReactNode | ReactNode[]
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return <div className={`flex-col-start bg-dark10 w-full rounded-[8px] p-[10px] ${className}`}>{children}</div>
}
