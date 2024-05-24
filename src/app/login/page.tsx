import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function page() {
  return (
    <div className="flex flex-col w-full items-center space-y-8">
      <div className="grid w-full max-w-sm  mx-auto gap-4">
        <Label htmlFor="email">Email</Label>
        <Input type="text" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full max-w-sm  mx-auto gap-4">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" placeholder="Password" />
      </div>
    </div>
  );
}

export default page;
