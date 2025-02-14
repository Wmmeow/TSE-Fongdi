import React from "react";
import Image from "next/image";

export default function IssueTimeline() {
  return (
    <div className="bg-purple-600 w-screen max-w-lg md:max-w-3xl lg:max-w-4xl flex flex-col min-h-screen">
      <h1 className="text-center justify-center text-xl font-light p-2">
        เลขที่รายงาน :{" "}
      </h1>
      <div className="bg-white rounded-md">
        <div className="p-6 bg-slate-300 flex">
          <Image
            src="/logo-Tse.png"
            alt="logo-Tse"
            width={100}
            height={100}
            priority
            loading="eager"
            unoptimized
          />
          <div className="flex flex-col bg-slate-500">
            <p className="text-black">test01</p>
            <p className="text-black">test02</p>
          </div>
        </div>

        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
        <p className="text-black">Hello</p>
      </div>
    </div>
  );
}
