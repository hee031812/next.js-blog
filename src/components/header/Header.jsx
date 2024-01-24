"use client"
import Link from 'next/link'
import React from 'react'
import Thema from '../theme/Theme'
import { signOut, useSession } from 'next-auth/react'

export default function Header() {
    // const status = "unauthenticated"
    // const name = "heejin"

    const { data: session, status } = useSession();

    return (
        <header id="header" role="banner">
            <div className="header__inner container">
                <h1>
                    <Link href="/">HEEJIN's Blog</Link>
                </h1>
                <nav
                    className="nav"
                    role="navigation"
                    aria-label="메인메뉴"
                >
                    <ul>
                        <li>
                            <Link href="/" className="active">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/">Notice</Link>
                        </li>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <Thema />
                    </ul>
                </nav>

                <div className="header__btn">
                    <div className="profill">
                        <div className="img">
                            <img src="https://mblogthumb-phinf.pstatic.net/MjAyMTA4MDFfMjIx/MDAxNjI3ODE1MTkyMjI2.MttKEaAXsLAtJbii9P-5OGX06s6-uVzMSVa6Db7D96gg.qITLHjb_-CZGx0pt3JXbKybmOaY54vrI1tqO7qP7mscg.PNG.brotherm1n/IMG_3219.PNG?type=w800"></img>
                        </div>
                    </div>
                    <div>
                        {status === "authenticated" ? (
                            <>
                                <div className='welcome'>{session.user.name}님 방가워요!!!</div>
                                <div className='logout' onClick={signOut}>로그아웃</div>
                            </>
                        ) : (
                            <>
                                <div className="login">
                                    <Link href="/login">login</Link>
                                </div>
                                <div className="join">
                                    <Link href="/join">join</Link>
                                </div>
                            </>
                        )}
                    </div>
                    <div
                        className="nav__mobile"
                        id="headerToggle"
                        role="button"
                        aria-controls="primary-menu"
                    >
                        <span></span>
                    </div>
                </div>
            </div>
        </header >
    )
}
