import { Fragment } from 'react'
import RunewordListItem from './RunewordListItem'

export default function RunewordList(props) {
  return (
    <Fragment>
      {props.runes.map((runeword) => (
        <RunewordListItem runeword={runeword} key={runeword.id} />
      ))}{' '}
    </Fragment>
  )
}
