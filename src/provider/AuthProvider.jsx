"use client"

import { SessionProvider } from "next-auth/react"

export default function AuthProvider({ children }) {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

//next.aute에서 로그인을 하면 자식으로 지정
