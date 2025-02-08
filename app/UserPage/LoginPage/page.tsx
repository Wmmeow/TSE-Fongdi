// app/UserPage/LoginPage/page.tsx
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

export default function Login() {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ studentId: '', password: '' });

  const validateForm = (e: React.FormEvent) => {
    e.preventDefault();
    let newErrors = { studentId: '', password: '' };

    // ตรวจสอบการกรอกข้อมูล
    if (!studentId) {
      newErrors.studentId = 'กรุณากรอกรหัสนักศึกษา';
    } else if (studentId.length !== 10) {
      newErrors.studentId = 'รหัสนักศึกษาต้องเป็นตัวเลข 10 หลัก';
    }

    if (!password) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน';
    }

    setErrors(newErrors);

    // ถ้าไม่มีข้อผิดพลาด ให้เรียก API หรือทำการตรวจสอบข้อมูล
    if (!newErrors.studentId && !newErrors.password) {
      loginUser(studentId, password);
    }
  };

  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ไม่ให้กรอกเกิน 10 ตัว
    if (e.target.value.length <= 10) {
      setStudentId(e.target.value);
    }
  };

  const loginUser = async (studentId: string, password: string) => {
    // ทำการส่งข้อมูลเข้าสู่ระบบ (สามารถเชื่อมต่อกับ API ที่อาจารย์ให้มาได้)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentId, password }),
      });

      const data = await response.json();

      if (data.success) {
        // ถ้าล็อกอินสำเร็จ เปลี่ยนหน้าไปที่หน้าหลักหรือหน้าอื่น
        alert('เข้าสู่ระบบสำเร็จ');
        // สามารถใช้ Next.js Router เพื่อนำทางไปหน้าหลัก
      } else {
        alert('ข้อมูลไม่ถูกต้อง');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('เกิดข้อผิดพลาดในการล็อกอิน');
    }
  };

  return (
    <main className={`${styles.main} flex items-center justify-center min-h-screen p-4`}>
      <div className="w-screen max-w-lg md:max-w-3xl lg:max-w-4xl p-8 text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">TSE Login</h1>
        <form onSubmit={validateForm}>
          <div className="mb-8">
            <label className="block text-sm md:text-base lg:text-lg mb-1" htmlFor="student-id">
              รหัสนักศึกษา
            </label>
            <input
              id="student-id"
              type="text"
              value={studentId}
              onChange={handleStudentIdChange}
              className={`w-full px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 border rounded-md text-black text-base md:text-lg lg:text-xl focus:ring-2 focus:ring-[#3abaf5] outline-none ${errors.studentId ? 'border-red-500' : ''}`}
            />
            {errors.studentId && <p className="text-red-400 text-sm mt-1">{errors.studentId}</p>}
          </div>

          <div className="mb-12">
            <label className="block text-sm md:text-base lg:text-lg mb-1" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 border rounded-md text-black text-base md:text-lg lg:text-xl focus:ring-2 focus:ring-[#3abaf5] outline-none ${errors.password ? 'border-red-500' : ''}`}
            />
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#FFD04F] text-black py-3 md:py-4 lg:py-5 text-base md:text-lg lg:text-xl rounded-md hover:bg-[#E6A600] transition duration-300"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </main>
  );
}
