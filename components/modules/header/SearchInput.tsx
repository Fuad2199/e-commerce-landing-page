import { Badge } from '@/components/custom/Badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { m } from 'framer-motion';

const SearchInput = ({
  className,
}: {
  className?: string;
}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className={cn('px-2 relative', className)}>
      <Input
        className="border-none"
        placeholder="Search for anthing..."
        onMouseDown={() => setOpenDropdown(!openDropdown)}
      />
      <div>
        <Button className="text-black shadow-none cursor-pointer">
          <Search />
        </Button>
        {/* search dropdown */}
        <m.div
          onMouseLeave={() => setOpenDropdown(false)}
          initial={{ y: -15, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ y: -15, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={cn(
            'hidden h-[618px] absolute w-full top-12 bg-white border overflow-auto backdrop-filter shadow-gray-700 shadow-md left-0',
            openDropdown && 'flex'
          )}
        >
          <div className="flex flex-col gap-y-6 w-full">
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3 className="font-[400]">
                  product title
                </h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-4 py-4 px-4 border-2 border-white hover:border-secondary-700"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/128/1656/1656850.png"
                width={100}
                height={0}
                alt="product image"
              />
              <div className="flex flex-col gap-1">
                <h3>product title</h3>
                <Badge className="" variant="warning">
                  10%
                </Badge>
                <h3>110$</h3>
              </div>
            </Link>
          </div>
        </m.div>
      </div>
    </div>
  );
};

export default SearchInput;
