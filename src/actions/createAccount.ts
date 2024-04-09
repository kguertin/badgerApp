'use server';
import { db } from '@/db';
import { z } from 'zod';

export async function createAccount(
  formState: number,
  formData: FormData
): Promise<any> {
  const mySchema = z.string();
  // validation
  // hash pass
  db.user.create({ data: { email: '', password: '', name: '' } });
  // log user in and redirect to home page in logged in state
  return formState + 1;
}
