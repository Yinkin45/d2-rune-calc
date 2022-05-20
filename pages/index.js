import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Introduction</h1>
      <p>
        Greetings Diablo 2 fans, I created this app to help players calculate runes, help decide
        players which runewords are best for their characters, and to provide information on
        runewords
      </p>
      <h1>What&#39;s New</h1>
      <ul>
        <li>New thing</li>
        <li>New thing</li>
        <li>new thing</li>
      </ul>

      <h1>What&#39;s Coming Up</h1>
      <ul>
        <li>New stuff coming up</li>
        <li>New stuff coming up</li>
        <li>New stuff coming up</li>
      </ul>

      <p>
        Go to <Link href="/feedback">Feedback</Link>
      </p>
    </>
  )
}
