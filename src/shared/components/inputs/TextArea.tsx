import { cn, getByteLength } from '@/lib/utils'
import { ChangeEvent, forwardRef, ReactNode, TextareaHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import { InputErrorMsg } from '../items'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  maxLength?: number
  maxLengthType?: 'byte' | 'char'
  control: Control<any>
  name: string
  suffix?: ReactNode
  cols?: number
}

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, helperText, className, disabled, rows = 4, cols = 5, control, name, maxLength, maxLengthType, suffix, ...props }, ref) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => {
          const err = fieldState.error?.message || error || ''

          const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            control.setError(name, { message: '' })
            field.onChange(e)
          }

          return (
            <div className={'h-fit w-full flex-col'}>
              <div className="relative flex h-fit w-full flex-col">
                {label && <label className="mb-1 text-sm font-medium text-neutral-700">{label}</label>}

                <textarea
                  rows={rows}
                  cols={cols}
                  className={cn(
                    'body13 max-h-[206px] min-h-[206px] w-full resize-none overflow-y-auto rounded-[5px] border border-neutral-300 p-3 text-neutral-800 outline-none',
                    'focus:border-primary-500 focus:caret-primary-500 focus:outline-none',
                    'disabled:cursor-not-allowed disabled:border-neutral-200 disabled:bg-neutral-100',
                    'transition-all placeholder:text-neutral-600',
                    err && 'border-etc-red text-etc-red',
                    className
                  )}
                  maxLength={maxLength}
                  disabled={disabled}
                  {...props}
                  {...field}
                  value={field.value || ''}
                  ref={ref}
                  onChange={handleChange}
                />

                {/* 바이트 카운터 (옵션으로 props로도 제어 가능) */}
                <div className="absolute right-[13px] bottom-3 flex items-center gap-2">
                  <div className="body13 text-neutral-500">
                    <span className="text-neutral-800">{maxLengthType === 'byte' ? getByteLength(field.value ?? '') : field.value?.length || 0}</span>/{maxLength}
                    {maxLengthType === 'byte' ? 'byte' : ''}
                  </div>
                  {suffix}
                </div>
              </div>
              <InputErrorMsg error={err} />
              {!err && helperText && <p className="mt-1 text-xs text-neutral-500">{helperText}</p>}
            </div>
          )
        }}
      />
    )
  }
)

TextArea.displayName = 'TextArea'
