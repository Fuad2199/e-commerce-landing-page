import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="container h-full">
      <div
        className={cn('container h-full w-full', className)}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
