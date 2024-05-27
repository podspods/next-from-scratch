
import { BeakerIcon } from '@heroicons/react/24/solid'
import { lusitana } from './fonts';
export default function MinhTekLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-black p-2`}
    >
      <BeakerIcon className="h-12 w-12 text-purple-500 rotate-[-15deg]" />
      <h1 className="pl-4 text-2xl "  >MinhTeK</h1>
    </div>
  );
}
