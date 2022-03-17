import { Fragment } from 'react'
import styles from './RunewordListItem.module.css'

export default function RunewordListItem(props) {
  return (
    <Fragment>
      <div className={styles.runeword}>
        {props.runeword.name} - {props.runeword.type}
      </div>
    </Fragment>
  )
}
