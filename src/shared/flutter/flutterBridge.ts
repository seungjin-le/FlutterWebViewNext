import type { FlutterToWebMessage, WebToFlutterMessage } from './types'

declare global {
  interface Window {
    /** Flutter 가 `runJavaScript` 로 호출 — 웹에서 수신 */
    __flutterReceive?: (raw: unknown) => void
    /** webview_flutter `JavaScriptChannel('FlutterChannel')` 가 노출 */
    FlutterChannel?: {
      postMessage: (message: string) => void
    }
  }
}

function safeJsonStringify(value: WebToFlutterMessage): string {
  try {
    return JSON.stringify(value)
  } catch {
    return JSON.stringify({ type: 'custom', name: 'serialize_error', payload: {} })
  }
}

export function isFlutterWebViewRuntime(): boolean {
  if (typeof window === 'undefined') return false
  const ch = window.FlutterChannel
  return typeof ch?.postMessage === 'function'
}

export function sendToFlutter(message: WebToFlutterMessage): void {
  if (typeof window === 'undefined') return
  const ch = window.FlutterChannel
  if (!ch || typeof ch.postMessage !== 'function') return
  ch.postMessage(safeJsonStringify(message))
}

export function parseFlutterToWebMessage(raw: unknown): FlutterToWebMessage | null {
  if (raw == null || typeof raw !== 'object') return null
  const o = raw as Record<string, unknown>
  const type = o.type
  if (type === 'theme' && (o.mode === 'light' || o.mode === 'dark')) {
    return { type: 'theme', mode: o.mode }
  }
  if (type === 'ping' && typeof o.id === 'string') {
    return { type: 'ping', id: o.id }
  }
  if (type === 'resume') return { type: 'resume' }
  if (type === 'pause') return { type: 'pause' }
  if (type === 'custom' && typeof o.name === 'string') {
    return { type: 'custom', name: o.name, payload: o.payload }
  }
  return null
}
