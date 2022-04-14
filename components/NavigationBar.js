import Link from 'next/link'
import styles from './NavigationBar.module.css'

export default function NavigationBar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>

      <Link href="/runewords">
        <a className={styles.link}>Runewords</a>
      </Link>

      <Link href="/calc">
        <a className={styles.link}>Calc</a>
      </Link>

      <Link href="/profiles">
        <a className={styles.link}>Profiles</a>
      </Link>

      <Link href="/feedback">
        <a className={styles.link}>Feedback</a>
      </Link>
    </div>
  )
}
