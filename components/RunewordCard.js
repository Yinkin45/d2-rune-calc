import styles from './RunewordCard.module.css'
import Image from 'next/image'
export default function RunewordCard({ runeword }) {
  if (!runeword) {
    return <h2>No Runeword found</h2>
  }

  return (
    <>
      <h1>{runeword.name}</h1>
      <h3 className={styles.type}>{runeword.type}</h3>
      <h3 className={styles.subType}>{runeword.subType}</h3>
      <div className={styles.image}>
        <Image
          src={runeword.imageUrl}
          alt={runeword.name}
          width={250}
          height={250}
        />
      </div>
      {runeword.modifiers.map((modifier, index) => {
        return (
          <div className={styles.modifier} key={index}>
            {modifier.text}
          </div>
        )
      })}
    </>
  )
}
