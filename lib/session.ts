import { getServerSession } from 'next-auth';

export async function getCurrenUser() {
  const session = await getServerSession();
  return session?.user;
}
