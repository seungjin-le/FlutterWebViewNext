import useFetch from '@/utils/api'

export const getCharacter = async (serverId?: string, characterId?: string) => {
  // df/servers/<serverId>/characters/<characterId>

  const response = await useFetch(`servers/diregie/characters/b5e33ed15fb7bc7691cb380e12d75d35?apikey=${process.env.API_KEY}`)

  return response
}
export const getCharacterStatus = async (serverId?: string, characterId?: string) => {
  const response = await useFetch(`servers/diregie/characters/b5e33ed15fb7bc7691cb380e12d75d35/status?apikey=${process.env.API_KEY}`)
  return response
}
  