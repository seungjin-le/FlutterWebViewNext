import { ReactNode, SyntheticEvent, useState } from 'react'
import { ButtonProps } from '../types/buttonType'

interface OpenProps {
  title?: string | ReactNode
  type?: 'alert' | 'confirm' | 'form'
  onConfirm?: () => void
  onCancel?: () => void
  onClose?: () => void
  isLoading?: boolean
  confirmText?: string
  cancelText?: string
  confirmBtnProps?: ButtonProps
  cancelBtnProps?: ButtonProps
  className?: string
  children?: ReactNode | string
}

type ModalProps = {
  isOpen?: boolean
  outSide?: boolean
  children?: ReactNode | string
  isLoading?: boolean
}

export default function useModal({ outSide = true, children, isLoading, ...props }: ModalProps = {}) {
  const [isOpen, setIsOpen] = useState(props.isOpen || false)

  const [contents, setContents] = useState<OpenProps | null>(null)
  const open = (node?: OpenProps | SyntheticEvent) => {
    if (node && 'nativeEvent' in node) {
      setContents(null)
    } else {
      setContents((node as OpenProps) || null)
    }
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)
  return { isOpen, setIsOpen, open, close, outSide, children, isLoading, ...contents, props }
}
