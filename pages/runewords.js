import MasterDetailLayout from '../components/MasterDetailLayout'
import RunewordList from '../components/RunewordList'
import ALL_RUNEWORDS from '../data/runewords'

export default function Runewords() {
  return (
    <>
      <MasterDetailLayout>
        <div>
          <h1>Runeword List</h1>
          <RunewordList runewords={ALL_RUNEWORDS} />
        </div>
        <div>
          <h1>Runeword Detail</h1>
        </div>
      </MasterDetailLayout>
    </>
  )
}
