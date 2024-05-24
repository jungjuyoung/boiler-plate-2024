import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth';

export async function middleware(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  console.log('middleware 실행중 !!!', session);
}

export const config = {
  matcher: ['/', '/home', '/about/:path*']
};
