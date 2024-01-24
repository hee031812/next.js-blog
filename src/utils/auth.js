import { PrismaAdapter } from "@auth/prisma-adapter"
import GoogleProvider from "next-auth/providers/google"
import NaverProvider from "next-auth/providers/naver"
import GithubProvider from "next-auth/providers/github"
import KakakoProvider from "next-auth/providers/kakao"

import prisma from "./connect"

export const authOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true, //같은 계정 로그인 오류시 넣어줌
        }),
        NaverProvider({
            clientId: process.env.NAVER_ID,
            clientSecret: process.env.NAVER_SECRET,
            allowDangerousEmailAccountLinking: true, //같은 계정 로그인 오류시 넣어줌
        }),
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            allowDangerousEmailAccountLinking: true, //같은 계정 로그인 오류시 넣어줌
        }),
        KakakoProvider({
            clientId: process.env.KAKAO_ID,
            clientSecret: process.env.KAKAO_SECRET,
            allowDangerousEmailAccountLinking: true, //같은 계정 로그인 오류시 넣어줌
        }),
    ],
}

//GoogleProvider 설정 ( 모든페이지에서 설정하기 위해) env연결