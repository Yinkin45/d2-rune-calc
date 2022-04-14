import NavigationBar from './NavigationBar'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>D2 Runeword Calculator</title>
        <meta name="description" content="Runeword Calculator for Diablo 2" />
      </Head>
      <NavigationBar />
      {children}
    </>
  )
}
