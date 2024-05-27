import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideNav from './ui/SideNav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next scratch',
  description: 'next je & tailwind'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased bg-white text-pink-700`}>
        <div className='flex flex-col md:flex-row md:overflow-hidden'>
          <div className='w-full pl-2 pt-3 flex-none md:w-64'>
            <SideNav />
          </div>
          <div className='flex-grow md:overflow-y-auto md:p-2'>
          <main className="flex min-h-screen flex-col items-center justify-between bg-blue-500">
            {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
