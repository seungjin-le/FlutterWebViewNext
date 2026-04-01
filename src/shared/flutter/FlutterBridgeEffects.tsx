'use client'

import { useFlutterMessages } from './useFlutterBridge'

/**
 * Flutter → Web `theme` 이벤트를 `documentElement` 에 반영 (선택적).
 * Tailwind `dark` 클래스와 `data-flutter-theme` 속성을 맞춘다.
 */
export function FlutterBridgeEffects() {
  useFlutterMessages((msg) => {
    if (msg.type !== 'theme') return
    const root = document.documentElement
    root.dataset.flutterTheme = msg.mode
    root.classList.toggle('dark', msg.mode === 'dark')
  })
  return null
}
