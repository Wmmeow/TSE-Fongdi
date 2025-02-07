import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="w-full p-5 pt-7 pb-4 md:p-6 lg:p-8 bg-white text-xl text-black flex items-center justify-between font-thai relative">
        <h1 className="flex-grow">
          <Link href="/">
            <img
              src="https://img.icons8.com/ios/50/000000/back.png"
              alt="Back"
              className="w-8 h-8 mr-2"
            />
          </Link>
        </h1>
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-center">เข้าสู่ระบบ</h1>
      </nav>
      <main className={`${styles.main} flex items-center justify-center min-h-screen p-4`}>
        {children}
      </main>
    </>
  );
}
