import { schemaNewsRequest } from '@/lib/schemas/news.schema';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  return NextResponse.json('Hello world')
}

export async function POST(request) {
  const res = await request.json()
  const validData = schemaNewsRequest.safeParse(res);
  if (!validData.success) {
    return NextResponse.json({
      err: validData.error.flatten().fieldErrors
    })
  }
  const myData = validData.data

  return NextResponse.json({
    myData
  })
} 3