import { usePathname } from 'next/navigation';
import { linkList } from './constant';
import Link from 'next/link';
import clsx from 'clsx';
export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {linkList.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}

            className={clsx(
              'mt-2 p-8 flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}