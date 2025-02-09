// import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

const usersDB = [
  { studentId: "1111111111", citizenId: "1234567890123", hashedPassword: "$2a$10$wJ...." }
];

export async function POST(req: Request) {
  const { studentId, password } = await req.json();

  // ตรวจสอบรหัสนักศึกษา (10 หลัก)
  if (!/^\d{10}$/.test(studentId)) {
    return NextResponse.json({ message: 'รหัสนักศึกษาต้องเป็นตัวเลข 10 หลัก' }, { status: 400 });
  }
  
  // ตรวจสอบรหัสผ่านที่เป็นเลขบัตรประชาชน (13 หลัก)
  if (!/^\d{13}$/.test(password)) {
    return NextResponse.json({ message: 'รหัสผ่านต้องเป็นตัวเลข 13 หลัก' }, { status: 400 });
  }

  // ค้นหาข้อมูลนักศึกษา
  const user = usersDB.find(user => user.studentId === studentId && user.citizenId === password);

  if (!user) {
    return NextResponse.json({ message: 'รหัสนักศึกษาหรือรหัสผ่านไม่ถูกต้อง' }, { status: 401 });
  }

  return NextResponse.json({ 
    message: 'เข้าสู่ระบบสำเร็จ', 
    studentId: user.studentId 
  });
}
