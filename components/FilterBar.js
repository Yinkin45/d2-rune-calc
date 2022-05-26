import styles from './FilterBar.module.css'
import { ITEM_TYPES } from '../data/types'

export default function FilterBar({ toggleTypeFilter }) {
  return (
    <div className={styles.filterBar}>
      <div className={styles.header}>Type</div>
      <input
        type={'checkbox'}
        onChange={(e) => toggleTypeFilter(ITEM_TYPES.HELMET, e.target.checked)}
      />
      <span className={styles.types}>Helm</span>
      <input
        type={'checkbox'}
        onChange={(e) => toggleTypeFilter(ITEM_TYPES.ARMOR, e.target.checked)}
      />
      <span className={styles.types}>Armor</span>
      <input
        type={'checkbox'}
        onChange={(e) => toggleTypeFilter(ITEM_TYPES.WEAPON, e.target.checked)}
      />
      <span className={styles.types}>Weapon</span>
      <input
        type={'checkbox'}
        onChange={(e) => toggleTypeFilter(ITEM_TYPES.SHIELD, e.target.checked)}
      />
      <span className={styles.types}>Shield</span>
    </div>
  )
}
