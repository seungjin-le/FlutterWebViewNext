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

  const a = [
    { image: '', label: '전체' },
    { image: '', label: '족발 · 보쌈' },
    { image: '', label: '찜 · 탕' },
    { image: '', label: '돈까스' },
    { image: '', label: '회 · 해산물' },
    { image: '', label: '고기' },
    { image: '', label: '피자' },
    { image: '', label: '한식' },
    { image: '', label: '양식' },
    { image: '', label: '중식' },
    { image: '', label: '아시안' },
    { image: '', label: '일식' },
    { image: '', label: '버거' },
    { image: '', label: '커피 · 차' },
    { image: '', label: '디저트' },
    { image: '', label: '죽' },
    { image: '', label: '샌드위치' },
    { image: '', label: '도시락' },
    { image: '', label: '프렌차이즈' }
  ]
  return (
    <div className="bg-n20">
      <div className={'flex flex-col gap-2'}>
        <button onClick={() => handleNavigation('/test2')}>Go to Test2</button>{' '}
        <button onClick={() => handleNavigation('/test')}>Go to Test</button>{' '}
      </div>
      <div
        className={
          'grid grid-cols-[repeat(auto-fill,minmax(14.9758vw,auto))] gap-[4.4686vw] p-[4.8309vw]'
        }
      >
        {a.map((item) => (
          <div
            key={item.label}
            className={
              'text-s2 grid h-[18.1159vw] grid-rows-[12.0773vw_4.8309vw] justify-center gap-[1.2077vw]'
            }
          >
            <div className={'bg-m-gray size-[12.0773vw] rounded-full'}></div>
            <div className={'text-center'}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
