"use client"
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import styles from "./page.module.scss";
import React, { useEffect } from 'react'


export default function page() {
    const { data, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [data, status])

    // 로딩중 표시
    if (status === "loading") {
        return <div className='loading'>로딩중입니다.</div>
    }
    return (
        <main id="main" className={`container ${styles.login}`}>
            <div className={styles.login__header}>
                <h3>Login</h3>
                <p>
                    <em>로그인</em>을 하시겠습니까?
                </p>
            </div>
            <form action="/api/login" method="POST" className={styles.login__form}>
                <fieldset>
                    <legend className="blind">로그인 영역</legend>
                    <div className={styles.id}>
                        <label htmlFor="youId" className="required blind">
                            아이디
                        </label>
                        <input
                            type="text"
                            name="youId"
                            id="youId"
                            placeholder="아이디"
                            required
                        />
                    </div>
                    <div className={styles.pass}>
                        <label htmlFor="youPass" className="required blind">
                            비밀번호
                        </label>
                        <input
                            type="password"
                            name="youPass"
                            id="youPass"
                            placeholder="비밀번호"
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className={styles.btn}>
                        <button type="submit" className="btn__style2 mt30">
                            LOGIN
                        </button>
                    </div>
                    <div className={styles.snsLogin}>
                        <button type="button" className="google" onClick={() => signIn("google")}>
                            <img src="/google.png" alt="google" />
                        </button>
                        <button type="button" className="kakao" onClick={() => signIn("kakao")}>
                            <img src="/kakao.webp" alt="kakao" />
                        </button>
                        <button type="button" className="naver" onClick={() => signIn("naver")} >
                            <img src="/naver.png" alt="naver" />
                        </button>
                        <button type="button" className={styles.github} onClick={() => signIn("git")}>
                            <img src="/git.png" alt="git" />
                        </button>
                    </div>
                </fieldset>
            </form>
        </main >
    )
}
