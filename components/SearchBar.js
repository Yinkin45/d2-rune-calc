import styles from './SearchBar.module.css'

export default function SearchBar({ searchTerm, onTextChanged, onClearClick }) {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => onTextChanged(e.target.value)}
      />
      <button className={styles.clearButton} onClick={onClearClick}>
        Clear
      </button>
    </div>
  )
}
