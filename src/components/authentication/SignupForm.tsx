'use client';

import { Button, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useFormState } from 'react-dom';

import * as actions from '@/actions';

export default function SignupForm() {
  const [formState, action] = useFormState(actions.createAccount, 0);
  console.log(formState);
  return (
    <form action={action}>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-lg">Create an account</h3>
        <Input
          name="email"
          label="Email"
          labelPlacement="outside"
          placeholder="Email"
        />
        <Input
          name="username"
          label="Username"
          labelPlacement="outside"
          placeholder="Username"
        />
        <Input
          name="password"
          label="Password"
          labelPlacement="outside"
          placeholder="Password"
        />
        <Button type="submit">Signup</Button>
        <Link href="#">Login</Link>
      </div>
    </form>
  );
}
