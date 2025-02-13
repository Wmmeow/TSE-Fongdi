"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "./styles.module.css";

export default function Login() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleStudentIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 10) { 
      setStudentId(value);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length <= 8) { 
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // รีเซ็ต error ก่อนส่งข้อมูล

    try {
      const result = await signIn("credentials", {
        redirect: false,
        studentId,
        password,
      });

      if (result?.error) {
        setError("เข้าสู่ระบบไม่สำเร็จ! กรุณาตรวจสอบรหัสผ่าน");
      } else {
        // ตั้งค่าหมดอายุ session
        const expiresAt = Date.now() + 10 * 60 * 1000;
        localStorage.setItem("studentId", studentId);
        localStorage.setItem("expiresAt", expiresAt.toString());

        router.push("/UserPage/ReportUser");
      }
    } catch (error) {
      setError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <main className={`${styles.main} flex items-center justify-center min-h-screen p-4`}>
      <div className="w-screen max-w-lg md:max-w-3xl lg:max-w-4xl p-8 text-white -mt-14">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">TSE Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-8">
            <label className="block text-sm md:text-base lg:text-lg mb-1" htmlFor="student-id">
              รหัสนักศึกษา
            </label>
            <input
              id="student-id"
              type="text"
              value={studentId}
              onChange={handleStudentIdChange}
              className="w-full px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 border rounded-md text-black text-base md:text-lg lg:text-xl focus:ring-2 focus:ring-[#3abaf5] outline-none"
            />
          </div>

          <div className="mb-12">
            <label className="block text-sm md:text-base lg:text-lg mb-1" htmlFor="password">
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 md:px-5 md:py-4 lg:px-6 lg:py-5 border rounded-md text-black text-base md:text-lg lg:text-xl focus:ring-2 focus:ring-[#3abaf5] outline-none"
            />
          </div>

          {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

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
