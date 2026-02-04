import { Control, Controller } from 'react-hook-form'
import { SelectOption } from '@/shared/types/default'
import cn from '@/utils/tailwindMergeConfig'
import { CheckBox } from './CheckBox'

interface Props {
  control: Control<any>
  name: string
  options: SelectOption[]
  className?: string
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  setValue?: (value: (string | number)[]) => void
}

export const CheckBoxGroup = ({ control, name, options, className, disabled, size, setValue }: Props) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => {
        const value: (string | number)[] = field.value || []
        const err = fieldState.error?.message || ''
        const handleChange = (optionValue: string | number) => {
          let newValue = [...value]
          if (value.includes(optionValue)) newValue = newValue.filter((v) => String(v) !== String(optionValue))
          else newValue.push(optionValue)

          if (!!setValue) setValue(newValue)
          else field.onChange(newValue)

          control.setError(name, { message: '' })
        }

        return (
          <div className={cn('flex gap-5', className)}>
            {options.map((opt) => (
              <CheckBox
                key={opt.value}
                checked={value.includes(opt.value)}
                onChange={() => handleChange(opt.value)}
                error={!!err}
                label={opt.label}
                disabled={disabled}
                size={size}
              />
            ))}
            {!!err && <p className="text-xs text-red-500">{err}</p>}
          </div>
        )
      }}
    />
  )
}
