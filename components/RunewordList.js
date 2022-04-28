import styles from './RunewordList.module.css'
import RunewordListItem from './RunewordListItem'
export default function RunewordList({ runewords }) {
  return (
    <ul>
      {runewords.map((runeword) => (
        <RunewordListItem key={runeword.name} runeword={runeword} />
      ))}
    </ul>
  )
}
