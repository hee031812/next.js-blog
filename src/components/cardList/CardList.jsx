import Link from 'next/link'
import React from 'react'
import Pagination from '../pagination/Pagination';

const getData = async (page, cate) => {
    const res = await fetch(`http://localhost:3000/api/post?page=${page}&cate=${cate || ''}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!");
    }
    return res.json();
}

export default async function CardList({ page, cate }) {
    const { posts, count } = await getData(page, cate);

    const postView = 2;

    console.log(posts)


    return (
        <section className='blog__card container'>
            <ul>
                {posts.map((item) => (
                    <div className="m_list" key={item.id}>
                        <div className="m_list-item">
                            <div className="img">
                                <Link href={`post/${item.slug}`} >
                                    <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA4MDFfMjIx/MDAxNjI3ODE1MTkyMjI2.MttKEaAXsLAtJbii9P-5OGX06s6-uVzMSVa6Db7D96gg.qITLHjb_-CZGx0pt3JXbKybmOaY54vrI1tqO7qP7mscg.PNG.brotherm1n/IMG_3219.PNG?type=w800" />
                                </Link>
                            </div>
                            <h3 className="line-2">{item.title}</h3>
                            <p className="line-3">
                                {item.desc}
                            </p>
                            <div className="info">
                                <div className="date">
                                    <div className="icon">

                                    </div>
                                    <p>{item.createdAt}</p>
                                </div>
                                <div className="view">
                                    <div className="icon">
                                    </div>
                                    <p>777</p>
                                </div>
                                <div className="like">
                                    <div className="icon">

                                    </div>
                                    <p>777</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ul>
            <Pagination page={page} count={count} postView={postView} />
        </section>
    )

}
