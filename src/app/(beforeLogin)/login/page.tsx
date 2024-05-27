'use client';

import { ReactNode, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function page() {
  const session = useSession();
  const router = useRouter();
  if (session) {
    router.push('/');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmail = (email: ReactNode) => {
    setEmail(email as string);
  };
  const handlePassword = (password: ReactNode) => {
    setPassword(password as string);
  };
  const hadleSubmit = () => {
    console.log('email: ', email, 'password: ', password);
  };

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center space-y-8">
      <h1 className="font-bold text-[40px]">Login Page</h1>
      <div className="w-full max-w-sm space-y-8">
        <div className="w-full space-y-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            placeholder="Email"
            onChange={(e) => handleEmail(e.target.value)}
          />
        </div>
        <div className="w-full space-y-4">
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => handlePassword(e.target.value)}
          />
        </div>
        <Button className="w-full" onClick={() => hadleSubmit()}>로그인</Button>
      </div>
    </div>
  );
}

export default page;
