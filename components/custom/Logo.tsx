'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = ({ className }: { className: string }) => {
  return (
    <Link href="/">
      <Image className={cn(className)}
        src="/images/logo_light.svg"
        alt="logo_light"
        width={160}
        height={48}
      />
    </Link>
  );
};

export default Logo;
