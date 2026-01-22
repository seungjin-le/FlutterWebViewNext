import { formatBirth, formatPhoneNumber } from '@/common/js/format'
import { setSize } from '@/common/js/util'
import ResetGray from '@/images/icons/resetGray.svg'
import TextReset from '@/images/icons/textReset.svg'
import cn from '@/utils/tailwindMergeConfig'
import styled from '@emotion/styled'
import { AnimatePresence, easeInOut, motion } from 'framer-motion'
import { ChangeEvent, memo, useCallback, useMemo } from 'react'

export interface TextInputProps {
  error?: string
  placeholder?: string
  type?: 'text' | 'number' | 'password' | 'phone' | 'birth'
  disabled?: boolean
  width?: string | number
  height?: string | number
  label?: string
  value?: string
  reset?: boolean
  name?: string
  onReset?: () => void
  maxLength?: number
  resetIcon?: boolean
  trim?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const errorAnimate = {
  initial: { opacity: 0, height: 0 },
  animate: { opacity: 1, height: 'auto' },
  exit: { opacity: 0, height: 0 },
  transition: { duration: 0.2, ease: easeInOut }
}

const iconAnimate = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.1, ease: easeInOut }
}

const TextInput = memo(({ error = '', type = 'text', label = '', value = '', reset = false, resetIcon = false, trim = false, onReset = () => {}, ...props }: TextInputProps) => {
  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (type === 'number' || type === 'phone' || type === 'birth') e.target.value = e.target.value === '' ? '' : String(e.target.value.replace(/[^0-9]/g, ''))
    else if (trim) e.target.value = String(e.target.value).replace(/\s/g, '')
    props.onChange?.(e)
  }, [])

  const formatValue = useMemo(() => {
    if (type === 'phone') return formatPhoneNumber(value)
    else if (type === 'birth') return formatBirth(value)
    else return value
  }, [value, type])

  return (
    <div className={'flex-col-start gap-[4px]'}>
      <label className={'relative'}>
        <Input
          type={type === 'password' ? type : 'text'}
          autoComplete="off"
          {...props}
          value={formatValue}
          maxLength={type === 'phone' ? 13 : type === 'birth' ? 8 : props.maxLength}
          onChange={handleOnChange}
          className={cn(
            'border-n200 text-b18 placeholder:text-n400 disabled:bg-n100 disabled:text-n500 text-n800 w-[400px] flex-1 rounded-[5px] border-[1px] bg-white px-[16px] py-[15.1px] text-ellipsis transition-all outline-none',
            error && 'border-red text-red caret-red placeholder:text-red',
            !error && !props.disabled && 'focus:caret-p500 focus:border-p500',
            ((value && reset) || resetIcon) && 'pr-[30px]'
          )}
        />

        <AnimatePresence>
          {!error && !props.disabled && (
            <motion.div {...iconAnimate} className={'flex-row-center absolute top-1/2 right-[10px] -translate-y-1/2 cursor-pointer'}>
              {!!value && reset && (
                <motion.button onClick={() => onReset()} key={'reset_icon'} {...iconAnimate} className={'size-[20px] cursor-pointer'}>
                  <TextReset className={'[&>path]:stroke-n500 size-full'} />
                </motion.button>
              )}
            </motion.div>
          )}
          {resetIcon && (
            <motion.div className={'absolute top-1/2 right-[16px] size-[20px] -translate-1/2 cursor-pointer'} onClick={() => onReset()}>
              <ResetGray className={'size-full'} />
            </motion.div>
          )}
        </AnimatePresence>
      </label>
      <AnimatePresence>
        {!!error && (
          <motion.div key={'error'} className="text-red text-b16 flex-row-start mt-[8px] gap-[4px] px-[6px] leading-[16px]" {...errorAnimate}>
            <div>*</div>
            <div className={'whitespace-pre-line'}>{error}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
})

export default TextInput

const Input = styled.input<{ width?: string | number; height?: string | number }>`
  ${({ width }) => !!width && `width: ${setSize(width)}; `}
  ${({ height }) => !!height && `height: ${setSize(height)};`}
`
