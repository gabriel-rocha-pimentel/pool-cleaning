import { SunIcon } from "@heroicons/react/24/outline";


export default function AcmeLogo() {
  return (
    <div
      className='flex flex-row items-center leading-none text-white'
    >
      <SunIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">PoolCleaning</p>
    </div>
  );
  
}