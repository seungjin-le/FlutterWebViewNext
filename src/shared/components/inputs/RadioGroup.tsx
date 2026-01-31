import cn from '@/utils/tailwindMergeConfig'
import { Control, Controller } from 'react-hook-form'
import { RadioBox } from './RadioBox'
import { InputErrorMsg } from '../items'
import { ChangeEvent } from 'react'
import { SelectOption } from '@/shared/types/default'

interface Props {
  control: Control<any>
  name: string
  options: SelectOption[]
  className?: string
  disabled?: boolean
  error?: string
  value?: string | number
  setValue?: (value: string | number) => void
  errorClassName?: string
  disabledValue?: string | number
}

export const RadioGroup = ({ control, name, error, value, options, className, disabled, setValue, errorClassName, disabledValue }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const err = error || fieldState.error?.message || ''
        const val = String(value || field.value)
        const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
          if (setValue) setValue(e.target.value)
          else field.onChange(e)
          control.setError(name, { message: '' })
        }
        const props = { name, error: !!err, onChange: handleOnChange, disabled }
        return (
          <div className={'flex-col-start-center'}>
            <div className={cn('flex gap-5', className)}>
              {options.map((opt) => (
                <FormRadioBox
                  key={opt.value}
                  value={opt.value}
                  label={opt.label}
                  checked={val === String(opt.value)}
                  {...props}
                  disabled={props.disabled || opt.disabled || disabledValue === opt.value}
                />
              ))}
            </div>
            <InputErrorMsg error={err} className={errorClassName} />
          </div>
        )
      }}
    />
  )
}
