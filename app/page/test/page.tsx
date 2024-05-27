import { basicVideo } from '@/app/lib/constant';
import { LinkDef } from '@/app/lib/typeDef';
import Image from 'next/image';
import Link from 'next/link';

export default function Test() {
  return (
    <div className='flex flex-wrap p-4 '>
      {basicVideo.map((item: LinkDef) => (
        <div key={item.name} className=' m-2 shadow-xl flex flex-col items-center  bg-blue-100 rounded'>
          <Link href={item.href} >
            <Image
              src={item.image || 'https://picsum.photos/200/300'}
              alt="Description de l'image"
              width={200}
              height={100}
              className='p-1 rounded-lg content-center'
            />
          </Link>
          <h1 className='text-center'>{item.name}</h1>
        </div>
      ))}
    </div>
  );
}
