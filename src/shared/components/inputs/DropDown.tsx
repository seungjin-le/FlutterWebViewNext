import BottomArrow from '@/assets/svg/arrow/bottom-arrow.svg'
import { useOutsideClick } from '@/common/hooks/useOutsideClick'
import { useRef, useState } from 'react'
import { Control, Controller } from 'react-hook-form'
import { InputErrorMsg } from '../items'
import { SelectOption } from '@/shared/types/default'
import cn from '@/utils/tailwindMergeConfig'

interface Props {
  control: Control<any>
  name: string
  options: SelectOption[]
  placeholder?: string
  className?: string
  disabled?: boolean
}

export const DropDown = ({ control, name, options, placeholder = '선택하세요', className, disabled }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useOutsideClick(dropdownRef, () => setIsOpen(false))

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const selectedOption = options.find((opt) => opt.value === field.value)
        const error = fieldState?.error?.message || ''
        return (
          <div ref={dropdownRef} className={cn('relative w-[400px]', className)}>
            <button
              type="button"
              onClick={() => !disabled && setIsOpen((prev) => !prev)}
              disabled={disabled}
              className={cn(
                'flex-row-center-between body13 h-[38px] w-full rounded-[5px] border border-neutral-300 bg-white px-3 text-left',
                'focus:border-primary-500 transition-all',
                isOpen && 'border-primary-500',
                error && 'border-etc-red',
                disabled && 'cursor-not-allowed border-neutral-200 bg-neutral-100'
              )}
            >
              <span className={disabled ? 'text-neutral-500' : error ? 'text-etc-red' : selectedOption ? 'text-neutral-800' : 'text-neutral-600'}>
                {selectedOption ? selectedOption.label : placeholder}
              </span>
              <BottomArrow className={cn('absolute right-[10px] text-neutral-700 transition-transform', isOpen && 'rotate-180', !!error && 'text-etc-red')} />
            </button>

            {isOpen && !disabled && (
              <div className="absolute z-10 mt-1 max-h-[142px] w-full overflow-y-auto rounded-[5px] border border-neutral-300 bg-white p-[6px]">
                {options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      control.setError(name, { message: '' })
                      field.onChange(option.value)
                      setIsOpen(false)
                    }}
                    className={cn(
                      'body13 hover:bg-primary-50 hover:text-primary-500 w-full cursor-pointer px-3 py-[7px] text-left',
                      field.value === option.value ? 'text-primary-500 bg-primary-50' : 'text-neutral-700'
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
            <InputErrorMsg error={fieldState?.error?.message} />
          </div>
        )
      }}
    />
  )
}
