import { cn } from '~/utils/shared'

type BoxProps = {
  style?: React.CSSProperties
  className?: string
  size?: 'small' | 'medium' | 'large'

  children?: React.ReactNode
} & React.ComponentProps<'div'>

const twClasses = {
  small: 'size-[270px]',
  medium: 'size-[320px]',
  large: 'size-[370px]',
}

export function Box({
  style,
  className = '',
  size = 'medium',
  ...otherProps
}: BoxProps) {
  return (
    <div
      className={cn('box', twClasses[size], className)}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  )
}
