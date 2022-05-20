import styles from './RunewordListItem.module.css'
import slugify from 'slugify'
import Link from 'next/link'

export default function RunewordListItem({ runeword }) {
  return (
    <li className={styles.item}>
      <Link href={`/runewords/${slugify(runeword.name.toLowerCase())}`}>
        <a className={styles.name}>{runeword.name}</a>
      </Link>
      <span className={styles.types}>{runeword.types.join(', ')}</span>
      <span className={styles.level}>min level: {runeword.minLevel}</span>
      {runeword.subTypes ? (
        <span className={styles.subTypes}>
          subType: {runeword.subTypes.join(', ')}
        </span>
      ) : null}
    </li>
  )
}
