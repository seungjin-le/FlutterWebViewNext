'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    // 일반 라우팅
    router.push(path)

    // Flutter와 통신 추가 (선택 사항)
    // try {
    //   if (window.flutter_inappwebview) {
    //     window.flutter_inappwebview.callHandler('onRouteChange', path)
    //   }
    // } catch (e) {
    //   console.log('Flutter 통신 오류:', e)
    // }
  }

  useEffect(() => {
    if (window) {
      window.changePage = (path: string) => {
        alert('changePage' + path)
      }
    }
  }, [])

  return (
    <div className="bg-n20">
      <div className="text-s400 text-h1 bg-n40">dd asd</div>
      <div className="text-s400 text-l1">asd</div>
      <div className={'flex flex-col gap-2'}>
        <button onClick={() => handleNavigation('/test2')}>Go to Test2</button>{' '}
        <button onClick={() => handleNavigation('/test')}>Go to Test</button>{' '}
      </div>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <div>{count}</div>
    </div>
  )
}
