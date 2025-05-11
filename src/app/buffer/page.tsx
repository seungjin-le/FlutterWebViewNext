import Link from 'next/link'

export default function Page() {
  return (
    <div className="relative h-[100vh] w-full">
      buffer
      <div className={'absolute top-1/2 left-1/2 h-[50px] w-[90%] -translate-x-1/2 -translate-y-1/2 bg-[red]'}>
        <Link href="/attacker" className={'text-h1 text-white'}>
          attacker
        </Link>
      </div>
    </div>
  )
}
