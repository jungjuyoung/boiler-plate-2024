import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth
} = NextAuth({
  pages: {
    signIn: '/login'
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        const user = {
          id: '1',
          name: 'JJY',
          email: 'jjy@example.com',
          password: 'ffff'
        };

        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          console.log('user')
          return user;
        }
        return null;
      }
    })
  ]
});
