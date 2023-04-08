import Link from 'next/link'
import React from 'react'

interface HeaderProps {
  isLoggedIn: boolean;
  userName: string | undefined;
  onSignOut: () => void;
}

const Header = ({ isLoggedIn, userName, onSignOut }: HeaderProps) => {
  return (
    <header className="bg-[#35BCB2]">
      {/* logo, login / join */}
      <div className="p-4 flex justify-between items-baseline mb-4 border-solid border-0 border-b-[1px] border-slate-800">
        <h1 className="text-3xl font-bold underline text-slate-900">
          shopping-t
        </h1>
        <div>
          {isLoggedIn ?
            <><span><strong>{userName}</strong>님 어서오세요</span> | <button onClick={onSignOut}>로그아웃</button></>
            : <Link href="/login">로그인</Link>}
        </div>
      </div>
      {/* search / profile / cart */}
      <div className="px-4 flex justify-between">
        <input type="text" />
        <div className="flex gap-2">
          <a>개인정보</a>
          <a>장바구니</a>
        </div>
      </div>
      {/* nav */}
      <nav className="px-4 py-2">
        <ul className="flex gap-2">
          <li>전체</li>
          <li>카테고리1</li>
          <li>카테고리2</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header