import { connectToDB } from '@/app/api/config/mongodb';
import News from '@/app/api/news/schema';
import { schemaNewsRequest } from '@/lib/schemas/news.schema';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(page, size) {
  try {
    connectToDB()
    const skip = (page - 1) * size
    const reuslt = await News.find()
      .skip(skip)
      .limit(size)

    return reuslt
  } catch (error) {
    throw new Error(error)
  }

}

export async function POST(request) {
  const res = await request.json()
  const validData = schemaNewsRequest.safeParse(res)
  if (!validData.success) {
    return NextResponse.json({
      err: validData.error.flatten().fieldErrors
    })
  }
  const myData = validData.data

  return NextResponse.json({
    myData
  })
}

export async function PATCH(request) {
  const res = await request.json();
  const validData = schemaNewsRequest.safeParse(res);

  if (!validData.success) {
    return NextResponse.json({
      err: validData.error.flatten().fieldErrors,
    });
  }

  const myData = validData.data;

  // Xử lý logic cập nhật dữ liệu của bạn tại đây
  // Ví dụ: cập nhật thông tin trong cơ sở dữ liệu, v.v.

  return NextResponse.json({
    message: "Data updated successfully",
    myData,
  });
}