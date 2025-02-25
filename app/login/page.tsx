import AcmeLogo from '@/ui/acmeLogo';
import LoginForm from '@/ui/login/loginForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage(){
  return (
    <main className='flex items-center justify-center bg-white md:h-screen'>
      <div className='relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32'>
        <div className='flex h-20 w-full items-center rounded-lg bg-blue-500 md:h-28'>
          <div className='flex items-center justify-center w-32 text-white md:w-full'>
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}