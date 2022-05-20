import MasterDetailLayout from '../components/MasterDetailLayout'
import FilterableRunewordList from '../components/FilterableRunewordList'

export default function Runewords() {
  return (
    <>
      <MasterDetailLayout>
        <div>
          <FilterableRunewordList />
        </div>
        <div>
          <h1>Runeword Detail</h1>
          <h2>Please select a Runeword from the list</h2>
        </div>
      </MasterDetailLayout>
    </>
  )
}
