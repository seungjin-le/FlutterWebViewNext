import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'
import { getCharacter } from './handler'

// Start of Selection
export async function GET(req: NextApiRequest) {
  const response = await getCharacter()
  console.log('------------------------')
  console.log(response)
  console.log('------------------------')

  return NextResponse.json(response)
}
