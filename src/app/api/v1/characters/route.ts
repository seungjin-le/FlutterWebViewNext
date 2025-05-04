import useFetch from '@/utils/api'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

// Start of Selection
export async function GET(req: NextApiRequest) {
  console.log(req)
  const query = new URLSearchParams({
    characterName: '푸푸른소나무',
    apikey: process.env.API_KEY || '',
    jobId: '',
    jobGrowId: '',
    isAllJobGrow: 'false',
    wordType: 'match',
    limit: '200'
  })
  const response = await useFetch(`servers/all/characters?${query.toString()}`)
  console.log('------------------------')
  console.log(response)
  console.log('------------------------')

  return NextResponse.json(response)
}
