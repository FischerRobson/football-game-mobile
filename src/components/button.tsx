import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { twMerge } from 'tailwind-merge'

const VARIANTS = {
  primary: {
    bgColor: 'bg-emerald-600',
  },
  secondary: {
    bgColor: 'bg-red-500',
  },
}

interface ButtonProps extends TouchableOpacityProps {
  styles?: string
  variant?: keyof typeof VARIANTS
}

export function Button({
  children,
  variant = 'primary',
  styles,
  onPress,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={twMerge(
        styles,
        `${VARIANTS[variant].bgColor} px-10 py-2 rounded-md flex items-center justify-center`,
      )}
      activeOpacity={0.7}
      onPress={onPress}
      {...props}
    >
      <Text className="font-semibold text-zinc-200 text-lg ">{children}</Text>
    </TouchableOpacity>
  )
}
