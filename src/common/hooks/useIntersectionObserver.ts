import { RefObject, useEffect, useRef, useState } from 'react'

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean
}

interface UseIntersectionObserverReturn {
  isIntersecting: boolean
  entry: IntersectionObserverEntry | undefined
}

//
export function useIntersectionObserver(
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
  }: UseIntersectionObserverOptions = {},
): UseIntersectionObserverReturn {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const [isIntersecting, setIsIntersecting] = useState(false)
  const frozen = useRef(false)

  useEffect(() => {
    const node = elementRef?.current
    if (!node || frozen.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry)
        const isElementIntersecting = entry.isIntersecting
        setIsIntersecting(isElementIntersecting)

        // 한번 보이면 계속 true로 유지
        if (freezeOnceVisible && isElementIntersecting) {
          frozen.current = true
        }
      },
      { threshold, root, rootMargin },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, threshold, root, rootMargin, freezeOnceVisible])

  return { isIntersecting, entry }
}

// 심플한 버전 - 보이는지 여부만 반환
export function useIsVisible(
  elementRef: RefObject<Element>,
  options?: UseIntersectionObserverOptions,
): boolean {
  const { isIntersecting } = useIntersectionObserver(elementRef, options)
  return isIntersecting
}

// 여러 요소를 동시에 관찰
export function useMultipleIntersectionObserver(
  elementRefs: RefObject<Element>[],
  options: IntersectionObserverInit = {},
): Map<Element, boolean> {
  const [visibilityMap, setVisibilityMap] = useState<Map<Element, boolean>>(
    new Map(),
  )

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      setVisibilityMap((prev) => {
        const newMap = new Map(prev)
        entries.forEach((entry) => {
          newMap.set(entry.target, entry.isIntersecting)
        })
        return newMap
      })
    }, options)

    elementRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => {
      observer.disconnect()
    }
  }, [elementRefs, options.threshold, options.root, options.rootMargin])

  return visibilityMap
}

// 요소가 처음 뷰포트에 나타날 때 애니메이션을 트리거
export function useRevealAnimation(
  elementRef: RefObject<Element>,
  {
    threshold = 0.1,
    rootMargin = '0px',
    animationClass = 'animate-fade-in',
  }: {
    threshold?: number
    rootMargin?: string
    animationClass?: string
  } = {},
): boolean {
  const [hasBeenVisible, setHasBeenVisible] = useState(false)

  useEffect(() => {
    const node = elementRef?.current
    if (!node || hasBeenVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenVisible) {
          setHasBeenVisible(true)
          node.classList.add(animationClass)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, threshold, rootMargin, animationClass, hasBeenVisible])

  return hasBeenVisible
}

// 무한 스크롤을 위한 훅
export function useInfiniteScroll(
  callback: () => void,
  options: {
    threshold?: number
    rootMargin?: string
    enabled?: boolean
  } = {},
): RefObject<HTMLDivElement> {
  const observerRef = useRef<HTMLDivElement>(null)
  const { threshold = 0.1, rootMargin = '100px', enabled = true } = options

  useEffect(() => {
    const node = observerRef.current
    if (!node || !enabled) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          callback()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [callback, threshold, rootMargin, enabled])

  return observerRef
}

// 스크롤 진행률 추적
export function useScrollProgress(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = {},
): number {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const node = elementRef?.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { boundingClientRect, rootBounds } = entry
        if (!rootBounds) return

        const relativeTop = boundingClientRect.top - rootBounds.top
        const elementHeight = boundingClientRect.height
        const viewportHeight = rootBounds.height

        // 요소가 뷰포트를 통과하는 진행률 계산 (0 ~ 1)
        const scrollProgress = Math.min(
          Math.max(
            0,
            (viewportHeight - relativeTop) / (viewportHeight + elementHeight),
          ),
          1,
        )

        setProgress(scrollProgress)
      },
      { ...options, threshold: Array.from({ length: 101 }, (_, i) => i / 100) },
    )

    observer.observe(node)

    return () => {
      observer.disconnect()
    }
  }, [elementRef, options.root, options.rootMargin])

  return progress
}
