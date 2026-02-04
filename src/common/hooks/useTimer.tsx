'use client'

import { useCallback, useRef, useState } from 'react'

interface UseTimerProps {
  /** @description - 타이머 시간 (초) */
  second?: number
  /** @description - 타이머 종료 콜백 함수 */
  onEnd?: () => void
}
interface UseTimerReturn {
  time: number
  onStart: () => void
  onStop: () => void
  onReset: () => void
  onReStart: () => void
  status: boolean
}

/**
 * @property {Number} second - 타이머 시간 (초)
 * @property {Function} onEnd - 타이머 종료시 콜백 함수
 *
 * @returns {Number} time - 현재 타이머 시간
 * @returns {Function} {onStart: () => void} - 타이머 시작
 * @returns {Function} {onStop: () => void} - 타이머 중지
 * @returns {Function} {onReset: () => void} - 타이머 초기화
 * @returns {Function} {onReStart: () => void} - 타이머 재시작
 * @returns {Function} {status: boolean} - 타이머 상태
 */
const useTimer = ({ second = 0, onEnd = () => {} }: UseTimerProps): UseTimerReturn => {
  const [time, setTime] = useState<number>(second)
  const [status, setStatus] = useState<boolean>(false)

  /** @description - setInterval 변수 */
  const intervalId = useRef<NodeJS.Timeout | null>(null)

  const initTimer = useCallback(() => {
    if (intervalId.current) clearInterval(intervalId.current)
    else intervalId.current = null
  }, [])

  /** @description - 타이머 시작 */
  const onStart = useCallback(() => {
    /** @description - 이미 타이머가 실행 중이면 중복 실행 방지 */
    initTimer()

    if (time <= 0) setTime(() => +second)
    setStatus(true)
    intervalId.current = setInterval(() => {
      setTime((prev) => {
        if (prev - 1 <= 0) {
          onEnd()
          initTimer()
          setStatus(false)
        }
        return prev - 1
      })
    }, 1000)
  }, [time])

  /** @description - 타이머 재시작 */
  const onReStart = useCallback(() => {
    onReset()
    onStart()
  }, [])

  /** @description - 타이머 중지 */
  const onStop = useCallback(() => {
    initTimer()
    setStatus(false)
  }, [])

  /** @description - 타이머 초기화 */
  const onReset = useCallback(() => {
    initTimer()
    setTime(() => +second)
    setStatus(false)
  }, [])

  return { time, onStart, onStop, onReset, onReStart, status }
}

export default useTimer
