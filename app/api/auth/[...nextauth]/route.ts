import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        studentId: { label: "Student ID", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // ตรวจสอบรหัสนักศึกษา (10 หลัก)
        if (!/^\d{10}$/.test(credentials?.studentId || "")) {
          throw new Error("รหัสนักศึกษาต้องเป็นตัวเลข 10 หลัก");
        }

        // ตรวจสอบรหัสผ่านที่เป็นเลขบัตรประชาชน (13 หลัก)
        if (!/^\d{13}$/.test(credentials?.password || "")) {
          throw new Error("รหัสผ่านต้องเป็นตัวเลข 13 หลัก");
        }

        const usersDB = [
          { studentId: "1111111111", citizenId: "1234567890123", name: "Supisara Chaiwang" }
        ];

        const user = usersDB.find(
          u => u.studentId === credentials?.studentId && u.citizenId === credentials?.password
        );

        if (user) {
          return { id: user.studentId, name: user.name };
        }

        throw new Error("Invalid credentials");
      }
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 5 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET, // เก็บค่าใน .env.local
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
