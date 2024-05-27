import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/components/ui/fonts';
import { paths } from '../routes/path';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      {/* <a
        target="_blank"
        href={`${paths.nextTemplate}`}
        rel="noopener noreferrer"
      >
        </a> */}
      <p className="text-[44px]">Acme</p>
    </div>
  );
}
