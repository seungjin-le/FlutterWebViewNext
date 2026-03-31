import type { Metadata } from 'next'
import '@/shared/styles/index.css'
import { ReactNode } from 'react'
import Providers from '@/providers/Provider'
import PageTransition from '@/providers/PageTransition'

export const metadata: Metadata = {
  title: 'Portfolio | Creative Developer',
  description: '사용자 경험을 최우선으로 하는 풀스택 개발자 포트폴리오',
  openGraph: {
    title: 'Portfolio | Creative Developer',
    description: '사용자 경험을 최우선으로 하는 풀스택 개발자 포트폴리오',
    type: 'website',
  },
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
