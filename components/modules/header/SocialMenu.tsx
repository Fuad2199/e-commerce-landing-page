"use client"

import Container from '@/components/custom/Container';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import SocialIcons from './SocialIcons';
import LanguageCurrency from './LanguageCurrency';
import { cn } from '@/lib/utils';

const SocialMenu = ({
  className,
}: {
  className: string;
}) => {
  return (
  <div className={cn('bg-secondary-700 h-[52px]', className)}>
      <Container>
        <div className="flex justify-between items-center h-full">
          {/* wrapper */}
          <div>
            <p className="text-white">
              Welcome to Clicon Online eCommerce store.
            </p>
          </div>
          {/* left content */}
          <div className="flex items-center space-x-6">
            <SocialIcons className="text-white" />
            <Separator className="bg-white/20 h-2" />
            <LanguageCurrency className='text-white bg-secondary-700 border-0 w-25'/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SocialMenu;
