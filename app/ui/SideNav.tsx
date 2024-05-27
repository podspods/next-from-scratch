'use client';

import Link from 'next/link';
import MinhTekLogo from './MinhTekLogo';
import NavLinks from '../lib/NavLink';
import { PowerIcon } from '@heroicons/react/24/solid';

export default function SideNav() {
  return (
    <>
      <div className='flex h-full flex-col px-3 py-4 md:px-2'>
        <div className='global bg-blue-100 px-3 py-4'>
          <Link href='/' className='h-80'>
            <MinhTekLogo />
          </Link>
        </div>
        <div className='pt-2'>
          <NavLinks />
        </div>
        <div className='mt-2 pt-2 hidden h-auto w-full grow rounded-md bg-gray-50 md:block'></div>
        <div>
          <div className='mt-2 pt-2 hidden h-auto w-full grow rounded-md bg-gray-50 md:block'>
            <form
              action={async () => {
                await signOut();
              }}>
              <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
                <PowerIcon className='w-6' />
                <div className='hidden md:block'>Sign Out</div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

async function signOut() {}
