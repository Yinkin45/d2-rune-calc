import MasterDetailLayout from '../components/MasterDetailLayout'
import SearchableRunewordList from '../components/SearchableRunewordList'

export default function Runewords() {
  return (
    <>
      <MasterDetailLayout>
        <div>
          <SearchableRunewordList />
        </div>
        <div>
          <h1>Runeword Detail</h1>
          <h2>Please select a Runeword from the list</h2>
        </div>
      </MasterDetailLayout>
    </>
  )
}
