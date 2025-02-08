// app/api/login/route.ts
import bcrypt from 'bcryptjs';  
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const { studentId, password } = await req.json();

    // การแฮชรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);  
    
    // การตรวจสอบรหัสผ่าน
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);  

    if (isPasswordValid) {
        return NextResponse.json({ message: 'Login successful' });
    } else {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }
}
