import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const LanguageCurrency = ({
  className,
}: {
  className?: string;
}) => {
  const switchLocale = (val: string) => {};
  
  const switchCurrency = (val: string) => {};

  return (
    <div className={cn(className, "flex flex-wrap justify-center gap-x-2 w-auto")}>
      <Select
        onValueChange={val => switchLocale(val)}
        defaultValue="en"
      >
        <SelectTrigger
          className={cn(
            className,
            'focus:ring-offset-0'
          )}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <div className="flex items-center justify-center gap-4 capitalize">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/5111/5111640.png"
                width={20}
                height={20}
                alt="flag"
              />
              en
            </div>
          </SelectItem>
          <SelectItem value="az">
            <div className="flex items-center justify-center gap-4 capitalize">
              <Image
                src="https://cdn-icons-png.flaticon.com/128/555/555554.png"
                width={20}
                height={20}
                alt="flag"
              />
              az
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      <Select
        onValueChange={val => switchCurrency(val)}
        defaultValue="usd"
      >
        <SelectTrigger
          className={cn(
            className,
            'focus:ring-0 focus:ring-offset-0'
          )}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="usd">
            <div className="flex items-center justify-center gap-4 capitalize">
              USD
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
      
    </div>
  );
};

export default LanguageCurrency;
