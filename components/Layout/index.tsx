type Props = {
  children: JSX.Element
}

export default function Layout({ children }: Props) {
  return <div className="max-w-2xl mx-auto">{children}</div>
}
