"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "@/app/UserPage/LoginPage/loading";
import Link from "next/link";

import { JSX } from "react";
import Area from "@/app/components/Dropdown/area";

export default function ReportUser(): JSX.Element {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [sessionExpired, setSessionExpired] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0); // เวลาที่เหลือ
  const [alertShown, setAlertShown] = useState(false); // เช็คว่าแสดง alert ไปแล้วหรือยัง

  useEffect(() => {
    const expiresAt = localStorage.getItem("expiresAt");
    if (expiresAt) {
      const expirationTime = Number(expiresAt);
      const updateTimeLeft = () => {
        const currentTime = Date.now();
        const timeRemaining = expirationTime - currentTime;

        if (timeRemaining <= 0) {
          if (!alertShown) {
            setSessionExpired(true);
            setAlertShown(true); // ทำให้มั่นใจว่า alert แสดงครั้งเดียว
            alert("Session หมดอายุ โปรดล็อกอินใหม่");
            router.push("/UserPage/LoginPage");
          }
        } else {
          setTimeLeft(timeRemaining);
        }
      };

      // อัปเดตเวลาเหลือทุกๆ 1 วินาที
      const intervalId = setInterval(() => {
        updateTimeLeft();
      }, 1000); // ทุก 1 วินาที

      // เรียกใช้งานครั้งแรก
      updateTimeLeft();

      // Cleanup
      return () => clearInterval(intervalId);
    }
  }, [status, router, alertShown]);

  if (status === "loading" || sessionExpired) {
    return <Loading />;
  }

  // คำนวณเวลาเหลือ
  const secondsLeft = Math.floor(timeLeft / 1000);
  const minutesLeft = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <div className="max-w-3xl w-full mx-auto p-4 flex flex-col items-center">
      <p>รหัสนักศึกษาของคุณ: {session?.user?.name}</p>
      <p>
        เวลาที่เหลือในการใช้งาน: {minutesLeft} นาที {seconds} วินาที
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#8C181C]">
        ระบบแจ้งปัญหา
      </h2>
      <div className="w-full max-w-xl flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md">
        <Area />
        <button className="w-full py-2 bg-[#FFD04F] text-black font-bold rounded hover:bg-yellow-500">
          แจ้งปัญหา
        </button>
        <div className="mt-5 text-center">
          <Link href="/" className="text-[#8C181C] hover:underline">
            กลับไปหน้าแรก
          </Link>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>แจ้งปัญหา</h1>
    // <p>รหัสนักศึกษาของคุณ: {session?.user?.name}</p>
    // <p>เวลาที่เหลือในการใช้งาน: {minutesLeft} นาที {seconds} วินาที</p>
    // </div>
  );
}
