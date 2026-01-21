import { Control, Controller, FieldValues } from 'react-hook-form'

export const TextInput = ({ control, name, placeholder }: { control: Control<FieldValues>; name: string; placeholder: string }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative">
          <input type="text" className="w-full" {...field} />
        </div>
      )}
    />
  )
}
