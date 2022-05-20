import styles from './SearchBar.module.css'

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className={styles.clearButton} onClick={() => setSearchTerm('')}>
        Clear
      </button>
    </div>
  )
}
