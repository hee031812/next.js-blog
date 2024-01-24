import React from 'react'

export default function Infomation() {
    return (
        <div className="m_info container">
            <span className="deco"># INFO</span>
            <div className="m_info__top">
                <h2>{"{ Blog }"}</h2>
                <div className="m_info__bottom">
                    <form action="/api/search" method="POST">
                        <fieldset className="search">
                            <legend className="blind">검색 영역</legend>
                            <label className="blind">검색</label>
                            <div>
                                <input name="search" placeholder="Search" />
                                <button type="submit">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                                stroke="#000000"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            ></path>{" "}
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </fieldset>
                        <fieldset className="cate">
                            <legend className="blind">카테고리 영역</legend>
                            <button type="button" className="active">
                                All
                            </button>
                            <button type="button">Notice</button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <p>내용</p>
        </div>
    )
}
