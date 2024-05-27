import { auth } from '@/auth';
import React from 'react';

async function page() {
  const session = await auth();
  if (!session) return null;
  return <div>after login page</div>;
}

export default page;
