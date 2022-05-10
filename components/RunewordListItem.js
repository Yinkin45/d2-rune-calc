import styles from './RunewordListItem.module.css'
export default function RunewordListItem({ key, runeword }) {
  return (
    <li key={key} className={styles.item}>
      <span className={styles.name}>{runeword.name}</span>
      <span className={styles.type}>{runeword.type}</span>
      <span className={styles.level}>min level: {runeword.minLevel}</span>
      {runeword.subType ? (
        <span className={styles.subType}>subType: {runeword.subType}</span>
      ) : null}
    </li>
  )
}
