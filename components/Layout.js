import NavigationBar from './NavigationBar'
import Head from 'next/head'
import styles from './Layout.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>D2 Runeword Calculator</title>
        <meta name="description" content="Runeword Calculator for Diablo 2" />
      </Head>
      <NavigationBar />
      <div className={styles.content}>{children}</div>
    </>
  )
}
