import { getCharacter, getCharacterStatus } from '@/app/api/v1/character/handler'

interface CharacterProps {
  params: Promise<{ id: string }>
}

// serverId: 'diregie',
// characterId: '56773d74cc3bfa8a61ff4e69757e3360',
// characterName: '푸푸른소나무',
// level: 115,
// jobId: 'b9cb48777665de22c006fabaf9a560b3',
// jobGrowId: '37495b941da3b1661bc900e68ef3b2c6',
// jobName: '아처',
// jobGrowName: '眞 뮤즈',
// fame: 55816

const serverSideProps = async () => {
  const response = await getCharacter()
  // const statusResponse = await getCharacterStatus()

  // console.log(statusResponse)
  return {
    data: response
    // status: statusResponse
  }
}

export default async function Character({ params }: CharacterProps) {
  const { id } = await params
  const { data } = await serverSideProps()
  console.log(id)
  return (
    <div>
      Character {id}
      {data?.characterId && data?.serverId && <img src={`https://img-api.neople.co.kr/df/servers/${data.serverId}/characters/${data.characterId}?zoom=3`} alt="" />}
    </div>
  )
}
