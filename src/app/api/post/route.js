import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page");
    const cate = searchParams.get("cate");
    const postView = 2;
    console.log(page);

    const query = {
        take: postView,
        skip: postView * (page - 1),
        include: { user: { select: { name: true } } }, // 이름및 다양한것 가져오기 include
        where: {
            ...(cate && { catSlug: cate }),
        } // 카테고리 객체파일들 찾아랏 (원하는것 찾을때 사용)
    };

    try {
        const [posts, count] = await prisma.$transaction([
            prisma.post.findMany(query), // 카테고리 찾기
            prisma.post.count(),
        ]);

        return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
    } catch (err) {
        console.log(err);
        return new NextResponse(
            JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
        );
    }
};