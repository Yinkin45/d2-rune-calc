import Link from 'next/link'

export default function NavigationBar() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/runewords">
        <a>Runewords</a>
      </Link>

      <Link href="/calc">
        <a>Calc</a>
      </Link>

      <Link href="/profiles">
        <a>Profiles</a>
      </Link>

      <Link href="/feedback">
        <a>Feedback</a>
      </Link>
    </>
  )
}
