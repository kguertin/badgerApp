import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import Link from 'next/link';

export default function LoginPopover() {
  return (
    <Popover>
      <PopoverTrigger>
        <Link href="#">Login</Link>
      </PopoverTrigger>
      <PopoverContent>
        <div className="px-1 py-2">
          <div className="text-small font-bold">Login</div>
          <div className="text-tiny">
            This is where we will have the login form
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
