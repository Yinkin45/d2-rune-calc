import styles from './RunewordListItem.module.css'
import slugify from 'slugify'
import Link from 'next/link'

export default function RunewordListItem({ key, runeword }) {
  return (
    <li key={key} className={styles.item}>
      <Link href={`/runewords/${slugify(runeword.name.toLowerCase())}`}>
        <a className={styles.name}>{runeword.name}</a>
      </Link>
      <span className={styles.type}>{runeword.type}</span>
      <span className={styles.level}>min level: {runeword.minLevel}</span>
      {runeword.subType ? (
        <span className={styles.subType}>subType: {runeword.subType}</span>
      ) : null}
    </li>
  )
}
