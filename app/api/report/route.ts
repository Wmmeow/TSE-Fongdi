import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { reportTitle, reportDescription } = await req.json();

  // สมมุติว่าเราสามารถส่งข้อมูลไปยังฐานข้อมูลหรือทำบางอย่าง
  if (!reportTitle || !reportDescription) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  // หากข้อมูลครบถ้วน
  return NextResponse.json({ message: 'Report submitted successfully' });
}
