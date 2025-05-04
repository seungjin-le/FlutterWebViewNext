'use client'

import Section from '@/layouts/Section'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Home() {
  const [searchWord, setSearchWord] = useState('')
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

  return (
    <div className="bg-dark flex-col-center-start size-full gap-[20px] p-[20px]">
      <div className={'text-h2 text-white'}>DUMDAM</div>

      <Section className={'gap-[10px]'}>
        <>
          <div
            className={
              'border-b-solid grid w-full grid-cols-[auto_1fr_auto] items-center justify-items-center gap-[10px] border-b-[1px] border-b-[#313334] pb-[10px] text-nowrap'
            }
          >
            <div className={'flex-1 text-white'}>검색어</div>
            <div className={'flex-1'}>
              <input
                type="text"
                className={'w-full'}
                value={searchWord}
                maxLength={10}
                onChange={(e) => setSearchWord(e.target.value)}
              />
            </div>
            <div className={''}>
              <button className={'bg-s500 rounded-[8px] text-white'}>검색</button>
            </div>
          </div>
          <div className={'text-m2 text-white'}>최근 검색</div>
          <div className={'w-full'}>
            <div className={'flex-row-center-between w-full'}>
              <div>카인</div>
              <div>푸푸른 소나무</div>
              <div>X</div>
            </div>
          </div>
        </>
      </Section>
      <div className={'bg-dark10 flex-col-start w-full gap-[10px] rounded-[8px] p-[10px]'}></div>
    </div>
  )
}
