'use client'

import { useEffect, useRef } from 'react'
import { useFlutterBridgeContext } from './flutterBridgeProvider'
import type { FlutterToWebMessage, WebToFlutterMessage } from './types'

/**
 * Flutter WebView 안에서만 의미 있는 브리지 훅.
 * - `send`: Web → Flutter (`FlutterChannel.postMessage`)
 * - `subscribe`: Flutter → Web (`window.__flutterReceive`)
 */
export function useFlutterBridge() {
  const { isFlutterWebView, send, subscribe } = useFlutterBridgeContext()
  return { isFlutterWebView, send, subscribe }
}

/** Flutter 에서 오는 메시지를 구독 (컴포넌트 언마운트 시 자동 해제) */
export function useFlutterMessages(handler: (message: FlutterToWebMessage) => void) {
  const { subscribe } = useFlutterBridgeContext()
  const handlerRef = useRef(handler)
  handlerRef.current = handler
  useEffect(() => {
    return subscribe((msg) => handlerRef.current(msg))
  }, [subscribe])
}

/** 편의: 한 번에 전송 */
export function useSendToFlutter() {
  const { send } = useFlutterBridgeContext()
  return (message: WebToFlutterMessage) => send(message)
}
