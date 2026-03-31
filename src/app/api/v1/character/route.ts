import { NextRequest, NextResponse } from 'next/server'
import { getCharacter } from './handler'

export async function GET(req: NextRequest) {
  const response = await getCharacter()
  return NextResponse.json(response)
}
