'use client'

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import type { FlutterBridgeContextValue, FlutterToWebMessage } from './types'
import {
  isFlutterWebViewRuntime,
  parseFlutterToWebMessage,
  sendToFlutter
} from './flutterBridge'

const FlutterBridgeContext = createContext<FlutterBridgeContextValue | null>(null)

export function FlutterBridgeProvider({ children }: { children: React.ReactNode }) {
  const listenersRef = useRef(new Set<(m: FlutterToWebMessage) => void>())
  const [isFlutter, setIsFlutter] = useState(false)

  useEffect(() => {
    setIsFlutter(isFlutterWebViewRuntime())
  }, [])

  useEffect(() => {
    const handler = (raw: unknown) => {
      const msg = parseFlutterToWebMessage(raw)
      if (!msg) return
      listenersRef.current.forEach((fn) => {
        try {
          fn(msg)
        } catch {
          /* ignore listener errors */
        }
      })
    }
    window.__flutterReceive = handler
    return () => {
      if (window.__flutterReceive === handler) {
        delete window.__flutterReceive
      }
    }
  }, [])

  const subscribe = useCallback((listener: (message: FlutterToWebMessage) => void) => {
    listenersRef.current.add(listener)
    return () => {
      listenersRef.current.delete(listener)
    }
  }, [])

  const send = useCallback((message: Parameters<typeof sendToFlutter>[0]) => {
    sendToFlutter(message)
  }, [])

  const value = useMemo<FlutterBridgeContextValue>(
    () => ({
      isFlutterWebView: isFlutter,
      send,
      subscribe
    }),
    [isFlutter, send, subscribe]
  )

  return (
    <FlutterBridgeContext.Provider value={value}>{children}</FlutterBridgeContext.Provider>
  )
}

export function useFlutterBridgeContext(): FlutterBridgeContextValue {
  const ctx = useContext(FlutterBridgeContext)
  if (!ctx) {
    throw new Error('useFlutterBridgeContext must be used within FlutterBridgeProvider')
  }
  return ctx
}
