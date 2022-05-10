import { useRouter } from 'next/router'
import slugify from 'slugify'
import MasterDetailLayout from '../../components/MasterDetailLayout'
import RunewordList from '../../components/RunewordList'
import RunewordCard from '../../components/RunewordCard'
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
          <h1>Runeword List</h1>
          <RunewordList runewords={ALL_RUNEWORDS} />
        </div>
        <div>
          <h1>Runeword Detail</h1>
          <RunewordCard runeword={runeword} />
        </div>
      </MasterDetailLayout>
    </>
  )
}
