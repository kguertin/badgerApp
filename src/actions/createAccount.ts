'use server';

export async function createAccount(
  formState: number,
  formData: FormData
): Promise<any> {
  return formState + 1;
}
