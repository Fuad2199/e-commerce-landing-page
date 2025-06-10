import { cn } from '@/lib/utils';
import React from 'react';
import ShoppingCart from './ShoppingCart';
import HeartIcon from './HeartIcon';
import UserIcon from './UserIcon';

const IconsGroup = ({
  className,
}: {
  className: string;
}) => {
  return (
    <div className={cn(className, "space-x-4")}>
      <button className="text-white relative cursor-pointer">
        <ShoppingCart/>
        <span className="rounded-full grid p-2.5 bg-white place-content-center
         text-secondary-700 font-bold h-0 w-0 text-[16px] absolute -top-3 left-3">
          2
        </span>
      </button>
      <button className="text-white relative cursor-pointer">
        <HeartIcon weight='regular'/>
      </button>
      <button className="text-white relative cursor-pointer">
        <UserIcon/>
      </button>
    </div>
  );
};

export default IconsGroup;
