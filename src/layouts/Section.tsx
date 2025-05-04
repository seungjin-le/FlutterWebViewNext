import { ReactNode } from 'react'

export default function Section({
  children,
  className
}: {
  children: ReactNode | ReactNode[]
  className?: string
}) {
  return (
    <div className={`flex-col-start bg-dark10 w-full rounded-[8px] p-[10px] ${className}`}>
      {children}
    </div>
  )
}
