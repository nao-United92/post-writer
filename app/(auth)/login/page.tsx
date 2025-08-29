import Link from 'next/link';
import UserAuthForm from '@/components/user-auth-form';

export default function Login() {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
        </div>

        <UserAuthForm />
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link href={'register'} className="underline underline-offset-4">
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
}
