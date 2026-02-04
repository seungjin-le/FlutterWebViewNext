import { RefObject, useEffect } from 'react'

export function useOutsideClick(ref: RefObject<HTMLElement | null>, onClose: () => void) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref && ref?.current && !ref?.current?.contains(e.target as Node)) onClose()
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [ref, onClose])
}
