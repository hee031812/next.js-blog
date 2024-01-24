import React from 'react'
import styles from "./page.module.scss";

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/post/${slug}`, {
        cache: "no-store"
    });

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!");
    }
    return res.json();
}

export default async function page({ params }) {
    const { slug } = params;

    const data = await getData(slug);
    console.log(data);

    return (
        <main id="main" className={`container ${styles.login}`}>
            <div className={styles.login__header}>
                <div className='left'>
                    <div className={styles.view_num}>조회수 : {data.views}</div>
                    <div className={styles.detail_name}>작성자 : {data.user.name}</div>
                </div>
                <h3 className={styles.detail_title}>{data.title}</h3>
                <div className={styles.detail__img}>{data.user.image}</div>
                <div className={styles.detail__desc}>{data.desc}</div>
            </div>
        </main >
    )
}
