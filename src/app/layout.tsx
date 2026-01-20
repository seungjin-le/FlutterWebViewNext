import type { Metadata } from 'next'
import '@/shared/styles/index.css'
import { ReactNode } from 'react'
import Providers from '@/providers/Provider'
import PageTransition from '@/providers/PageTransition'

export const metadata: Metadata = {
  title: 'Web View',
  description: 'Web View'
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={`size-full`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
