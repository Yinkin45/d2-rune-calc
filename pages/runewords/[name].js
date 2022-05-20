import { useRouter } from 'next/router'
import slugify from 'slugify'
import MasterDetailLayout from '../../components/MasterDetailLayout'
import RunewordCard from '../../components/RunewordCard'
import FilterableRunewordList from '../../components/FilterableRunewordList'
import ALL_RUNEWORDS from '../../data'

export default function Runewords() {
  const router = useRouter()
  const { name } = router.query
  const runeword = ALL_RUNEWORDS.find((eachRuneword) => {
    const slugName = slugify(eachRuneword.name.toLowerCase())
    return slugName === name
  })

  return (
    <>
      <MasterDetailLayout>
        <div>
          <FilterableRunewordList />
        </div>
        <div>
          <h1>Runeword Detail</h1>
          <RunewordCard runeword={runeword} />
        </div>
      </MasterDetailLayout>
    </>
  )
}
