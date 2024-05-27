import { AuthUser } from '@/model/User';
import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      // 여기에 필요한 유저정보를 기입
      id: string;
      name: string;
      email: string;
      password: string;
    } & AuthUser &
      DefaultSession['user'];
  }
}
