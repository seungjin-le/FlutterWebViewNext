'use client'

import React from 'react'
import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query'

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // SSR에서는 기본 staleTime을 0 이상으로 설정하여
        // 클라이언트에서 즉시 재요청하는 것을 방지합니다.
        staleTime: 60 * 1000
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (isServer) {
    // 서버: 항상 새로운 query client를 만듭니다.
    return makeQueryClient()
  } else {
    // 브라우저: query client가 없으면 새로 만듭니다.
    // React가 초기 렌더링 중에 suspend될 경우 새로운 클라이언트를
    // 다시 만들지 않도록 하는 것이 중요합니다. 이는 query client
    // 생성 아래에 suspense 경계가 있는 경우 필요하지 않을 수 있습니다.
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  // 주의: query client를 초기화할 때 useState를 피하세요.
  // suspense 경계가 없으면 React가 초기 렌더링 시 클라이언트를
  // 버리기 때문입니다.
  const queryClient = getQueryClient()

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
