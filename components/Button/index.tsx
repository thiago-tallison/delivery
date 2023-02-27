import { adjust, shadeColor } from '@/utils/color'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  mainColor?: string
  children: string
  onClick(): void
}

export default function Button({
  onClick,
  children,
  mainColor = '#FB9400',
  ...props
}: Props) {
  return (
    <button
      {...props}
      type="button"
      onClick={onClick}
      className={`bg-[${mainColor}] h-14 text-white leading-[17px] text-center rounded w-full font-semibold`}
    >
      {children}
    </button>
  )
}
