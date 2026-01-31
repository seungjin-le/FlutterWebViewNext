import cn from '@/utils/tailwindMergeConfig'
import { ChangeEvent } from 'react'

interface Props {
  label?: string
  name?: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string | number
  disabled?: boolean
  error?: boolean
}

export const RadioBox = ({ label, error, name, checked, onChange, value, disabled }: Props) => {
  return (
    <label key={value} htmlFor={`radioBox_${name}_${value}`} className={cn('flex cursor-pointer items-center gap-2', checked && 'cursor-default')}>
      <input
        type="radio"
        id={`radioBox_${name}_${value}`}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled || checked}
        className={cn(
          'size-4 bg-contain bg-center bg-no-repeat transition-all focus:outline-none',
          'relative cursor-pointer appearance-none',
          checked && 'cursor-default',
          error && 'bg-[url(/src/assets/svg/form/radio/radioError.svg)]',
          !error && !disabled && !checked && 'bg-[url(/src/assets/svg/form/radio/radioDefault.svg)]',
          !error && !disabled && checked && 'bg-[url(/src/assets/svg/form/radio/radioActive.svg)]',
          !error && disabled && !checked && 'bg-[url(/src/assets/svg/form/radio/radioDisabled.svg)]',
          !error && disabled && checked && 'bg-[url(/src/assets/svg/form/radio/radioActiveDisabled.svg)]'
        )}
      />

      {!!label && <span className="body13 bg-contain text-neutral-800 select-none">{label}</span>}
    </label>
  )
}

RadioBox.displayName = 'RadioBox'
