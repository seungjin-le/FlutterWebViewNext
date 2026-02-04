import cn from '@/utils/tailwindMergeConfig'
import { forwardRef, InputHTMLAttributes } from 'react'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  indeterminate?: boolean
  size?: 'sm' | 'md' | 'lg'
  error?: boolean
}

const sizeStyles = {
  sm: { box: 'w-4 h-4', icon: 'size-[10px]', label: 'body13' },
  md: { box: 'w-5 h-5', icon: 'size-[12px]', label: 'body14' },
  lg: { box: 'w-6 h-6', icon: 'size-[16px]', label: 'body14' }
}

export const CheckBox = forwardRef<HTMLInputElement, Props>(({ checked, onChange, label, indeterminate = false, size = 'sm', disabled, className, error, ...props }, ref) => {
  return (
    <label className={cn('inline-flex cursor-pointer items-center gap-1.5', disabled && 'cursor-not-allowed', className)}>
      <input
        ref={ref}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          'size-4 bg-contain bg-center bg-no-repeat transition-all focus:outline-none',
          'relative cursor-pointer appearance-none',
          error && 'bg-[url(/src/assets/svg/form/checkbox/Error.svg)]',
          !error && !disabled && !checked && !indeterminate && 'bg-[url(/src/assets/svg/form/checkbox/Default.svg)]',
          !error && disabled && !checked && 'bg-[url(/src/assets/svg/form/checkbox/Disabled.svg)]',
          !error && disabled && checked && 'bg-[url(/src/assets/svg/form/checkbox/ActiveDisabled.svg)]',
          !error && !disabled && !checked && indeterminate && 'bg-[url(/src/assets/svg/form/checkbox/Indeterminate.svg)]',
          !error && !disabled && checked && 'bg-[url(/src/assets/svg/form/checkbox/Active.svg)]'
        )}
        {...props}
      />

      {label && <span className={cn('text-neutral-800', sizeStyles[size].label)}>{label}</span>}
    </label>
  )
})

CheckBox.displayName = 'CheckBox'
