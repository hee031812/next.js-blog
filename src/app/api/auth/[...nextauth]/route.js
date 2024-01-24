import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// 페이스북이나 구글에 로그인 하는 것. util.auth