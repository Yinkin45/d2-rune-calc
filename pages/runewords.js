import MasterDetailLayout from '../components/MasterDetailLayout'
import RunewordList from '../components/RunewordList'
import ALL_RUNEWORDS from '../data'

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
          <h2>Please select a Runeword from the list</h2>
        </div>
      </MasterDetailLayout>
    </>
  )
}
