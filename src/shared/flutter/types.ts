/**
 * WebView(web) → Flutter 로 보내는 명령.
 * Flutter 쪽 `JavaScriptChannel` 이름은 `FlutterChannel` 과 맞춘다.
 */
export type WebToFlutterMessage =
  | {
      type: 'navigate'
      /** Next.js 라우트 경로 (예: `/login`, `/rank`) */
      path: string
      replace?: boolean
    }
  | { type: 'requestBack'; reason?: string }
  | {
      type: 'setStatusBar'
      style: 'light' | 'dark' | 'default'
    }
  | { type: 'openExternal'; url: string }
  | { type: 'share'; text: string; title?: string }
  | { type: 'custom'; name: string; payload?: unknown }

/**
 * Flutter → WebView(web) 로 푸시하는 이벤트.
 * Flutter 에서 `window.__flutterReceive(...)` 를 호출한다.
 */
export type FlutterToWebMessage =
  | { type: 'theme'; mode: 'light' | 'dark' }
  | { type: 'ping'; id: string }
  | { type: 'resume' }
  | { type: 'pause' }
  | { type: 'custom'; name: string; payload?: unknown }

export type FlutterBridgeContextValue = {
  /** `FlutterChannel` 이 주입된 WebView 인지 (클라이언트에서만 의미 있음) */
  isFlutterWebView: boolean
  /** Web → Flutter */
  send: (message: WebToFlutterMessage) => void
  /** Flutter → Web 구독 해제 함수 반환 */
  subscribe: (listener: (message: FlutterToWebMessage) => void) => () => void
}
