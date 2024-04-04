'use server';

export async function Signup(
  formState: number,
  formData: FormData
): Promise<any> {
  return formState + 1;
}
