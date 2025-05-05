import useFetch from '@/utils/api'

export const getCharacters = async () => {
  const query = new URLSearchParams({
    // characterName: '푸푸른소나무',
    characterName: '푸른소나',
    apikey: process.env.API_KEY || '',
    jobId: '',
    jobGrowId: '',
    isAllJobGrow: 'false',
    wordType: 'full',
    limit: '200'
  })
  const response = await useFetch(`servers/all/characters?${query.toString()}`)
  console.log('------------------------')
  console.log(response)
  console.log('------------------------')
  return response
}
