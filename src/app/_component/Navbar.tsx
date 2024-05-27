'use client';
import { useSession } from 'next-auth/react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session, status } = useSession();
  if (!session) return null;

  return (
    <div className="sticky shadow-lg top-0 z-100 w-full border-b bg-white">
      <nav className="container flex max-w-7xl mx-auto h-16 items-center space-x-4">
        <div className="flex-1">
          <div className="flex max-w-4xl mx-auto items-center justify-center space-x-4">
            <Link href={'/'} className="flex-1 mr-auto">
              Logo
            </Link>
            <div className="flex items-center justify-center space-x-8">
              <Link className="flex items-center" href={'/about'}>
                About
              </Link>
              <Link className="flex items-center" href={'/home'}>
                Home
              </Link>
            </div>
          </div>
        </div>
        {session ? (
          <div className="flex mx-auto">
            <p className="self-center pr-4 hidden sm:block">{`Hi, ${session.user?.name}`}</p>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback>
                    {session.user?.name?.substring(0, 1)}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => signOut()}>
                  로그아웃
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={''}>내 정보확인</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : null}
      </nav>
    </div>
  );
}
