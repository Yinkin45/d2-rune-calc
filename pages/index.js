import { Fragment } from 'react'
import RunewordList from '../components/RunewordList'
import Head from 'next/head'
const RUNEWORDS = [
  { id: '1', name: 'Smite', type: 'shield' },
  { id: '2', name: 'Dodge', type: 'armor' },
]

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>D2 Runeword Calculator</title>
        <meta name="description" content="Runeword Calculator for Diablo 2" />
      </Head>
      <RunewordList runes={RUNEWORDS} />
    </Fragment>
  )
}
