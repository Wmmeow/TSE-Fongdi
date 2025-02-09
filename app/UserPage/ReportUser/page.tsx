"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReportUser() {
  const [studentId, setStudentId] = useState("");
  const router = useRouter();

  useEffect(() => {
    const storedStudentId = localStorage.getItem("studentId");
    const expiresAt = localStorage.getItem("expiresAt");

    if (!storedStudentId || !expiresAt || Date.now() > Number(expiresAt)) {
      alert("หมดเวลาเซสชันแล้ว กรุณาเข้าสู่ระบบใหม่");
      localStorage.removeItem("studentId");
      localStorage.removeItem("expiresAt");
      router.push("/UserPage/LoginPage");
    } else {
      setStudentId(storedStudentId);
    }
  }, [router]);

  return (
    <div>
      <h1>แจ้งปัญหา</h1>
      <p>รหัสนักศึกษาของคุณ: {studentId}</p>
    </div>
  );
}
