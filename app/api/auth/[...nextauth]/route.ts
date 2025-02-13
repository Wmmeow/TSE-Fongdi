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
        if (!/^\d{10}$/.test(credentials?.studentId || "")) {
          throw new Error("รหัสนักศึกษาต้องเป็นตัวเลข 10 หลัก");
        }

        if (!/^Tse\d{5}$/.test(credentials?.password || "")) {
          throw new Error("รหัสผ่านต้องอยู่ในรูปแบบ TseXXXXX");
        }

        const usersDB = [
          { studentId: "6500000000", citizenId: "12345", name: "Supisara Chaiwang" }
        ];

        const user = usersDB.find(
          u => u.studentId === credentials?.studentId &&
               `Tse${u.citizenId}` === credentials?.password
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
    maxAge: 10 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
