import Container from '@/components/custom/Container';
import { RectangleButton } from '@/components/custom/RectangleButton';
import { IoIosArrowDown } from 'react-icons/io';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import CategoryList from './CategoryList';

const Menus = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, 'h-20 bg-white border-b')}>
      <Container>
        <div className="flex items-center justify-between h-full">
          {/* left side */}
          <div className="flex items-center gap-6">
            {/* categories */}
            <div className='relative'>
              <RectangleButton
                className="text-black capitalize cursor-pointer w-full h-12 bg-gray-50"
                icon="none"
              >
                all category
                <IoIosArrowDown />
              </RectangleButton>
              <CategoryList/>
            </div>
            {/* pages */}
            <div className="flex items-center gap-6">
              <Link
                href="/"
                className="flex gap-[6px] items-center"
              >
                <Image
                  src="/images/MapPinLine.svg"
                  alt="logo"
                  width="24"
                  height="24"
                />
                <span className="flex items-center text-gray-600 text-body-sm-400">
                  Track order
                </span>
              </Link>
              <Link
                href="/"
                className="flex gap-[6px] items-center"
              >
                <Image
                  src="/images/ArrowsCounterClockwise.svg"
                  alt="logo"
                  width="24"
                  height="24"
                />
                <span className="flex items-center text-gray-600 text-body-sm-400">
                  Compare
                </span>
              </Link>
              <Link
                href="/"
                className="flex gap-[6px] items-center"
              >
                <Image
                  src="/images/Headphones.svg"
                  alt="logo"
                  width="24"
                  height="24"
                />
                <span className="flex items-center text-gray-600 text-body-sm-400">
                  Custom Support
                </span>
              </Link>
              <Link
                href="/"
                className="flex gap-[6px] items-center"
              >
                <Image
                  src="/images/Info.svg"
                  alt="logo"
                  width="24"
                  height="24"
                />
                <span className="flex items-center text-gray-600 text-body-sm-400">
                  Need Help
                </span>
              </Link>
            </div>
          </div>
          {/* right side */}
          <div className="flex items-center gap-2 text-gray-900">
            <Image
              src="/images/Info.svg"
              alt="logo"
              width="28"
              height="28"
            />
            <p className="text-body-lg-400">
              +1-202-555-0104
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menus;
