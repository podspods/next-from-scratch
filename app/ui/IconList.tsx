import {
  AcademicCapIcon,
  BeakerIcon,
  GlobeAltIcon,
  PowerIcon
} from '@heroicons/react/24/solid';

export default function IconList() {
  return (
    <>
      <div className='w-32 text-white md:w-40   bg-red border-solid border-pink-900'>
        <GlobeAltIcon className='h-12 w-12 rotate-[15deg]' />
      </div>
      <BeakerIcon className='h-12 w-12' />
      <AcademicCapIcon className='h-12 w-12' />
      <div className='w-32 h-32 bg-red border-solid border-pink-900' >
      <PowerIcon />


      </div>
    </>
  );
}
