import styles from './RunewordCard.module.css'
import Image from 'next/image'
export default function RunewordCard({ runeword }) {
  return (
    <>
      <h1>{runeword.name}</h1>
      <h3 className={styles.type}>{runeword.type}</h3>
      <h3 className={styles.subType}>{runeword.subType}</h3>
      <div className={styles.image}>
        <Image src={runeword.imageUrl} width={250} height={250} />
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
