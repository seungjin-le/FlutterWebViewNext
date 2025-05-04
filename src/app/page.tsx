'use client'

import Section from '@/layouts/Section'
import useFetch from '@/utils/api'
import { Search, X } from '@deemlol/next-icons'
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

  const getData = async () => {
    try {
      const response = await fetch(`api/v1/characters`)
      const data = await response.json()
      console.log(data)
    } catch (error) {
      return null
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="bg-dark flex-col-center-start size-full gap-[20px] p-[20px]">
      <div className={'text-h2 text-white'}>DUMDAM</div>

      <Section className={'gap-[10px]'}>
        <div
          className={'border-b-solid grid w-full grid-cols-[auto_1fr_auto] items-center justify-items-center gap-[10px] border-b-[1px] border-b-[#313334] pb-[10px] text-nowrap'}
        >
          <div className={'flex-1 text-white'}>검색어</div>

          <input type="text" className={'w-full'} value={searchWord} maxLength={10} onChange={(e) => setSearchWord(e.target.value)} />

          <Search size={24} color="#FFFFFF" />
        </div>
        <div className={'text-m2 text-white'}>최근 검색</div>
        <div className={'flex-col-start w-full gap-[10px] text-white'}>
          <div className={'flex-row-center-between w-full'}>
            <div>카인</div>
            <div>푸푸른 소나무</div>
            <X size={24} color="#FFFFFF" />
          </div>
        </div>
      </Section>
      {/* https://img-api.neople.co.kr/df/servers/<serverId>/characters/<characterId>?zoom=<zoom> */}
      {/* https://img-api.neople.co.kr/df/servers/diregie/characters/56773d74cc3bfa8a61ff4e69757e3360?zoom=1 */}
      <img src="https://img-api.neople.co.kr/df/servers/diregie/characters/56773d74cc3bfa8a61ff4e69757e3360?zoom=3" alt="" />
      <Section>
        <div className={'flex-row-center-between border-b-solid w-full border-b-[1px] border-b-[#313334] pb-[10px]'}>
          <div>오늘의 등급</div>
          <div>2025.04.25</div>
        </div>
        <div className={'flex-row-center text-h2 size-full min-h-[200px] text-[#fac213]'}>최상급</div>
      </Section>
    </div>
  )
}
