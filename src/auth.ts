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
        console.log('credentials', credentials);
        const user = {
          id: '1',
          name: 'JJY',
          email: 'jjy@example.com',
          password: 'ffff'
        };

        if (
          credentials?.username === user.email &&
          credentials?.password === user.password
        ) {
          console.log('user', user);
          return user;
        }
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('jwt token: ', token);
      if (user) {
        token.id = user.id;
      }
      return { token, user };
    },
    async session({ session, token }) {
      console.log('session session: ', session, 'token: ', token);
      if (token) {
        // session?.user = token as any;
      }
      return session;
    }
  }
});
