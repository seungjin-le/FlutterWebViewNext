'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <h1>Test Page1</h1>

      <button className="text-s400 text-h1 bg-n40" onClick={() => router.push('/test2')}>
        Go to Test2
      </button>
    </div>
  )
}
