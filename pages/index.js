import { Fragment } from 'react'
import RunewordList from '../components/RunewordList'
const RUNEWORDS = [
  { name: 'Smite', type: 'shield' },
  { name: 'Dodge', type: 'armor' },
]

export default function Home() {
  return (
    <Fragment>
      <RunewordList runes={RUNEWORDS}></RunewordList>
    </Fragment>
  )
}
