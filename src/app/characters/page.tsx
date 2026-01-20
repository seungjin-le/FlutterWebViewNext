import { getCharacters } from '../api/v1/characters/handler'

const serverSideProps = async () => {
  // const response = await getCharacters()
  // console.log(response)
  return {
    data: 'response'
  }
}

export default async function Characters() {
  const { data } = await serverSideProps()

  return (
    <div>





      Characters
      { data.toString() }
    </div>
  )
}
