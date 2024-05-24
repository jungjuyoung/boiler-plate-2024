import Link from 'next/link';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { auth } from '@/auth';
async function Navbar() {
  const session = await auth();
  console.log('seession: ', session);
  return (
    <div className="w-full h-[80px] px-4 shadow-lg flex flex-row items-center">
      <h1>
        <Link href="/">LOGO</Link>
      </h1>
      <nav className="flex-1 flex justify-center space-x-3">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </nav>
      {session && (
        <Avatar>
          <AvatarFallback>
            {session?.user?.name?.substring(0, 1).toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

export default Navbar;
