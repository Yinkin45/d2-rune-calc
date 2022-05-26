import styles from './FilterBar.module.css'
import { ITEM_SUBTYPES, ITEM_TYPES } from '../data/types'

export default function FilterBar({ toggleTypeFilter, toggleSubTypeFilter }) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.header}>Type</div>
      {Object.values(ITEM_TYPES).map((itemType) => {
        return (
          <span key={itemType} className={styles.section}>
            <input
              type={'checkbox'}
              onChange={(e) => toggleTypeFilter(itemType, e.target.checked)}
            />
            <span className={styles.types}>{itemType}</span>
          </span>
        )
      })}
      <div className={styles.header}>Sub-type</div>
      {Object.values(ITEM_SUBTYPES).map((itemSubType) => {
        return (
          <span key={itemSubType} className={styles.section}>
            <input
              type={'checkbox'}
              onChange={(e) => toggleSubTypeFilter(itemSubType, e.target.checked)}
            />
            <span className={styles.types}>{itemSubType}</span>
          </span>
        )
      })}
    </div>
  )
}
