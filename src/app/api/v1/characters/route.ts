import useFetch from '@/utils/api'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { getCharacters } from './handler'

// Start of Selection
export async function GET(req: NextApiRequest) {
  console.log(req)
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




  const response = await getCharacters()
  console.log('------------------------')
  console.log(response)
  console.log('------------------------')

  return NextResponse.json(response)
}
