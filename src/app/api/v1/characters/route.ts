import { NextRequest, NextResponse } from 'next/server'
import { getCharacters } from './handler'

export async function GET(req: NextRequest) {
  const query = new URLSearchParams({
    characterName: '푸른소나',
    apikey: process.env.API_KEY || '',
    jobId: '',
    jobGrowId: '',
    isAllJobGrow: 'false',
    wordType: 'full',
    limit: '200',
  })

  const response = await getCharacters()
  return NextResponse.json(response)
}
